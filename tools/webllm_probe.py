"""Reproduce the "Chat with my CV" model load in a real browser and keep the evidence.

    uv run --group browser python tools/webllm_probe.py --url http://127.0.0.1:8000/ --browser msedge --out tools/webllm_evidence
    uv run --group browser python tools/webllm_probe.py --url https://mxstex.github.io/MyWebPage/ --browser msedge

Opens the page headed (WebGPU needs the real GPU), records navigator.gpu, the
adapter and its features, clicks "Load model and start", captures every
console line, page error and failed network request, the progress texts, and
whether the model became ready; then asks one question, reloads, and loads
again from the cache. Writes <out>/<browser>-<host>.json and screenshots.
"""

from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="http://127.0.0.1:8000/")
    parser.add_argument("--browser", default="msedge", help="msedge | chrome | chromium")
    parser.add_argument("--model", default="small", help="small | large")
    parser.add_argument("--timeout", type=float, default=600.0, help="seconds to wait for the model")
    parser.add_argument("--question", default="What does Michal do at ABB?")
    parser.add_argument("--out", default="tools/webllm_evidence")
    parser.add_argument("--headless", action="store_true")
    args = parser.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    host = urlparse(args.url).netloc.replace(":", "-") or "local"
    tag = f"{args.browser}-{host}-{args.model}"
    evidence: dict = {"url": args.url, "browser": args.browser, "model": args.model, "console": [], "errors": [],
                      "failed_requests": [], "progress": [], "started": time.strftime("%Y-%m-%d %H:%M:%S")}

    with sync_playwright() as p:
        launch = {"headless": args.headless, "args": ["--enable-unsafe-webgpu", "--enable-features=Vulkan"]}
        if args.browser in ("msedge", "chrome"):
            launch["channel"] = args.browser
        browser = p.chromium.launch(**launch)
        context = browser.new_context(viewport={"width": 1400, "height": 1000})
        page = context.new_page()
        page.on("console", lambda m: evidence["console"].append(f"{m.type}: {m.text}"[:600]))
        page.on("pageerror", lambda e: evidence["errors"].append(str(e)[:1200]))
        page.on("requestfailed", lambda r: evidence["failed_requests"].append({"url": r.url[:300], "failure": str(r.failure)[:200]}))
        page.on("response", lambda r: evidence["failed_requests"].append({"url": r.url[:300], "status": r.status})
                if r.status >= 400 else None)

        page.goto(args.url, wait_until="networkidle")
        evidence["user_agent"] = page.evaluate("navigator.userAgent")
        evidence["gpu"] = page.evaluate("""async () => {
            const out = {has_navigator_gpu: !!navigator.gpu};
            if (!navigator.gpu) return out;
            try {
                const adapter = await navigator.gpu.requestAdapter();
                out.adapter = !!adapter;
                if (adapter) {
                    out.features = [...adapter.features].sort();
                    out.limits = {maxBufferSize: adapter.limits.maxBufferSize, maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
                                  maxComputeWorkgroupStorageSize: adapter.limits.maxComputeWorkgroupStorageSize};
                    try { const info = adapter.info || (adapter.requestAdapterInfo ? await adapter.requestAdapterInfo() : {});
                          out.info = {vendor: info.vendor, architecture: info.architecture, device: info.device, description: info.description}; } catch (e) { out.info_error = String(e); }
                    try { const device = await adapter.requestDevice(); out.device = !!device; device.destroy && device.destroy(); } catch (e) { out.device_error = String(e); }
                }
            } catch (e) { out.adapter_error = String(e); }
            return out;
        }""")
        print("gpu:", json.dumps(evidence["gpu"]), flush=True)
        page.locator("#chat-form").scroll_into_view_if_needed()
        page.select_option("#chat-model", args.model)
        page.screenshot(path=str(out / f"{tag}-01-before.png"))
        started = time.time()
        page.click("#chat-start")
        last = ""
        ready = False
        deadline = started + args.timeout
        while time.time() < deadline:
            time.sleep(1.0)
            status = page.locator("#chat-status").inner_text().strip()
            if status and status != last:
                evidence["progress"].append({"t": round(time.time() - started, 1), "text": status[:300]})
                print(f"{time.time() - started:6.1f}s {status[:120]}", flush=True)
                last = status
            disabled = page.evaluate("document.querySelector('#chat-input').disabled")
            if not disabled:
                ready = True
                break
            if page.locator("#chat-start").is_visible() and not page.evaluate("document.querySelector('#chat-start').disabled") and time.time() - started > 5:
                break   # the loader gave up and re-enabled the button
        evidence["ready"] = ready
        evidence["load_seconds"] = round(time.time() - started, 1)
        evidence["messages_after_load"] = page.locator("#chat-messages").inner_text()[:1500]
        page.screenshot(path=str(out / f"{tag}-02-after-load.png"))
        print("ready:", ready, "after", evidence["load_seconds"], "s", flush=True)
        if ready:
            page.fill("#chat-input", args.question)
            page.click("#chat-send")
            answer = ""
            t0 = time.time()
            while time.time() - t0 < 180:
                time.sleep(1.0)
                bots = page.locator("#chat-messages .msg.bot")
                if bots.count():
                    answer = bots.last.inner_text().strip()
                    pending = page.evaluate("!!document.querySelector('#chat-messages .msg.bot.pending')")
                    if answer and not pending:
                        break
            evidence["answer"] = answer[:1500]
            evidence["answer_seconds"] = round(time.time() - t0, 1)
            print("answer:", answer[:300], flush=True)
            page.screenshot(path=str(out / f"{tag}-03-answer.png"))
            # the cached second load
            page.reload(wait_until="networkidle")
            page.locator("#chat-form").scroll_into_view_if_needed()
            page.select_option("#chat-model", args.model)
            t1 = time.time()
            page.click("#chat-start")
            cached = False
            while time.time() - t1 < 240:
                time.sleep(1.0)
                if not page.evaluate("document.querySelector('#chat-input').disabled"):
                    cached = True
                    break
            evidence["cached_reload_ready"] = cached
            evidence["cached_reload_seconds"] = round(time.time() - t1, 1)
            print("cached reload ready:", cached, "after", evidence["cached_reload_seconds"], "s", flush=True)
            page.screenshot(path=str(out / f"{tag}-04-cached.png"))
        browser.close()
    (out / f"{tag}.json").write_text(json.dumps(evidence, indent=1, ensure_ascii=False), encoding="utf-8")
    print("wrote", out / f"{tag}.json")
    print("errors:", evidence["errors"][:5])
    print("failed:", [f for f in evidence["failed_requests"] if "favicon" not in f.get("url", "")][:8])
    return 0 if evidence["ready"] else 1


if __name__ == "__main__":
    sys.exit(main())

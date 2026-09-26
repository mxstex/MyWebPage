/* =====================================================================
   chat_loader.js - the pure decisions behind "Chat with my CV".
   No DOM, no network: what the loader should say and do given what it
   saw. chat.js uses it in the browser; tools/test_chat_loader.mjs runs
   the same file under Node.
   ===================================================================== */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.ChatLoader = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const MODELS = {
    small: { id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC", vramMB: 945 },
    large: { id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC", vramMB: 1630 },
  };

  /* The FACTS prompt is about 4,300 tokens for Qwen2.5's tokenizer and the
     prebuilt models ship with a 4,096-token window, so the first question
     failed with ContextWindowSizeExceededError after a perfectly good load
     (measured 2026-09-26 in Edge 153, see docs/webllm). Qwen2.5 supports far
     more; 8,192 leaves room for the prompt, eight turns of history and the
     answer, and its KV cache is small at these model sizes. */
  const CONTEXT_WINDOW = 8192;

  /* One of these per failure, so the visitor sees what actually happened. */
  const STAGES = ["gpu", "import", "download", "init", "generate"];

  function classifyError(err, stage) {
    const text = String((err && (err.message || err.name)) || err || "");
    const lower = text.toLowerCase();
    if (/contextwindowsizeexceeded|context window/.test(lower)) return { code: "context", stage: "generate", detail: text };
    if (/webgpu|requestadapter|requestdevice|gpuadapter|gpudevice|device lost|shader-f16|out of memory|outofmemory/.test(lower)) {
      return { code: /memory/.test(lower) ? "memory" : "gpu", stage: stage === "generate" ? "generate" : "init", detail: text };
    }
    if (stage === "import" || /failed to fetch dynamically imported module|importing a module script failed|esm\.run|jsdelivr/.test(lower)) {
      return { code: "import", stage: "import", detail: text };
    }
    if (stage === "download" || /failed to fetch|networkerror|network error|load failed|cache|quota|404|403|cors/.test(lower)) {
      return { code: "download", stage: "download", detail: text };
    }
    if (stage === "generate") return { code: "generate", stage: "generate", detail: text };
    return { code: "init", stage: stage || "init", detail: text };
  }

  /* WebLLM's progress report: `progress` is 0..1 while it fetches and can be
     absent or NaN around cache checks and shader compilation. */
  function normalizeProgress(report) {
    const p = report && typeof report.progress === "number" ? report.progress : NaN;
    if (!isFinite(p)) return null;
    return Math.max(0, Math.min(1, p));
  }

  /* Which phase a WebLLM progress line belongs to, from its own wording. */
  function stageOf(report) {
    const text = String((report && report.text) || "").toLowerCase();
    if (/fetch|download|cache/.test(text)) return "download";
    if (/loading gpu shader|shader|compil|warm|finish loading|initializ/.test(text)) return "init";
    return "download";
  }

  /* Decide whether a model is realistic on this adapter. Returns null when
     it is, or a reason code. `limits` is `adapter.limits`. */
  function checkAdapterFor(modelKey, adapter) {
    if (!adapter) return "no-adapter";
    const model = MODELS[modelKey] || MODELS.small;
    const limits = adapter.limits || {};
    const maxBuffer = Number(limits.maxStorageBufferBindingSize || limits.maxBufferSize || 0);
    if (maxBuffer && maxBuffer < 128 * 1024 * 1024) return "small-buffers";
    const features = adapter.features;
    const hasF16 = features && typeof features.has === "function" ? features.has("shader-f16") : true;
    if (!hasF16 && /q4f16/.test(model.id)) return "no-f16";
    return null;
  }

  /* Whether the loader should switch on the model catalogue's word: the
     requested id must exist in the WebLLM build we imported. */
  function modelInCatalog(webllm, modelId) {
    const list = webllm && webllm.prebuiltAppConfig && webllm.prebuiltAppConfig.model_list;
    if (!Array.isArray(list)) return false;
    return list.some((m) => m && m.model_id === modelId);
  }

  function catalogRecord(webllm, modelId) {
    const list = webllm && webllm.prebuiltAppConfig && webllm.prebuiltAppConfig.model_list;
    return Array.isArray(list) ? list.find((m) => m && m.model_id === modelId) || null : null;
  }

  return { MODELS, CONTEXT_WINDOW, STAGES, classifyError, normalizeProgress, stageOf, checkAdapterFor, modelInCatalog, catalogRecord };
});

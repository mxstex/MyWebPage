# Chat with my CV - browser evidence

`tools/webllm_probe.py` opens the page in a real, headed browser (WebGPU needs the GPU), records
`navigator.gpu`, the adapter and its features, clicks **Load model and start**, keeps every console
line, page error and failed request and the progress texts, asks one question, reloads and loads
again from the cache. One JSON per browser × host × model, plus screenshots.

```bash
# from a checkout with playwright (e.g. `uv run --group browser` in Jednota-tactic, or pip install playwright)
python tools/webllm_probe.py --url http://127.0.0.1:8000/ --browser msedge
python tools/webllm_probe.py --url https://mxstex.github.io/MyWebPage/ --browser msedge
```

## 2026-09-26, Edge 153, Windows 11, RTX 4070 Ti (nvidia / lovelace, shader-f16, 2 GB buffers)

| file | site | result |
| --- | --- | --- |
| `msedge-mxstex.github.io-small.json` | live, before the fix | model ready in 6.1 s; first answer: `ContextWindowSizeExceededError: number of prompt tokens: 4276; context window size: 4096`; the page said "Something went wrong while loading the model" |
| `msedge-mxstex.github.io-small-after-fix.json` | live, after the Pages deploy | ready in 6.1 s, a B2B/location question answered, cached reload 1.0 s |
| `msedge-127.0.0.1-8000-small.json` | local, after the fix | ready in 6.1 s, answer "Michal Štěpán is a Senior GenAI Engineer at ABB, working on AI solutions and RAG.", cached reload ready in 1.0 s |

The failure the owner saw ("the model does not download/start") was therefore the first inference,
not the download: WebLLM 0.2.85 imports, both Qwen2.5 ids are in `prebuiltAppConfig.model_list`,
the 0.5B model fetches eight shards (about 280 MB) and initializes, and the `FACTS` prompt alone
is longer than the prebuilt model's 4,096-token window. Fixed by `context_window_size: 8192`
(Qwen2.5 supports far more) and a loader that names its failing stage.

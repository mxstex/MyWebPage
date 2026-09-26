// node tools/test_chat_loader.mjs - the loader's decisions, without a browser.
import { createRequire } from "node:module";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const L = require("../assets/js/chat_loader.js");

let passed = 0;
function test(name, fn) {
  try { fn(); passed += 1; } catch (err) { console.error("FAIL", name, "\n ", err.message); process.exitCode = 1; }
}

test("the models are the documented Qwen2.5 ids", () => {
  assert.equal(L.MODELS.small.id, "Qwen2.5-0.5B-Instruct-q4f16_1-MLC");
  assert.equal(L.MODELS.large.id, "Qwen2.5-1.5B-Instruct-q4f16_1-MLC");
  assert.ok(L.CONTEXT_WINDOW >= 8192);
});

test("a context-window overflow is named, not 'something went wrong'", () => {
  const err = new Error("ContextWindowSizeExceededError: Prompt tokens exceed context window size: number of prompt tokens: 4276; context window size: 4096");
  assert.deepEqual(L.classifyError(err, "generate").code, "context");
});

test("a missing adapter and an import failure are told apart from a download failure", () => {
  assert.equal(L.classifyError(new Error("Failed to fetch dynamically imported module: https://esm.run/x"), "import").code, "import");
  assert.equal(L.classifyError(new Error("TypeError: Failed to fetch"), "download").code, "download");
  assert.equal(L.classifyError(new Error("Cannot find a WebGPU adapter; requestAdapter returned null"), "init").code, "gpu");
  assert.equal(L.classifyError(new Error("Out of memory: device lost"), "init").code, "memory");
  assert.equal(L.classifyError("weird", "init").code, "init");
});

test("progress is normalised to 0..1 or null", () => {
  assert.equal(L.normalizeProgress({ progress: 0.5 }), 0.5);
  assert.equal(L.normalizeProgress({ progress: NaN }), null);
  assert.equal(L.normalizeProgress({}), null);
  assert.equal(L.normalizeProgress(null), null);
  assert.equal(L.normalizeProgress({ progress: 7 }), 1);
  assert.equal(L.normalizeProgress({ progress: -1 }), 0);
});

test("progress lines are sorted into download and init", () => {
  assert.equal(L.stageOf({ text: "Fetching param cache[4/8]: 161MB fetched" }), "download");
  assert.equal(L.stageOf({ text: "Loading GPU shader modules[12/40]" }), "init");
  assert.equal(L.stageOf({ text: "Finish loading on WebGPU - nvidia" }), "init");
});

test("the adapter check refuses what cannot run the model", () => {
  assert.equal(L.checkAdapterFor("small", null), "no-adapter");
  assert.equal(L.checkAdapterFor("small", { limits: { maxStorageBufferBindingSize: 64 * 1024 * 1024 }, features: new Set(["shader-f16"]) }), "small-buffers");
  assert.equal(L.checkAdapterFor("small", { limits: { maxStorageBufferBindingSize: 2 ** 31 - 4 }, features: new Set([]) }), "no-f16");
  assert.equal(L.checkAdapterFor("large", { limits: { maxStorageBufferBindingSize: 2 ** 31 - 4 }, features: new Set(["shader-f16"]) }), null);
});

test("the catalogue is checked by id", () => {
  const webllm = { prebuiltAppConfig: { model_list: [{ model_id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC", model: "u", model_lib: "l" }] } };
  assert.equal(L.modelInCatalog(webllm, L.MODELS.small.id), true);
  assert.equal(L.modelInCatalog(webllm, L.MODELS.large.id), false);
  assert.equal(L.catalogRecord(webllm, L.MODELS.small.id).model_lib, "l");
  assert.equal(L.modelInCatalog({}, "x"), false);
});

console.log(`chat_loader: ${passed} tests passed`);

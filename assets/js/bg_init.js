// Restores the saved background before first paint (kept external so the CSP needs no inline-script hash).
(function () {
  var b = "meadow";
  try { var s = localStorage.getItem("bg"); if (/^(meadow|forest|sea|space|nebula|paper)$/.test(s)) b = s; } catch (e) {}
  document.documentElement.setAttribute("data-bg", b);
})();

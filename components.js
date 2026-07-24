/* =============================================================
   MOVECRAFT — components.js   (optional behavior layer)
   Wires the interactive primitives in components.css. Pure vanilla,
   no dependencies, auto-initialises on load. Include once:
       <script src="movecraft-design-system/components.js"></script>

   Opt in with data-attributes:
     • Segmented control  <div class="mv-segmented" data-mv-segmented>
         <button class="mv-seg-btn" aria-pressed="true">piano</button> …
       Single-select by default; add data-mv-multi for multi-toggle.
     • Slider fill+value   <input class="mv-range" data-mv-range
                                  data-mv-val="#tempoVal">
       Paints the crimson fill and mirrors the value into the target.
     • Dismiss an editor   <button class="mv-editor__close" data-mv-dismiss>
       Hides the closest .mv-editor.
     • Selectable chips    <div data-mv-chip-select> … .mv-chip … </div>
       Click a chip to toggle .is-selected (single-select; data-mv-multi ok).
   ============================================================= */
(function () {
  'use strict';

  /* ---- segmented control ---------------------------------- */
  document.querySelectorAll('[data-mv-segmented]').forEach(function (group) {
    var multi = group.hasAttribute('data-mv-multi');
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('.mv-seg-btn');
      if (!btn || !group.contains(btn)) return;
      if (multi) {
        var on = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!on));
        btn.classList.toggle('is-active', !on);
      } else {
        group.querySelectorAll('.mv-seg-btn').forEach(function (b) {
          var active = b === btn;
          b.setAttribute('aria-pressed', String(active));
          b.classList.toggle('is-active', active);
        });
      }
    });
  });

  /* ---- slider: crimson fill + value readout --------------- */
  function paint(range) {
    var min = parseFloat(range.min || 0), max = parseFloat(range.max || 100);
    var pct = ((parseFloat(range.value) - min) / (max - min)) * 100;
    range.style.setProperty('--mv-fill', pct + '%');
    var sel = range.getAttribute('data-mv-val');
    if (sel) { var t = document.querySelector(sel); if (t) t.textContent = range.value; }
  }
  document.querySelectorAll('.mv-range[data-mv-range]').forEach(function (range) {
    paint(range);
    range.addEventListener('input', function () { paint(range); });
  });

  /* ---- dismiss an editor panel ---------------------------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-mv-dismiss]');
    if (!btn) return;
    var editor = btn.closest('.mv-editor');
    if (editor) editor.hidden = true;
  });

  /* ---- selectable chips ----------------------------------- */
  document.querySelectorAll('[data-mv-chip-select]').forEach(function (group) {
    var multi = group.hasAttribute('data-mv-multi');
    group.addEventListener('click', function (e) {
      var chip = e.target.closest('.mv-chip');
      if (!chip || !group.contains(chip)) return;
      if (!multi) group.querySelectorAll('.mv-chip.is-selected').forEach(function (c) {
        if (c !== chip) c.classList.remove('is-selected');
      });
      chip.classList.toggle('is-selected');
    });
  });
})();

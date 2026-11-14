// Memory Light website: the logo's light walks Me, Mo, Ry, and the little board plays a path.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const STEPS = [['lit', '', ''], ['tail', 'lit', ''], ['', 'tail', 'lit'], ['lit', 'lit', 'lit'], ['faint', 'tail', 'lit']], HOLD = [480, 480, 480, 650, 2200];
  document.querySelectorAll('svg.ml').forEach(logo => {
    const parts = [...logo.querySelectorAll('.lp')]; let k = 0;
    const tick = () => { STEPS[k].forEach((c, i) => parts[i].setAttribute('class', c ? 'lp ' + c : 'lp')); setTimeout(tick, HOLD[k]); k = (k + 1) % STEPS.length; };
    setTimeout(tick, 1400);
  });
  document.querySelectorAll('.board').forEach(board => {
    const cells = [...board.children], path = [0, 1, 4, 7, 8]; let k = 0, sparks = 0;
    const out = board.parentElement.querySelector('.sparks');
    setInterval(() => {
      cells.forEach(c => c.className = '');
      if (k < path.length) { cells[path[k]].className = 'lit'; if (k > 0) cells[path[k - 1]].className = 'tail'; }
      else if (k === path.length && out) { sparks += 3; out.textContent = '+' + sparks + ' sparks'; }
      k = (k + 1) % (path.length + 2);
    }, 520);
  });
})();

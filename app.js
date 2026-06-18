(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const progress = document.getElementById('progress');
  const counter = document.getElementById('counter');
  const overview = document.getElementById('overview');
  let index = 0, wheelLock = false, touchStartX = 0, touchStartY = 0;

  const clamp = n => Math.max(0, Math.min(slides.length - 1, n));
  const renderProgress = () => {
    progress.innerHTML = slides.map((_, i) => `<button aria-label="Go to slide ${i + 1}" class="${i === index ? 'active' : ''}" data-slide="${i}"></button>`).join('');
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  };
  const goTo = n => {
    const next = clamp(n); if (next === index) return;
    slides[index].classList.remove('active');
    index = next;
    slides[index].classList.add('active');
    slides[index].querySelectorAll('[data-count]').forEach(animateCounter);
    renderProgress();
  };
  const animateCounter = el => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || el.dataset.done) return;
    el.dataset.done = 'true';
    const end = Number(el.dataset.count); let start = null;
    const step = t => { start ??= t; const p = Math.min((t - start) / 700, 1); el.childNodes[0].nodeValue = `Rp ${Math.round(end * p)}`; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const toggleFullscreen = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
  const toggleOverview = force => {
    const open = force ?? !overview.classList.contains('open');
    overview.classList.toggle('open', open); overview.setAttribute('aria-hidden', String(!open));
  };
  const buildOverview = () => {
    overview.innerHTML = slides.map((s, i) => `<button class="thumb" data-thumb="${i}"><b>${String(i + 1).padStart(2, '0')}</b>${s.dataset.title || s.querySelector('h2,h1')?.textContent || 'Slide'}</button>`).join('');
  };

  document.getElementById('next').onclick = () => goTo(index + 1);
  document.getElementById('prev').onclick = () => goTo(index - 1);
  document.getElementById('fullBtn').onclick = toggleFullscreen;
  document.getElementById('overviewBtn').onclick = () => toggleOverview();
  document.addEventListener('click', e => {
    const slideBtn = e.target.closest('[data-slide]'); if (slideBtn) goTo(+slideBtn.dataset.slide);
    const thumb = e.target.closest('[data-thumb]'); if (thumb) { toggleOverview(false); goTo(+thumb.dataset.thumb); }
    const goto = e.target.closest('[data-goto]'); if (goto) goTo(+goto.dataset.goto);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (overview.classList.contains('open')) toggleOverview(false); return; }
    if (overview.classList.contains('open') && e.key !== 'o' && e.key !== 'O') return;
    const keys = {ArrowRight:1, ArrowDown:1, ' ':1, ArrowLeft:-1, ArrowUp:-1};
    if (e.key in keys) { e.preventDefault(); goTo(index + keys[e.key]); }
    if (e.key === 'Home') goTo(0); if (e.key === 'End') goTo(slides.length - 1);
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    if (e.key === 'o' || e.key === 'O') toggleOverview();
  });
  document.addEventListener('wheel', e => {
    if (wheelLock || Math.abs(e.deltaY) < 24) return;
    wheelLock = true; goTo(index + (e.deltaY > 0 ? 1 : -1)); setTimeout(() => wheelLock = false, 650);
  }, {passive:true});
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; touchStartY = e.changedTouches[0].clientY; }, {passive:true});
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX, dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 48) return;
    goTo(index + ((dx < -40 || dy < -40) ? 1 : -1));
  }, {passive:true});
  buildOverview(); renderProgress();
  if (window.lucide) lucide.createIcons();
})();

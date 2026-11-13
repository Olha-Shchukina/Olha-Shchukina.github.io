// Plays the video tiles (.video-item2 a) in an on-page lightbox instead of a new tab,
// with previous/next navigation (on-screen arrows, left/right keys, swipe on the dark area).
// The links keep their href/target, so without JavaScript (or for unknown URLs) they
// still open YouTube/Vimeo in a new tab. No iframe exists until a tile is clicked.
(function () {
  'use strict';

  function parseVideo(url) {
    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/);
    if (m) return { kind: 'youtube', id: m[1], label: 'YouTube',
      src: 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1&rel=0&playsinline=1&modestbranding=1&vq=hd1080' };
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]+))?/);
    if (m) {
      var h = m[2] || (url.match(/[?&]h=([0-9a-f]+)/) || [])[1];
      return { kind: 'vimeo', id: m[1], label: 'Vimeo',
        src: 'https://player.vimeo.com/video/' + m[1] + '?autoplay=1&title=0&byline=0&portrait=0&dnt=1&quality=1080p' + (h ? '&h=' + h : '') };
    }
    return null;
  }

  var items = [];           // [{ url, title, w, h, el, video }]
  var current = -1, open = false, lastFocus;
  var root, frame, caption, counter, closeBtn, prevBtn, nextBtn;

  var SVG_X = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>';
  var SVG_PREV = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
  var SVG_NEXT = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';

  function build() {
    root = document.createElement('div');
    root.className = 'vlb';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'Reproductor de vídeo');
    root.innerHTML =
      '<button type="button" class="vlb-close" aria-label="Cerrar (Esc)">' + SVG_X + '</button>' +
      '<button type="button" class="vlb-nav vlb-prev" aria-label="Vídeo anterior">' + SVG_PREV + '</button>' +
      '<button type="button" class="vlb-nav vlb-next" aria-label="Vídeo siguiente">' + SVG_NEXT + '</button>' +
      '<div class="vlb-stage">' +
        '<div class="vlb-frame"><div class="vlb-spinner"></div></div>' +
        '<p class="vlb-caption"><span class="vlb-title"></span> <a class="vlb-ext" target="_blank" rel="noopener"></a></p>' +
        '<p class="vlb-counter"></p>' +
      '</div>';
    document.body.appendChild(root);
    frame = root.querySelector('.vlb-frame');
    caption = root.querySelector('.vlb-caption');
    counter = root.querySelector('.vlb-counter');
    closeBtn = root.querySelector('.vlb-close');
    prevBtn = root.querySelector('.vlb-prev');
    nextBtn = root.querySelector('.vlb-next');
    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', function () { step(-1); });
    nextBtn.addEventListener('click', function () { step(1); });
    root.addEventListener('click', function (e) {
      if (e.target.closest('.vlb-frame, .vlb-caption, .vlb-nav, .vlb-close')) return;
      close();
    });
    document.addEventListener('keydown', function (e) {
      if (!open) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    });
    // Swipe on the dark area / caption (touches inside the player go to the player itself).
    var sx = 0, sy = 0, swiping = false;
    root.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) return;
      sx = e.touches[0].clientX; sy = e.touches[0].clientY; swiping = true;
    }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (!swiping) return; swiping = false;
      var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function setRatio(w, h) {
    if (w > 0 && h > 0) frame.style.setProperty('--r', Math.min(16 / 9, Math.max(9 / 16, w / h)));
  }

  function load(i) {
    var it = items[i], v = it.video;
    current = i;
    var old = frame.querySelector('iframe');
    if (old) old.remove();
    setRatio(it.w, it.h);
    if (v.kind === 'vimeo' && window.fetch) {
      // Vimeo clips here come in several shapes (16:9, square, vertical); ask Vimeo for the real one.
      fetch('https://vimeo.com/api/oembed.json?url=' + encodeURIComponent('https://vimeo.com/' + v.id))
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) { if (d && open && current === i) setRatio(d.width, d.height); })
        .catch(function () {});
    }
    frame.classList.add('is-loading');
    var iframe = document.createElement('iframe');
    iframe.src = v.src;
    iframe.title = it.title || 'Vídeo';
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.addEventListener('load', function () { frame.classList.remove('is-loading'); });
    frame.appendChild(iframe);
    caption.querySelector('.vlb-title').textContent = it.title;
    var ext = caption.querySelector('.vlb-ext');
    ext.href = it.url; ext.textContent = 'Ver en ' + v.label + ' ↗';
    counter.textContent = (i + 1) + ' / ' + items.length;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === items.length - 1;
  }

  function step(delta) {
    var i = current + delta;
    if (i < 0 || i >= items.length) return;
    load(i);
  }

  function openAt(i, trigger) {
    if (!root) build();
    lastFocus = trigger || document.activeElement;
    document.documentElement.classList.add('vlb-open');
    root.classList.add('is-open');
    open = true;
    load(i);
    closeBtn.focus();
  }

  function close() {
    if (!open) return;
    open = false;
    root.classList.remove('is-open');
    document.documentElement.classList.remove('vlb-open');
    var iframe = frame.querySelector('iframe');
    if (iframe) iframe.remove(); // removing the iframe stops playback
    var el = items[current] && items[current].el;
    if (el && el.focus) el.focus(); else if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function collect(grid) {
    items = [];
    grid.querySelectorAll('.video-item2:not([hidden]) a[href]').forEach(function (a) {
      var v = parseVideo(a.href);
      if (!v) return;
      var img = a.querySelector('img');
      var t = (a.querySelector('.text-overlay2') || {}).textContent || '';
      items.push({ url: a.href, title: t.replace(/\s+/g, ' ').trim(), el: a, video: v,
        w: img ? +img.getAttribute('width') : 0, h: img ? +img.getAttribute('height') : 0 });
    });
  }

  function init() {
    var grid = document.querySelector('.video-grid2');
    if (!grid) return;
    // Opened by double-clicking index.html (file://)? Embedded players need a real web page
    // (YouTube answers "Error 153" without a referrer), so keep the plain links.
    if (location.protocol === 'file:') return;
    collect(grid);
    grid.addEventListener('click', function (e) {
      var a = e.target.closest('.video-item2 a[href]');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      var i = -1;
      for (var k = 0; k < items.length; k++) if (items[k].el === a) { i = k; break; }
      if (i < 0) return;
      e.preventDefault();
      openAt(i, a);
    });
    // Warm up the player hosts the first time the visitor reaches the video grid.
    var warmed = false;
    grid.addEventListener('pointerenter', function () {
      if (warmed) return; warmed = true;
      ['https://www.youtube-nocookie.com', 'https://player.vimeo.com'].forEach(function (h) {
        var l = document.createElement('link'); l.rel = 'preconnect'; l.href = h; document.head.appendChild(l);
      });
    }, true);
  }

  // For testing from the console: openVideoLightbox(3) or openVideoLightbox('https://youtu.be/...').
  window.openVideoLightbox = function (which) {
    var i = typeof which === 'number' ? which : items.map(function (it) { return it.url; }).indexOf(which);
    if (i >= 0 && i < items.length) openAt(i);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

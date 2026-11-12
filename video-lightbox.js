// Plays the video tiles (.video-item2 a) in an on-page lightbox instead of a new tab.
// The links keep their href/target, so without JavaScript (or for unknown URLs) they
// still open YouTube/Vimeo in a new tab. No iframe exists until a tile is clicked.
(function () {
  'use strict';

  function parseVideo(url) {
    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/);
    if (m) return { kind: 'youtube', id: m[1], label: 'YouTube',
      src: 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1&rel=0&playsinline=1&modestbranding=1' };
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]+))?/);
    if (m) {
      var h = m[2] || (url.match(/[?&]h=([0-9a-f]+)/) || [])[1];
      return { kind: 'vimeo', id: m[1], label: 'Vimeo',
        src: 'https://player.vimeo.com/video/' + m[1] + '?autoplay=1&title=0&byline=0&portrait=0&dnt=1' + (h ? '&h=' + h : '') };
    }
    return null;
  }

  var root, frame, caption, closeBtn, lastFocus, open = false;

  function build() {
    root = document.createElement('div');
    root.className = 'vlb';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'Reproductor de vídeo');
    root.innerHTML =
      '<button type="button" class="vlb-close" aria-label="Cerrar (Esc)">' +
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>' +
      '</button>' +
      '<div class="vlb-stage"><div class="vlb-frame"><div class="vlb-spinner"></div></div>' +
      '<p class="vlb-caption"></p></div>';
    document.body.appendChild(root);
    frame = root.querySelector('.vlb-frame');
    caption = root.querySelector('.vlb-caption');
    closeBtn = root.querySelector('.vlb-close');
    closeBtn.addEventListener('click', close);
    root.addEventListener('click', function (e) { if (!frame.contains(e.target) && !caption.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (open && e.key === 'Escape') close(); });
  }

  function setRatio(w, h) {
    if (w > 0 && h > 0) frame.style.setProperty('--r', Math.min(16 / 9, Math.max(9 / 16, w / h)));
  }

  function show(url, title, ratioW, ratioH, trigger) {
    var v = parseVideo(url);
    if (!v) return false;
    // Opened by double-clicking index.html (file://)? Embedded players need a real web page
    // (YouTube answers "Error 153" without a referrer), so fall back to the new tab.
    if (location.protocol === 'file:') return false;
    if (!root) build();
    lastFocus = trigger || document.activeElement;
    setRatio(ratioW, ratioH);
    if (v.kind === 'vimeo' && window.fetch) {
      // Vimeo clips here come in several shapes (16:9, square, vertical); ask Vimeo for the real one.
      fetch('https://vimeo.com/api/oembed.json?url=' + encodeURIComponent('https://vimeo.com/' + v.id))
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) { if (d && open) setRatio(d.width, d.height); })
        .catch(function () {});
    }
    frame.classList.add('is-loading');
    var iframe = document.createElement('iframe');
    iframe.src = v.src;
    iframe.title = title || 'Vídeo';
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.addEventListener('load', function () { frame.classList.remove('is-loading'); });
    frame.appendChild(iframe);
    caption.innerHTML = '';
    if (title) caption.appendChild(document.createTextNode(title + ' '));
    var ext = document.createElement('a');
    ext.href = url; ext.target = '_blank'; ext.rel = 'noopener';
    ext.textContent = 'Ver en ' + v.label + ' ↗';
    caption.appendChild(ext);
    document.documentElement.classList.add('vlb-open');
    root.classList.add('is-open');
    open = true;
    closeBtn.focus();
    return true;
  }

  function close() {
    if (!open) return;
    open = false;
    root.classList.remove('is-open');
    document.documentElement.classList.remove('vlb-open');
    var iframe = frame.querySelector('iframe');
    if (iframe) iframe.remove(); // removing the iframe stops playback
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function init() {
    var grid = document.querySelector('.video-grid2');
    if (!grid) return;
    grid.addEventListener('click', function (e) {
      var a = e.target.closest('.video-item2 a[href]');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      var img = a.querySelector('img');
      var title = (a.querySelector('.text-overlay2') || {}).textContent || '';
      title = title.replace(/\s+/g, ' ').trim();
      var ok = show(a.href, title, img ? img.getAttribute('width') : 0, img ? img.getAttribute('height') : 0, a);
      if (ok) e.preventDefault();
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

  window.openVideoLightbox = show;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

(function () {
    const header = document.querySelector('header');
    if (!header) return;
    let ticking = false;
    function update() {
        header.classList.toggle('scrolled', window.scrollY > 100);
        ticking = false;
    }
    window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
})();

document.addEventListener('DOMContentLoaded', function() {

     const form = document.getElementById('contactForm');
  if (!form) return;

  const statusEl = document.getElementById('contactStatus');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // basic guard
    if (!form.checkValidity()) {
      form.reportValidity?.();
      return;
    }

    submitBtn.disabled = true;
    statusEl.textContent = 'Sending…';

        try {
          const formData = new FormData(form);
          const res = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (res.ok) {
            form.reset();
            statusEl.textContent = 'Thanks! Your message has been sent.';
          } else {
            const data = await res.json().catch(() => ({}));
            statusEl.textContent = data?.errors?.[0]?.message || 'Oops — something went wrong. Please try again later.';
          }
        } catch (err) {
          statusEl.textContent = 'Network error. Please check your connection and try again.';
        } finally {
          submitBtn.disabled = false;
          setTimeout(() => { statusEl.textContent = ''; }, 6000);
        }
      });
    // Collection data - in a real implementation, this would come from a database or CMS
    const collections = {
		
		'wedd:M y N': {
            title: 'Reportaje de boda: Marta y Nacho',
            description: 'Tuve el placer de fotografiar la boda de Marta y Nacho en la Casa del Esquileo, en Segovia. Fue un día lleno de calidez familiar, momentos luminosos y una energía estupenda.',
            photos: [
			    { src: 'photos/web/Marta and Nacho/01.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/02.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/03.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/04.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/05.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/06.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/07.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/08.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/09.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/10.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/11.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/12.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/23.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/24.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/18.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/15.webp', alt: '' },
                
                { src: 'photos/web/Marta and Nacho/17.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/16.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/19.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/20.webp', alt: '' },
               
                { src: 'photos/web/Marta and Nacho/22.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/13.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/14.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/25.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/26.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/27.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/28.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/29.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/30.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/21.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/31.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/32.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/33.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/34.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/35.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/36.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/37.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/38.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/40.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/41.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/42.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/43.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/44.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/45.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/46.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/47.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/48.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/49.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/50.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/51.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/52.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/53.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/54.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/55.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/56.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/57.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/58.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/59.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/60.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/61.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/62.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/63.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/64.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/65.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/66.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/67.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/68.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/69.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/70.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/71.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/72.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/73.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/74.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/75.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/76.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/77.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/78.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/79.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/80.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/81.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/82.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/83.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/84.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/85.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/86.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/87.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/88.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/89.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/90.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/91.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/92.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/93.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/94.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/95.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/96.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/97.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/98.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/99.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/100.webp', alt: '' },
				{ src: 'photos/web/Marta and Nacho/101.webp', alt: '' },
                { src: 'photos/web/Marta and Nacho/102.webp', alt: '' }
                
                
               
            ]
        },
		
		
		
		
		'Rosa y Jesus': {
            title: 'Sesión preboda: Rosa y Jesús',
            description: 'Una sesión de fotos preboda muy divertida y variada en las Lagunas de las Madres, en Arganda del Rey.',
            photos: [
			    { src: 'photos/web/Rosa y Jesus/01.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/03.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/04.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/05.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/06.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/07.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/08.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/09.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/10.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/11.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/12.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/13.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/15.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/17.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/18.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/19.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/22.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/24.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/25.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/26.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/27.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/28.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/29.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/30.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/31.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/32.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/33.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/35.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/36.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/37.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/38.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/39.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/40.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/41.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/42.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/43.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/44.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/45.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/46.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/47.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/48.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/49.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/50.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/52.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/53.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/54.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/55.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/56.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/57.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/58.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/59.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/60.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/61.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/62.webp', alt: '' },
				{ src: 'photos/web/Rosa y Jesus/63.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/64.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/65.webp', alt: '' },
                { src: 'photos/web/Rosa y Jesus/66.webp', alt: '' }
                
                
                
               
            ]
        },
		
		
		'FlorPaolo': {
            title: 'Reportaje de boda: Flor y Paolo',
            description: 'Una preciosa combinación de tradición italiana y elegancia española en el Palacio de Viñuelas. Esta boda celebró las raíces sicilianas del novio con una temática en color amarillo vivo que hizo que todo el lugar se sintiera acogedor, alegre y verdaderamente especial.',
            photos: [
				
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (3).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (4).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (2).webp', alt: '' },
				//{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (5).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (6).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (7).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (9).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (10).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (11).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (12).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (13).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (14).webp', alt: '' },
				//{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (15).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (16).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (17).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (18).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (19).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (20).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (21).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (22).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (23).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (24).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (25).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (26).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (27).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (28).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (29).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (30).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (31).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (32).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (33).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (35).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (36).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (37).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (38).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (39).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (41).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (42).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (43).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (44).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (45).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (46).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (47).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (48).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (49).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (50).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (51).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (52).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (53).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (54).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (55).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (56).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (57).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (58).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (59).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (60).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (61).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (62).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (63).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (64).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (65).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (66).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (67).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (69).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (70).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (71).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (72).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (73).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (74).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (75).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (76).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (77).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (78).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (79).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (80).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (81).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (82).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (83).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (84).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (85).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (86).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (87).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (88).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (89).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (90).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (91).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (92).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (93).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (94).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (95).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (96).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (97).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (98).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (99).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (100).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (101).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (102).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (103).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (104).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (105).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (106).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (107).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (108).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (109).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (110).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (111).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (112).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (113).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (114).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (115).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (116).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (117).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (118).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (119).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (120).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (121).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (122).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (123).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (124).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (125).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (126).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (127).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (128).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (129).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (130).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (131).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (132).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (133).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (134).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (135).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (136).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (137).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (138).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (139).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (140).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (141).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (142).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (143).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (144).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (145).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (146).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (147).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (148).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (149).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (150).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (151).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (152).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (153).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (154).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (155).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (156).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (157).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (158).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (159).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (160).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (161).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (162).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (163).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (164).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (166).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (167).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (168).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (169).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (170).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (171).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (172).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (173).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (174).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (175).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (176).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (177).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (178).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (179).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (180).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (181).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (182).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (183).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (184).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (186).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (187).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (188).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (189).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (190).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (191).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (192).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (193).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (194).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (195).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (196).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (197).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (198).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (199).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (200).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (201).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (202).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (203).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (204).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (205).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (206).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (207).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (208).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (209).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (210).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (211).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (212).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (213).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (214).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (215).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (216).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (217).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (218).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (219).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (220).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (221).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (222).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (223).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (224).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (226).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (227).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (228).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (230).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (231).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (232).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (233).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (234).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (235).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (236).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (237).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (238).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (239).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (240).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (241).webp', alt: '' },
				//{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (242).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (243).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (244).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (245).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (246).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (247).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (248).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (249).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (250).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (251).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (252).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (253).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (254).webp', alt: '' },
				//{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (256).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (257).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (258).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (259).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (260).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (261).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (262).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (264).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (265).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (266).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (267).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (268).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (269).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (270).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (271).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (272).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (273).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (274).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (275).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (276).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (277).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (278).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (279).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (280).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (281).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (282).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (283).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (284).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (285).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (286).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (287).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (288).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (289).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (290).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (291).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (292).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (293).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (294).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (295).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (296).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (297).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (298).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (299).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (300).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (301).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (302).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (303).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (304).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (305).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (306).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (307).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (308).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (309).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (310).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (311).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (312).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (313).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (314).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (315).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (316).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (317).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (318).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (319).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (320).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (321).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (322).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (323).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (324).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (325).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (326).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (327).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (328).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (329).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (330).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (331).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (332).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (333).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (334).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (335).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (336).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (337).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (338).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (339).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (340).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (341).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (342).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (343).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (344).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (345).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (346).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (347).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (349).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (350).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (351).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (352).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (353).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (354).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (355).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (356).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (357).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (358).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (359).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (360).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (361).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (362).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (363).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (364).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (365).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (366).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (367).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (368).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (369).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (370).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (371).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (372).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (373).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (374).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (375).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (376).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (377).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (378).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (379).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (380).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (381).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (382).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (383).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (384).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (385).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (386).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (387).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (389).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (390).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (391).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (392).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (393).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (394).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (395).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (396).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (397).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (398).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (399).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (400).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (401).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (402).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (403).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (404).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (405).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (406).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (407).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (408).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (409).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (410).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (411).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (412).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (413).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (414).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (415).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (416).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (417).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (418).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (420).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (421).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (422).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (423).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (424).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (425).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (426).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (428).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (429).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (430).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (432).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (433).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (434).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (435).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (436).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (437).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (438).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (439).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (440).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (441).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (442).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (443).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (444).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (445).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (446).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (447).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (448).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (449).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (450).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (451).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (452).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (453).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (454).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (455).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (456).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (457).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (458).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (459).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (460).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (461).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (462).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (463).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (464).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (465).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (466).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (467).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (468).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (469).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (470).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (471).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (472).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (473).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (474).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (475).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (476).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (477).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (478).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (479).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (480).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (481).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (482).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (483).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (484).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (485).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (486).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (487).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (488).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (489).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (490).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (491).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (492).webp', alt: '' },
				{ src: 'photos/web/Flor and Poalo/BODA PF 06062026 WEB (493).webp', alt: '' }
                
                
                
               
            ]
        },
		
		
		'Wed:Silvia': {
            title: 'Boda civil de Silvia y Alejandro',
            description: 'Esta fue la boda civil de Silvia y Alejandro. Mi trabajo comenzó con los preparativos de la novia en su casa, seguidos de la ceremonia en el Registro Civil de Moncloa-Aravaca y una sesión de retratos en el parque. Capturé fotos de grupo, instantáneas de los recién casados y algunos momentos preciosos con su hijo. ¡Fue un día increíble!',
            photos: [
                { src: 'photos/web/Silvia and Alejandro/01.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/03.webp', alt: '' },
               // { src: 'photos/web/Silvia and Alejandro/05.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/08.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/07.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/10.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/11.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/12.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/13.webp', alt: '' },
		      //{ src: 'photos/web/Silvia and Alejandro/14.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/15.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/17.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/18.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/19.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/21.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/22.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/24.webp', alt: '' },
               // { src: 'photos/web/Silvia and Alejandro/25.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/26.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/27.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/28.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/29.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/30.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/31.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/32.webp', alt: '' },
         //     { src: 'photos/web/Silvia and Alejandro/33.webp', alt: '' },
		//		{ src: 'photos/web/Silvia and Alejandro/34.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/35.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/36.webp', alt: '' },
          //      { src: 'photos/web/Silvia and Alejandro/37.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/38.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/40.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/41.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/42.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/44.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/46.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/47.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/49.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/50.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/54.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/52.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/53.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/55.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/59.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/56.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/57.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/60.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/61.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/62.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/64.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/66.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/67.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/68.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/69.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/70.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/71.webp', alt: '' },
              //  { src: 'photos/web/Silvia and Alejandro/72.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/73.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/74.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/75.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/76.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/77.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/78.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/79.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/80.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/81.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/82.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/83.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/84.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/87.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/88.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/89.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/90.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/91.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/93.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/94.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/96.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/97.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/98.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/99.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/100.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/102.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/101.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/103.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/104.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/105.webp', alt: '' },
               // { src: 'photos/web/Silvia and Alejandro/106.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/107.webp', alt: '' },
               // { src: 'photos/web/Silvia and Alejandro/108.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/109.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/110.webp', alt: '' },
				//{ src: 'photos/web/Silvia and Alejandro/112.webp', alt: '' },
				//{ src: 'photos/web/Silvia and Alejandro/113.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/114.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/115.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/117.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/118.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/119.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/120.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/121.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/122.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/123.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/124.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/126.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/127.webp', alt: '' },
				//{ src: 'photos/web/Silvia and Alejandro/129.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/130.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/131.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/132.webp', alt: '' },
               // { src: 'photos/web/Silvia and Alejandro/133.webp', alt: '' },
				//{ src: 'photos/web/Silvia and Alejandro/137.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/140.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/142.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/138.webp', alt: '' },
				//{ src: 'photos/web/Silvia and Alejandro/139.webp', alt: '' },
				
                { src: 'photos/web/Silvia and Alejandro/143.webp', alt: '' },
               // { src: 'photos/web/Silvia and Alejandro/144.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/145.webp', alt: '' },
                //{ src: 'photos/web/Silvia and Alejandro/146.webp', alt: '' },
               // { src: 'photos/web/Silvia and Alejandro/148.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/149.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/152.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/153.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/155.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/156.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/158.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/160.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/162.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/165.webp', alt: '' },
             //   { src: 'photos/web/Silvia and Alejandro/166.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/167.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/168.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/169.webp', alt: '' },
              //  { src: 'photos/web/Silvia and Alejandro/171.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/172.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/174.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/175.webp', alt: '' },
			//	{ src: 'photos/web/Silvia and Alejandro/176.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/177.webp', alt: '' },
			//	{ src: 'photos/web/Silvia and Alejandro/178.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/179.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/180.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/181.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/182.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/183.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/187.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/190.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/192.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/194.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/195.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/196.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/197.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/198.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/200.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/201.webp', alt: '' },
			//	{ src: 'photos/web/Silvia and Alejandro/202.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/203.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/204.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/206.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/211.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/212.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/214.webp', alt: '' },
             //   { src: 'photos/web/Silvia and Alejandro/214.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/215.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/218.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/219.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/220.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/221.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/224.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/226.webp', alt: '' },
				//{ src: 'photos/web/Silvia and Alejandro/227.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/230.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/235.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/232.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/233.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/236.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/238.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/239.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/240.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/241.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/244.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/245.webp', alt: '' },
			//	{ src: 'photos/web/Silvia and Alejandro/246.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/247.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/248.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/249.webp', alt: '' },
				{ src: 'photos/web/Silvia and Alejandro/250.webp', alt: '' },
              //  { src: 'photos/web/Silvia and Alejandro/251.webp', alt: '' },
                { src: 'photos/web/Silvia and Alejandro/252.webp', alt: '' }
                
               
            ]
        },
		
		'wedd:Alysson': {
            title: 'Reportaje de boda: Alysson y Johann',
            description: 'Esta boda fue en Pézilla-la-Rivière, en el sur de Francia. Como la pareja es súper activa y dinámica, imaginad el percal: ¡la novia se había roto el tobillo apenas dos semanas antes de la boda! A pesar de todo, salió un día increíble y pude capturar fotos preciosas.',
            photos: [
				
				{ src: 'photos/web/Alysson and Johann/438.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/439.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/443.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/445.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/446.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/448.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/449.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/451.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/460.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/455.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/456.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/465.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/458.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/461.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/464.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/466.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/467.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/471.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/470.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/472.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/479.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/473.webp', alt: '' },
				
				{ src: 'photos/web/Alysson and Johann/413.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/419.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/411.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/417.webp', alt: '' },
				
				{ src: 'photos/web/Alysson and Johann/420.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/423.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/424.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/429.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/427.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/431.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/433.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/434.webp', alt: '' },
                { src: 'photos/web/Alysson and Johann/00.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/02.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/03.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/04.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/08.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/13.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/14.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/15.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/16.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/18.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/19.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/21.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/22.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/23.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/24.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/25.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/26.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/27.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/28.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/29.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/30.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/31.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/32.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/34.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/35.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/36.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/38.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/39.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/41.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/42.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/43.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/44.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/45.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/46.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/48.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/49.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/50.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/52.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/57.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/58.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/59.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/60.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/61.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/62.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/63.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/68.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/69.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/71.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/72.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/74.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/75.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/83.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/85.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/86.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/88.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/89.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/90.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/91.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/92.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/93.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/94.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/97.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/98.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/99.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/101.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/102.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/103.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/104.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/105.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/114.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/107.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/108.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/109.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/110.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/111.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/113.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/112.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/106.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/115.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/116.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/118.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/120.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/121.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/122.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/123.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/124.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/125.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/126.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/127.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/129.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/130.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/131.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/132.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/133.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/134.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/135.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/136.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/137.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/138.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/139.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/140.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/141.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/142.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/143.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/144.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/145.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/146.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/147.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/148.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/149.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/150.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/151.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/152.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/153_02.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/154.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/156.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/159.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/161.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/163.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/166.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/164.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/167.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/169.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/171.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/172.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/178.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/173.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/175.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/176.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/177.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/181.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/182.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/183.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/185.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/187.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/192.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/189.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/190.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/191.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/194.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/193.webp', alt: '' },
	
				{ src: 'photos/web/Alysson and Johann/195.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/196.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/198.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/200.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/202.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/203.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/204.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/205.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/206.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/207.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/209.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/210.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/211.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/214.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/216.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/215.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/217.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/219.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/225.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/218.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/222.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/220.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/221.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/223.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/227.webp', alt: '' },
			
				
				{ src: 'photos/web/Alysson and Johann/229.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/231.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/230.webp', alt: '' },
			
				{ src: 'photos/web/Alysson and Johann/232.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/233.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/234.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/236.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/237.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/238.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/242.webp', alt: '' },
				
				{ src: 'photos/web/Alysson and Johann/240.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/241.webp', alt: '' },
			    { src: 'photos/web/Alysson and Johann/239.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/243.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/244.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/246.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/248.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/250.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/251.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/252.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/256.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/258.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/259.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/261.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/264.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/273.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/266.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/268.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/269.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/275.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/276.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/277.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/278.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/279.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/280.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/281.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/282.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/283.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/284.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/287.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/285.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/286.webp', alt: '' },
				
				{ src: 'photos/web/Alysson and Johann/288.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/290.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/292.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/294.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/295.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/297.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/296.webp', alt: '' },
				
				{ src: 'photos/web/Alysson and Johann/298.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/299.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/300.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/304.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/305.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/307.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/308.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/309.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/310.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/311.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/312.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/313.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/314.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/315.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/316.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/318.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/319.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/320.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/321.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/322.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/323.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/324.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/326.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/327.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/329.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/331.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/333.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/335.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/337.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/341.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/343.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/342.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/345.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/348.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/349.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/350.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/351.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/353.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/356.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/358.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/359.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/361.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/362.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/364.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/365.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/366.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/367.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/369.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/371.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/372.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/373.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/375.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/378.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/379.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/380.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/381.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/384.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/382.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/383.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/385.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/386.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/387.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/388.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/389.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/390.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/391.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/392.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/393.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/396.webp', alt: '' },
			
				{ src: 'photos/web/Alysson and Johann/397.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/398.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/399.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/402.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/403.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/404.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/407.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/408.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/410.webp', alt: '' },
				
				{ src: 'photos/web/Alysson and Johann/483.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/484.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/486.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/489.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/490.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/491.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/493.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/494.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/496.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/497.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/499.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/501.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/504.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/505.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/507.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/508.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/509.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/511.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/512.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/514.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/515.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/518.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/521.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/522.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/523.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/524.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/525.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/526.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/527.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/529.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/530.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/532.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/533.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/534.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/535.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/537.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/556.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/540.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/542.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/544.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/551.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/552.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/553.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/554.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/555.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/558.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/559.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/560.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/561.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/562.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/563.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/564.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/565.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/566.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/567.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/570.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/571.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/572.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/573.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/574.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/575.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/576.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/577.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/578.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/580.webp', alt: '' },
			
				{ src: 'photos/web/Alysson and Johann/582.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/583.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/584.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/585.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/586.webp', alt: '' },
				//{ src: 'photos/web/Alysson and Johann/588.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/589.webp', alt: '' },
				{ src: 'photos/web/Alysson and Johann/590.webp', alt: '' }
				
			    
            ]
        },	
		
		'wedd:Fran': {
            title: 'Reportaje de boda: Marta y Fran',
            description: 'Una hermosa boda en el Caserío de Lobones, en Segovia, para celebrar la unión de dos corazones españoles: Marta y Fran. En esta ocasión, tuve el placer de trabajar como segunda fotógrafa junto a Enjoy The F Moment.',
            photos: [
                { src: 'photos/web/Fran and Marta/02.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/03.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/04.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/01.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/05.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/06.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/12.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/07.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/08.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/09.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/10.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/11.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/13.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/14.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/15.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/16.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/17.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/18.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/19.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/20.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/21.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/22.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/23.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/24.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/25.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/26.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/27.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/28.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/29.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/30.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/31.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/32.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/33.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/34.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/35.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/36.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/37.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/38.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/39.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/40.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/41.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/42.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/43.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/44.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/45.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/46.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/47.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/48.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/49.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/50.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/51.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/52.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/53.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/54.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/55.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/56.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/57.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/58.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/59.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/60.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/61.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/62.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/63.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/64.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/65.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/66.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/67.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/68.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/70.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/71.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/72.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/73.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/74.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/75.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/76.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/77.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/78.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/79.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/80.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/81.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/82.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/83.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/84.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/85.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/86.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/87.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/88.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/89.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/90.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/91.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/92.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/93.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/94.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/95.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/96.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/97.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/98.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/99.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/100.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/101.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/102.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/103.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/104.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/105.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/106.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/107.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/108.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/109.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/110.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/111.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/112.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/113.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/114.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/115.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/116.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/117.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/118.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/119.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/120.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/121.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/122.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/123.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/124.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/125.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/126.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/127.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/128.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/129.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/130.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/131.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/132.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/133.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/134.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/135.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/136.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/137.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/138.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/139.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/140.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/141.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/142.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/143.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/144.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/145.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/146.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/147.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/148.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/149.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/150.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/151.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/152.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/153.webp', alt: '' },
                { src: 'photos/web/Fran and Marta/154.webp', alt: '' },
				{ src: 'photos/web/Fran and Marta/155.webp', alt: '' }
                
               
            ]
        },
		
		
		'wedd:Lauren': {
            title: 'Reportaje de boda: Lauren y Ciáran',
            description: 'Tuve el placer de fotografiar la boda de Lauren y Ciáran en Barcelona. Son originarios de Irlanda, lo que convirtió la experiencia en algo maravilloso e internacional.',
            photos: [
                { src: 'photos/web/Lauren and Ciaran/03.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/04.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/05.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/06.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/12.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/07.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/08.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/09.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/10.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/11.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/13.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/14.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/15.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/16.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/17.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/18.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/19.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/20.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/21.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/22.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/23.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/24.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/25.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/26.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/27.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/28.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/29.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/30.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/31.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/32.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/33.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/34.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/35.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/36.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/37.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/38.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/39.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/40.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/41.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/42.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/43.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/44.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/45.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/46.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/47.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/48.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/49.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/50.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/51.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/52.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/53.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/54.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/55.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/56.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/57.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/58.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/59.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/60.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/61.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/62.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/63.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/64.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/65.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/66.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/67.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/68.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/70.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/71.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/72.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/73.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/74.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/75.webp', alt: '' },
				{ src: 'photos/web/Lauren and Ciaran/76.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/77.webp', alt: '' },
                { src: 'photos/web/Lauren and Ciaran/78.webp', alt: '' }
               
            ]
        },
		
		
		'Wed:Monica': {
            title: 'Reportaje de boda: Mónica y Colin',
            description: 'Una boda que unió dos corazones de diferentes rincones de Europa: la gracia española de Mónica y el encanto irlandés de Colin. Fue un honor capturar su gran día, lleno de tradiciones significativas, actuaciones artísticas de su familia y una energía conmovedora en la pista de baile una vez que comenzó la música.',
            photos: [
			    { src: 'photos/web/Monica and Colin/01.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/03.webp', alt: '' }, 
                { src: 'photos/web/Monica and Colin/02.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/08.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/10.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/09.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/14.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/05.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/15.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/20.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/16.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/22.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/23.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/25.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/27.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/28.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/29.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/33-2.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/34.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/35.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/36.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/37.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/38.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/30.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/31.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/32.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/06.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/04.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/39.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/40.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/43.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/42.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/44.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/45.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/46.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/47.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/48.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/50.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/52.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/53.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/54.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/56.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/55.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/57.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/59.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/60.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/58.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/61.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/62.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/63.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/64.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/65.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/66.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/67.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/68.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/69.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/70.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/71.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/72.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/74.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/73.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/75.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/76.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/77.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/78.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/84.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/81.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/82.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/83.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/80.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/85.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/86.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/87.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/88.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/89.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/90.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/91.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/92.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/93.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/94.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/95.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/98.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/97.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/99.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/96.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/100.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/103.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/104.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/105.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/106.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/107.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/108.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/109.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/110.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/112.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/113.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/114.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/116.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/117.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/118.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/119.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/120.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/122.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/123.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/124.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/125.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/126.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/127.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/128.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/129.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/131.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/132.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/133.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/135.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/136.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/138.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/139.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/140.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/141.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/142.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/143.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/145.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/146.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/147.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/148.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/149.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/150.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/151.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/152.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/154.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/155.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/156.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/157.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/158.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/159.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/160.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/161.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/163.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/162.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/164.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/165.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/166.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/167.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/170.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/169.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/172.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/173.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/174.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/175.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/176.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/177.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/178.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/179.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/180.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/181.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/182.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/183.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/184.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/185.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/186.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/187.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/188.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/189.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/190.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/191.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/192.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/193.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/194.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/195.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/196.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/197.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/198.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/199.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/200.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/201.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/202.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/203.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/204.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/205.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/206.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/207.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/208.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/209.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/210.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/211.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/212.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/213.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/214.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/215.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/216.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/217.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/218.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/219.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/220.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/221.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/222.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/223.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/224.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/225.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/226.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/227.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/228.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/229.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/230.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/231.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/234.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/233.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/235.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/236.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/239.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/237.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/238.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/240.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/241.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/243.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/244.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/246.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/247.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/232.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/248.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/249.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/250.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/251.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/252.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/253.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/254.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/255.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/256.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/257.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/258.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/261.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/262.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/263.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/260.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/264.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/265.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/266.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/267.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/268.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/269.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/270.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/271.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/272.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/273.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/275.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/277.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/278.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/274.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/279.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/281.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/282.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/283.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/284.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/286.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/287.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/288.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/289.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/290.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/291.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/293.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/294.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/295.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/296.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/297.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/298.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/299.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/300.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/301.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/302.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/303.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/304.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/305.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/306.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/314.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/307.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/308.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/309.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/310.webp', alt: '' },
                { src: 'photos/web/Monica and Colin/311.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/313.webp', alt: '' },
				{ src: 'photos/web/Monica and Colin/312.webp', alt: '' }
               
                
		  ]
        },
		
		
		
		'wedd:J y S': {
            title: 'Reportaje de boda: Joelle y Sina',
            description: 'El imponente Palacio de Galiana, una puesta de sol que quedará grabada en la memoria de todos y la gente más animada bailando al ritmo de los mejores éxitos pop y árabes. ¡Así es como todos, incluyéndome a mí, recordaremos la increíble boda de Joelle y Sina! Tuve el placer de ser la segunda fotógrafa, centrándome principalmente en capturar a los invitados.',
            photos: [
			    { src: 'photos/web/Joelle and Sina/01.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/02.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/03.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/04.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/05.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/06.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/07.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/08.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/09.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/10.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/11.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/12.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/13.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/14.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/15.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/16.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/17.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/18.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/19.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/20.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/21.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/22.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/22.2.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/23.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/24.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/25.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/26.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/27.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/29.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/30.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/31.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/32.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/33.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/34.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/35.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/36.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/37.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/38.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/40.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/41.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/42.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/43.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/44.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/45.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/46.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/47.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/48.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/49.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/50.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/51.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/52.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/53.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/54.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/55.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/56.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/57.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/58.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/59.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/60.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/61.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/62.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/63.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/64.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/65.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/66.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/67.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/68.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/69.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/70.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/71.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/72.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/73.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/74.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/75.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/76.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/77.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/78.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/79.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/80.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/81.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/82.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/83.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/84.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/85.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/86.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/87.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/88.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/89.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/90.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/91.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/92.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/93.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/94.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/95.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/96.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/97.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/98.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/99.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/100.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/101.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/102.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/103.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/104.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/105.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/105.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/106.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/107.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/108.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/109.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/110.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/111.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/112.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/113.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/114.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/115.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/116.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/117.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/118.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/119.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/120.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/121.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/122.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/123.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/124.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/125.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/126.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/127.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/128.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/129.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/130.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/131.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/132.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/133.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/134.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/135.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/136.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/137.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/138.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/139.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/140.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/141.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/142.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/143.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/144.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/145.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/146.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/147.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/148.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/149.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/150.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/151.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/152.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/153.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/154.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/155.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/156.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/157.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/158.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/159.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/160.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/161.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/162.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/163.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/164.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/165.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/166.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/167.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/168.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/169.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/170.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/171.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/172.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/173.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/174.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/175.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/176.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/177.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/178.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/179.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/180.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/181.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/182.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/184.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/185.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/186.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/187.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/188.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/189.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/190.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/191.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/192.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/193.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/194.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/195.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/196.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/197.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/198.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/199.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/200.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/201.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/202.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/203.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/204.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/205.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/206.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/207.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/208.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/209.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/210.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/211.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/212.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/213.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/214.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/215.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/216.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/217.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/218.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/219.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/220.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/221.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/222.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/223.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/225.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/226.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/227.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/228.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/229.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/230.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/231.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/232.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/233.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/234.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/235.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/236.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/237.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/238.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/239.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/240.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/241.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/242.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/243.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/244.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/245.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/246.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/247.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/248.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/249.webp', alt: '' },
				{ src: 'photos/web/Joelle and Sina/250.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/251.webp', alt: '' },
                { src: 'photos/web/Joelle and Sina/252.webp', alt: '' }
                
            ]
        },
		
		'Ishreet': {
            title: 'Una pedida de mano sorpresa',
            description: 'Originalmente me contactó Isreet, quien quería una sesión de fotos para celebrar su viaje a Madrid. Sin embargo, la historia dio un giro secreto cuando su novio se puso en contacto conmigo para contarme que ¡planeaba pedirle matrimonio durante nuestra sesión! Mi amiga y yo organizamos un corazón de pétalos en el lugar, que se puede ver en las fotos, y lo tuvimos listo para el momento en que llegamos al punto principal con la pareja. Al final, todo salió a la perfección. ¡Fue una experiencia muy bonita formar parte de su historia!',
            photos: [
                { src: 'photos/web/Ishreet and Joet/12.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/08.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/05.webp', alt: '' }, 
				{ src: 'photos/web/Ishreet and Joet/03.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/07.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/11.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/09.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/04.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/14.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/15.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/17.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/18.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/20.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/21.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/23.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/39.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/24.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/31.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/25.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/28.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/29.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/40.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/37.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/41.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/42.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/45.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/46.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/47.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/48.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/49.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/50.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/51.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/52.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/53.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/54.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/55.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/56.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/57.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/58.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/59.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/61.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/62.webp', alt: '' },
				{ src: 'photos/web/Ishreet and Joet/63.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/65.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/66.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/67.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/70.webp', alt: '' },
                { src: 'photos/web/Ishreet and Joet/71.webp', alt: '' }
		  ]
        },
		
		
		'phot-proj': {
            title: 'Proyecto de fotografía sobre parejas',
            description: 'Me apasiona capturar la conexión entre las personas, especialmente entre las parejas. Por eso decidí crear mi propio proyecto de fotografía sobre el amor. La idea es mostrar cómo cada pareja vive en su propio mundo, completamente sumergida en su amor, sin preocuparse por lo que sucede a su alrededor. ¡A veces, puede que ni siquiera encajen en los estándares del mundo que los rodea! 😊',
            photos: [
                { src: 'photos/web/Enr y Evel/A7405825.webp', alt: '' },
                { src: 'photos/web/Enr y Evel/A7405856.webp', alt: '' },
				{ src: 'photos/web/Enr y Evel/A7405866.webp', alt: '' },
                { src: 'photos/web/Enr y Evel/A7406134.webp', alt: '' },
                { src: 'photos/web/Enr y Evel/A7406109_02.webp', alt: '' },
				{ src: 'photos/web/Enr y Evel/A7406193.webp', alt: '' },
				{ src: 'photos/web/Maryam/01.webp', alt: '' },
                { src: 'photos/web/Maryam/02.webp', alt: '' },
				{ src: 'photos/web/Maryam/03.webp', alt: '' },
                { src: 'photos/web/Maryam/04.webp', alt: '' },
                { src: 'photos/web/Maryam/05.webp', alt: '' },
				{ src: 'photos/web/Maryam/06.webp', alt: '' },
				{ src: 'photos/web/Maryam/07.webp', alt: '' },
				{ src: 'photos/web/Maryam/08.webp', alt: '' },
				{ src: 'photos/web/Fernanda y Charles/01.webp', alt: '' },
				{ src: 'photos/web/Fernanda y Charles/02.webp', alt: '' },
				{ src: 'photos/web/Fernanda y Charles/03.webp', alt: '' },
				{ src: 'photos/web/Fernanda y Charles/04.webp', alt: '' },
                { src: 'photos/web/Mish y Mar/01.webp', alt: '' },
                { src: 'photos/web/Mish y Mar/02.webp', alt: '' },
                { src: 'photos/web/Mish y Mar/03.webp', alt: '' },
                { src: 'photos/web/Mish y Mar/04.webp', alt: '' }
                
            ]
        },
		
		
		
		'Valentine': {
            title: 'Sesión de fotos de San Valentín',
            description: 'La increíble pareja formada por Mónica y Jorge se puso en contacto conmigo para realizar una sesión de fotos de San Valentín. Elegí uno de mis estudios favoritos en Madrid y, en apenas una hora, capturamos estas fotos vibrantes y románticas.',
            photos: [
                
				{ src: 'photos/web/Monica and Jorge/14.webp', alt: '' },
               // { src: 'photos/web/Monica and Jorge/17.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/18.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/20.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/21.webp', alt: '' },
				//{ src: 'photos/web/Monica and Jorge/22.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/23.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/24.webp', alt: '' },
				//{ src: 'photos/web/Monica and Jorge/26.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/29.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/31.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/34.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/35.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/37.webp', alt: '' },
				//{ src: 'photos/web/Monica and Jorge/40.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/41.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/44.webp', alt: '' },
                //{ src: 'photos/web/Monica and Jorge/45.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/48.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/50.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/52.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/53.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/54.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/55.webp', alt: '' },                
				{ src: 'photos/web/Monica and Jorge/60.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/62.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/61.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/57.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/01.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/02.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/06.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/08.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/09.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/11.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/13.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/64.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/65.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/66.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/69.webp', alt: '' },
                { src: 'photos/web/Monica and Jorge/71.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/72.webp', alt: '' },
				{ src: 'photos/web/Monica and Jorge/74.webp', alt: '' }
		  ]
        },
		
		
		
		'Geli': {
            title: 'Sesión de fotos individual',
            description: 'Para esta sesión, busqué una estética de ensueño y etérea. Tras encontrar el look perfecto con la clienta, capturé la historia en un entorno de parque. Para conseguir este ambiente tan específico, utilicé un filtro de objetivo en varias tomas para crear esa atmósfera poética.',
            photos: [
              
				{ src: 'photos/web/Geli/04.webp', alt: '' },
                { src: 'photos/web/Geli/06.webp', alt: '' },
				{ src: 'photos/web/Geli/01.webp', alt: '' },
                // { src: 'photos/web/Geli/04.webp', alt: '' },
                { src: 'photos/web/Geli/02.webp', alt: '' },
				// { src: 'photos/web/Geli/03.webp', alt: '' },
				{ src: 'photos/web/Geli/09.webp', alt: '' },
				{ src: 'photos/web/Geli/10.webp', alt: '' },
				{ src: 'photos/web/Geli/07.webp', alt: '' },
				{ src: 'photos/web/Geli/08.webp', alt: '' },
				{ src: 'photos/web/Geli/11.webp', alt: '' },
				// { src: 'photos/web/Geli/12.webp', alt: '' },
                { src: 'photos/web/Geli/13.webp', alt: '' },
                { src: 'photos/web/Geli/14.webp', alt: '' },
                { src: 'photos/web/Geli/15.webp', alt: '' },
                { src: 'photos/web/Geli/16.webp', alt: '' },
				 { src: 'photos/web/Geli/17.webp', alt: '' },
                // { src: 'photos/web/Geli/18.webp', alt: '' },
				{ src: 'photos/web/Geli/19.webp', alt: '' },
                { src: 'photos/web/Geli/20.webp', alt: '' },
                { src: 'photos/web/Geli/21.webp', alt: '' },
                { src: 'photos/web/Geli/22.webp', alt: '' },
                { src: 'photos/web/Geli/23.webp', alt: '' },
				{ src: 'photos/web/Geli/24.webp', alt: '' },
                { src: 'photos/web/Geli/25.webp', alt: '' },
                // { src: 'photos/web/Geli/26.webp', alt: '' },
                { src: 'photos/web/Geli/27.webp', alt: '' },
				// { src: 'photos/web/Geli/28.webp', alt: '' },
				{ src: 'photos/web/Geli/29.webp', alt: '' },
                { src: 'photos/web/Geli/30.webp', alt: '' },
                { src: 'photos/web/Geli/31.webp', alt: '' },
                { src: 'photos/web/Geli/32.webp', alt: '' },
                { src: 'photos/web/Geli/33.webp', alt: '' },
				// { src: 'photos/web/Geli/34.webp', alt: '' },
                { src: 'photos/web/Geli/35.webp', alt: '' },
                { src: 'photos/web/Geli/36.webp', alt: '' },
                { src: 'photos/web/Geli/37.webp', alt: '' },
                { src: 'photos/web/Geli/38.webp', alt: '' },
				{ src: 'photos/web/Geli/39.webp', alt: '' },
                // { src: 'photos/web/Geli/40.webp', alt: '' },
                { src: 'photos/web/Geli/41.webp', alt: '' },
                { src: 'photos/web/Geli/42.webp', alt: '' },
                { src: 'photos/web/Geli/43.webp', alt: '' },
				{ src: 'photos/web/Geli/44.webp', alt: '' },
                { src: 'photos/web/Geli/45.webp', alt: '' },
                { src: 'photos/web/Geli/46.webp', alt: '' },
                { src: 'photos/web/Geli/47.webp', alt: '' },
                { src: 'photos/web/Geli/48.webp', alt: '' },
				{ src: 'photos/web/Geli/49.webp', alt: '' },
                { src: 'photos/web/Geli/50.webp', alt: '' },
				{ src: 'photos/web/Geli/51.webp', alt: '' },
                { src: 'photos/web/Geli/52.webp', alt: '' },
                { src: 'photos/web/Geli/53.webp', alt: '' },
                { src: 'photos/web/Geli/54.webp', alt: '' },
                { src: 'photos/web/Geli/55.webp', alt: '' },
				{ src: 'photos/web/Geli/56.webp', alt: '' },
                { src: 'photos/web/Geli/57.webp', alt: '' },
                { src: 'photos/web/Geli/58.webp', alt: '' },
                { src: 'photos/web/Geli/59.webp', alt: '' },
                { src: 'photos/web/Geli/60.webp', alt: '' },
				{ src: 'photos/web/Geli/61.webp', alt: '' }
				
            ]
        },
		
		
		'taller': {
            title: 'Fotos del taller floral',
            description: 'Fue un taller floral un domingo sobre cómo elaborar centros de mesa en el Taller de Florinatta. Estuvo lleno de flores preservadas y de una energía increíble. Al final, las chicas crearon decoraciones diferentes pero muy atractivas. ',
            photos: [
              
				
   
    { src: 'photos/web/Florinatta/01.webp', alt: '' },
    { src: 'photos/web/Florinatta/05.webp', alt: '' },
    { src: 'photos/web/Florinatta/06.webp', alt: '' },
    { src: 'photos/web/Florinatta/07.webp', alt: '' },
    { src: 'photos/web/Florinatta/08.webp', alt: '' },
    { src: 'photos/web/Florinatta/09.webp', alt: '' },
    { src: 'photos/web/Florinatta/10.webp', alt: '' },
    { src: 'photos/web/Florinatta/11.webp', alt: '' },
    { src: 'photos/web/Florinatta/12.webp', alt: '' },
    { src: 'photos/web/Florinatta/13.webp', alt: '' },
    { src: 'photos/web/Florinatta/14.webp', alt: '' },
    { src: 'photos/web/Florinatta/15.webp', alt: '' },
    { src: 'photos/web/Florinatta/16.webp', alt: '' },
    { src: 'photos/web/Florinatta/17.webp', alt: '' },
    { src: 'photos/web/Florinatta/18.webp', alt: '' },
    { src: 'photos/web/Florinatta/19.webp', alt: '' },
    { src: 'photos/web/Florinatta/20.webp', alt: '' },
    { src: 'photos/web/Florinatta/21.webp', alt: '' },
    { src: 'photos/web/Florinatta/22.webp', alt: '' },
    { src: 'photos/web/Florinatta/23.webp', alt: '' },
    { src: 'photos/web/Florinatta/24.webp', alt: '' },
    { src: 'photos/web/Florinatta/25.webp', alt: '' },
    { src: 'photos/web/Florinatta/26.webp', alt: '' },
    { src: 'photos/web/Florinatta/27.webp', alt: '' },
    { src: 'photos/web/Florinatta/28.webp', alt: '' },
    { src: 'photos/web/Florinatta/29.webp', alt: '' },
    { src: 'photos/web/Florinatta/30.webp', alt: '' },
    { src: 'photos/web/Florinatta/31.webp', alt: '' },
    { src: 'photos/web/Florinatta/32.webp', alt: '' },
    { src: 'photos/web/Florinatta/33.webp', alt: '' },
    { src: 'photos/web/Florinatta/34.webp', alt: '' },
    { src: 'photos/web/Florinatta/35.webp', alt: '' },
    { src: 'photos/web/Florinatta/36.webp', alt: '' },
    { src: 'photos/web/Florinatta/37.webp', alt: '' },
    { src: 'photos/web/Florinatta/38.webp', alt: '' },
    { src: 'photos/web/Florinatta/39.webp', alt: '' },
    { src: 'photos/web/Florinatta/40.webp', alt: '' },
    { src: 'photos/web/Florinatta/41.webp', alt: '' },
    { src: 'photos/web/Florinatta/42.webp', alt: '' },
    { src: 'photos/web/Florinatta/43.webp', alt: '' },
    { src: 'photos/web/Florinatta/44.webp', alt: '' },
    { src: 'photos/web/Florinatta/45.webp', alt: '' },
    { src: 'photos/web/Florinatta/46.webp', alt: '' },
    { src: 'photos/web/Florinatta/47.webp', alt: '' },
    { src: 'photos/web/Florinatta/48.webp', alt: '' },
    { src: 'photos/web/Florinatta/49.webp', alt: '' },
    { src: 'photos/web/Florinatta/50.webp', alt: '' },
    { src: 'photos/web/Florinatta/51.webp', alt: '' },
    { src: 'photos/web/Florinatta/52.webp', alt: '' },
    { src: 'photos/web/Florinatta/53.webp', alt: '' },
    { src: 'photos/web/Florinatta/54.webp', alt: '' },
    { src: 'photos/web/Florinatta/55.webp', alt: '' },
    { src: 'photos/web/Florinatta/56.webp', alt: '' },
    { src: 'photos/web/Florinatta/57.webp', alt: '' },
    { src: 'photos/web/Florinatta/58.webp', alt: '' },
    { src: 'photos/web/Florinatta/59.webp', alt: '' },
    { src: 'photos/web/Florinatta/60.webp', alt: '' },
    { src: 'photos/web/Florinatta/61.webp', alt: '' },
    { src: 'photos/web/Florinatta/62.webp', alt: '' },
    { src: 'photos/web/Florinatta/63.webp', alt: '' },
    { src: 'photos/web/Florinatta/64.webp', alt: '' },
    { src: 'photos/web/Florinatta/65.webp', alt: '' },
    { src: 'photos/web/Florinatta/66.webp', alt: '' },
    { src: 'photos/web/Florinatta/67.webp', alt: '' },
    { src: 'photos/web/Florinatta/68.webp', alt: '' },
    { src: 'photos/web/Florinatta/69.webp', alt: '' },
    { src: 'photos/web/Florinatta/70.webp', alt: '' },
    { src: 'photos/web/Florinatta/71.webp', alt: '' },
    { src: 'photos/web/Florinatta/72.webp', alt: '' },
    { src: 'photos/web/Florinatta/73.webp', alt: '' },
    { src: 'photos/web/Florinatta/74.webp', alt: '' },
    { src: 'photos/web/Florinatta/75.webp', alt: '' },
    { src: 'photos/web/Florinatta/76.webp', alt: '' },
    { src: 'photos/web/Florinatta/77.webp', alt: '' },
    { src: 'photos/web/Florinatta/78.webp', alt: '' },
    { src: 'photos/web/Florinatta/79.webp', alt: '' },
    { src: 'photos/web/Florinatta/80.webp', alt: '' },
    { src: 'photos/web/Florinatta/81.webp', alt: '' },
    { src: 'photos/web/Florinatta/82.webp', alt: '' },
    { src: 'photos/web/Florinatta/83.webp', alt: '' },
    { src: 'photos/web/Florinatta/84.webp', alt: '' },
    { src: 'photos/web/Florinatta/85.webp', alt: '' },
    { src: 'photos/web/Florinatta/86.webp', alt: '' },
    { src: 'photos/web/Florinatta/87.webp', alt: '' },
    { src: 'photos/web/Florinatta/88.webp', alt: '' },
    { src: 'photos/web/Florinatta/89.webp', alt: '' },
    { src: 'photos/web/Florinatta/90.webp', alt: '' },
    { src: 'photos/web/Florinatta/92.webp', alt: '' },
    { src: 'photos/web/Florinatta/93.webp', alt: '' },
    { src: 'photos/web/Florinatta/94.webp', alt: '' },
    { src: 'photos/web/Florinatta/95.webp', alt: '' },
    { src: 'photos/web/Florinatta/96.webp', alt: '' },
    { src: 'photos/web/Florinatta/97.webp', alt: '' }
				
            ]
        },
		
		
        'amlul': {
            title: 'Sesión de fotos para la marca de ropa Amlul',
            description: 'La sesión tuvo lugar en Madrid, en una localización que recuerda visualmente a Miami, reflejando el espíritu atemporal de la marca.',
            photos: [
			    { src: 'photos/web/10_ed_02.webp', alt: '' },
                { src: 'photos/web/12_ed.webp', alt: '' },
                { src: 'photos/web/11_ed.webp', alt: '' },
                { src: 'photos/web/09_ed.webp', alt: '' },
                { src: 'photos/web/01_ed.webp', alt: '' },
                { src: 'photos/web/04_ed.webp', alt: '' },
                { src: 'photos/web/03_ed.webp', alt: '' },
                { src: 'photos/web/13_ed.webp', alt: '' },
                { src: 'photos/web/05_ed.webp', alt: '' },
                { src: 'photos/web/15_ed.webp', alt: '' },
                { src: 'photos/web/07_ed.webp', alt: '' }
            ]
        },
		
        'eyelash-specialist': {
            title: 'Sesión de branding para una especialista en extensiones de pestañas',
            description: 'Una especialista en extensiones de pestañas se puso en contacto conmigo para una sesión de fotos destinada a potenciar su marca personal en las redes sociales. Hicimos la sesión en su salón utilizando mi propio equipo de iluminación.',
            photos: [
                { src: 'photos/web/A7402039.webp', alt: '' },
                { src: 'photos/web/A7401947.webp', alt: '' },
                { src: 'photos/web/A7402020.webp', alt: '' },
				{ src: 'photos/web/A7401924_smaller_03.webp', alt: '' },
                { src: 'photos/web/A7402007.webp', alt: '' },
                { src: 'photos/web/A7401945.webp', alt: '' },
				{ src: 'photos/web/A7401932_03.webp', alt: '' },
            ]
        },
        'carlos-laura': {
            title: 'Carlos y Laura – Sesión de fotos de pareja cinematográfica',
            description: 'La pareja quería una sesión con dos conjuntos de ropa y, para el atuendo de boda, buscaban algo más cinematográfico y simbólico.',
            photos: [
				{ src: 'photos/web/A7401578.webp', alt: '' },
                { src: 'photos/web/A7401585.webp', alt: '' },
				{ src: 'photos/web/A7401572.webp', alt: '' },
			    { src: 'photos/web/A7401621-Enhanced-NR_02.webp', alt: '' },
				{ src: 'photos/web/Laura_03.webp', alt: '' },
                { src: 'photos/Laura_02.jpg ', alt: '' },
                { src: 'photos/web/A7401528.webp', alt: '' },
				{ src: 'photos/web/A7401684-Enhanced-NR.webp', alt: '' },
				{ src: 'photos/web/A7401672-Enhanced-NR.webp', alt: '' }
            ]
        },
		
       /* 
	   'lana-personal': {
            title: 'An individual portrait session',
            description: 'Lana reached out for a personal photoshoot, and for her birthday, we did it right in her beauty salon using my gear and lighting.',
            photos: [
                { src: 'photos/A7401767_02.jpg', alt: '' },
				{ src: 'photos/web/A7401788.webp', alt: '' },
                { src: 'photos/web/A7401704.webp', alt: '' },             
                { src: 'photos/web/A7401709.webp', alt: '' },
                { src: 'photos/web/A7401837_blue_large.webp', alt: '' },
				{ src: 'photos/web/A7401813_blue.webp', alt: '' }
				
            ]
        },
		*/
		
		'marina': {
            title: 'Sesión conceptual con velas',
            description: 'Marina se puso en contacto conmigo a través de Instagram con una idea muy clara para una sesión en estudio. Cuando compartió su concepto, que incorporaba velas reales en su estilismo, me sumé de inmediato. Juntas dimos vida a la idea: ella misma diseñó y confeccionó la chaqueta con velas en los hombros, y fue un auténtico placer trabajar en un proyecto tan único.',
            photos: [
			    { src: 'photos/web/Marina/26.webp', alt: '' },
				{ src: 'photos/web/Marina/27.webp', alt: '' },
				{ src: 'photos/web/Marina/28.webp', alt: '' },
				{ src: 'photos/web/Marina/29.webp', alt: '' },
				{ src: 'photos/web/Marina/30.webp', alt: '' },
				{ src: 'photos/web/Marina/31.webp', alt: '' },
				{ src: 'photos/web/Marina/32.webp', alt: '' },
                { src: 'photos/web/Marina/33.webp', alt: '' },             
                { src: 'photos/web/Marina/34.webp', alt: '' },
                { src: 'photos/web/Marina/35.webp', alt: '' },
				{ src: 'photos/web/Marina/36.webp', alt: '' },
				{ src: 'photos/web/Marina/37.webp', alt: '' },
				{ src: 'photos/web/Marina/38.webp', alt: '' },
				{ src: 'photos/web/Marina/39.webp', alt: '' },
				{ src: 'photos/web/Marina/40.webp', alt: '' },
				{ src: 'photos/web/Marina/41.webp', alt: '' },
				{ src: 'photos/web/Marina/42.webp', alt: '' },
                { src: 'photos/web/Marina/43.webp', alt: '' },             
                { src: 'photos/web/Marina/44.webp', alt: '' },
                { src: 'photos/web/Marina/45.webp', alt: '' },
				{ src: 'photos/web/Marina/46.webp', alt: '' },
				{ src: 'photos/web/Marina/47.webp', alt: '' },
				{ src: 'photos/web/Marina/48.webp', alt: '' },
				{ src: 'photos/web/Marina/49.webp', alt: '' },
			    { src: 'photos/web/Marina/20.webp', alt: '' },
				{ src: 'photos/web/Marina/21.webp', alt: '' },
				{ src: 'photos/web/Marina/22.webp', alt: '' },
                { src: 'photos/web/Marina/23.webp', alt: '' },
				{ src: 'photos/web/Marina/50.webp', alt: '' },
                { src: 'photos/web/Marina/01.webp', alt: '' },
				{ src: 'photos/web/Marina/02.webp', alt: '' },
                { src: 'photos/web/Marina/03.webp', alt: '' },             
                { src: 'photos/web/Marina/04.webp', alt: '' },
                { src: 'photos/web/Marina/05.webp', alt: '' },
				{ src: 'photos/web/Marina/08.webp', alt: '' },
				{ src: 'photos/web/Marina/09.webp', alt: '' },
				{ src: 'photos/web/Marina/10.webp', alt: '' },
				{ src: 'photos/web/Marina/12.webp', alt: '' },
                { src: 'photos/web/Marina/13.webp', alt: '' },             
                { src: 'photos/web/Marina/15.webp', alt: '' },
				{ src: 'photos/web/Marina/16.webp', alt: '' },
				{ src: 'photos/web/Marina/18.webp', alt: '' },             
                { src: 'photos/web/Marina/24.webp', alt: '' },
				{ src: 'photos/web/Marina/25.webp', alt: '' },
				{ src: 'photos/web/Marina/51.webp', alt: '' },
				{ src: 'photos/web/Marina/52.webp', alt: '' },
                { src: 'photos/web/Marina/53.webp', alt: '' },             
                { src: 'photos/web/Marina/54.webp', alt: '' },
                { src: 'photos/web/Marina/55.webp', alt: '' },
				{ src: 'photos/web/Marina/56.webp', alt: '' },
				{ src: 'photos/web/Marina/57.webp', alt: '' },
				{ src: 'photos/web/Marina/58.webp', alt: '' },
				{ src: 'photos/web/Marina/59.webp', alt: '' },
				{ src: 'photos/web/Marina/60.webp', alt: '' },
				{ src: 'photos/web/Marina/61.webp', alt: '' },
				{ src: 'photos/web/Marina/62.webp', alt: '' },
                { src: 'photos/web/Marina/63.webp', alt: '' },             
                { src: 'photos/web/Marina/64.webp', alt: '' },
                { src: 'photos/web/Marina/65.webp', alt: '' },
				{ src: 'photos/web/Marina/66.webp', alt: '' },
				{ src: 'photos/web/Marina/67.webp', alt: '' },
				{ src: 'photos/web/Marina/68.webp', alt: '' },
				{ src: 'photos/web/Marina/69.webp', alt: '' },
				{ src: 'photos/web/Marina/70.webp', alt: '' },
				{ src: 'photos/web/Marina/71.webp', alt: '' },
				{ src: 'photos/web/Marina/72.webp', alt: '' }
               
				
            ]
        },
		
		
		
        'couples-years': {
            title: 'Sesiones de pareja',
            description: 'A lo largo de los años, he fotografiado a muchas parejas, capturando la conexión entre ellas y destacando la relación humana como el aspecto más importante.',
            photos: [
               
                { src: 'photos/web/DSC00448.webp', alt: '' },
                { src: 'photos/web/DSC00449.webp', alt: '' },
                { src: 'photos/web/DSC00562_lighter.webp', alt: '' },
				{ src: 'photos/web/DSC00593.webp', alt: '' },
				{ src: 'photos/web/DSC00105.webp', alt: '' },
                { src: 'photos/web/DSC00091.webp', alt: '' },
                { src: 'photos/web/DSC00102.webp', alt: '' },
				{ src: 'photos/web/DSC6472-2.webp', alt: '' },
				{ src: 'photos/web/DSC6533-1.webp', alt: '' },
				{ src: 'photos/web/DSC6508.webp', alt: '' }
		
            ]
        },
		
        'lisy': {
            title: 'Sesión de fotos individual',
            description: 'La sesión de fotos para una chica que me encontró en internet, realizada para sus redes sociales. Tuvo lugar en Formigal, España.',
            photos: [
                { src: 'photos/web/A7403251-Enhanced-NR_02.webp', alt:''  },
                { src: 'photos/web/A7403246-Enhanced-NR_02.webp', alt: '' },
                { src: 'photos/web/A7403223_03.webp', alt:''  },
                { src: 'photos/web/A7403255-Enhanced-NR_02.webp', alt: '' },
                { src: 'photos/web/A7403288.webp', alt: '' },
                { src: 'photos/web/A7403254-Enhanced-NR.webp', alt:''  },
				{ src: 'photos/web/A7403237-Enhanced-NR.webp', alt:''  }
            ]
        }, 
		
		
		
		/*'savin': {
            title: 'Photos for the Savin Product sausage factory',
            description: 'One of my first projects, in which I took photos and videos. The idea was to create content for their social media, attend and capture events where their products were presented, and create appetizing still lifes combining their cured meats with other foods.',
            photos: [
                { src: 'photos/photo_2020-09-24_21-37-26.jpg', alt: '' },
                { src: 'photos/photo_2020-09-24_21-36-52.jpg', alt: '' },
                { src: 'photos/photo_2020-08-10_16-34-43.jpg', alt: '' },
                { src: 'photos/photo_2020-08-11_22-46-05.jpg', alt: '' },
                { src: 'photos/photo_2020-08-11_22-46-07.jpg', alt: '' },
                { src: 'photos/IMG_1354.jpg', alt: '' },
                { src: 'photos/photo_2020-08-11_22-46-04.jpg', alt: '' },
                { src: 'photos/IMG_1243.jpg', alt: '' },
                { src: 'photos/IMG_1264.jpg', alt: '' }
            ]
        },
		*/
        ///spanish

        'phot-proj-es': {
    title: 'Proyecto fotográfico sobre parejas',
    description: 'Me apasiona capturar la conexión entre las personas—especialmente las parejas. Por eso decidí crear mi propio proyecto fotográfico sobre el amor. La idea es mostrar cómo cada pareja vive en su propio mundo, completamente inmersa en su amor, sin preocuparse por lo que pasa a su alrededor. A veces, ni siquiera encajan en los estándares del mundo que les rodea 😊',
    photos: [
        { src: 'photos/Enr y Evel/A7405825_02.jpg', alt: '' },
        { src: 'photos/web/Enr y Evel/A7405856.webp', alt: '' },
        { src: 'photos/web/Enr y Evel/A7406134.webp', alt: '' },
        { src: 'photos/Enr y Evel/A7406109.jpg', alt: '' },
        { src: 'photos/Mish y Mar/A7405455.jpg', alt: '' },
        { src: 'photos/web/Mish y Mar/A7405459.webp', alt: '' },
        { src: 'photos/web/Mish y Mar/A7405485_rec.webp', alt: '' },
        { src: 'photos/web/Mish y Mar/A7405544_rec.webp', alt: '' },
        { src: 'photos/web/Mish y Mar/A7405608.webp', alt: '' },
        { src: 'photos/Mish y Mar/A7405595_rec.jpg', alt: '' }
    ]
},

'amlul-es': {
    title: 'Sesión de fotos para la marca de ropa Amlul',
    description: 'La sesión se realizó en Madrid, en una localización que visualmente recuerda a Miami, reflejando el espíritu atemporal de la marca.',
    photos: [
        { src: 'photos/web/12_ed.webp', alt: '' },
        { src: 'photos/web/11_ed.webp', alt: '' },
        { src: 'photos/web/09_ed.webp', alt: '' },
        { src: 'photos/web/01_ed.webp', alt: '' },
        { src: 'photos/web/04_ed.webp', alt: '' },
        { src: 'photos/web/03_ed.webp', alt: '' },
        { src: 'photos/web/13_ed.webp', alt: '' },
        { src: 'photos/web/05_ed.webp', alt: '' },
        { src: 'photos/web/15_ed.webp', alt: '' },
        { src: 'photos/web/07_ed.webp', alt: '' }
    ]
},

/*'eyelash-specialist-es': {
    title: 'Sesión de marca para una especialista en extensiones de pestañas',
    description: 'Una especialista en extensiones de pestañas me contactó para una sesión de fotos con el objetivo de mejorar su marca personal en redes sociales. Hicimos la sesión en su salón usando mi equipo de iluminación.',
    photos: [
        { src: 'photos/A7401932.jpg', alt: '' },
        { src: 'photos/web/A7401947.webp', alt: '' },
        { src: 'photos/A7401924.jpg', alt: '' },
        { src: 'photos/web/A7402020.webp', alt: '' },
        { src: 'photos/web/A7402007.webp', alt: '' },
        { src: 'photos/web/A7401945.webp', alt: '' },
        { src: 'photos/web/A7402039.webp', alt: '' },
    ]
}, */

'carlos-laura-es': {
    title: 'Carlos y Laura – Sesión fotográfica cinematográfica de pareja',
    description: 'La pareja quería una sesión con dos atuendos, y para el vestuario de boda buscaban algo más cinematográfico y simbólico.',
    photos: [
        { src: 'photos/web/A7401585.webp', alt: '' },
        { src: 'photos/web/A7401621-Enhanced-NR_02.webp', alt: '' },
        { src: 'photos/web/A7401578.webp', alt: '' },
        { src: 'photos/web/A7401572.webp', alt: '' },
        { src: 'photos/web/Laura_03.webp', alt: '' },
        { src: 'photos/Laura_02.jpg ', alt: '' },
        { src: 'photos/web/A7401528.webp', alt: '' },
        { src: 'photos/web/A7401684-Enhanced-NR.webp', alt: '' },
        { src: 'photos/web/A7401672-Enhanced-NR.webp', alt: '' }
    ]
},

'lana-personal-es': {
    title: 'Sesión de retrato individual',
    description: 'Lana me contactó para una sesión personal, y para su cumpleaños hicimos la sesión directamente en su salón de belleza usando mi equipo de iluminación.',
    photos: [
        { src: 'photos/A7401767.jpg', alt: '' },
        { src: 'photos/web/A7401709.webp', alt: '' },
        { src: 'photos/web/A7401704.webp', alt: '' },
        { src: 'photos/web/A7401788.webp', alt: '' },
        { src: 'photos/web/A7401837_blue_large.webp', alt: '' },
        { src: 'photos/web/A7401813_blue.webp', alt: '' }
    ]
},

'couples-years-es': {
    title: 'Sesiones de pareja',
    description: 'A lo largo de los años he fotografiado muchas parejas, capturando la conexión entre ellas y destacando la relación humana como el aspecto más importante.',
    photos: [
        { src: 'photos/web/DSC00105.webp', alt: '' },
        { src: 'photos/web/DSC00091.webp', alt: '' },
        { src: 'photos/web/DSC00102.webp', alt: '' },
        { src: 'photos/web/DSC00448.webp', alt: '' },
        { src: 'photos/web/DSC00449.webp', alt: '' },
        { src: 'photos/web/DSC00562_lighter.webp', alt: '' },
        { src: 'photos/web/DSC00593.webp', alt: '' },
        { src: 'photos/web/DSC6472-2.webp', alt: '' },
        { src: 'photos/web/DSC6533-1.webp', alt: '' },
        { src: 'photos/web/DSC6508.webp', alt: '' }
    ]
},

'lisy-es': {
    title: 'Sesión fotográfica individual',
    description: 'Sesión de fotos para una chica que me encontró en internet, hecha para sus redes sociales. Se realizó en Formigal, España.',
    photos: [
        { src: 'photos/web/A7403251-Enhanced-NR_02.webp', alt:'' },
        { src: 'photos/web/A7403246-Enhanced-NR_02.webp', alt: '' },
        { src: 'photos/web/A7403223_03.webp', alt:'' },
        { src: 'photos/web/A7403255-Enhanced-NR_02.webp', alt: '' },
        { src: 'photos/web/A7403288.webp', alt: '' },
        { src: 'photos/web/A7403254-Enhanced-NR.webp', alt:'' },
        { src: 'photos/web/A7403237-Enhanced-NR.webp', alt:'' }
    ]
},

'dafnis-es': {
    title: 'Retoque fotográfico para Dafni Girls Crossdressing Studio',
    description: 'Desde hace casi dos años, hago esto como un trabajo secundario, centrándome en retocar fotos para ayudar a los hombres a verse más femeninos. Mi objetivo principal es suavizar sus rasgos, eliminar arrugas y quitar el vello no deseado, entre otros ajustes.',
    photos: [
        { src: 'photos/Comparasion_02.jpg', alt: '' },
        { src: 'photos/Comparasion_08.jpg', alt: '' },
        { src: 'photos/Comparasion_09.jpg', alt: '' },
        { src: 'photos/Comparasion_11.jpg', alt: '' },
        { src: 'photos/Comparasion_10.jpg', alt: '' },
        { src: 'photos/Comparasion_03.jpg', alt: '' },
        { src: 'photos/Comparasion_06.jpg', alt: '' },
        { src: 'photos/Comparasion_07.jpg', alt: '' },
        { src: 'photos/Comparasion_04.jpg', alt: '' }
    ]
},

/*'savin-es': {
    title: 'Fotos para la fábrica de embutidos Savin Product',
    description: 'Uno de mis primeros proyectos, en el que tomé fotos y vídeos. La idea era crear contenido para sus redes sociales, asistir y capturar eventos donde se presentaban sus productos, y crear bodegones apetitosos combinando sus embutidos con otros alimentos.',
    photos: [
        { src: 'photos/photo_2020-09-24_21-37-26.jpg', alt: '' },
        { src: 'photos/photo_2020-09-24_21-36-52.jpg', alt: '' },
        { src: 'photos/photo_2020-08-10_16-34-43.jpg', alt: '' },
        { src: 'photos/photo_2020-08-11_22-46-05.jpg', alt: '' },
        { src: 'photos/photo_2020-08-11_22-46-07.jpg', alt: '' },
        { src: 'photos/IMG_1354.jpg', alt: '' },
        { src: 'photos/photo_2020-08-11_22-46-04.jpg', alt: '' },
        { src: 'photos/IMG_1243.jpg', alt: '' },
        { src: 'photos/IMG_1264.jpg', alt: '' }
    ]
}*/
		
		
    };
    
    // Collection Modal Elements
    const modal = document.getElementById('collectionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const collectionPhotos = document.getElementById('collectionPhotos');
    const closeModalButton = document.querySelector('.close-modal');
    
    // Fullscreen Viewer Elements
    let fullscreenViewer = document.getElementById('fullscreenViewer');
    let fullscreenImage = document.getElementById('fullscreenImage');
    let prevPhotoBtn = document.getElementById('prevPhoto');
    let nextPhotoBtn = document.getElementById('nextPhoto');
    let closeFullscreenBtn = document.getElementById('closeFullscreen');
    let photoCaption = document.getElementById('photoCaption');
    let currentPhotoNum = document.getElementById('currentPhotoNum');
    let totalPhotos = document.getElementById('totalPhotos');
    
    // Variables to track photo navigation
    let currentPhotos = [];
    let currentPhotoIndex = 0;
    
    // Improved Intersection Observer for lazy loading
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const photoElement = img.parentElement;
                
                // Add loading class for animation
                photoElement.classList.add('loading');
                
                // Create a temporary image to preload
                const tempImg = new Image();
                tempImg.src = img.dataset.src;
                
                tempImg.onload = () => {
                    // Once loaded, update the actual image
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    
                    // Small delay before removing loading class for smoother transition
                    setTimeout(() => {
                        photoElement.classList.remove('loading');
                    }, 100);
                    
                    observer.unobserve(img);
                };
                
                tempImg.onerror = () => {
                    // Handle loading errors
                    photoElement.classList.remove('loading');
                    img.src = '/api/placeholder/800/600'; // Fallback image
                    observer.unobserve(img);
                };
            }
        });
    }, {
        rootMargin: '300px 0px',
        threshold: 0.1
    });
    
    // Function to show a specific collection
    function showCollection(collectionId) {
        const collection = collections[collectionId];
        
        if (collection) {
            modalTitle.textContent = collection.title;
            modalDescription.textContent = collection.description;
            
            // Clear previous photos
            collectionPhotos.innerHTML = '';
            
            // Hide scrollbars during loading to prevent flickering
            document.body.style.overflow = 'hidden';
            
            // Add collection photos with lazy loading
            collection.photos.forEach((photo, index) => {
                const photoElement = document.createElement('div');
                photoElement.className = 'collection-photo';
                photoElement.setAttribute('data-index', index);
                
                const img = document.createElement('img');
                img.dataset.src = photo.src; // Use data-src for lazy loading
                // Use a tiny transparent placeholder instead of SVG
                img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
                img.alt = photo.alt;
                
                photoElement.appendChild(img);
                collectionPhotos.appendChild(photoElement);
                
                // Start observing the image for lazy loading
                lazyLoadObserver.observe(img);
                
                // Add click event to each photo for fullscreen view
                photoElement.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent event bubbling
                    openFullscreen(collection.photos, index);
                });
            });
            
            // Show the modal
            modal.classList.add('open');
            
            // Scroll to top of modal when opening
            setTimeout(() => {
                if (modal.scrollTo) {
                    modal.scrollTo(0, 0);
                }
            }, 100);
        }
    }
    

  // Start observing images in modal now that DOM is ready
  observeModalImages();
    // Open fullscreen viewer with specific photos and index
    function openFullscreen(photos, index) {
        if (!photos || photos.length === 0) return;
        
        currentPhotos = photos;
        currentPhotoIndex = index;
        
        // Update and show the fullscreen viewer
        updateFullscreenContent();
        fullscreenViewer.classList.add('active');
    }
    
    // Update fullscreen content based on current index
    function updateFullscreenContent() {
        if (!currentPhotos || currentPhotos.length === 0 || currentPhotoIndex < 0) return;
        
        const photo = currentPhotos[currentPhotoIndex];
        
        // Start loading state
        fullscreenImage.style.opacity = 0.3;
        
        // Preload image before showing
        const preloadImg = new Image();
        preloadImg.src = photo.src;
        
        preloadImg.onload = () => {
            // Update image when loaded
            fullscreenImage.src = photo.src;
            fullscreenImage.style.opacity = 1;
            // Prefetch neighbors
            if (Array.isArray(currentPhotos)) {
              const next = currentPhotos[currentPhotoIndex + 1];
              const prev = currentPhotos[currentPhotoIndex - 1];
              if (next) prefetchImage(next.src || next);
              if (prev) prefetchImage(prev.src || prev);
            }
            
            // Update caption
            if (photoCaption) photoCaption.textContent = photo.alt || '';
            
            // Update counter
            updateFullscreenCounter();
        };
        
        preloadImg.onerror = () => {
            // Handle error case
            fullscreenImage.src = '/api/placeholder/800/600';
            fullscreenImage.style.opacity = 1;
            updateFullscreenCounter();
        };
    }
    
    // Update just the counter part
    function updateFullscreenCounter() {
        if (currentPhotoNum) currentPhotoNum.textContent = currentPhotoIndex + 1;
        if (totalPhotos) totalPhotos.textContent = currentPhotos.length;
    }
    
    // Navigate to previous photo
    function showPreviousPhoto() {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--;
        } else {
            currentPhotoIndex = currentPhotos.length - 1; // Loop to the end
        }
        updateFullscreenContent();
    }
    
    // Navigate to next photo
    function showNextPhoto() {
        if (currentPhotoIndex < currentPhotos.length - 1) {
            currentPhotoIndex++;
        } else {
            currentPhotoIndex = 0; // Loop to the beginning
        }
        updateFullscreenContent();
    }
    
    // Close the modal
    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Close the fullscreen viewer
    function closeFullscreen() {
        fullscreenViewer.classList.remove('active');
    }
    
    // Event listeners for collection items
    document.querySelectorAll('.photo-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const collectionId = this.getAttribute('data-collection');
            showCollection(collectionId);
        });
    });
    
    // Event listeners for navigation
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }
    
    if (closeFullscreenBtn) {
        closeFullscreenBtn.addEventListener('click', closeFullscreen);
    }
    
    if (prevPhotoBtn) {
        prevPhotoBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showPreviousPhoto();
        });
    }
    
    if (nextPhotoBtn) {
        nextPhotoBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNextPhoto();
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close fullscreen when clicking on the background
    document.addEventListener('click', function(e) {
        if (e.target === fullscreenViewer) {
            closeFullscreen();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (fullscreenViewer.classList.contains('active')) {
            switch (e.key) {
                case 'ArrowLeft':
                    showPreviousPhoto();
                    break;
                case 'ArrowRight':
                    showNextPhoto();
                    break;
                case 'Escape':
                    closeFullscreen();
                    break;
            }
        } else if (modal.classList.contains('open') && e.key === 'Escape') {
            closeModal();
        }
    });
});

 document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".video-item2");
    const btn = document.getElementById("showMoreBtn");
    let shown = 0;
    const batchSize = 6;

    function showNextBatch() {
      for (let i = shown; i < shown + batchSize && i < items.length; i++) {
        items[i].classList.add("visible");
      }
      shown += batchSize;

      if (shown >= items.length) {
        btn.style.display = "none"; // Hide button when done
      }
    }

    showNextBatch(); // Show initial batch

    btn.addEventListener("click", showNextBatch);
  });

/* === Prefetch neighbors for instant next/prev in fullscreen === */
function prefetchImage(url) {
  if (!url) return;
  const im = new Image();
  im.decoding = 'async';
  im.fetchPriority = 'low';
  im.src = url;
}


// --- MODAL lazy-loading (root: the modal element) ---
function observeModalImages() {
  const modalEl = document.getElementById('collectionModal');
  if (!modalEl) return;
  const modalImgs = document.querySelectorAll('#collectionPhotos img[data-src]');
  const modalObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      const cell = img.closest('.collection-photo');
      if (cell) cell.classList.add('loading');
      img.src = img.dataset.src;
      img.onload = () => {
        img.classList.add('loaded');
        if (cell) cell.classList.remove('loading');
      };
      img.removeAttribute('data-src');
      obs.unobserve(img);
    });
  }, { root: modalEl, rootMargin: '800px 0px', threshold: 0.01 });

  modalImgs.forEach(img => modalObserver.observe(img));
}


// --- HOME GRID lazy-loading (root: viewport) ---
(function() {
  const gridLazyImgs = document.querySelectorAll('#photos .lazy-img[data-src]');
  if (!gridLazyImgs.length) return;
  const gridObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => img.classList.add('loaded');
      img.removeAttribute('data-src');
      obs.unobserve(img);
    });
  }, { root: null, rootMargin: '200px 0px', threshold: 0.01 });
  gridLazyImgs.forEach(img => gridObserver.observe(img));
})();



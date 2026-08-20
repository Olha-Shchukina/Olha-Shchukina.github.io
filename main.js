window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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
			    { src: 'photos/Marta and Nacho/01.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/02.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/03.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/04.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/05.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/06.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/07.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/08.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/09.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/10.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/11.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/12.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/23.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/24.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/18.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/15.jpg', alt: '' },
                
                { src: 'photos/Marta and Nacho/17.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/16.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/19.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/20.jpg', alt: '' },
               
                { src: 'photos/Marta and Nacho/22.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/13.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/14.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/25.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/26.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/27.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/28.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/29.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/30.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/21.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/31.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/32.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/33.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/34.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/35.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/36.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/37.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/38.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/40.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/41.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/42.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/43.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/44.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/45.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/46.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/47.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/48.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/49.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/50.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/51.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/52.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/53.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/54.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/55.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/56.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/57.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/58.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/59.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/60.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/61.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/62.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/63.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/64.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/65.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/66.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/67.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/68.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/69.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/70.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/71.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/72.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/73.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/74.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/75.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/76.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/77.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/78.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/79.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/80.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/81.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/82.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/83.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/84.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/85.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/86.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/87.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/88.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/89.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/90.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/91.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/92.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/93.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/94.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/95.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/96.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/97.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/98.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/99.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/100.jpg', alt: '' },
				{ src: 'photos/Marta and Nacho/101.jpg', alt: '' },
                { src: 'photos/Marta and Nacho/102.jpg', alt: '' }
                
                
               
            ]
        },
		
		
		
		
		'Rosa y Jesus': {
            title: 'Sesión preboda: Rosa y Jesús',
            description: 'Una sesión de fotos preboda muy divertida y variada en las Lagunas de las Madres, en Arganda del Rey.',
            photos: [
			    { src: 'photos/Rosa y Jesus/01.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/03.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/04.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/05.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/06.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/07.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/08.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/09.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/10.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/11.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/12.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/13.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/15.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/17.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/18.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/19.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/22.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/24.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/25.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/26.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/27.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/28.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/29.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/30.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/31.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/32.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/33.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/35.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/36.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/37.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/38.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/39.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/40.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/41.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/42.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/43.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/44.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/45.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/46.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/47.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/48.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/49.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/50.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/52.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/53.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/54.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/55.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/56.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/57.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/58.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/59.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/60.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/61.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/62.jpg', alt: '' },
				{ src: 'photos/Rosa y Jesus/63.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/64.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/65.jpg', alt: '' },
                { src: 'photos/Rosa y Jesus/66.jpg', alt: '' }
                
                
                
               
            ]
        },
		
		
		'FlorPaolo': {
            title: 'Reportaje de boda: Flor y Paolo',
            description: 'Una preciosa combinación de tradición italiana y elegancia española en el Palacio de Viñuelas. Esta boda celebró las raíces sicilianas del novio con una temática en color amarillo vivo que hizo que todo el lugar se sintiera acogedor, alegre y verdaderamente especial.',
            photos: [
				
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (3).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (4).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (2).jpg', alt: '' },
				//{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (5).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (6).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (7).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (9).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (10).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (11).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (12).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (13).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (14).jpg', alt: '' },
				//{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (15).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (16).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (17).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (18).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (19).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (20).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (21).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (22).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (23).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (24).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (25).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (26).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (27).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (28).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (29).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (30).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (31).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (32).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (33).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (35).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (36).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (37).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (38).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (39).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (41).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (42).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (43).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (44).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (45).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (46).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (47).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (48).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (49).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (50).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (51).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (52).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (53).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (54).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (55).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (56).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (57).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (58).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (59).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (60).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (61).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (62).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (63).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (64).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (65).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (66).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (67).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (69).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (70).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (71).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (72).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (73).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (74).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (75).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (76).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (77).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (78).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (79).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (80).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (81).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (82).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (83).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (84).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (85).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (86).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (87).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (88).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (89).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (90).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (91).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (92).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (93).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (94).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (95).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (96).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (97).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (98).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (99).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (100).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (101).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (102).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (103).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (104).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (105).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (106).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (107).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (108).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (109).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (110).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (111).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (112).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (113).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (114).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (115).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (116).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (117).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (118).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (119).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (120).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (121).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (122).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (123).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (124).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (125).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (126).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (127).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (128).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (129).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (130).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (131).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (132).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (133).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (134).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (135).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (136).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (137).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (138).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (139).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (140).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (141).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (142).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (143).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (144).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (145).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (146).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (147).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (148).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (149).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (150).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (151).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (152).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (153).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (154).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (155).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (156).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (157).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (158).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (159).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (160).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (161).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (162).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (163).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (164).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (166).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (167).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (168).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (169).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (170).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (171).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (172).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (173).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (174).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (175).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (176).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (177).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (178).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (179).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (180).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (181).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (182).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (183).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (184).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (186).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (187).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (188).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (189).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (190).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (191).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (192).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (193).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (194).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (195).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (196).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (197).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (198).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (199).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (200).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (201).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (202).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (203).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (204).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (205).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (206).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (207).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (208).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (209).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (210).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (211).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (212).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (213).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (214).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (215).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (216).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (217).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (218).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (219).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (220).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (221).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (222).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (223).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (224).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (226).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (227).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (228).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (230).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (231).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (232).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (233).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (234).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (235).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (236).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (237).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (238).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (239).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (240).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (241).jpg', alt: '' },
				//{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (242).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (243).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (244).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (245).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (246).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (247).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (248).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (249).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (250).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (251).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (252).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (253).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (254).jpg', alt: '' },
				//{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (256).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (257).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (258).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (259).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (260).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (261).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (262).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (264).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (265).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (266).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (267).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (268).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (269).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (270).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (271).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (272).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (273).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (274).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (275).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (276).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (277).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (278).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (279).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (280).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (281).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (282).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (283).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (284).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (285).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (286).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (287).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (288).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (289).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (290).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (291).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (292).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (293).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (294).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (295).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (296).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (297).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (298).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (299).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (300).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (301).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (302).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (303).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (304).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (305).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (306).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (307).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (308).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (309).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (310).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (311).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (312).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (313).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (314).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (315).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (316).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (317).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (318).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (319).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (320).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (321).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (322).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (323).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (324).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (325).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (326).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (327).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (328).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (329).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (330).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (331).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (332).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (333).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (334).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (335).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (336).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (337).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (338).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (339).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (340).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (341).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (342).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (343).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (344).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (345).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (346).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (347).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (349).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (350).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (351).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (352).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (353).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (354).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (355).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (356).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (357).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (358).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (359).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (360).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (361).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (362).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (363).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (364).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (365).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (366).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (367).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (368).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (369).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (370).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (371).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (372).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (373).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (374).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (375).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (376).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (377).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (378).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (379).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (380).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (381).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (382).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (383).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (384).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (385).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (386).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (387).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (389).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (390).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (391).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (392).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (393).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (394).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (395).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (396).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (397).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (398).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (399).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (400).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (401).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (402).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (403).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (404).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (405).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (406).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (407).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (408).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (409).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (410).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (411).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (412).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (413).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (414).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (415).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (416).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (417).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (418).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (420).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (421).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (422).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (423).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (424).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (425).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (426).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (428).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (429).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (430).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (432).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (433).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (434).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (435).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (436).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (437).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (438).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (439).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (440).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (441).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (442).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (443).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (444).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (445).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (446).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (447).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (448).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (449).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (450).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (451).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (452).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (453).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (454).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (455).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (456).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (457).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (458).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (459).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (460).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (461).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (462).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (463).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (464).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (465).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (466).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (467).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (468).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (469).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (470).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (471).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (472).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (473).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (474).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (475).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (476).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (477).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (478).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (479).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (480).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (481).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (482).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (483).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (484).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (485).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (486).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (487).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (488).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (489).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (490).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (491).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (492).jpg', alt: '' },
				{ src: 'photos/Flor and Poalo/BODA PF 06062026 WEB (493).jpg', alt: '' }
                
                
                
               
            ]
        },
		
		
		'Wed:Silvia': {
            title: 'Boda civil de Silvia y Alejandro',
            description: 'Esta fue la boda civil de Silvia y Alejandro. Mi trabajo comenzó con los preparativos de la novia en su casa, seguidos de la ceremonia en el Registro Civil de Moncloa-Aravaca y una sesión de retratos en el parque. Capturé fotos de grupo, instantáneas de los recién casados y algunos momentos preciosos con su hijo. ¡Fue un día increíble!',
            photos: [
                { src: 'photos/Silvia and Alejandro/01.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/03.jpg', alt: '' },
               // { src: 'photos/Silvia and Alejandro/05.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/08.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/07.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/10.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/11.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/12.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/13.jpg', alt: '' },
		      //{ src: 'photos/Silvia and Alejandro/14.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/15.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/17.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/18.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/19.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/21.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/22.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/24.jpg', alt: '' },
               // { src: 'photos/Silvia and Alejandro/25.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/26.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/27.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/28.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/29.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/30.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/31.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/32.jpg', alt: '' },
         //     { src: 'photos/Silvia and Alejandro/33.jpg', alt: '' },
		//		{ src: 'photos/Silvia and Alejandro/34.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/35.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/36.jpg', alt: '' },
          //      { src: 'photos/Silvia and Alejandro/37.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/38.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/40.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/41.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/42.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/44.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/46.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/47.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/49.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/50.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/54.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/52.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/53.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/55.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/59.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/56.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/57.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/60.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/61.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/62.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/64.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/66.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/67.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/68.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/69.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/70.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/71.jpg', alt: '' },
              //  { src: 'photos/Silvia and Alejandro/72.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/73.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/74.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/75.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/76.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/77.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/78.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/79.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/80.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/81.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/82.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/83.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/84.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/87.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/88.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/89.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/90.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/91.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/93.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/94.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/96.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/97.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/98.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/99.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/100.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/102.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/101.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/103.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/104.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/105.jpg', alt: '' },
               // { src: 'photos/Silvia and Alejandro/106.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/107.jpg', alt: '' },
               // { src: 'photos/Silvia and Alejandro/108.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/109.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/110.jpg', alt: '' },
				//{ src: 'photos/Silvia and Alejandro/112.jpg', alt: '' },
				//{ src: 'photos/Silvia and Alejandro/113.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/114.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/115.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/117.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/118.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/119.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/120.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/121.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/122.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/123.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/124.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/126.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/127.jpg', alt: '' },
				//{ src: 'photos/Silvia and Alejandro/129.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/130.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/131.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/132.jpg', alt: '' },
               // { src: 'photos/Silvia and Alejandro/133.jpg', alt: '' },
				//{ src: 'photos/Silvia and Alejandro/137.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/140.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/142.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/138.jpg', alt: '' },
				//{ src: 'photos/Silvia and Alejandro/139.jpg', alt: '' },
				
                { src: 'photos/Silvia and Alejandro/143.jpg', alt: '' },
               // { src: 'photos/Silvia and Alejandro/144.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/145.jpg', alt: '' },
                //{ src: 'photos/Silvia and Alejandro/146.jpg', alt: '' },
               // { src: 'photos/Silvia and Alejandro/148.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/149.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/152.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/153.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/155.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/156.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/158.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/160.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/162.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/165.jpg', alt: '' },
             //   { src: 'photos/Silvia and Alejandro/166.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/167.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/168.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/169.jpg', alt: '' },
              //  { src: 'photos/Silvia and Alejandro/171.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/172.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/174.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/175.jpg', alt: '' },
			//	{ src: 'photos/Silvia and Alejandro/176.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/177.jpg', alt: '' },
			//	{ src: 'photos/Silvia and Alejandro/178.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/179.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/180.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/181.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/182.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/183.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/187.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/190.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/192.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/194.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/195.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/196.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/197.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/198.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/200.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/201.jpg', alt: '' },
			//	{ src: 'photos/Silvia and Alejandro/202.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/203.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/204.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/206.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/211.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/212.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/214.jpg', alt: '' },
             //   { src: 'photos/Silvia and Alejandro/214.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/215.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/218.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/219.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/220.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/221.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/224.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/226.jpg', alt: '' },
				//{ src: 'photos/Silvia and Alejandro/227.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/230.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/235.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/232.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/233.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/236.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/238.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/239.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/240.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/241.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/244.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/245.jpg', alt: '' },
			//	{ src: 'photos/Silvia and Alejandro/246.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/247.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/248.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/249.jpg', alt: '' },
				{ src: 'photos/Silvia and Alejandro/250.jpg', alt: '' },
              //  { src: 'photos/Silvia and Alejandro/251.jpg', alt: '' },
                { src: 'photos/Silvia and Alejandro/252.jpg', alt: '' }
                
               
            ]
        },
		
		
		
		'wedd:Fran': {
            title: 'Reportaje de boda: Marta y Fran',
            description: 'Una hermosa boda en el Caserío de Lobones, en Segovia, para celebrar la unión de dos corazones españoles: Marta y Fran. En esta ocasión, tuve el placer de trabajar como segunda fotógrafa junto a Enjoy The F Moment.',
            photos: [
                { src: 'photos/Fran and Marta/02.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/03.jpg', alt: '' },
                { src: 'photos/Fran and Marta/04.jpg', alt: '' },
                { src: 'photos/Fran and Marta/01.jpg', alt: '' },
                { src: 'photos/Fran and Marta/05.jpg', alt: '' },
                { src: 'photos/Fran and Marta/06.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/12.jpg', alt: '' },
                { src: 'photos/Fran and Marta/07.jpg', alt: '' },
                { src: 'photos/Fran and Marta/08.jpg', alt: '' },
                { src: 'photos/Fran and Marta/09.jpg', alt: '' },
                { src: 'photos/Fran and Marta/10.jpg', alt: '' },
                { src: 'photos/Fran and Marta/11.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/13.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/14.jpg', alt: '' },
                { src: 'photos/Fran and Marta/15.jpg', alt: '' },
                { src: 'photos/Fran and Marta/16.jpg', alt: '' },
                { src: 'photos/Fran and Marta/17.jpg', alt: '' },
                { src: 'photos/Fran and Marta/18.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/19.jpg', alt: '' },
                { src: 'photos/Fran and Marta/20.jpg', alt: '' },
                { src: 'photos/Fran and Marta/21.jpg', alt: '' },
                { src: 'photos/Fran and Marta/22.jpg', alt: '' },
                { src: 'photos/Fran and Marta/23.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/24.jpg', alt: '' },
                { src: 'photos/Fran and Marta/25.jpg', alt: '' },
                { src: 'photos/Fran and Marta/26.jpg', alt: '' },
                { src: 'photos/Fran and Marta/27.jpg', alt: '' },
                { src: 'photos/Fran and Marta/28.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/29.jpg', alt: '' },
                { src: 'photos/Fran and Marta/30.jpg', alt: '' },
                { src: 'photos/Fran and Marta/31.jpg', alt: '' },
                { src: 'photos/Fran and Marta/32.jpg', alt: '' },
                { src: 'photos/Fran and Marta/33.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/34.jpg', alt: '' },
                { src: 'photos/Fran and Marta/35.jpg', alt: '' },
                { src: 'photos/Fran and Marta/36.jpg', alt: '' },
                { src: 'photos/Fran and Marta/37.jpg', alt: '' },
                { src: 'photos/Fran and Marta/38.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/39.jpg', alt: '' },
                { src: 'photos/Fran and Marta/40.jpg', alt: '' },
                { src: 'photos/Fran and Marta/41.jpg', alt: '' },
                { src: 'photos/Fran and Marta/42.jpg', alt: '' },
                { src: 'photos/Fran and Marta/43.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/44.jpg', alt: '' },
                { src: 'photos/Fran and Marta/45.jpg', alt: '' },
                { src: 'photos/Fran and Marta/46.jpg', alt: '' },
                { src: 'photos/Fran and Marta/47.jpg', alt: '' },
                { src: 'photos/Fran and Marta/48.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/49.jpg', alt: '' },
                { src: 'photos/Fran and Marta/50.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/51.jpg', alt: '' },
                { src: 'photos/Fran and Marta/52.jpg', alt: '' },
                { src: 'photos/Fran and Marta/53.jpg', alt: '' },
                { src: 'photos/Fran and Marta/54.jpg', alt: '' },
                { src: 'photos/Fran and Marta/55.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/56.jpg', alt: '' },
                { src: 'photos/Fran and Marta/57.jpg', alt: '' },
                { src: 'photos/Fran and Marta/58.jpg', alt: '' },
                { src: 'photos/Fran and Marta/59.jpg', alt: '' },
                { src: 'photos/Fran and Marta/60.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/61.jpg', alt: '' },
                { src: 'photos/Fran and Marta/62.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/63.jpg', alt: '' },
                { src: 'photos/Fran and Marta/64.jpg', alt: '' },
                { src: 'photos/Fran and Marta/65.jpg', alt: '' },
                { src: 'photos/Fran and Marta/66.jpg', alt: '' },
                { src: 'photos/Fran and Marta/67.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/68.jpg', alt: '' },
                { src: 'photos/Fran and Marta/70.jpg', alt: '' },
                { src: 'photos/Fran and Marta/71.jpg', alt: '' },
                { src: 'photos/Fran and Marta/72.jpg', alt: '' },
                { src: 'photos/Fran and Marta/73.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/74.jpg', alt: '' },
                { src: 'photos/Fran and Marta/75.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/76.jpg', alt: '' },
                { src: 'photos/Fran and Marta/77.jpg', alt: '' },
                { src: 'photos/Fran and Marta/78.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/79.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/80.jpg', alt: '' },
                { src: 'photos/Fran and Marta/81.jpg', alt: '' },
                { src: 'photos/Fran and Marta/82.jpg', alt: '' },
                { src: 'photos/Fran and Marta/83.jpg', alt: '' },
                { src: 'photos/Fran and Marta/84.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/85.jpg', alt: '' },
                { src: 'photos/Fran and Marta/86.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/87.jpg', alt: '' },
                { src: 'photos/Fran and Marta/88.jpg', alt: '' },
                { src: 'photos/Fran and Marta/89.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/90.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/91.jpg', alt: '' },
                { src: 'photos/Fran and Marta/92.jpg', alt: '' },
                { src: 'photos/Fran and Marta/93.jpg', alt: '' },
                { src: 'photos/Fran and Marta/94.jpg', alt: '' },
                { src: 'photos/Fran and Marta/95.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/96.jpg', alt: '' },
                { src: 'photos/Fran and Marta/97.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/98.jpg', alt: '' },
                { src: 'photos/Fran and Marta/99.jpg', alt: '' },
                { src: 'photos/Fran and Marta/100.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/101.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/102.jpg', alt: '' },
                { src: 'photos/Fran and Marta/103.jpg', alt: '' },
                { src: 'photos/Fran and Marta/104.jpg', alt: '' },
                { src: 'photos/Fran and Marta/105.jpg', alt: '' },
                { src: 'photos/Fran and Marta/106.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/107.jpg', alt: '' },
                { src: 'photos/Fran and Marta/108.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/109.jpg', alt: '' },
                { src: 'photos/Fran and Marta/110.jpg', alt: '' },
                { src: 'photos/Fran and Marta/111.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/112.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/113.jpg', alt: '' },
                { src: 'photos/Fran and Marta/114.jpg', alt: '' },
                { src: 'photos/Fran and Marta/115.jpg', alt: '' },
                { src: 'photos/Fran and Marta/116.jpg', alt: '' },
                { src: 'photos/Fran and Marta/117.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/118.jpg', alt: '' },
                { src: 'photos/Fran and Marta/119.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/120.jpg', alt: '' },
                { src: 'photos/Fran and Marta/121.jpg', alt: '' },
                { src: 'photos/Fran and Marta/122.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/123.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/124.jpg', alt: '' },
                { src: 'photos/Fran and Marta/125.jpg', alt: '' },
                { src: 'photos/Fran and Marta/126.jpg', alt: '' },
                { src: 'photos/Fran and Marta/127.jpg', alt: '' },
                { src: 'photos/Fran and Marta/128.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/129.jpg', alt: '' },
                { src: 'photos/Fran and Marta/130.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/131.jpg', alt: '' },
                { src: 'photos/Fran and Marta/132.jpg', alt: '' },
                { src: 'photos/Fran and Marta/133.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/134.jpg', alt: '' },
                { src: 'photos/Fran and Marta/135.jpg', alt: '' },
                { src: 'photos/Fran and Marta/136.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/137.jpg', alt: '' },
                { src: 'photos/Fran and Marta/138.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/139.jpg', alt: '' },
                { src: 'photos/Fran and Marta/140.jpg', alt: '' },
                { src: 'photos/Fran and Marta/141.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/142.jpg', alt: '' },
                { src: 'photos/Fran and Marta/143.jpg', alt: '' },
                { src: 'photos/Fran and Marta/144.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/145.jpg', alt: '' },
                { src: 'photos/Fran and Marta/146.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/147.jpg', alt: '' },
                { src: 'photos/Fran and Marta/148.jpg', alt: '' },
                { src: 'photos/Fran and Marta/149.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/150.jpg', alt: '' },
                { src: 'photos/Fran and Marta/151.jpg', alt: '' },
                { src: 'photos/Fran and Marta/152.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/153.jpg', alt: '' },
                { src: 'photos/Fran and Marta/154.jpg', alt: '' },
				{ src: 'photos/Fran and Marta/155.jpg', alt: '' }
                
               
            ]
        },
		
		
		'wedd:Lauren': {
            title: 'Reportaje de boda: Lauren y Ciáran',
            description: 'Tuve el placer de fotografiar la boda de Lauren y Ciáran en Barcelona. Son originarios de Irlanda, lo que convirtió la experiencia en algo maravilloso e internacional.',
            photos: [
                { src: 'photos/Lauren and Ciaran/03.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/04.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/05.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/06.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/12.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/07.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/08.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/09.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/10.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/11.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/13.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/14.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/15.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/16.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/17.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/18.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/19.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/20.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/21.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/22.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/23.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/24.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/25.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/26.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/27.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/28.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/29.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/30.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/31.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/32.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/33.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/34.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/35.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/36.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/37.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/38.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/39.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/40.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/41.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/42.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/43.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/44.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/45.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/46.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/47.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/48.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/49.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/50.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/51.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/52.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/53.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/54.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/55.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/56.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/57.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/58.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/59.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/60.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/61.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/62.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/63.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/64.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/65.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/66.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/67.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/68.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/70.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/71.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/72.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/73.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/74.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/75.jpg', alt: '' },
				{ src: 'photos/Lauren and Ciaran/76.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/77.jpg', alt: '' },
                { src: 'photos/Lauren and Ciaran/78.jpg', alt: '' }
               
            ]
        },
		
		
		'Wed:Monica': {
            title: 'Reportaje de boda: Mónica y Colin',
            description: 'Una boda que unió dos corazones de diferentes rincones de Europa: la gracia española de Mónica y el encanto irlandés de Colin. Fue un honor capturar su gran día, lleno de tradiciones significativas, actuaciones artísticas de su familia y una energía conmovedora en la pista de baile una vez que comenzó la música.',
            photos: [
			    { src: 'photos/Monica and Colin/01.jpg', alt: '' },
                { src: 'photos/Monica and Colin/03.jpg', alt: '' }, 
                { src: 'photos/Monica and Colin/02.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/08.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/10.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/09.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/14.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/05.jpg', alt: '' },
                { src: 'photos/Monica and Colin/15.jpg', alt: '' },
                { src: 'photos/Monica and Colin/20.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/16.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/22.jpg', alt: '' },
                { src: 'photos/Monica and Colin/23.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/25.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/27.jpg', alt: '' },
                { src: 'photos/Monica and Colin/28.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/29.jpg', alt: '' },
                { src: 'photos/Monica and Colin/33-2.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/34.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/35.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/36.jpg', alt: '' },
                { src: 'photos/Monica and Colin/37.jpg', alt: '' },
                { src: 'photos/Monica and Colin/38.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/30.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/31.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/32.jpg', alt: '' },
                { src: 'photos/Monica and Colin/06.jpg', alt: '' },
                { src: 'photos/Monica and Colin/04.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/39.jpg', alt: '' },
                { src: 'photos/Monica and Colin/40.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/43.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/42.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/44.jpg', alt: '' },
                { src: 'photos/Monica and Colin/45.jpg', alt: '' },
                { src: 'photos/Monica and Colin/46.jpg', alt: '' },
                { src: 'photos/Monica and Colin/47.jpg', alt: '' },
                { src: 'photos/Monica and Colin/48.jpg', alt: '' },
                { src: 'photos/Monica and Colin/50.jpg', alt: '' },
                { src: 'photos/Monica and Colin/52.jpg', alt: '' },
                { src: 'photos/Monica and Colin/53.jpg', alt: '' },
                { src: 'photos/Monica and Colin/54.jpg', alt: '' },
                { src: 'photos/Monica and Colin/56.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/55.jpg', alt: '' },
                { src: 'photos/Monica and Colin/57.jpg', alt: '' },
                { src: 'photos/Monica and Colin/59.jpg', alt: '' },
                { src: 'photos/Monica and Colin/60.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/58.jpg', alt: '' },
                { src: 'photos/Monica and Colin/61.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/62.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/63.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/64.jpg', alt: '' },
                { src: 'photos/Monica and Colin/65.jpg', alt: '' },
                { src: 'photos/Monica and Colin/66.jpg', alt: '' },
                { src: 'photos/Monica and Colin/67.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/68.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/69.jpg', alt: '' },
                { src: 'photos/Monica and Colin/70.jpg', alt: '' },
                { src: 'photos/Monica and Colin/71.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/72.jpg', alt: '' },
                { src: 'photos/Monica and Colin/74.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/73.jpg', alt: '' },
                { src: 'photos/Monica and Colin/75.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/76.jpg', alt: '' },
                { src: 'photos/Monica and Colin/77.jpg', alt: '' },
                { src: 'photos/Monica and Colin/78.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/84.jpg', alt: '' },
                { src: 'photos/Monica and Colin/81.jpg', alt: '' },
                { src: 'photos/Monica and Colin/82.jpg', alt: '' },
                { src: 'photos/Monica and Colin/83.jpg', alt: '' },
                { src: 'photos/Monica and Colin/80.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/85.jpg', alt: '' },
                { src: 'photos/Monica and Colin/86.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/87.jpg', alt: '' },
                { src: 'photos/Monica and Colin/88.jpg', alt: '' },
                { src: 'photos/Monica and Colin/89.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/90.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/91.jpg', alt: '' },
                { src: 'photos/Monica and Colin/92.jpg', alt: '' },
                { src: 'photos/Monica and Colin/93.jpg', alt: '' },
                { src: 'photos/Monica and Colin/94.jpg', alt: '' },
                { src: 'photos/Monica and Colin/95.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/98.jpg', alt: '' },
                { src: 'photos/Monica and Colin/97.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/99.jpg', alt: '' },
                { src: 'photos/Monica and Colin/96.jpg', alt: '' },
                { src: 'photos/Monica and Colin/100.jpg', alt: '' },
                { src: 'photos/Monica and Colin/103.jpg', alt: '' },
                { src: 'photos/Monica and Colin/104.jpg', alt: '' },
                { src: 'photos/Monica and Colin/105.jpg', alt: '' },
                { src: 'photos/Monica and Colin/106.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/107.jpg', alt: '' },
                { src: 'photos/Monica and Colin/108.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/109.jpg', alt: '' },
                { src: 'photos/Monica and Colin/110.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/112.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/113.jpg', alt: '' },
                { src: 'photos/Monica and Colin/114.jpg', alt: '' },
                { src: 'photos/Monica and Colin/116.jpg', alt: '' },
                { src: 'photos/Monica and Colin/117.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/118.jpg', alt: '' },
                { src: 'photos/Monica and Colin/119.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/120.jpg', alt: '' },
                { src: 'photos/Monica and Colin/122.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/123.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/124.jpg', alt: '' },
                { src: 'photos/Monica and Colin/125.jpg', alt: '' },
                { src: 'photos/Monica and Colin/126.jpg', alt: '' },
                { src: 'photos/Monica and Colin/127.jpg', alt: '' },
                { src: 'photos/Monica and Colin/128.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/129.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/131.jpg', alt: '' },
                { src: 'photos/Monica and Colin/132.jpg', alt: '' },
                { src: 'photos/Monica and Colin/133.jpg', alt: '' },
                { src: 'photos/Monica and Colin/135.jpg', alt: '' },
                { src: 'photos/Monica and Colin/136.jpg', alt: '' },
                { src: 'photos/Monica and Colin/138.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/139.jpg', alt: '' },
                { src: 'photos/Monica and Colin/140.jpg', alt: '' },
                { src: 'photos/Monica and Colin/141.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/142.jpg', alt: '' },
                { src: 'photos/Monica and Colin/143.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/145.jpg', alt: '' },
                { src: 'photos/Monica and Colin/146.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/147.jpg', alt: '' },
                { src: 'photos/Monica and Colin/148.jpg', alt: '' },
                { src: 'photos/Monica and Colin/149.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/150.jpg', alt: '' },
                { src: 'photos/Monica and Colin/151.jpg', alt: '' },
                { src: 'photos/Monica and Colin/152.jpg', alt: '' },
                { src: 'photos/Monica and Colin/154.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/155.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/156.jpg', alt: '' },
                { src: 'photos/Monica and Colin/157.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/158.jpg', alt: '' },
                { src: 'photos/Monica and Colin/159.jpg', alt: '' },
                { src: 'photos/Monica and Colin/160.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/161.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/163.jpg', alt: '' },
                { src: 'photos/Monica and Colin/162.jpg', alt: '' },
                { src: 'photos/Monica and Colin/164.jpg', alt: '' },
                { src: 'photos/Monica and Colin/165.jpg', alt: '' },
                { src: 'photos/Monica and Colin/166.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/167.jpg', alt: '' },
                { src: 'photos/Monica and Colin/170.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/169.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/172.jpg', alt: '' },
                { src: 'photos/Monica and Colin/173.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/174.jpg', alt: '' },
                { src: 'photos/Monica and Colin/175.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/176.jpg', alt: '' },
                { src: 'photos/Monica and Colin/177.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/178.jpg', alt: '' },
                { src: 'photos/Monica and Colin/179.jpg', alt: '' },
                { src: 'photos/Monica and Colin/180.jpg', alt: '' },
                { src: 'photos/Monica and Colin/181.jpg', alt: '' },
                { src: 'photos/Monica and Colin/182.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/183.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/184.jpg', alt: '' },
                { src: 'photos/Monica and Colin/185.jpg', alt: '' },
                { src: 'photos/Monica and Colin/186.jpg', alt: '' },
                { src: 'photos/Monica and Colin/187.jpg', alt: '' },
                { src: 'photos/Monica and Colin/188.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/189.jpg', alt: '' },
                { src: 'photos/Monica and Colin/190.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/191.jpg', alt: '' },
                { src: 'photos/Monica and Colin/192.jpg', alt: '' },
                { src: 'photos/Monica and Colin/193.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/194.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/195.jpg', alt: '' },
                { src: 'photos/Monica and Colin/196.jpg', alt: '' },
                { src: 'photos/Monica and Colin/197.jpg', alt: '' },
                { src: 'photos/Monica and Colin/198.jpg', alt: '' },
                { src: 'photos/Monica and Colin/199.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/200.jpg', alt: '' },
                { src: 'photos/Monica and Colin/201.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/202.jpg', alt: '' },
                { src: 'photos/Monica and Colin/203.jpg', alt: '' },
                { src: 'photos/Monica and Colin/204.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/205.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/206.jpg', alt: '' },
                { src: 'photos/Monica and Colin/207.jpg', alt: '' },
                { src: 'photos/Monica and Colin/208.jpg', alt: '' },
                { src: 'photos/Monica and Colin/209.jpg', alt: '' },
                { src: 'photos/Monica and Colin/210.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/211.jpg', alt: '' },
                { src: 'photos/Monica and Colin/212.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/213.jpg', alt: '' },
                { src: 'photos/Monica and Colin/214.jpg', alt: '' },
                { src: 'photos/Monica and Colin/215.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/216.jpg', alt: '' },
                { src: 'photos/Monica and Colin/217.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/218.jpg', alt: '' },
                { src: 'photos/Monica and Colin/219.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/220.jpg', alt: '' },
                { src: 'photos/Monica and Colin/221.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/222.jpg', alt: '' },
                { src: 'photos/Monica and Colin/223.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/224.jpg', alt: '' },
                { src: 'photos/Monica and Colin/225.jpg', alt: '' },
                { src: 'photos/Monica and Colin/226.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/227.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/228.jpg', alt: '' },
                { src: 'photos/Monica and Colin/229.jpg', alt: '' },
                { src: 'photos/Monica and Colin/230.jpg', alt: '' },
                { src: 'photos/Monica and Colin/231.jpg', alt: '' },
                { src: 'photos/Monica and Colin/234.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/233.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/235.jpg', alt: '' },
                { src: 'photos/Monica and Colin/236.jpg', alt: '' },
                { src: 'photos/Monica and Colin/239.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/237.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/238.jpg', alt: '' },
                { src: 'photos/Monica and Colin/240.jpg', alt: '' },
                { src: 'photos/Monica and Colin/241.jpg', alt: '' },
                { src: 'photos/Monica and Colin/243.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/244.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/246.jpg', alt: '' },
                { src: 'photos/Monica and Colin/247.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/232.jpg', alt: '' },
                { src: 'photos/Monica and Colin/248.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/249.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/250.jpg', alt: '' },
                { src: 'photos/Monica and Colin/251.jpg', alt: '' },
                { src: 'photos/Monica and Colin/252.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/253.jpg', alt: '' },
                { src: 'photos/Monica and Colin/254.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/255.jpg', alt: '' },
                { src: 'photos/Monica and Colin/256.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/257.jpg', alt: '' },
                { src: 'photos/Monica and Colin/258.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/261.jpg', alt: '' },
                { src: 'photos/Monica and Colin/262.jpg', alt: '' },
                { src: 'photos/Monica and Colin/263.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/260.jpg', alt: '' },
                { src: 'photos/Monica and Colin/264.jpg', alt: '' },
                { src: 'photos/Monica and Colin/265.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/266.jpg', alt: '' },
                { src: 'photos/Monica and Colin/267.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/268.jpg', alt: '' },
                { src: 'photos/Monica and Colin/269.jpg', alt: '' },
                { src: 'photos/Monica and Colin/270.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/271.jpg', alt: '' },
                { src: 'photos/Monica and Colin/272.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/273.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/275.jpg', alt: '' },
                { src: 'photos/Monica and Colin/277.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/278.jpg', alt: '' },
                { src: 'photos/Monica and Colin/274.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/279.jpg', alt: '' },
                { src: 'photos/Monica and Colin/281.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/282.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/283.jpg', alt: '' },
                { src: 'photos/Monica and Colin/284.jpg', alt: '' },
                { src: 'photos/Monica and Colin/286.jpg', alt: '' },
                { src: 'photos/Monica and Colin/287.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/288.jpg', alt: '' },
                { src: 'photos/Monica and Colin/289.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/290.jpg', alt: '' },
                { src: 'photos/Monica and Colin/291.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/293.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/294.jpg', alt: '' },
                { src: 'photos/Monica and Colin/295.jpg', alt: '' },
                { src: 'photos/Monica and Colin/296.jpg', alt: '' },
                { src: 'photos/Monica and Colin/297.jpg', alt: '' },
                { src: 'photos/Monica and Colin/298.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/299.jpg', alt: '' },
                { src: 'photos/Monica and Colin/300.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/301.jpg', alt: '' },
                { src: 'photos/Monica and Colin/302.jpg', alt: '' },
                { src: 'photos/Monica and Colin/303.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/304.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/305.jpg', alt: '' },
                { src: 'photos/Monica and Colin/306.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/314.jpg', alt: '' },
                { src: 'photos/Monica and Colin/307.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/308.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/309.jpg', alt: '' },
                { src: 'photos/Monica and Colin/310.jpg', alt: '' },
                { src: 'photos/Monica and Colin/311.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/313.jpg', alt: '' },
				{ src: 'photos/Monica and Colin/312.jpg', alt: '' }
               
                
		  ]
        },
		
		
		
		'wedd:J y S': {
            title: 'Reportaje de boda: Joelle y Sina',
            description: 'El imponente Palacio de Galiana, una puesta de sol que quedará grabada en la memoria de todos y la gente más animada bailando al ritmo de los mejores éxitos pop y árabes. ¡Así es como todos, incluyéndome a mí, recordaremos la increíble boda de Joelle y Sina! Tuve el placer de ser la segunda fotógrafa, centrándome principalmente en capturar a los invitados.',
            photos: [
			    { src: 'photos/Joelle and Sina/01.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/02.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/03.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/04.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/05.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/06.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/07.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/08.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/09.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/10.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/11.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/12.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/13.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/14.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/15.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/16.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/17.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/18.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/19.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/20.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/21.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/22.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/22.2.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/23.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/24.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/25.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/26.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/27.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/29.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/30.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/31.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/32.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/33.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/34.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/35.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/36.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/37.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/38.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/40.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/41.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/42.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/43.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/44.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/45.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/46.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/47.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/48.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/49.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/50.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/51.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/52.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/53.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/54.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/55.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/56.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/57.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/58.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/59.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/60.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/61.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/62.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/63.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/64.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/65.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/66.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/67.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/68.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/69.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/70.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/71.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/72.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/73.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/74.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/75.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/76.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/77.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/78.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/79.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/80.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/81.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/82.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/83.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/84.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/85.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/86.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/87.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/88.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/89.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/90.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/91.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/92.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/93.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/94.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/95.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/96.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/97.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/98.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/99.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/100.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/101.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/102.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/103.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/104.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/105.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/105.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/106.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/107.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/108.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/109.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/110.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/111.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/112.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/113.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/114.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/115.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/116.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/117.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/118.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/119.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/120.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/121.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/122.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/123.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/124.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/125.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/126.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/127.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/128.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/129.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/130.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/131.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/132.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/133.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/134.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/135.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/136.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/137.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/138.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/139.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/140.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/141.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/142.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/143.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/144.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/145.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/146.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/147.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/148.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/149.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/150.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/151.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/152.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/153.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/154.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/155.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/156.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/157.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/158.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/159.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/160.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/161.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/162.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/163.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/164.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/165.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/166.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/167.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/168.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/169.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/170.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/171.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/172.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/173.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/174.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/175.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/176.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/177.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/178.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/179.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/180.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/181.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/182.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/184.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/185.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/186.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/187.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/188.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/189.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/190.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/191.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/192.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/193.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/194.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/195.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/196.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/197.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/198.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/199.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/200.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/201.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/202.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/203.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/204.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/205.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/206.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/207.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/208.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/209.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/210.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/211.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/212.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/213.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/214.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/215.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/216.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/217.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/218.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/219.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/220.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/221.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/222.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/223.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/225.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/226.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/227.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/228.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/229.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/230.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/231.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/232.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/233.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/234.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/235.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/236.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/237.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/238.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/239.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/240.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/241.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/242.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/243.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/244.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/245.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/246.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/247.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/248.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/249.jpg', alt: '' },
				{ src: 'photos/Joelle and Sina/250.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/251.jpg', alt: '' },
                { src: 'photos/Joelle and Sina/252.jpg', alt: '' }
                
            ]
        },
		
		'Ishreet': {
            title: 'Una pedida de mano sorpresa',
            description: 'Originalmente me contactó Isreet, quien quería una sesión de fotos para celebrar su viaje a Madrid. Sin embargo, la historia dio un giro secreto cuando su novio se puso en contacto conmigo para contarme que ¡planeaba pedirle matrimonio durante nuestra sesión! Mi amiga y yo organizamos un corazón de pétalos en el lugar, que se puede ver en las fotos, y lo tuvimos listo para el momento en que llegamos al punto principal con la pareja. Al final, todo salió a la perfección. ¡Fue una experiencia muy bonita formar parte de su historia!',
            photos: [
                { src: 'photos/Ishreet and Joet/12.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/08.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/05.jpg', alt: '' }, 
				{ src: 'photos/Ishreet and Joet/03.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/07.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/11.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/09.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/04.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/14.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/15.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/17.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/18.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/20.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/21.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/23.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/39.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/24.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/31.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/25.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/28.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/29.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/40.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/37.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/41.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/42.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/45.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/46.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/47.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/48.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/49.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/50.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/51.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/52.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/53.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/54.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/55.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/56.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/57.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/58.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/59.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/61.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/62.jpg', alt: '' },
				{ src: 'photos/Ishreet and Joet/63.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/65.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/66.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/67.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/70.jpg', alt: '' },
                { src: 'photos/Ishreet and Joet/71.jpg', alt: '' }
		  ]
        },
		
		
		'phot-proj': {
            title: 'Proyecto de fotografía sobre parejas',
            description: 'Me apasiona capturar la conexión entre las personas, especialmente entre las parejas. Por eso decidí crear mi propio proyecto de fotografía sobre el amor. La idea es mostrar cómo cada pareja vive en su propio mundo, completamente sumergida en su amor, sin preocuparse por lo que sucede a su alrededor. ¡A veces, puede que ni siquiera encajen en los estándares del mundo que los rodea! 😊',
            photos: [
                { src: 'photos/Enr y Evel/A7405825.jpg', alt: '' },
                { src: 'photos/Enr y Evel/A7405856.jpg', alt: '' },
				{ src: 'photos/Enr y Evel/A7405866.jpg', alt: '' },
                { src: 'photos/Enr y Evel/A7406134.jpg', alt: '' },
                { src: 'photos/Enr y Evel/A7406109_02.jpg', alt: '' },
				{ src: 'photos/Enr y Evel/A7406193.jpg', alt: '' },
				{ src: 'photos/Maryam/01.jpg', alt: '' },
                { src: 'photos/Maryam/02.jpg', alt: '' },
				{ src: 'photos/Maryam/03.jpg', alt: '' },
                { src: 'photos/Maryam/04.jpg', alt: '' },
                { src: 'photos/Maryam/05.jpg', alt: '' },
				{ src: 'photos/Maryam/06.jpg', alt: '' },
				{ src: 'photos/Maryam/07.jpg', alt: '' },
				{ src: 'photos/Maryam/08.jpg', alt: '' },
				{ src: 'photos/Fernanda y Charles/01.jpg', alt: '' },
				{ src: 'photos/Fernanda y Charles/02.jpg', alt: '' },
				{ src: 'photos/Fernanda y Charles/03.jpg', alt: '' },
				{ src: 'photos/Fernanda y Charles/04.jpg', alt: '' },
                { src: 'photos/Mish y Mar/01.jpg', alt: '' },
                { src: 'photos/Mish y Mar/02.jpg', alt: '' },
                { src: 'photos/Mish y Mar/03.jpg', alt: '' },
                { src: 'photos/Mish y Mar/04.jpg', alt: '' }
                
            ]
        },
		
		
		
		'Valentine': {
            title: 'Sesión de fotos de San Valentín',
            description: 'La increíble pareja formada por Mónica y Jorge se puso en contacto conmigo para realizar una sesión de fotos de San Valentín. Elegí uno de mis estudios favoritos en Madrid y, en apenas una hora, capturamos estas fotos vibrantes y románticas.',
            photos: [
                
				{ src: 'photos/Monica and Jorge/14.jpg', alt: '' },
               // { src: 'photos/Monica and Jorge/17.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/18.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/20.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/21.jpg', alt: '' },
				//{ src: 'photos/Monica and Jorge/22.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/23.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/24.jpg', alt: '' },
				//{ src: 'photos/Monica and Jorge/26.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/29.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/31.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/34.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/35.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/37.jpg', alt: '' },
				//{ src: 'photos/Monica and Jorge/40.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/41.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/44.jpg', alt: '' },
                //{ src: 'photos/Monica and Jorge/45.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/48.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/50.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/52.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/53.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/54.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/55.jpg', alt: '' },                
				{ src: 'photos/Monica and Jorge/60.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/62.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/61.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/57.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/01.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/02.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/06.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/08.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/09.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/11.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/13.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/64.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/65.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/66.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/69.jpg', alt: '' },
                { src: 'photos/Monica and Jorge/71.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/72.jpg', alt: '' },
				{ src: 'photos/Monica and Jorge/74.jpg', alt: '' }
		  ]
        },
		
		
		
		'Geli': {
            title: 'Sesión de fotos individual',
            description: 'Para esta sesión, busqué una estética de ensueño y etérea. Tras encontrar el look perfecto con la clienta, capturé la historia en un entorno de parque. Para conseguir este ambiente tan específico, utilicé un filtro de objetivo en varias tomas para crear esa atmósfera poética.',
            photos: [
              
				{ src: 'photos/Geli/04.jpg', alt: '' },
                { src: 'photos/Geli/06.jpg', alt: '' },
				{ src: 'photos/Geli/01.jpg', alt: '' },
                // { src: 'photos/Geli/04.jpg', alt: '' },
                { src: 'photos/Geli/02.jpg', alt: '' },
				// { src: 'photos/Geli/03.jpg', alt: '' },
				{ src: 'photos/Geli/09.jpg', alt: '' },
				{ src: 'photos/Geli/10.jpg', alt: '' },
				{ src: 'photos/Geli/07.jpg', alt: '' },
				{ src: 'photos/Geli/08.jpg', alt: '' },
				{ src: 'photos/Geli/11.jpg', alt: '' },
				// { src: 'photos/Geli/12.jpg', alt: '' },
                { src: 'photos/Geli/13.jpg', alt: '' },
                { src: 'photos/Geli/14.jpg', alt: '' },
                { src: 'photos/Geli/15.jpg', alt: '' },
                { src: 'photos/Geli/16.jpg', alt: '' },
				 { src: 'photos/Geli/17.jpg', alt: '' },
                // { src: 'photos/Geli/18.jpg', alt: '' },
				{ src: 'photos/Geli/19.jpg', alt: '' },
                { src: 'photos/Geli/20.jpg', alt: '' },
                { src: 'photos/Geli/21.jpg', alt: '' },
                { src: 'photos/Geli/22.jpg', alt: '' },
                { src: 'photos/Geli/23.jpg', alt: '' },
				{ src: 'photos/Geli/24.jpg', alt: '' },
                { src: 'photos/Geli/25.jpg', alt: '' },
                // { src: 'photos/Geli/26.jpg', alt: '' },
                { src: 'photos/Geli/27.jpg', alt: '' },
				// { src: 'photos/Geli/28.jpg', alt: '' },
				{ src: 'photos/Geli/29.jpg', alt: '' },
                { src: 'photos/Geli/30.jpg', alt: '' },
                { src: 'photos/Geli/31.jpg', alt: '' },
                { src: 'photos/Geli/32.jpg', alt: '' },
                { src: 'photos/Geli/33.jpg', alt: '' },
				// { src: 'photos/Geli/34.jpg', alt: '' },
                { src: 'photos/Geli/35.jpg', alt: '' },
                { src: 'photos/Geli/36.jpg', alt: '' },
                { src: 'photos/Geli/37.jpg', alt: '' },
                { src: 'photos/Geli/38.jpg', alt: '' },
				{ src: 'photos/Geli/39.jpg', alt: '' },
                // { src: 'photos/Geli/40.jpg', alt: '' },
                { src: 'photos/Geli/41.jpg', alt: '' },
                { src: 'photos/Geli/42.jpg', alt: '' },
                { src: 'photos/Geli/43.jpg', alt: '' },
				{ src: 'photos/Geli/44.jpg', alt: '' },
                { src: 'photos/Geli/45.jpg', alt: '' },
                { src: 'photos/Geli/46.jpg', alt: '' },
                { src: 'photos/Geli/47.jpg', alt: '' },
                { src: 'photos/Geli/48.jpg', alt: '' },
				{ src: 'photos/Geli/49.jpg', alt: '' },
                { src: 'photos/Geli/50.jpg', alt: '' },
				{ src: 'photos/Geli/51.jpg', alt: '' },
                { src: 'photos/Geli/52.jpg', alt: '' },
                { src: 'photos/Geli/53.jpg', alt: '' },
                { src: 'photos/Geli/54.jpg', alt: '' },
                { src: 'photos/Geli/55.jpg', alt: '' },
				{ src: 'photos/Geli/56.jpg', alt: '' },
                { src: 'photos/Geli/57.jpg', alt: '' },
                { src: 'photos/Geli/58.jpg', alt: '' },
                { src: 'photos/Geli/59.jpg', alt: '' },
                { src: 'photos/Geli/60.jpg', alt: '' },
				{ src: 'photos/Geli/61.jpg', alt: '' }
				
            ]
        },
		
		
		'taller': {
            title: 'Fotos del taller floral',
            description: 'Fue un taller floral un domingo sobre cómo elaborar centros de mesa en el Taller de Florinatta. Estuvo lleno de flores preservadas y de una energía increíble. Al final, las chicas crearon decoraciones diferentes pero muy atractivas. ',
            photos: [
              
				
   
    { src: 'photos/Florinatta/01.jpg', alt: '' },
    { src: 'photos/Florinatta/05.jpg', alt: '' },
    { src: 'photos/Florinatta/06.jpg', alt: '' },
    { src: 'photos/Florinatta/07.jpg', alt: '' },
    { src: 'photos/Florinatta/08.jpg', alt: '' },
    { src: 'photos/Florinatta/09.jpg', alt: '' },
    { src: 'photos/Florinatta/10.jpg', alt: '' },
    { src: 'photos/Florinatta/11.jpg', alt: '' },
    { src: 'photos/Florinatta/12.jpg', alt: '' },
    { src: 'photos/Florinatta/13.jpg', alt: '' },
    { src: 'photos/Florinatta/14.jpg', alt: '' },
    { src: 'photos/Florinatta/15.jpg', alt: '' },
    { src: 'photos/Florinatta/16.jpg', alt: '' },
    { src: 'photos/Florinatta/17.jpg', alt: '' },
    { src: 'photos/Florinatta/18.jpg', alt: '' },
    { src: 'photos/Florinatta/19.jpg', alt: '' },
    { src: 'photos/Florinatta/20.jpg', alt: '' },
    { src: 'photos/Florinatta/21.jpg', alt: '' },
    { src: 'photos/Florinatta/22.jpg', alt: '' },
    { src: 'photos/Florinatta/23.jpg', alt: '' },
    { src: 'photos/Florinatta/24.jpg', alt: '' },
    { src: 'photos/Florinatta/25.jpg', alt: '' },
    { src: 'photos/Florinatta/26.jpg', alt: '' },
    { src: 'photos/Florinatta/27.jpg', alt: '' },
    { src: 'photos/Florinatta/28.jpg', alt: '' },
    { src: 'photos/Florinatta/29.jpg', alt: '' },
    { src: 'photos/Florinatta/30.jpg', alt: '' },
    { src: 'photos/Florinatta/31.jpg', alt: '' },
    { src: 'photos/Florinatta/32.jpg', alt: '' },
    { src: 'photos/Florinatta/33.jpg', alt: '' },
    { src: 'photos/Florinatta/34.jpg', alt: '' },
    { src: 'photos/Florinatta/35.jpg', alt: '' },
    { src: 'photos/Florinatta/36.jpg', alt: '' },
    { src: 'photos/Florinatta/37.jpg', alt: '' },
    { src: 'photos/Florinatta/38.jpg', alt: '' },
    { src: 'photos/Florinatta/39.jpg', alt: '' },
    { src: 'photos/Florinatta/40.jpg', alt: '' },
    { src: 'photos/Florinatta/41.jpg', alt: '' },
    { src: 'photos/Florinatta/42.jpg', alt: '' },
    { src: 'photos/Florinatta/43.jpg', alt: '' },
    { src: 'photos/Florinatta/44.jpg', alt: '' },
    { src: 'photos/Florinatta/45.jpg', alt: '' },
    { src: 'photos/Florinatta/46.jpg', alt: '' },
    { src: 'photos/Florinatta/47.jpg', alt: '' },
    { src: 'photos/Florinatta/48.jpg', alt: '' },
    { src: 'photos/Florinatta/49.jpg', alt: '' },
    { src: 'photos/Florinatta/50.jpg', alt: '' },
    { src: 'photos/Florinatta/51.jpg', alt: '' },
    { src: 'photos/Florinatta/52.jpg', alt: '' },
    { src: 'photos/Florinatta/53.jpg', alt: '' },
    { src: 'photos/Florinatta/54.jpg', alt: '' },
    { src: 'photos/Florinatta/55.jpg', alt: '' },
    { src: 'photos/Florinatta/56.jpg', alt: '' },
    { src: 'photos/Florinatta/57.jpg', alt: '' },
    { src: 'photos/Florinatta/58.jpg', alt: '' },
    { src: 'photos/Florinatta/59.jpg', alt: '' },
    { src: 'photos/Florinatta/60.jpg', alt: '' },
    { src: 'photos/Florinatta/61.jpg', alt: '' },
    { src: 'photos/Florinatta/62.jpg', alt: '' },
    { src: 'photos/Florinatta/63.jpg', alt: '' },
    { src: 'photos/Florinatta/64.jpg', alt: '' },
    { src: 'photos/Florinatta/65.jpg', alt: '' },
    { src: 'photos/Florinatta/66.jpg', alt: '' },
    { src: 'photos/Florinatta/67.jpg', alt: '' },
    { src: 'photos/Florinatta/68.jpg', alt: '' },
    { src: 'photos/Florinatta/69.jpg', alt: '' },
    { src: 'photos/Florinatta/70.jpg', alt: '' },
    { src: 'photos/Florinatta/71.jpg', alt: '' },
    { src: 'photos/Florinatta/72.jpg', alt: '' },
    { src: 'photos/Florinatta/73.jpg', alt: '' },
    { src: 'photos/Florinatta/74.jpg', alt: '' },
    { src: 'photos/Florinatta/75.jpg', alt: '' },
    { src: 'photos/Florinatta/76.jpg', alt: '' },
    { src: 'photos/Florinatta/77.jpg', alt: '' },
    { src: 'photos/Florinatta/78.jpg', alt: '' },
    { src: 'photos/Florinatta/79.jpg', alt: '' },
    { src: 'photos/Florinatta/80.jpg', alt: '' },
    { src: 'photos/Florinatta/81.jpg', alt: '' },
    { src: 'photos/Florinatta/82.jpg', alt: '' },
    { src: 'photos/Florinatta/83.jpg', alt: '' },
    { src: 'photos/Florinatta/84.jpg', alt: '' },
    { src: 'photos/Florinatta/85.jpg', alt: '' },
    { src: 'photos/Florinatta/86.jpg', alt: '' },
    { src: 'photos/Florinatta/87.jpg', alt: '' },
    { src: 'photos/Florinatta/88.jpg', alt: '' },
    { src: 'photos/Florinatta/89.jpg', alt: '' },
    { src: 'photos/Florinatta/90.jpg', alt: '' },
    { src: 'photos/Florinatta/92.jpg', alt: '' },
    { src: 'photos/Florinatta/93.jpg', alt: '' },
    { src: 'photos/Florinatta/94.jpg', alt: '' },
    { src: 'photos/Florinatta/95.jpg', alt: '' },
    { src: 'photos/Florinatta/96.jpg', alt: '' },
    { src: 'photos/Florinatta/97.jpg', alt: '' }
				
            ]
        },
		
		
        'amlul': {
            title: 'Sesión de fotos para la marca de ropa Amlul',
            description: 'La sesión tuvo lugar en Madrid, en una localización que recuerda visualmente a Miami, reflejando el espíritu atemporal de la marca.',
            photos: [
			    { src: 'photos/10_ed_02.jpg', alt: '' },
                { src: 'photos/12_ed.jpg', alt: '' },
                { src: 'photos/11_ed.jpg', alt: '' },
                { src: 'photos/09_ed.jpg', alt: '' },
                { src: 'photos/01_ed.jpg', alt: '' },
                { src: 'photos/04_ed.jpg', alt: '' },
                { src: 'photos/03_ed.jpg', alt: '' },
                { src: 'photos/13_ed.jpg', alt: '' },
                { src: 'photos/05_ed.jpg', alt: '' },
                { src: 'photos/15_ed.jpg', alt: '' },
                { src: 'photos/07_ed.jpg', alt: '' }
            ]
        },
		
        'eyelash-specialist': {
            title: 'Sesión de branding para una especialista en extensiones de pestañas',
            description: 'Una especialista en extensiones de pestañas se puso en contacto conmigo para una sesión de fotos destinada a potenciar su marca personal en las redes sociales. Hicimos la sesión en su salón utilizando mi propio equipo de iluminación.',
            photos: [
                { src: 'photos/A7402039.jpg', alt: '' },
                { src: 'photos/A7401947.jpg', alt: '' },
                { src: 'photos/A7402020.jpg', alt: '' },
				{ src: 'photos/A7401924_smaller_03.jpg', alt: '' },
                { src: 'photos/A7402007.jpg', alt: '' },
                { src: 'photos/A7401945.jpg', alt: '' },
				{ src: 'photos/A7401932_03.jpg', alt: '' },
            ]
        },
        'carlos-laura': {
            title: 'Carlos y Laura – Sesión de fotos de pareja cinematográfica',
            description: 'La pareja quería una sesión con dos conjuntos de ropa y, para el atuendo de boda, buscaban algo más cinematográfico y simbólico.',
            photos: [
				{ src: 'photos/A7401578.jpg', alt: '' },
                { src: 'photos/A7401585.jpg', alt: '' },
				{ src: 'photos/A7401572.jpg', alt: '' },
			    { src: 'photos/A7401621-Enhanced-NR_02.jpg', alt: '' },
				{ src: 'photos/Laura_03.jpg', alt: '' },
                { src: 'photos/Laura_02.jpg ', alt: '' },
                { src: 'photos/A7401528.jpg', alt: '' },
				{ src: 'photos/A7401684-Enhanced-NR.jpg', alt: '' },
				{ src: 'photos/A7401672-Enhanced-NR.jpg', alt: '' }
            ]
        },
		
       /* 
	   'lana-personal': {
            title: 'An individual portrait session',
            description: 'Lana reached out for a personal photoshoot, and for her birthday, we did it right in her beauty salon using my gear and lighting.',
            photos: [
                { src: 'photos/A7401767_02.jpg', alt: '' },
				{ src: 'photos/A7401788.jpg', alt: '' },
                { src: 'photos/A7401704.jpg', alt: '' },             
                { src: 'photos/A7401709.jpg', alt: '' },
                { src: 'photos/A7401837_blue_large.jpg', alt: '' },
				{ src: 'photos/A7401813_blue.jpg', alt: '' }
				
            ]
        },
		*/
		
		'marina': {
            title: 'Sesión conceptual con velas',
            description: 'Marina se puso en contacto conmigo a través de Instagram con una idea muy clara para una sesión en estudio. Cuando compartió su concepto, que incorporaba velas reales en su estilismo, me sumé de inmediato. Juntas dimos vida a la idea: ella misma diseñó y confeccionó la chaqueta con velas en los hombros, y fue un auténtico placer trabajar en un proyecto tan único.',
            photos: [
			    { src: 'photos/Marina/26.jpg', alt: '' },
				{ src: 'photos/Marina/27.jpg', alt: '' },
				{ src: 'photos/Marina/28.jpg', alt: '' },
				{ src: 'photos/Marina/29.jpg', alt: '' },
				{ src: 'photos/Marina/30.jpg', alt: '' },
				{ src: 'photos/Marina/31.jpg', alt: '' },
				{ src: 'photos/Marina/32.jpg', alt: '' },
                { src: 'photos/Marina/33.jpg', alt: '' },             
                { src: 'photos/Marina/34.jpg', alt: '' },
                { src: 'photos/Marina/35.jpg', alt: '' },
				{ src: 'photos/Marina/36.jpg', alt: '' },
				{ src: 'photos/Marina/37.jpg', alt: '' },
				{ src: 'photos/Marina/38.jpg', alt: '' },
				{ src: 'photos/Marina/39.jpg', alt: '' },
				{ src: 'photos/Marina/40.jpg', alt: '' },
				{ src: 'photos/Marina/41.jpg', alt: '' },
				{ src: 'photos/Marina/42.jpg', alt: '' },
                { src: 'photos/Marina/43.jpg', alt: '' },             
                { src: 'photos/Marina/44.jpg', alt: '' },
                { src: 'photos/Marina/45.jpg', alt: '' },
				{ src: 'photos/Marina/46.jpg', alt: '' },
				{ src: 'photos/Marina/47.jpg', alt: '' },
				{ src: 'photos/Marina/48.jpg', alt: '' },
				{ src: 'photos/Marina/49.jpg', alt: '' },
			    { src: 'photos/Marina/20.jpg', alt: '' },
				{ src: 'photos/Marina/21.jpg', alt: '' },
				{ src: 'photos/Marina/22.jpg', alt: '' },
                { src: 'photos/Marina/23.jpg', alt: '' },
				{ src: 'photos/Marina/50.jpg', alt: '' },
                { src: 'photos/Marina/01.jpg', alt: '' },
				{ src: 'photos/Marina/02.jpg', alt: '' },
                { src: 'photos/Marina/03.jpg', alt: '' },             
                { src: 'photos/Marina/04.jpg', alt: '' },
                { src: 'photos/Marina/05.jpg', alt: '' },
				{ src: 'photos/Marina/08.jpg', alt: '' },
				{ src: 'photos/Marina/09.jpg', alt: '' },
				{ src: 'photos/Marina/10.jpg', alt: '' },
				{ src: 'photos/Marina/12.jpg', alt: '' },
                { src: 'photos/Marina/13.jpg', alt: '' },             
                { src: 'photos/Marina/15.jpg', alt: '' },
				{ src: 'photos/Marina/16.jpg', alt: '' },
				{ src: 'photos/Marina/18.jpg', alt: '' },             
                { src: 'photos/Marina/24.jpg', alt: '' },
				{ src: 'photos/Marina/25.jpg', alt: '' },
				{ src: 'photos/Marina/51.jpg', alt: '' },
				{ src: 'photos/Marina/52.jpg', alt: '' },
                { src: 'photos/Marina/53.jpg', alt: '' },             
                { src: 'photos/Marina/54.jpg', alt: '' },
                { src: 'photos/Marina/55.jpg', alt: '' },
				{ src: 'photos/Marina/56.jpg', alt: '' },
				{ src: 'photos/Marina/57.jpg', alt: '' },
				{ src: 'photos/Marina/58.jpg', alt: '' },
				{ src: 'photos/Marina/59.jpg', alt: '' },
				{ src: 'photos/Marina/60.jpg', alt: '' },
				{ src: 'photos/Marina/61.jpg', alt: '' },
				{ src: 'photos/Marina/62.jpg', alt: '' },
                { src: 'photos/Marina/63.jpg', alt: '' },             
                { src: 'photos/Marina/64.jpg', alt: '' },
                { src: 'photos/Marina/65.jpg', alt: '' },
				{ src: 'photos/Marina/66.jpg', alt: '' },
				{ src: 'photos/Marina/67.jpg', alt: '' },
				{ src: 'photos/Marina/68.jpg', alt: '' },
				{ src: 'photos/Marina/69.jpg', alt: '' },
				{ src: 'photos/Marina/70.jpg', alt: '' },
				{ src: 'photos/Marina/71.jpg', alt: '' },
				{ src: 'photos/Marina/72.jpg', alt: '' }
               
				
            ]
        },
		
		
		
        'couples-years': {
            title: 'Sesiones de pareja',
            description: 'A lo largo de los años, he fotografiado a muchas parejas, capturando la conexión entre ellas y destacando la relación humana como el aspecto más importante.',
            photos: [
               
                { src: 'photos/DSC00448.jpg', alt: '' },
                { src: 'photos/DSC00449.jpg', alt: '' },
                { src: 'photos/DSC00562_lighter.jpg', alt: '' },
				{ src: 'photos/DSC00593.jpg', alt: '' },
				{ src: 'photos/DSC00105.jpg', alt: '' },
                { src: 'photos/DSC00091.jpg', alt: '' },
                { src: 'photos/DSC00102.jpg', alt: '' },
				{ src: 'photos/DSC6472-2.jpg', alt: '' },
				{ src: 'photos/DSC6533-1.jpg', alt: '' },
				{ src: 'photos/DSC6508.jpg', alt: '' }
		
            ]
        },
		
        'lisy': {
            title: 'Sesión de fotos individual',
            description: 'La sesión de fotos para una chica que me encontró en internet, realizada para sus redes sociales. Tuvo lugar en Formigal, España.',
            photos: [
                { src: 'photos/A7403251-Enhanced-NR_02.jpg', alt:''  },
                { src: 'photos/A7403246-Enhanced-NR_02.jpg', alt: '' },
                { src: 'photos/A7403223_03.jpg', alt:''  },
                { src: 'photos/A7403255-Enhanced-NR_02.jpg', alt: '' },
                { src: 'photos/A7403288.jpg', alt: '' },
                { src: 'photos/A7403254-Enhanced-NR.jpg', alt:''  },
				{ src: 'photos/A7403237-Enhanced-NR.jpg', alt:''  }
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
        { src: 'photos/Enr y Evel/A7405856.jpg', alt: '' },
        { src: 'photos/Enr y Evel/A7406134.jpg', alt: '' },
        { src: 'photos/Enr y Evel/A7406109.jpg', alt: '' },
        { src: 'photos/Mish y Mar/A7405455.jpg', alt: '' },
        { src: 'photos/Mish y Mar/A7405459.jpg', alt: '' },
        { src: 'photos/Mish y Mar/A7405485_rec.jpg', alt: '' },
        { src: 'photos/Mish y Mar/A7405544_rec.jpg', alt: '' },
        { src: 'photos/Mish y Mar/A7405608.jpg', alt: '' },
        { src: 'photos/Mish y Mar/A7405595_rec.jpg', alt: '' }
    ]
},

'amlul-es': {
    title: 'Sesión de fotos para la marca de ropa Amlul',
    description: 'La sesión se realizó en Madrid, en una localización que visualmente recuerda a Miami, reflejando el espíritu atemporal de la marca.',
    photos: [
        { src: 'photos/12_ed.jpg', alt: '' },
        { src: 'photos/11_ed.jpg', alt: '' },
        { src: 'photos/09_ed.jpg', alt: '' },
        { src: 'photos/01_ed.jpg', alt: '' },
        { src: 'photos/04_ed.jpg', alt: '' },
        { src: 'photos/03_ed.jpg', alt: '' },
        { src: 'photos/13_ed.jpg', alt: '' },
        { src: 'photos/05_ed.jpg', alt: '' },
        { src: 'photos/15_ed.jpg', alt: '' },
        { src: 'photos/07_ed.jpg', alt: '' }
    ]
},

/*'eyelash-specialist-es': {
    title: 'Sesión de marca para una especialista en extensiones de pestañas',
    description: 'Una especialista en extensiones de pestañas me contactó para una sesión de fotos con el objetivo de mejorar su marca personal en redes sociales. Hicimos la sesión en su salón usando mi equipo de iluminación.',
    photos: [
        { src: 'photos/A7401932.jpg', alt: '' },
        { src: 'photos/A7401947.jpg', alt: '' },
        { src: 'photos/A7401924.jpg', alt: '' },
        { src: 'photos/A7402020.jpg', alt: '' },
        { src: 'photos/A7402007.jpg', alt: '' },
        { src: 'photos/A7401945.jpg', alt: '' },
        { src: 'photos/A7402039.jpg', alt: '' },
    ]
}, */

'carlos-laura-es': {
    title: 'Carlos y Laura – Sesión fotográfica cinematográfica de pareja',
    description: 'La pareja quería una sesión con dos atuendos, y para el vestuario de boda buscaban algo más cinematográfico y simbólico.',
    photos: [
        { src: 'photos/A7401585.jpg', alt: '' },
        { src: 'photos/A7401621-Enhanced-NR_02.jpg', alt: '' },
        { src: 'photos/A7401578.jpg', alt: '' },
        { src: 'photos/A7401572.jpg', alt: '' },
        { src: 'photos/Laura_03.jpg', alt: '' },
        { src: 'photos/Laura_02.jpg ', alt: '' },
        { src: 'photos/A7401528.jpg', alt: '' },
        { src: 'photos/A7401684-Enhanced-NR.jpg', alt: '' },
        { src: 'photos/A7401672-Enhanced-NR.jpg', alt: '' }
    ]
},

'lana-personal-es': {
    title: 'Sesión de retrato individual',
    description: 'Lana me contactó para una sesión personal, y para su cumpleaños hicimos la sesión directamente en su salón de belleza usando mi equipo de iluminación.',
    photos: [
        { src: 'photos/A7401767.jpg', alt: '' },
        { src: 'photos/A7401709.jpg', alt: '' },
        { src: 'photos/A7401704.jpg', alt: '' },
        { src: 'photos/A7401788.jpg', alt: '' },
        { src: 'photos/A7401837_blue_large.jpg', alt: '' },
        { src: 'photos/A7401813_blue.jpg', alt: '' }
    ]
},

'couples-years-es': {
    title: 'Sesiones de pareja',
    description: 'A lo largo de los años he fotografiado muchas parejas, capturando la conexión entre ellas y destacando la relación humana como el aspecto más importante.',
    photos: [
        { src: 'photos/DSC00105.jpg', alt: '' },
        { src: 'photos/DSC00091.jpg', alt: '' },
        { src: 'photos/DSC00102.jpg', alt: '' },
        { src: 'photos/DSC00448.jpg', alt: '' },
        { src: 'photos/DSC00449.jpg', alt: '' },
        { src: 'photos/DSC00562_lighter.jpg', alt: '' },
        { src: 'photos/DSC00593.jpg', alt: '' },
        { src: 'photos/DSC6472-2.jpg', alt: '' },
        { src: 'photos/DSC6533-1.jpg', alt: '' },
        { src: 'photos/DSC6508.jpg', alt: '' }
    ]
},

'lisy-es': {
    title: 'Sesión fotográfica individual',
    description: 'Sesión de fotos para una chica que me encontró en internet, hecha para sus redes sociales. Se realizó en Formigal, España.',
    photos: [
        { src: 'photos/A7403251-Enhanced-NR_02.jpg', alt:'' },
        { src: 'photos/A7403246-Enhanced-NR_02.jpg', alt: '' },
        { src: 'photos/A7403223_03.jpg', alt:'' },
        { src: 'photos/A7403255-Enhanced-NR_02.jpg', alt: '' },
        { src: 'photos/A7403288.jpg', alt: '' },
        { src: 'photos/A7403254-Enhanced-NR.jpg', alt:'' },
        { src: 'photos/A7403237-Enhanced-NR.jpg', alt:'' }
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



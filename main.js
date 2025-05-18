window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Collection data - in a real implementation, this would come from a database or CMS
    const collections = {
		
		'phot-proj': {
            title: 'Photography Project about Couples',
            description: 'I’m really passionate about capturing the connection between people—especially couples. That’s why I decided to create my own photography project about love. The idea is to show how each couple lives in their own world, fully immersed in their love, not worrying about what’s happening around them. Sometimes, they might not even fit the standards of the world around them 😊',
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
		
		
        'amlul': {
            title: 'Photoshoot from Amlul clothing brand',
            description: 'The shoot took place in Madrid, in a location that visually resembles Miami, reflecting the brand’s timeless spirit.',
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
        'eyelash-specialist': {
            title: 'Branding photoshoot for an eyelash extension specialist',
            description: 'An eyelash extension specialist reached out for a photoshoot to enhance her personal brand on social media. We did the session in her salon using my lighting gear.',
            photos: [
                { src: 'photos/A7401932.jpg', alt: '' },
                { src: 'photos/A7401947.jpg', alt: '' },
                { src: 'photos/A7401924.jpg', alt: '' },
                { src: 'photos/A7402020.jpg', alt: '' },
                { src: 'photos/A7402007.jpg', alt: '' },
                { src: 'photos/A7401945.jpg', alt: '' },
				{ src: 'photos/A7402039.jpg', alt: '' },
            ]
        },
        'carlos-laura': {
            title: 'Carlos & Laura – Cinematic Couple Photoshoot',
            description: 'The couple wanted a session with two outfits, and for the wedding attire, they were looking for something more cinematic and symbolic.',
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
        'lana-personal': {
            title: 'An individual portrait session',
            description: 'Lana reached out for a personal photoshoot, and for her birthday, we did it right in her beauty salon using my gear and lighting.',
            photos: [
                { src: 'photos/A7401767.jpg', alt: '' },
				{ src: 'photos/A7401709.jpg', alt: '' },
                { src: 'photos/A7401704.jpg', alt: '' },             
                { src: 'photos/A7401788.jpg', alt: '' },
                { src: 'photos/A7401837_blue_large.jpg', alt: '' },
				{ src: 'photos/A7401813_blue.jpg', alt: '' }
				
            ]
        },
        'couples-years': {
            title: 'Couple sessions',
            description: 'Over the years, I have photographed many couples, capturing the connection between them and highlighting the human relationship as the most important aspect.',
            photos: [
                { src: 'photos/DSC00105.jpg', alt: '' },
                { src: 'photos/DSC00091.jpg', alt: '' },
                { src: 'photos/DSC00102.jpg', alt: '' },
                { src: 'photos/DSC00448.jpg', alt: '' },
                { src: 'photos/DSC00449.jpg', alt: '' },
                { src: 'photos/DSC00562_lighter.jpg', alt: '' },
				{ src: 'photos/DSC00593.jpg', alt: '' },
				{ src: 'photos/_DSC6472-2.jpg', alt: '' },
				{ src: 'photos/_DSC6533-1.jpg', alt: '' },
				{ src: 'photos/_DSC6508.jpg', alt: '' }
		
            ]
        },
        'lisy': {
            title: 'An individual photo shoot',
            description: 'The photoshoot for a girl who found me online, done for her social media. It took place in Formigal, Spain.',
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
		
		'dafnis': {
            title: 'Photo retouching for Dafni Girls Crossdressing Studio',
            description: "For almost two years now, I've been doing this as a side job, focusing on retouching photos to help men look more feminine. My main goal is to soften their features, eliminate wrinkles, and remove unwanted hair, among other adjustments.",
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
		
		
		'savin': {
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
        }
		
		
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
        rootMargin: '300px 0px', // Increased from 200px for earlier loading
        threshold: 0.1 // Increased from 0.01 to require more visibility before loading
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
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
        'wedding-moments': {
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
        'portrait-studio': {
            title: 'Branding photoshoot for an eyelash extension specialist',
            description: 'An eyelash extension specialist reached out for a photoshoot to enhance her personal brand on social media. We did the session in her salon using my lighting gear.',
            photos: [
                { src: 'photos/A7401932.jpg', alt: 'Professional headshot' },
                { src: 'photos/A7401947.jpg', alt: 'Creative portrait' },
                { src: 'photos/A7401924.jpg', alt: 'Black and white portrait' },
                { src: 'photos/A7402020.jpg', alt: 'Studio lighting setup' },
                { src: 'photos/A7402007.jpg', alt: 'Corporate portrait' },
                { src: 'photos/A7401945.jpg', alt: 'Artistic portrait' },
				{ src: 'photos/A7402039.jpg', alt: 'Artistic portrait' },
            ]
        },
        'Carlos y Laura': {
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
        'product-photography': {
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
        'family-portraits': {
            title: 'Family Portraits',
            description: 'Capturing the connections and dynamics between family members.',
            photos: [
                { src: '/api/placeholder/800/600', alt: 'Large family group' },
                { src: '/api/placeholder/800/600', alt: 'Parents with children' },
                { src: '/api/placeholder/800/600', alt: 'Sibling interaction' },
                { src: '/api/placeholder/800/600', alt: 'Family at home' },
                { src: '/api/placeholder/800/600', alt: 'Multi-generation portrait' },
                { src: '/api/placeholder/800/600', alt: 'Family candid moment' }
            ]
        },
        'nature-escapes': {
            title: 'Nature Escapes',
            description: 'Breathtaking landscapes capturing the beauty of natural environments.',
            photos: [
                { src: '/api/placeholder/800/600', alt: 'Mountain landscape' },
                { src: '/api/placeholder/800/600', alt: 'Ocean view' },
                { src: '/api/placeholder/800/600', alt: 'Forest pathway' },
                { src: '/api/placeholder/800/600', alt: 'Sunset landscape' },
                { src: '/api/placeholder/800/600', alt: 'Lake reflection' },
                { src: '/api/placeholder/800/600', alt: 'Natural details' }
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



// Add this to your main.js file or replace the previous contact form code

// Contact form handling with mailto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form data
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Validate email format
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // If we get here, validation passed - proceed with mailto
            
            // Create a mailto link with the form data
            const mailtoLink = `mailto:shchukinavideo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            
            // Open the mailto link
            window.location.href = mailtoLink;
            
            // Show success message briefly before the email client opens
            showFormMessage('Opening your email client...', 'success');
            
            // Reset the form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form message display function
function showFormMessage(message, type) {
    // Check if a message element already exists
    let messageElement = document.querySelector('.form-message');
    
    // If not, create one
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        contactForm.appendChild(messageElement);
    }
    
    // Set message and style based on type
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    
    // Make sure it's visible
    messageElement.style.display = 'block';
    
    // Only auto-remove error messages, not success ones (since we'll navigate away)
    if (type === 'error') {
        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                messageElement.style.display = 'none';
                messageElement.style.opacity = '1';
            }, 500);
        }, 4000);
    }
}
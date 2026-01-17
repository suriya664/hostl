// Main JavaScript for HosteVPG Accommodation Site

// Navbar Active Link Highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.navbar');
        if (!isClickInsideNav && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Form Submission Handler with AJAX
function handleFormSubmission(formId, successMessage) {
    const form = document.getElementById(formId);
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        
        // Simulate AJAX request (Replace with actual API endpoint)
        setTimeout(() => {
            // Success response
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
            alertDiv.innerHTML = `
                <strong>Success!</strong> ${successMessage}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            form.insertAdjacentElement('afterend', alertDiv);
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            
            // Remove alert after 5 seconds
            setTimeout(() => {
                alertDiv.remove();
            }, 5000);
            
            // In production, replace setTimeout with actual fetch/axios call:
            /*
            fetch('your-api-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle success
                showAlert('success', successMessage);
                form.reset();
            })
            .catch(error => {
                // Handle error
                showAlert('danger', 'Something went wrong. Please try again.');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
            */
        }, 1500);
    });
}

// Initialize form handlers
document.addEventListener('DOMContentLoaded', function() {
    // Booking/Enquiry Form
    handleFormSubmission('enquiryForm', 'Your enquiry has been submitted successfully! We will contact you soon.');
    
    // Contact Form (if exists)
    handleFormSubmission('contactForm', 'Your message has been sent successfully!');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// WhatsApp Click Handler
function openWhatsApp(message = 'Hello, I am interested in your PG accommodation.') {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Add WhatsApp button click handlers
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, [data-whatsapp]');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = this.getAttribute('data-message') || 'Hello, I am interested in your PG accommodation.';
            openWhatsApp(message);
        });
    });
});

// Call Now Handler
function callNow(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

// Add call button handlers
document.addEventListener('DOMContentLoaded', function() {
    const callButtons = document.querySelectorAll('[data-call]');
    callButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const phone = this.getAttribute('data-call');
            callNow(phone);
        });
    });
});

// Room Availability Checker (Example)
function checkAvailability(roomType) {
    // This would typically make an AJAX call to check availability
    console.log(`Checking availability for ${roomType}`);
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ available: true, count: 5 });
        }, 500);
    });
}

// Testimonial Carousel (if using Bootstrap carousel)
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#testimonialCarousel');
    if (carousel) {
        // Bootstrap carousel will handle this automatically
        // Add custom controls if needed
    }
});

// Image Error Handling - Add fallback for failed images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img:not([src=""])');
    images.forEach(img => {
        // Skip if already has error handler
        if (img.dataset.errorHandled) return;
        img.dataset.errorHandled = 'true';
        
        img.addEventListener('error', function() {
            // Use reliable placeholder service as fallback
            const width = this.naturalWidth || 800;
            const height = this.naturalHeight || 600;
            // Use picsum.photos as reliable fallback
            this.src = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
            this.style.backgroundColor = 'var(--light-gray)';
            this.style.opacity = '0.8';
        });
        
        // Add loading attribute for better performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
        } else {
            field.classList.remove('is-invalid');
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                field.classList.add('is-invalid');
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(field.value.replace(/\D/g, ''))) {
                isValid = false;
                field.classList.add('is-invalid');
            }
        }
    });
    
    return isValid;
}

// Add validation to forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(form.id)) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
});


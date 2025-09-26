/*
 * File name: main.js
 * Student's Name: Manoj Kumar
 * Student ID: 301546699
 * Date: September 26, 2025
 * Description: Main JavaScript file for Express.js portfolio website
 */

// ===== MAIN JAVASCRIPT FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== NAVIGATION FUNCTIONALITY =====
    initializeNavigation();
    
    // ===== MOBILE MENU FUNCTIONALITY =====
    initializeMobileMenu();
    
    // ===== SCROLL EFFECTS =====
    initializeScrollEffects();
    
    // ===== SMOOTH SCROLLING =====
    initializeSmoothScrolling();
    
    // ===== FORM HANDLING =====
    initializeFormHandling();
    
    // ===== ANIMATIONS =====
    initializeAnimations();
    
    // ===== TYPING EFFECT FOR HERO =====
    initializeTypingEffect();
    
    // ===== STATISTICS COUNTER =====
    initializeStatsCounter();
    
    // ===== PROJECT FILTERING =====
    initializeProjectFiltering();
    
    console.log('Portfolio website initialized successfully');
});

// ===== NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    // Highlight active navigation link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === '/')) {
            link.classList.add('active');
        }
    });
    
    // Add scroll effect to navigation
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show navigation on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ===== MOBILE MENU FUNCTIONALITY =====
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuToggle && navMenu) {
        // Create mobile menu toggle if it doesn't exist
        if (!mobileMenuToggle.innerHTML) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    }
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-content');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
    
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const elementsToObserve = document.querySelectorAll('.card, .section, .project-card, .service-card, .contact-panel');
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FORM HANDLING =====
function initializeFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Add loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Form validation
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const subject = contactForm.querySelector('#subject').value.trim();
            const message = contactForm.querySelector('#message').value.trim();
            
            if (!name || !email || !subject || !message) {
                e.preventDefault();
                showNotification('Please fill in all fields', 'error');
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                return;
            }
            
            if (!isValidEmail(email)) {
                e.preventDefault();
                showNotification('Please enter a valid email address', 'error');
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                return;
            }
            
            // If validation passes, the form will submit normally
            // The server will handle the submission and redirect
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            transform: translateX(400px);
            transition: transform 0.3s ease-out;
            z-index: 10000;
            max-width: 300px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-info {
            background-color: var(--primary-color);
        }
        
        .notification-error {
            background-color: var(--danger-color);
        }
        
        .notification-success {
            background-color: var(--success-color);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    `;
    document.head.appendChild(style);
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const texts = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentText = texts[textIndex];
            
            if (!isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 2000); // Wait before deleting
                    return;
                }
            } else {
                typingElement.textContent = currentText.substring(0, charIndex);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }
            
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
        
        typeEffect();
    }
}

// ===== STATISTICS COUNTER =====
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        
        statNumbers.forEach(stat => {
            statsObserver.observe(stat);
        });
    }
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count') || element.textContent.replace(/[^\d]/g, ''));
    const suffix = element.textContent.replace(/[\d]/g, '');
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 20);
}

// ===== PROJECT FILTERING =====
function initializeProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== LAZY LOADING FOR IMAGES =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initializeAccessibility() {
    // Keyboard navigation for mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // Focus management for modal-like mobile menu
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.focus();
            }
        });
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to a logging service here
});

// ===== SERVICE WORKER REGISTRATION (if needed) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// ===== EXPORT FUNCTIONS FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        showNotification,
        debounce
    };
}
/* ============================================
   VELMOR DESIGN - JAVASCRIPT
   ============================================ */

/**
 * Form Handling
 * Captures form submissions and validates data
 */

// Homepage Contact Form
const homepageForm = document.getElementById('homepageContactForm');
if (homepageForm) {
    homepageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        if (!validateFormData(data)) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        submitFormWithModal(this);
    });
}

// Contact Page Form
const contactPageForm = document.getElementById('contactPageFormEl');
if (contactPageForm) {
    contactPageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        if (!validateFormData(data)) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        submitFormWithModal(this);
    });
}

// Hero Email Form
const heroEmailForm = document.querySelector('.hero-email-form');
if (heroEmailForm) {
    heroEmailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitFormWithModal(this);
    });
}

/**
 * Submit form via fetch and show confirmation modal
 */
function submitFormWithModal(form) {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(function() {
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
        openConfirmationModal();
    })
    .catch(function() {
        btn.textContent = originalText;
        btn.disabled = false;
        showNotification('Something went wrong. Please try again.', 'error');
    });
}

/**
 * Open the confirmation modal
 */
function openConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close the confirmation modal
 */
function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Modal close listeners
const modalCloseBtn = document.getElementById('confirmationModalClose');
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeConfirmationModal);
}
const confirmationModal = document.getElementById('confirmationModal');
if (confirmationModal) {
    confirmationModal.addEventListener('click', function(e) {
        if (e.target === this) closeConfirmationModal();
    });
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeConfirmationModal();
});

/**
 * Handle Form Submission
 * Validates and prepares form data for Wix integration
 * 
 * @param {HTMLFormElement} form - The form element
 * @param {string} formType - Type of form ('homepage' or 'contact-page')
 */
function handleFormSubmission(form, formType) {
    // Get all form fields
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Add metadata
    data.formType = formType;
    data.timestamp = new Date().toISOString();
    data.submittedAt = new Date().toLocaleString();
    
    // Validate required fields
    if (!validateFormData(data)) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Prepare the data for submission
    console.log('Form submitted:', data);
    
    // For Wix Studio integration, this data would be sent to:
    // - Wix Form API
    // - Email service
    // - Backend service
    // 
    // Example Wix integration point:
    // The form data structure is ready to be connected to Wix's
    // native form handling or external email service
    
    // Show success message
    showSubmissionSuccess(form);
    
    // Reset form
    form.reset();
    
    // In production, send data to backend or Wix API
    sendToWixBackend(data);
}

/**
 * Validate Form Data
 * Checks that all required fields are filled
 * 
 * @param {Object} data - Form data object
 * @returns {boolean} - True if valid
 */
function validateFormData(data) {
    const requiredFields = ['name', 'email', 'businessName', 'serviceNeeded', 'projectDetails'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

/**
 * Show Submission Success Message
 * Displays a success notification to the user
 * 
 * @param {HTMLFormElement} form - The form element
 */
function showSubmissionSuccess(form) {
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Message Sent Successfully!';
    button.style.backgroundColor = '#ffffff';
    button.style.color = '#000000';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
        button.style.color = '';
        button.disabled = false;
    }, 3000);
}

/**
 * Show Notification
 * Displays a notification message to the user
 * 
 * @param {string} message - The message to display
 * @param {string} type - Type of notification ('success' or 'error')
 */
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: ${type === 'success' ? '#ffffff' : '#ff4444'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        border-radius: 2px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Send To Wix Backend
 * Placeholder for Wix integration
 * 
 * Replace this with actual Wix API call or backend endpoint
 * 
 * @param {Object} data - Form data to send
 */
function sendToWixBackend(data) {
    // For development/testing, log the data
    console.log('Preparing to send form data to Wix backend:', data);
    
    // Example of how this would be integrated with Wix:
    // 
    // Option 1: Send to external email service
    // fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
    //
    // Option 2: Send to Wix REST API
    // fetch('https://www.wixapis.com/v1/crm/contacts', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Bearer ' + WIX_API_KEY,
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         contact: {
    //             firstName: data.name.split(' ')[0],
    //             lastName: data.name.split(' ')[1] || '',
    //             emails: { emails: [data.email] },
    //             source: { sourceType: 'WIX_FORM' }
    //         }
    //     })
    // })
    //
    // Option 3: Use Wix's native form submission
    // This data structure is compatible with Wix Studio forms
}

/**
 * Add keyframe animations to document
 */
function setupAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Setup Link Smoothness
 * Adds smooth scrolling and transitions to internal links
 */
function setupLinkHandlers() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add Hover Effects to Interactive Elements
 */
function setupHoverEffects() {
    const interactiveElements = document.querySelectorAll('.service-card, .portfolio-item, .info-box');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease-out';
        });
    });
}

/**
 * Initialize All Interactions
 * Called when DOM is ready
 */
function setupMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            toggle.classList.remove('active');
            navLinks.classList.remove('mobile-open');
            document.body.classList.remove('menu-open');
        });
    });
}

function initializeVelmor() {
    setupAnimations();
    setupLinkHandlers();
    setupHoverEffects();
    setupMobileMenu();
    
    console.log('Velmor Design - Initialized');
}

/**
 * Form Data Export for Wix Integration
 * Provides a clean interface for extracting form data
 */
window.VelmorForms = {
    /**
     * Get last form submission data
     * Useful for Wix backend integration
     */
    getLastSubmission: function() {
        return window.lastFormData || null;
    },
    
    /**
     * Manual form data extraction
     * Extract data from a form element by ID
     */
    extractFormData: function(formId) {
        const form = document.getElementById(formId);
        if (!form) return null;
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.timestamp = new Date().toISOString();
        
        return data;
    },
    
    /**
     * Validate email
     */
    validateEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
};

/**
 * Side Navigation & Back to Top
 */
function setupScrollNav() {
    const sideNav = document.getElementById('sideNav');
    const backToTop = document.getElementById('backToTop');
    const dots = document.querySelectorAll('.side-nav-dot');
    const sectionIds = Array.from(dots).map(d => d.dataset.section);

    function onScroll() {
        const scrollY = window.scrollY;
        const viewportH = window.innerHeight;

        // Show/hide back-to-top after hero
        const pastHero = scrollY > viewportH * 0.5;
        if (backToTop) backToTop.classList.toggle('visible', pastHero);

        // Determine active section
        let activeId = sectionIds[0];
        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el && el.offsetTop - viewportH / 3 <= scrollY) {
                activeId = id;
            }
        }

        dots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.section === activeId);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/**
 * Sync navbar top position with promo banner height
 */
function syncNavbarPosition() {
    var banner = document.querySelector('.promo-banner');
    var navbar = document.querySelector('.navbar');
    if (!banner || !navbar) return;

    function update() {
        var h = banner.offsetHeight;
        navbar.style.top = h + 'px';
    }

    update();
    window.addEventListener('resize', update);
}

/**
 * DOM Ready
 * Initialize when document is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeVelmor();
    setupScrollNav();
    setupProcessProgress();
    syncNavbarPosition();
});

// Keep track of last form submission for potential Wix integration
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('contact-form')) {
        window.lastFormData = new FormData(e.target);
    }
}, true);

/**
 * Process Progress Bar
 * Interactive step-by-step progress indicator
 */
function setupProcessProgress() {
    const dots = document.querySelectorAll('.progress-dot');
    const steps = document.querySelectorAll('.process-step');
    const fill = document.querySelector('.progress-fill');
    if (!dots.length || !steps.length || !fill) return;

    function setActiveStep(index) {
        dots.forEach(function(dot, i) {
            dot.classList.remove('active', 'completed');
            if (i < index) dot.classList.add('completed');
            if (i === index) dot.classList.add('active');
        });
        steps.forEach(function(step, i) {
            step.classList.toggle('active', i === index);
        });
        var pct = dots.length > 1 ? (index / (dots.length - 1)) * 100 : 0;
        fill.style.width = pct + '%';
    }

    dots.forEach(function(dot, i) {
        dot.addEventListener('click', function() { setActiveStep(i); });
    });
    steps.forEach(function(step, i) {
        step.addEventListener('click', function() { setActiveStep(i); });
    });

    setActiveStep(0);
}

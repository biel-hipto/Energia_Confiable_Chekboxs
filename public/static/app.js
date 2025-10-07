// JavaScript for Energía Confiable Landing Page

// Global variables
let selectedPlan = '';

// DOM loaded event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    setupEventListeners();
    setupFormValidation();
    setupScrollEffects();
    trackPageView();
}

// Event listeners
function setupEventListeners() {
    // Form submission
    const form = document.getElementById('tarifa-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('[onclick="toggleMobileMenu()"]');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Plan selection buttons
    document.querySelectorAll('[onclick*="selectPlan"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const plan = this.getAttribute('onclick').match(/selectPlan\\('(.+?)'\\)/)[1];
            selectPlan(plan);
        });
    });
}

// Form validation setup
function setupFormValidation() {
    const form = document.getElementById('tarifa-form');
    if (!form) return;
    
    // Real-time validation
    const inputs = form.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('form-error')) {
                validateField(this);
            }
        });
    });
    
    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateEmail(this);
        });
    }
    
    // Phone validation
    const phoneInput = document.getElementById('telefono');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }
}

// Field validation
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Required field check
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        showFieldError(field, 'Este campo es obligatorio');
    } else if (field.type === 'email' && value) {
        isValid = validateEmail(field);
    } else {
        showFieldSuccess(field);
    }
    
    return isValid;
}

// Email validation
function validateEmail(field) {
    const email = field.value.trim();
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        showFieldError(field, 'Por favor, introduce un email válido');
        return false;
    } else if (email) {
        showFieldSuccess(field);
        return true;
    }
    return true;
}

// Phone number formatting
function formatPhoneNumber(field) {
    let value = field.value.replace(/\\D/g, '');
    
    // Spanish phone number format
    if (value.length >= 9) {
        if (value.startsWith('34')) {
            value = value.substring(2);
        }
        value = value.substring(0, 9);
        value = value.replace(/(\\d{3})(\\d{3})(\\d{3})/, '$1 $2 $3');
    }
    
    field.value = value;
}

// Show field error
function showFieldError(field, message) {
    field.classList.remove('form-success');
    field.classList.add('form-error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-600 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Show field success
function showFieldSuccess(field) {
    field.classList.remove('form-error');
    field.classList.add('form-success');
    
    // Remove error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Form submission handler
async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate all fields
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isFormValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    // Check terms acceptance
    const termsCheckbox = document.getElementById('acepta_terminos');
    if (!termsCheckbox.checked) {
        showNotification('Debe aceptar los términos y condiciones', 'error');
        isFormValid = false;
    }
    
    if (!isFormValid) {
        showNotification('Por favor, corrija los errores en el formulario', 'error');
        return;
    }
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    try {
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Add selected plan if any
        if (selectedPlan) {
            data.plan_interes = selectedPlan;
        }
        
        // Add timestamp and tracking data
        data.timestamp = new Date().toISOString();
        data.source = 'landing-page';
        data.user_agent = navigator.userAgent;
        
        // Submit form data
        const response = await axios.post('/api/solicitar-tarifa', data, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000
        });
        
        if (response.data.success) {
            showNotification(response.data.message, 'success');
            form.reset();
            
            // Track conversion
            trackConversion(data);
            
            // Scroll to top of form
            document.getElementById('contacto').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
        } else {
            showNotification('Hubo un error al procesar su solicitud. Por favor, inténtelo de nuevo.', 'error');
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showNotification('Error de conexión. Por favor, verifique su conexión a internet e inténtelo de nuevo.', 'error');
    } finally {
        // Remove loading state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
    }
}

// Plan selection
function selectPlan(plan) {
    selectedPlan = plan;
    
    // Update form with selected plan
    const planSelect = document.getElementById('plan_interes');
    if (planSelect) {
        planSelect.value = plan;
    }
    
    // Scroll to form
    scrollToForm();
    
    // Track plan selection
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'plan_selected',
            plan_type: plan,
            timestamp: new Date().toISOString()
        });
    }
    
    // Show notification
    const planNames = {
        'basico': 'Plan Básico',
        'profesional': 'Plan Profesional',
        'empresarial': 'Plan Empresarial'
    };
    
    showNotification(`Has seleccionado el ${planNames[plan]}. Complete el formulario para recibir su propuesta.`, 'success');
}

// Scroll to form
function scrollToForm() {
    const formSection = document.getElementById('contacto');
    if (formSection) {
        formSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const messageContainer = document.getElementById('form-message');
    const messageText = document.getElementById('message-text');
    
    if (!messageContainer || !messageText) return;
    
    messageText.textContent = message;
    messageContainer.className = `notification border-l-4 p-4 rounded-lg text-center mt-6 ${type === 'success' ? 'notification-success' : 'notification-error'}`;
    messageContainer.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, 5000);
}

// Scroll effects
function setupScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('header-sticky');
            } else {
                header.classList.remove('header-sticky');
            }
        });
    }
    
    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Analytics tracking
function trackPageView() {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'page_view',
            page_title: document.title,
            page_location: window.location.href,
            timestamp: new Date().toISOString()
        });
    }
}

function trackConversion(formData) {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'form_submission',
            form_type: 'tarifa_request',
            empresa: formData.empresa,
            sector: formData.sector,
            consumo: formData.consumo,
            plan_interes: formData.plan_interes,
            timestamp: new Date().toISOString()
        });
    }
    
    // Facebook Pixel tracking if available
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: 'Solicitud de Tarifa',
            content_category: 'Energia'
        });
    }
}

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // Track errors
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'javascript_error',
            error_message: e.message,
            error_filename: e.filename,
            error_lineno: e.lineno,
            timestamp: new Date().toISOString()
        });
    }
});

// Console message for developers
console.log('%c🔋 Energía Confiable - Landing Page', 'color: #da532c; font-size: 16px; font-weight: bold;');
console.log('%cSi eres desarrollador y estás interesado en unirte a nuestro equipo, envía tu CV a: desarrollo@energia-confiable.com', 'color: #666; font-size: 12px;');
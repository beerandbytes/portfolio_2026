// ============================================
// Navigation Functionality
// ============================================

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInsideNav = navbar.contains(e.target);
            const isClickOnLangDropdown = e.target.closest('.lang-dropdown');
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            } else if (isClickOnLangDropdown && navMenu.classList.contains('active')) {
                // Don't close menu when interacting with language dropdown
                return;
            }
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar background on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (navbar) {
            if (currentScroll > 50) {
                navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
        
        lastScroll = currentScroll;
    });

    // Active section highlighting
    updateActiveSection();
    window.addEventListener('scroll', debounce(updateActiveSection, 100));
}

// ============================================
// Active Section Detection
// ============================================

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// Back to Top Button
// ============================================

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initially hide the button
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
    backToTopBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
}

// ============================================
// Debounce Utility
// ============================================

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

// ============================================
// Language Selector Dropdown
// ============================================

function initLanguageSelector() {
    const langDropdownDesktop = document.getElementById('langDropdownDesktop');
    const langDropdownMobile = document.getElementById('langDropdownMobile');
    const langMenuDesktop = document.getElementById('langDropdownMenuDesktop');
    const langMenuMobile = document.getElementById('langDropdownMenuMobile');
    const langOptions = document.querySelectorAll('.lang-option');
    
    const flagMap = {
        'es-ES': 'https://flagcdn.com/w20/es.png',
        'fr-FR': 'https://flagcdn.com/w20/fr.png',
        'en-US': 'https://flagcdn.com/w20/gb.png'
    };
    
    const codeMap = {
        'es-ES': 'ES',
        'fr-FR': 'FR',
        'en-US': 'EN'
    };
    
    // Function to update dropdown display
    function updateDropdownDisplay(lang) {
        const flagUrl = flagMap[lang] || 'https://flagcdn.com/w20/gb.png';
        const code = codeMap[lang] || 'EN';
        
        // Update desktop dropdown
        const flagDesktop = document.getElementById('langFlagDesktop');
        const codeDesktop = document.getElementById('langCodeDesktop');
        if (flagDesktop && flagDesktop.tagName === 'IMG') {
            flagDesktop.src = flagUrl;
            flagDesktop.alt = code;
        }
        if (codeDesktop) codeDesktop.textContent = code;
        
        // Update mobile dropdown
        const flagMobile = document.getElementById('langFlagMobile');
        const codeMobile = document.getElementById('langCodeMobile');
        if (flagMobile && flagMobile.tagName === 'IMG') {
            flagMobile.src = flagUrl;
            flagMobile.alt = code;
        }
        if (codeMobile) codeMobile.textContent = code;
        
        // Update active state
        langOptions.forEach(option => {
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    
    // Function to toggle dropdown
    function toggleDropdown(button, menu, otherButton, otherMenu) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close other dropdowns
        if (otherButton) {
            otherButton.setAttribute('aria-expanded', 'false');
            if (otherMenu) otherMenu.classList.remove('show');
        }
        
        // Toggle current dropdown
        button.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }
    }
    
    // Desktop dropdown toggle
    if (langDropdownDesktop && langMenuDesktop) {
        langDropdownDesktop.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown(langDropdownDesktop, langMenuDesktop, langDropdownMobile, langMenuMobile);
        });
    }
    
    // Mobile dropdown toggle
    if (langDropdownMobile && langMenuMobile) {
        langDropdownMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown(langDropdownMobile, langMenuMobile, langDropdownDesktop, langMenuDesktop);
        });
    }
    
    // Handle language option clicks
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const lang = option.dataset.lang;
            if (lang && window.i18n) {
                window.i18n.setLanguage(lang);
                
                // Close all dropdowns
                if (langMenuDesktop) langMenuDesktop.classList.remove('show');
                if (langMenuMobile) langMenuMobile.classList.remove('show');
                if (langDropdownDesktop) langDropdownDesktop.setAttribute('aria-expanded', 'false');
                if (langDropdownMobile) langDropdownMobile.setAttribute('aria-expanded', 'false');
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                const navToggle = document.getElementById('navToggle');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-dropdown')) {
            if (langMenuDesktop) langMenuDesktop.classList.remove('show');
            if (langMenuMobile) langMenuMobile.classList.remove('show');
            if (langDropdownDesktop) langDropdownDesktop.setAttribute('aria-expanded', 'false');
            if (langDropdownMobile) langDropdownMobile.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Update dropdown when language changes
    document.addEventListener('languageChanged', () => {
        if (window.i18n) {
            const currentLang = window.i18n.getCurrentLanguage();
            updateDropdownDisplay(currentLang);
        }
    });
    
    // Initialize display with current language
    if (window.i18n) {
        const currentLang = window.i18n.getCurrentLanguage();
        updateDropdownDisplay(currentLang);
    } else {
        // Wait for i18n to be ready
        setTimeout(() => {
            if (window.i18n) {
                const currentLang = window.i18n.getCurrentLanguage();
                updateDropdownDisplay(currentLang);
            }
        }, 100);
    }
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBackToTop();
    initLanguageSelector();
});

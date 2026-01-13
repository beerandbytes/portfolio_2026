// ============================================
// Scroll Animations with Intersection Observer
// ============================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;

    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// Add animation classes to elements
// ============================================

function addAnimationClasses() {
    // Add animation classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (section.id !== 'home') {
            const children = section.querySelectorAll('.container > *');
            children.forEach((child, childIndex) => {
                if (!child.classList.contains('animate-on-scroll')) {
                    child.classList.add('animate-on-scroll', 'fade-up');
                    if (childIndex > 0) {
                        child.classList.add(`stagger-${Math.min(childIndex, 5)}`);
                    }
                }
            });
        }
    });

    // Add animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        if (!item.classList.contains('animate-on-scroll')) {
            item.classList.add('animate-on-scroll', 'fade-left');
            const staggerIndex = (index % 5) + 1;
            item.classList.add(`stagger-${staggerIndex}`);
        }
    });

    // Add animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        if (!card.classList.contains('animate-on-scroll')) {
            card.classList.add('animate-on-scroll', 'fade-up');
            const staggerIndex = (index % 5) + 1;
            card.classList.add(`stagger-${staggerIndex}`);
        }
    });

    // Add animation to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        if (!item.classList.contains('animate-on-scroll')) {
            item.classList.add('animate-on-scroll', 'fade-up');
            const staggerIndex = (index % 5) + 1;
            item.classList.add(`stagger-${staggerIndex}`);
        }
    });
}

// ============================================
// Parallax effect for hero section (optional)
// ============================================

function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ============================================
// Typing animation for hero (optional enhancement)
// ============================================

function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid var(--accent-primary)';
    
    let index = 0;
    const typingSpeed = 100;

    function type() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    }

    // Start typing animation after a short delay
    setTimeout(type, 500);
}

// ============================================
// Initialize all animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        addAnimationClasses();
        initScrollAnimations();
    }, 100);
});

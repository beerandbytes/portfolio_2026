// ============================================
// Tech Icons Mapping with Colors
// ============================================

const techIcons = {
    'HTML': { icon: 'html5', color: '#E34F26' },
    'HTML5': { icon: 'html5', color: '#E34F26' },
    'CSS': { icon: 'css3', color: '#1572B6' },
    'CSS3': { icon: 'css3', color: '#1572B6' },
    'JavaScript': { icon: 'javascript', color: '#F7DF1E' },
    'React': { icon: 'react', color: '#61DAFB' },
    'Preact': { icon: 'preact', color: '#673AB8' },
    'Bootstrap': { icon: 'bootstrap', color: '#7952B3' },
    'Vite': { icon: 'vite', color: '#646CFF' },
    'React Router': { icon: 'reactrouter', color: '#CA4245' },
    'Tailwind CSS': { icon: 'tailwindcss', color: '#06B6D4' },
    'Framer Motion': { icon: null, color: '#0055FF' }, // No existe en simple-icons
    'Socket.io': { icon: 'socketdotio', color: '#010101' },
    'Recharts': { icon: null, color: '#FF6B6B' }, // No existe en simple-icons
    'DaisyUI': { icon: 'daisyui', color: '#5A0FC8' },
    'Node.js': { icon: 'nodedotjs', color: '#339933' },
    'Deno': { icon: 'deno', color: '#000000' },
    'PHP': { icon: 'php', color: '#777BB4' },
    'Python': { icon: 'python', color: '#3776AB' },
    'C#': { icon: 'csharp', color: '#239120' },
    'Express': { icon: 'express', color: '#000000' },
    'JWT': { icon: 'jsonwebtokens', color: '#000000' },
    'Swagger': { icon: 'swagger', color: '#85EA2D' },
    'PostgreSQL': { icon: 'postgresql', color: '#316192' },
    'MySQL': { icon: 'mysql', color: '#4479A1' },
    'Deno KV': { icon: 'deno', color: '#000000' },
    'SQLite': { icon: 'sqlite', color: '#003B57' },
    'Drizzle ORM': { icon: 'drizzle', color: '#FF6B6B' },
    'Avalonia UI': { icon: null, color: '#FF6B6B' }, // No existe en simple-icons
    'Zustand': { icon: null, color: '#FF6B6B' }, // No existe en simple-icons
    'Radix UI': { icon: 'radixui', color: '#161618' },
    'Fresh': { icon: null, color: '#000000' }, // No existe en simple-icons
    'Docker': { icon: 'docker', color: '#2496ED' },
    'Docker Compose': { icon: 'docker', color: '#2496ED' },
    'Nginx': { icon: 'nginx', color: '#009639' },
    'Git': { icon: 'git', color: '#F05032' },
    'GitHub': { icon: 'github', color: '#181717' },
    'VS Code': { icon: 'visualstudiocode', color: '#007ACC' },
    'Visual Studio': { icon: 'visualstudio', color: '#5C2D91' },
    'SheetJS': { icon: null, color: '#217346' }, // No existe en simple-icons (usar xlsx o excel)
    'Responsive Design': { icon: null, color: '#8B5CF6' }, // No existe en simple-icons
    'Winston': { icon: null, color: '#FF6B6B' } // No existe en simple-icons
};

function getTechIcon(techName) {
    const tech = techIcons[techName];
    if (!tech) {
        // Fallback for unknown tech
        return {
            icon: 'code',
            color: '#8B5CF6'
        };
    }
    // Return null icon if it doesn't exist in simple-icons
    if (!tech.icon) {
        return {
            icon: null,
            color: tech.color
        };
    }
    return tech;
}

function getIconUrl(iconName) {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconName}.svg`;
}

// ============================================
// Preload Tech Icons
// ============================================

function preloadTechIcons() {
    // Collect all unique icon URLs from all projects
    const iconUrls = new Set();
    
    projects.forEach(project => {
        project.technologies.forEach(tech => {
            const techInfo = getTechIcon(tech);
            // Only preload if icon exists
            if (techInfo.icon) {
                const iconUrl = getIconUrl(techInfo.icon);
                iconUrls.add(iconUrl);
            }
        });
    });
    
    // Preload icons using Image objects for better error handling and caching
    // This method doesn't generate console warnings and handles 404s gracefully
    iconUrls.forEach(iconUrl => {
        const img = new Image();
        img.src = iconUrl;
        // Silently handle errors (icons that don't exist)
        img.onerror = () => {
            // Icon doesn't exist, that's okay - it will be handled in renderProjects
        };
        // Store in browser cache
        img.loading = 'eager';
    });
}

// ============================================
// Project Data with Translations
// ============================================

const projects = [
    {
        id: 1,
        title: {
            'es-ES': "Taller Mecánico",
            'fr-FR': "Garage Mécanique",
            'en-US': "Auto Repair Shop"
        },
        description: {
            'es-ES': "Sistema integral de gestión para talleres mecánicos diseñado para optimizar operaciones, gestionar citas, controlar inventario y manejar relaciones con clientes de manera eficiente.",
            'fr-FR': "Système de gestion complet pour garages automobiles conçu pour rationaliser les opérations, gérer les rendez-vous, suivre les stocks et gérer les relations clients efficacement.",
            'en-US': "A comprehensive automotive repair shop management system designed to streamline operations, manage appointments, track inventory, and handle customer relationships efficiently."
        },
        technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
        features: {
            'es-ES': [
                "Programación y gestión de citas",
                "Base de datos de clientes y seguimiento de historial",
                "Sistema de gestión de inventario",
                "Generación de facturas y facturación",
                "Gestión de empleados y asignación de tareas"
            ],
            'fr-FR': [
                "Planification et gestion des rendez-vous",
                "Base de données clients et suivi de l'historique",
                "Système de gestion des stocks",
                "Génération de factures et facturation",
                "Gestion des employés et attribution des tâches"
            ],
            'en-US': [
                "Appointment scheduling and management",
                "Customer database and history tracking",
                "Inventory management system",
                "Invoice generation and billing",
                "Employee management and task assignment"
            ]
        },
        githubUrl: "https://github.com/beerandbytes/taller_mecanico",
        liveUrl: null,
        category: "fullstack"
    },
    {
        id: 2,
        title: {
            'es-ES': "Portfolio Iker",
            'fr-FR': "Portfolio Iker",
            'en-US': "Portfolio Iker"
        },
        description: {
            'es-ES': "Sitio web de portfolio moderno y responsive que muestra trabajo profesional y proyectos. Construido con principios de diseño limpio y optimizado para rendimiento.",
            'fr-FR': "Site web de portfolio moderne et responsive présentant le travail professionnel et les projets. Construit avec des principes de design épuré et optimisé pour les performances.",
            'en-US': "A modern, responsive portfolio website showcasing professional work and projects. Built with clean design principles and optimized for performance."
        },
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        features: {
            'es-ES': [
                "Diseño completamente responsive",
                "Animaciones y transiciones suaves",
                "Galería de proyectos",
                "Integración de formulario de contacto",
                "Optimizado para SEO"
            ],
            'fr-FR': [
                "Design entièrement responsive",
                "Animations et transitions fluides",
                "Galerie de projets",
                "Intégration de formulaire de contact",
                "Optimisé pour le SEO"
            ],
            'en-US': [
                "Fully responsive design",
                "Smooth animations and transitions",
                "Project showcase gallery",
                "Contact form integration",
                "SEO optimized"
            ]
        },
        githubUrl: "https://github.com/beerandbytes/portfolio_iker",
        liveUrl: null,
        category: "frontend"
    },
    {
        id: 3,
        title: {
            'es-ES': "Fitness App",
            'fr-FR': "Application Fitness",
            'en-US': "Fitness App"
        },
        description: {
            'es-ES': "Aplicación full-stack de seguimiento de fitness que ayuda a los usuarios a monitorear entrenamientos, rastrear progreso, establecer metas y mantener un estilo de vida saludable.",
            'fr-FR': "Application de suivi fitness full-stack qui aide les utilisateurs à surveiller les entraînements, suivre les progrès, définir des objectifs et maintenir un mode de vie sain.",
            'en-US': "A full-stack fitness tracking application that helps users monitor workouts, track progress, set goals, and maintain a healthy lifestyle."
        },
        technologies: ["React", "Vite", "React Router", "Zustand", "Tailwind CSS", "Radix UI", "Framer Motion", "Socket.io", "Recharts", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "JWT", "Winston", "Swagger", "Docker", "Nginx"],
        features: {
            'es-ES': [
                "Autenticación de usuarios y perfiles",
                "Registro y seguimiento de entrenamientos",
                "Visualización de progreso con gráficos",
                "Establecimiento de metas y seguimiento de logros",
                "Base de datos de ejercicios y recomendaciones",
                "Comunicación en tiempo real con WebSockets",
                "Containerización con Docker"
            ],
            'fr-FR': [
                "Authentification des utilisateurs et profils",
                "Enregistrement et suivi des entraînements",
                "Visualisation des progrès avec graphiques",
                "Définition d'objectifs et suivi des réalisations",
                "Base de données d'exercices et recommandations",
                "Communication en temps réel avec WebSockets",
                "Containerisation avec Docker"
            ],
            'en-US': [
                "User authentication and profiles",
                "Workout logging and tracking",
                "Progress visualization with charts",
                "Goal setting and achievement tracking",
                "Exercise database and recommendations",
                "Real-time communication with WebSockets",
                "Docker containerization"
            ]
        },
        githubUrl: "https://github.com/beerandbytes/fitness_app",
        liveUrl: null,
        category: "fullstack"
    },
    {
        id: 4,
        title: {
            'es-ES': "InvoicePal",
            'fr-FR': "InvoicePal",
            'en-US': "InvoicePal"
        },
        description: {
            'es-ES': "Sistema de gestión de facturas para empresas para crear, gestionar y rastrear facturas. Simplifica los procesos de facturación y mejora el registro financiero.",
            'fr-FR': "Système de gestion de factures pour les entreprises pour créer, gérer et suivre les factures. Simplifie les processus de facturation et améliore la tenue des registres financiers.",
            'en-US': "An invoice management system for businesses to create, manage, and track invoices. Simplifies billing processes and improves financial record-keeping."
        },
        technologies: ["Deno", "Fresh", "Preact", "Tailwind CSS", "DaisyUI", "Deno KV", "SheetJS"],
        features: {
            'es-ES': [
                "Creación y edición de facturas",
                "Sistema de gestión de clientes",
                "Seguimiento del estado de facturas",
                "Funcionalidad de exportación a Excel (XLSX)",
                "Informes financieros y análisis",
                "Arquitectura moderna basada en Deno"
            ],
            'fr-FR': [
                "Création et édition de factures",
                "Système de gestion des clients",
                "Suivi du statut des factures",
                "Fonctionnalité d'exportation Excel (XLSX)",
                "Rapports financiers et analyses",
                "Architecture moderne basée sur Deno"
            ],
            'en-US': [
                "Invoice creation and editing",
                "Client management system",
                "Invoice status tracking",
                "Excel export functionality (XLSX)",
                "Financial reporting and analytics",
                "Modern Deno-based architecture"
            ]
        },
        githubUrl: "https://github.com/beerandbytes/facturas",
        liveUrl: null,
        category: "fullstack"
    },
    {
        id: 5,
        title: {
            'es-ES': "Sistema de Gestión de Clientes",
            'fr-FR': "Système de Gestion de Clients",
            'en-US': "Customer Management System"
        },
        description: {
            'es-ES': "Aplicación de escritorio offline para Windows 11 para gestión de clientes. Sistema completo con interfaz moderna y base de datos local.",
            'fr-FR': "Application de bureau hors ligne pour Windows 11 pour la gestion des clients. Système complet avec interface moderne et base de données locale.",
            'en-US': "Offline desktop application for Windows 11 for customer management. Complete system with modern interface and local database."
        },
        technologies: ["C#", "Avalonia UI", "SQLite"],
        features: {
            'es-ES': [
                "Aplicación de escritorio multiplataforma",
                "Gestión completa de clientes",
                "Base de datos local con SQLite",
                "Interfaz moderna con Avalonia UI",
                "Funcionalidad offline completa"
            ],
            'fr-FR': [
                "Application de bureau multiplateforme",
                "Gestion complète des clients",
                "Base de données locale avec SQLite",
                "Interface moderne avec Avalonia UI",
                "Fonctionnalité hors ligne complète"
            ],
            'en-US': [
                "Cross-platform desktop application",
                "Complete customer management",
                "Local database with SQLite",
                "Modern interface with Avalonia UI",
                "Complete offline functionality"
            ]
        },
        githubUrl: "https://github.com/beerandbytes/[nombre-repo]",
        liveUrl: null,
        category: "desktop"
    }
];

// ============================================
// Utility: Escape HTML to prevent XSS and rendering issues
// ============================================

function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Render Projects
// ============================================

// Make renderProjects available globally for debugging
window.renderProjects = function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) {
        console.warn('Projects grid not found, retrying...');
        // Retry after a short delay if DOM is not ready
        setTimeout(renderProjects, 100);
        return;
    }

    // Get current language with fallback - don't block if i18n is not ready
    let currentLang = 'en-US';
    let t = null;
    
    if (window.i18n) {
        try {
            currentLang = window.i18n.getCurrentLanguage() || 'en-US';
            t = window.i18n.getTranslations();
            
            // Validate translations are available
            if (!t || !t.projects) {
                console.warn('Translations not fully loaded, using fallback');
                currentLang = 'en-US';
                // Try to get default translations
                if (window.i18n && window.i18n.getTranslations) {
                    t = window.i18n.getTranslations();
                }
            }
        } catch (error) {
            console.error('Error getting translations:', error);
            currentLang = 'en-US';
            t = null;
        }
    } else {
        console.warn('i18n not available, using default language (en-US)');
    }
    
    // Store existing project cards to preserve animation states
    const existingCards = projectsGrid.querySelectorAll('.project-card');
    const isLanguageChange = existingCards.length > 0;
    
    // Validate projects data
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
        console.error('Projects data is not available', { projects });
        return;
    }
    
    console.log(`Rendering ${projects.length} projects with language: ${currentLang}`);
    
    try {
        const projectsHTML = projects.map(project => {
            // Get translated content with fallbacks
            const title = typeof project.title === 'object' 
                ? (project.title[currentLang] || project.title['en-US'] || 'Untitled Project')
                : (project.title || 'Untitled Project');
            
            const description = typeof project.description === 'object' 
                ? (project.description[currentLang] || project.description['en-US'] || 'No description available')
                : (project.description || 'No description available');
            
            const features = typeof project.features === 'object' 
                ? (project.features[currentLang] || project.features['en-US'] || [])
                : (project.features || []);
            
            const category = t && t.projects && t.projects.categories 
                ? (t.projects.categories[project.category] || project.category)
                : project.category;
            
            const codeText = t && t.projects ? t.projects.code : 'Code';
            const demoText = t && t.projects ? t.projects.demo : 'Demo';
            const soonText = t && t.projects ? t.projects.soon : 'Soon';
            const techLabel = t && t.projects ? t.projects.tech : 'Tech:';
            
            // Validate technologies array
            const technologies = Array.isArray(project.technologies) ? project.technologies : [];
            
            // Escape HTML to prevent issues with special characters
            const safeTitle = escapeHtml(title);
            const safeDescription = escapeHtml(description);
            const safeCategory = escapeHtml(category);
            const safeTechLabel = escapeHtml(techLabel);
            const safeCodeText = escapeHtml(codeText);
            const safeDemoText = escapeHtml(demoText);
            const safeSoonText = escapeHtml(soonText);
            
            return `
            <div class="project-card animate-on-scroll fade-up">
                <div class="project-header">
                    <h3 class="project-title">${safeTitle}</h3>
                    <span class="project-category">${safeCategory}</span>
                </div>
                <div class="project-body">
                    <p class="project-description">${safeDescription}</p>
                    
                    <div class="project-content-grid">
                        <div class="project-tech-section">
                            <span class="project-tech-label">${safeTechLabel}</span>
                            <div class="project-tech">
                                ${technologies.map(tech => {
                                    const techInfo = getTechIcon(tech);
                                    const safeTech = escapeHtml(tech);
                                    // Only show icon if it exists
                                    if (techInfo.icon) {
                                        const iconUrl = getIconUrl(techInfo.icon);
                                        return `<span class="tech-badge" data-tech-color="${techInfo.color}">
                                            <img src="${iconUrl}" alt="${safeTech}" class="tech-icon" loading="lazy" decoding="async" onerror="this.style.display='none';">
                                            <span>${safeTech}</span>
                                        </span>`;
                                    } else {
                                        // Show badge without icon for technologies without simple-icons
                                        return `<span class="tech-badge" data-tech-color="${techInfo.color}">
                                            <span>${safeTech}</span>
                                        </span>`;
                                    }
                                }).join('')}
                            </div>
                        </div>
                        
                        <ul class="project-features">
                            ${features.map(feature => 
                                `<li>${escapeHtml(feature)}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                <div class="project-footer">
                    <div class="project-links">
                        <a href="${project.githubUrl || '#'}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <span>🔗</span> ${safeCodeText}
                        </a>
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                                <span>🚀</span> ${safeDemoText}
                            </a>
                        ` : `
                            <span class="project-link" style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">
                                <span>⏳</span> ${safeSoonText}
                            </span>
                        `}
                    </div>
                </div>
            </div>
        `;
        }).join('');
        
        // Set innerHTML
        projectsGrid.innerHTML = projectsHTML;
        console.log(`Successfully rendered ${projects.length} projects`);
        
        // Verify the HTML was actually inserted
        const renderedCards = projectsGrid.querySelectorAll('.project-card');
        console.log(`Verification: Found ${renderedCards.length} project cards in DOM`);
        console.log('Projects grid innerHTML length:', projectsGrid.innerHTML.length);
        console.log('Projects grid children count:', projectsGrid.children.length);
        
        if (renderedCards.length === 0) {
            console.error('ERROR: No project cards found in DOM after rendering!');
            console.log('Projects HTML preview (first 500 chars):', projectsHTML.substring(0, 500));
        } else {
            console.log('✓ Project cards successfully inserted into DOM');
        }
        
        // Re-initialize scroll animations if needed (only if not a language change)
        if (!isLanguageChange && typeof addAnimationClasses === 'function') {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const projectCards = projectsGrid.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        if (!card.classList.contains('animate-on-scroll')) {
                            card.classList.add('animate-on-scroll', 'fade-up');
                            const staggerIndex = (index % 5) + 1;
                            card.classList.add(`stagger-${staggerIndex}`);
                        }
                    });
                    if (typeof initScrollAnimations === 'function') {
                        initScrollAnimations();
                    }
                }, 50);
            });
        }
    } catch (error) {
        console.error('Error rendering projects:', error);
        // Show error message to user
        projectsGrid.innerHTML = '<p class="error-message">Error loading projects. Please refresh the page.</p>';
    }
}

// ============================================
// Contact Form Handling
// ============================================

function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Get translations
        const t = window.i18n ? window.i18n.getTranslations() : null;
        const fillFieldsMsg = t ? t.contact.fillFields : 'Please fill in all fields.';
        const invalidEmailMsg = t ? t.contact.invalidEmail : 'Please enter a valid email address.';
        const successMsg = t ? t.contact.success : 'Thank you for your message! Opening your email client...';

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert(fillFieldsMsg);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert(invalidEmailMsg);
            return;
        }

        // Since we don't have a backend, we'll use mailto as fallback
        const mailtoLink = `mailto:your.email@example.com?subject=Contact from Portfolio&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMessage: ${encodeURIComponent(formData.message)}`;
        
        // Show success message
        alert(successMsg);
        window.location.href = mailtoLink;
        
        // Reset form
        form.reset();
    });
}

// ============================================
// Download Resume Handler
// ============================================

// Mapping of language codes to PDF filenames
const cvPdfMap = {
    'es-ES': 'OUSAMA MERRAKCHI CV SPA 2026.pdf',
    'fr-FR': 'OUSAMA MERRAKCHI CV FR 2026.pdf',
    'en-US': 'OUSAMA MERRAKCHI CV ENG 2026.pdf'
};

function getCvPdfPath(lang) {
    const filename = cvPdfMap[lang] || cvPdfMap['en-US']; // Default to English if language not found
    return `assets/pdf/${filename}`;
}

function handleResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get current language
        const currentLang = window.i18n ? window.i18n.getCurrentLanguage() : 'en-US';
        
        // Get the PDF path for the current language
        const pdfPath = getCvPdfPath(currentLang);
        
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = cvPdfMap[currentLang] || 'OUSAMA MERRAKCHI CV ENG 2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// ============================================
// Utility Functions
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
// Initialize
// ============================================

// Function to safely initialize projects rendering
function initProjectsRendering() {
    console.log('Initializing projects rendering...');
    
    // Preload all tech icons immediately to cache them
    try {
        preloadTechIcons();
    } catch (error) {
        console.warn('Error preloading tech icons:', error);
    }
    
    // Function to render projects with retry logic
    function tryRenderProjects(retries = 10) {
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid) {
            // DOM is ready, render projects (even if i18n is not ready yet)
            console.log('DOM ready, attempting to render projects...');
            try {
                renderProjects();
            } catch (error) {
                console.error('Error in renderProjects:', error);
                if (retries > 0) {
                    console.log(`Retrying render... (${retries} attempts left)`);
                    setTimeout(() => tryRenderProjects(retries - 1), 200);
                }
            }
        } else if (retries > 0) {
            console.log(`Projects grid not found, retrying... (${retries} attempts left)`);
            setTimeout(() => tryRenderProjects(retries - 1), 100);
        } else {
            console.error('Failed to initialize projects rendering after multiple attempts');
        }
    }
    
    // Initial render attempt - start immediately
    tryRenderProjects();
    
    // Also try after a short delay to catch cases where DOM loads slowly
    setTimeout(() => {
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid && projectsGrid.children.length === 0) {
            console.log('Projects grid empty after delay, attempting to render...');
            try {
                renderProjects();
            } catch (error) {
                console.error('Error rendering projects after delay:', error);
            }
        }
    }, 200);
    
    // Re-render projects when language changes with proper debouncing
    let renderTimeout;
    document.addEventListener('languageChanged', () => {
        // Clear any pending render
        if (renderTimeout) {
            clearTimeout(renderTimeout);
        }
        
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
            renderTimeout = setTimeout(() => {
                console.log('Language changed, re-rendering projects...');
                try {
                    renderProjects();
                } catch (error) {
                    console.error('Error rendering projects after language change:', error);
                }
            }, 50); // Small delay to ensure translations are fully updated
        });
    });
}

// Initialize when DOM is ready
function initializeApp() {
    console.log('Initializing app...');
    initProjectsRendering();
    handleContactForm();
    handleResumeDownload();
    
    // Listen for i18n ready event
    document.addEventListener('i18nReady', () => {
        console.log('i18n is ready, checking projects...');
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid && projectsGrid.children.length === 0) {
            console.log('Projects not rendered, attempting render after i18n ready...');
            renderProjects();
        }
    });
    
    // Multiple fallbacks to ensure projects render
    const checkAndRender = () => {
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid && projectsGrid.children.length === 0) {
            console.log('Projects grid is empty, forcing render...');
            renderProjects();
        }
    };
    
    // Fallback 1: after 300ms
    setTimeout(checkAndRender, 300);
    
    // Fallback 2: after 600ms
    setTimeout(checkAndRender, 600);
    
    // Fallback 3: after 1000ms (last resort)
    setTimeout(checkAndRender, 1000);
    
    // Also try when window is fully loaded
    window.addEventListener('load', () => {
        console.log('Window loaded, checking projects...');
        checkAndRender();
    });
}

// Execute immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already ready
    initializeApp();
}

// Emergency fallback: try to render after everything loads
window.addEventListener('load', () => {
    setTimeout(() => {
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid && projectsGrid.children.length === 0) {
            console.warn('EMERGENCY: Projects still not rendered, forcing final render attempt...');
            console.log('Projects data:', projects);
            console.log('Projects grid element:', projectsGrid);
            console.log('i18n available:', !!window.i18n);
            renderProjects();
        }
    }, 1500);
});

// Debug helper: expose projects data globally
window.debugProjects = () => {
    console.log('Projects data:', projects);
    console.log('Projects count:', projects ? projects.length : 0);
    console.log('Projects grid:', document.getElementById('projectsGrid'));
    console.log('i18n:', window.i18n);
    console.log('Current language:', window.i18n ? window.i18n.getCurrentLanguage() : 'N/A');
    return { projects, grid: document.getElementById('projectsGrid'), i18n: window.i18n };
};

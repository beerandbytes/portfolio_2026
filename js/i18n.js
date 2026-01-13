// ============================================
// Internationalization (i18n) System
// ============================================

const translations = {
    'es-ES': {
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            skills: 'Habilidades',
            projects: 'Proyectos',
            education: 'Educación',
            experience: 'Experiencia',
            languages: 'Idiomas',
            contact: 'Contacto'
        },
        hero: {
            title: 'Ousama Merrakchi ',
            subtitle: 'Desarrollador Full-Stack Junior',
            viewProjects: 'Ver Proyectos',
            getInTouch: 'Contactar',
            downloadResume: 'Descargar CV'
        },
        about: {
            title: 'Sobre Mí',
            paragraph1: 'Desarrollador FullStack Junior Multilingüe en busca de su primer trabajo en la industria de software o continuar en hardware (con más de 6 años de experiencia montando equipos).',
            paragraph2: 'Mi experiencia previa en gestión de productos, montaje de equipos y atención al cliente me ha equipado con habilidades sólidas de comunicación, gestión de proyectos y mentalidad orientada al cliente—todos activos valiosos en desarrollo. He completado con éxito cinco proyectos full-stack, cada uno demostrando mi capacidad para aprender nuevas tecnologías y entregar aplicaciones funcionales y fáciles de usar.',
            paragraph3: 'Estoy ansioso por unirme a un equipo de desarrollo donde pueda contribuir con mi perspectiva fresca, fuerte ética de trabajo y compromiso con el aprendizaje continuo. Busco oportunidades para crecer como desarrollador mientras aporto mi conocimiento empresarial y espíritu colaborativo a proyectos innovadores.'
        },
        skills: {
            title: 'Habilidades Técnicas',
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Bases de Datos',
            frameworks: 'Frameworks & ORMs',
            devops: 'DevOps',
            tools: 'Herramientas'
        },
        projects: {
            title: 'Proyectos Destacados',
            tech: 'Tecnologías:',
            code: 'Código',
            demo: 'Demo',
            soon: 'Próximamente',
            categories: {
                fullstack: 'fullstack',
                frontend: 'frontend',
                desktop: 'escritorio'
            }
        },
        education: {
            title: 'Educación',
            item1: {
                date: 'Diciembre 2025 – Presente',
                title: 'AWS Certified Cloud Practitioner CLF-C02',
                institution: 'Inglés (En progreso)'
            },
            item2: {
                date: 'Marzo 2024 – Diciembre 2025',
                title: 'Desarrollo FullStack',
                institution: 'MasterD Castellón',
                description: 'HTML, CSS, JS, PHP, APACHE, SQL, MYSQL, POSTGRESQL, PYTHON, EXPRESS JS, REACT, VUE, ANGULAR, BOOTSTRAP, MATERIAL UI, WORDPRESS, NODEJS, MONGODB, JOOMLA'
            },
            item3: {
                date: 'Septiembre 2016 - Junio 2017',
                title: 'Ingeniería Informática',
                institution: 'UJI Castellón',
                description: 'Ensamblador en C, Java y Python con POO, data structures y patterns.'
            },
            item4: {
                date: 'Septiembre 2015 – Mayo 2016',
                title: 'Bachillerato Científico Sanitario',
                institution: 'IES Benigaslo La Vall Uixó'
            }
        },
        experience: {
            title: 'Experiencia',
            item1: {
                date: 'Abril 2025 - Septiembre 2025',
                title: 'Comercial IT, Product Manager y Técnico de montaje + RMA',
                company: 'SLIMBOOK - PATERNA, VALENCIA',
                description: 'Gestión integral de operaciones comerciales y técnicas:',
                list: [
                    'Gestión de pedidos, stocks y clientes con Odoo',
                    'Análisis y planificación de campañas',
                    'Gestión de proveedores nacionales y marcas principales como Micron, MSI, Adata, ASUS, Gigabyte, etc.',
                    'Montaje de ordenadores de sobremesa / NAS para Workstation y ensamblado de portátiles',
                    'Instalación y puesta en marcha de S.O como W11, Ubuntu, Fedora, Manjaro, Debian, Linux Mint, Proxmox, TrueNAS, etc.',
                    'Organización y captación de clientes en eventos como Meta World Madrid 2025 y OWN Valencia 2025',
                    'Soporte remoto y atención al cliente en troubleshooting de averías, recambio, mantenimiento y puesta en marcha de equipos averiados'
                ]
            },
            item2: {
                date: 'Octubre 2024 - Enero 2025',
                title: 'Comercial Telecomunicaciones',
                company: 'AMFYTECH S.L - LA VALL D\'UIXO',
                description: 'Gestión comercial y técnica en telecomunicaciones:',
                list: [
                    'Gestión de contabilidad, pedidos y creación de CRM',
                    'Prospección de clientes a puerta fría, cold mailing, cold calling y LinkedIn',
                    'Venta de equipos de infraestructura de red switches gestionables, racks, maquetación de esquemas de puntos de acceso y canalización de fibra óptica',
                    'Venta de equipos de vigilancia y controles de acceso',
                    'Redacción y preparación de anexos para licitaciones públicas'
                ]
            },
            item3: {
                date: 'Junio 2024 - Agosto 2024',
                title: 'Mozo de Almacén',
                company: 'AMAZON VLC1 - ONDA, CASTELLÓN',
                description: 'Gestión de stock, ubicación y preparación de pedidos.'
            },
            item4: {
                date: 'Marzo 2023 - Marzo 2024',
                title: 'Gestión del canal de IBERIA (España, Portugal) y Sur de Francia',
                company: 'DeepCool Beijing CO LTD (Remoto)',
                description: 'Gestión integral del canal IBERIA:',
                list: [
                    'Gestión de pedidos de contenedor, distribuidores como Globomatik y CompuSpain, cuentas B2B como Coolmod, PcComponentes, Wipoid, etc.',
                    'Planificación de campañas, stocks, sellouts, MDF',
                    'Análisis de rotaciones de productos, tasas de RMA y forecast de demanda',
                    'Visitas mensuales a clientes realizando customer success y recogiendo todo el feedback posible para HQ'
                ]
            },
            item5: {
                date: 'Diciembre 2022 – Febrero 2023',
                title: 'Técnico de RMA',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Gestión técnica de garantías y soporte:',
                list: [
                    'Gestión de RMA, reembolsos y soporte remoto',
                    'Diagnóstico y testeo de componentes',
                    'Gestión de tramitaciones de proveedores tanto nacionales como internacionales'
                ]
            },
            item6: {
                date: 'Enero 2022 - Diciembre 2022',
                title: 'Product Manager',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Gestión de productos y familias de hardware:',
                list: [
                    'Gestión de productos y familias de torres, fuentes de alimentación, memorias RAM, procesadores, tarjetas gráficas, periféricos, etc.',
                    'Gestión de stock, compras, rotaciones de producto',
                    'Planificación de campañas de promoción, campañas de liquidación',
                    'Acciones de Marketing con NVIDIA, AMD, Cooler Master para ensamblado de equipos para streamers como Illojuan, ElXokas, etc.'
                ]
            },
            item7: {
                date: 'Junio 2020 – Enero 2022',
                title: 'Jefe de Taller en Ensamblado de Equipos',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Liderazgo técnico en ensamblado:',
                list: [
                    'Gestión de cola de montaje, personal y reparto de carga de trabajo',
                    'Resolución y gestión de pedidos para que se puedan montar los equipos sin incompatibilidades y cumpliendo con las exigencias del cliente',
                    'Montaje, instalación y testeo de equipos de sobremesa y portátiles'
                ]
            },
            item8: {
                date: 'Enero 2019 – Junio 2020',
                title: 'Técnico de Taller',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Resolución y gestión de pedidos para que se puedan montar los equipos sin incompatibilidades y cumpliendo con las exigencias del cliente. Montaje, instalación y testeo de equipos de sobremesa y portátiles.'
            },
            item9: {
                date: 'Junio 2018 – Octubre 2018',
                title: 'Prácticas Backend',
                company: 'JMI Bruxelles (Bélgica)',
                description: 'Experiencia temprana en desarrollo backend:',
                list: [
                    'Mocking, wireframing y prototype de aplicación móvil',
                    'Diseño y creación de base de datos con MySQL WorkBench',
                    'Backend gestionado con yii2 PHP y composer'
                ]
            }
        },
        languages: {
            title: 'Idiomas'
        },
        contact: {
            title: 'Contacto',
            text: 'Actualmente busco oportunidades como desarrollador full-stack junior. Ya sea que tengas un proyecto en mente, quieras colaborar o simplemente quieras conectar, ¡me encantaría saber de ti!',
            name: 'Nombre',
            email: 'Correo',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
            fillFields: 'Por favor completa todos los campos.',
            invalidEmail: 'Por favor ingresa un correo válido.',
            success: '¡Gracias por tu mensaje! Abriendo tu cliente de correo...',
            resumeAlert: 'La descarga del CV estará disponible pronto. Por favor contáctame directamente para mi CV.'
        },
        footer: {
            copyright: '© 2024 Ousama Merrakchi. Todos los derechos reservados.'
        },
        meta: {
            description: 'Ousama Merrakchi - Portfolio de Desarrollador Full-Stack Junior. Mostrando proyectos full-stack y habilidades técnicas.',
            ogTitle: 'Ousama Merrakchi - Desarrollador Full-Stack Junior',
            ogDescription: 'Portfolio mostrando proyectos de desarrollo full-stack y habilidades',
            twitterTitle: 'Ousama Merrakchi - Desarrollador Full-Stack Junior',
            twitterDescription: 'Portfolio mostrando proyectos de desarrollo full-stack y habilidades'
        }
    },
    'fr-FR': {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            skills: 'Compétences',
            projects: 'Projets',
            education: 'Formation',
            experience: 'Expérience',
            languages: 'Langues',
            contact: 'Contact'
        },
        hero: {
            title: 'Ousama Merrakchi',
            subtitle: 'Développeur Full-Stack Junior',
            viewProjects: 'Voir les Projets',
            getInTouch: 'Me Contacter',
            downloadResume: 'Télécharger le CV'
        },
        about: {
            title: 'À Propos de Moi',
            paragraph1: 'Développeur FullStack Junior Multilingue à la recherche de son premier emploi dans l\'industrie du logiciel ou continuer dans le matériel (avec plus de 6 ans d\'expérience en assemblage d\'équipements).',
            paragraph2: 'Mon expérience antérieure en gestion de produits, assemblage d\'équipements et service client m\'a doté de solides compétences en communication, gestion de projets et mentalité orientée client—tous des atouts précieux en développement. J\'ai complété avec succès cinq projets full-stack, chacun démontrant ma capacité à apprendre de nouvelles technologies et à livrer des applications fonctionnelles et faciles à utiliser.',
            paragraph3: 'Je suis impatient de rejoindre une équipe de développement où je peux contribuer avec ma perspective fraîche, une forte éthique de travail et un engagement envers l\'apprentissage continu. Je cherche des opportunités pour grandir en tant que développeur tout en apportant mes connaissances commerciales et mon esprit collaboratif à des projets innovants.'
        },
        skills: {
            title: 'Compétences Techniques',
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Bases de Données',
            frameworks: 'Frameworks & ORMs',
            devops: 'DevOps',
            tools: 'Outils'
        },
        projects: {
            title: 'Projets en Vedette',
            tech: 'Technologies:',
            code: 'Code',
            demo: 'Démo',
            soon: 'Bientôt',
            categories: {
                fullstack: 'fullstack',
                frontend: 'frontend',
                desktop: 'bureau'
            }
        },
        education: {
            title: 'Formation',
            item1: {
                date: 'Décembre 2025 – Présent',
                title: 'AWS Certified Cloud Practitioner CLF-C02',
                institution: 'Anglais (En cours)'
            },
            item2: {
                date: 'Mars 2024 – Décembre 2025',
                title: 'Développement FullStack',
                institution: 'MasterD Castellón',
                description: 'HTML, CSS, JS, PHP, APACHE, SQL, MYSQL, POSTGRESQL, PYTHON, EXPRESS JS, REACT, VUE, ANGULAR, BOOTSTRAP, MATERIAL UI, WORDPRESS, NODEJS, MONGODB, JOOMLA'
            },
            item3: {
                date: 'Septembre 2016 - Juin 2017',
                title: 'Ingénierie Informatique',
                institution: 'UJI Castellón',
                description: 'Assembleur en C, Java et Python avec POO, structures de données et patterns.'
            },
            item4: {
                date: 'Septembre 2015 – Mai 2016',
                title: 'Baccalauréat Scientifique Sanitaire',
                institution: 'IES Benigaslo La Vall Uixó'
            }
        },
        experience: {
            title: 'Expérience',
            item1: {
                date: 'Avril 2025 - Septembre 2025',
                title: 'Commercial IT, Product Manager et Technicien d\'assemblage + RMA',
                company: 'SLIMBOOK - PATERNA, VALENCIA',
                description: 'Gestion intégrale des opérations commerciales et techniques:',
                list: [
                    'Gestion des commandes, stocks et clients avec Odoo',
                    'Analyse et planification de campagnes',
                    'Gestion des fournisseurs nationaux et marques principales comme Micron, MSI, Adata, ASUS, Gigabyte, etc.',
                    'Assemblage d\'ordinateurs de bureau / NAS pour Workstation et assemblage de portables',
                    'Installation et mise en service de systèmes d\'exploitation comme W11, Ubuntu, Fedora, Manjaro, Debian, Linux Mint, Proxmox, TrueNAS, etc.',
                    'Organisation et acquisition de clients lors d\'événements comme Meta World Madrid 2025 et OWN Valencia 2025',
                    'Support à distance et service client en dépannage de pannes, remplacement, maintenance et mise en service d\'équipements défectueux'
                ]
            },
            item2: {
                date: 'Octobre 2024 - Janvier 2025',
                title: 'Commercial Télécommunications',
                company: 'AMFYTECH S.L - LA VALL D\'UIXO',
                description: 'Gestion commerciale et technique en télécommunications:',
                list: [
                    'Gestion de la comptabilité, des commandes et création de CRM',
                    'Prospection de clients en porte-à-porte, cold mailing, cold calling et LinkedIn',
                    'Vente d\'équipements d\'infrastructure réseau switches gérables, racks, maquettage de schémas de points d\'accès et canalisation de fibre optique',
                    'Vente d\'équipements de surveillance et contrôles d\'accès',
                    'Rédaction et préparation d\'annexes pour appels d\'offres publics'
                ]
            },
            item3: {
                date: 'Juin 2024 - Août 2024',
                title: 'Manutentionnaire',
                company: 'AMAZON VLC1 - ONDA, CASTELLÓN',
                description: 'Gestion des stocks, emplacement et préparation des commandes.'
            },
            item4: {
                date: 'Mars 2023 - Mars 2024',
                title: 'Gestion du canal IBERIA (Espagne, Portugal) et Sud de la France',
                company: 'DeepCool Beijing CO LTD (Télétravail)',
                description: 'Gestion intégrale du canal IBERIA:',
                list: [
                    'Gestion des commandes de conteneurs, distributeurs comme Globomatik et CompuSpain, comptes B2B comme Coolmod, PcComponentes, Wipoid, etc.',
                    'Planification de campagnes, stocks, sellouts, MDF',
                    'Analyse des rotations de produits, taux de RMA et prévisions de demande',
                    'Visites mensuelles aux clients effectuant du customer success et recueillant tout le feedback possible pour le siège'
                ]
            },
            item5: {
                date: 'Décembre 2022 – Février 2023',
                title: 'Technicien RMA',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Gestion technique des garanties et support:',
                list: [
                    'Gestion des RMA, remboursements et support à distance',
                    'Diagnostic et test de composants',
                    'Gestion des démarches auprès des fournisseurs nationaux et internationaux'
                ]
            },
            item6: {
                date: 'Janvier 2022 - Décembre 2022',
                title: 'Product Manager',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Gestion de produits et familles de matériel:',
                list: [
                    'Gestion de produits et familles de tours, alimentations, mémoires RAM, processeurs, cartes graphiques, périphériques, etc.',
                    'Gestion des stocks, achats, rotations de produits',
                    'Planification de campagnes promotionnelles, campagnes de liquidation',
                    'Actions marketing avec NVIDIA, AMD, Cooler Master pour assemblage d\'équipements pour streamers comme Illojuan, ElXokas, etc.'
                ]
            },
            item7: {
                date: 'Juin 2020 – Janvier 2022',
                title: 'Chef d\'Atelier en Assemblage d\'Équipements',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Leadership technique en assemblage:',
                list: [
                    'Gestion de la file d\'assemblage, personnel et répartition de la charge de travail',
                    'Résolution et gestion des commandes pour que les équipements puissent être assemblés sans incompatibilités et en respectant les exigences du client',
                    'Assemblage, installation et test d\'équipements de bureau et portables'
                ]
            },
            item8: {
                date: 'Janvier 2019 – Juin 2020',
                title: 'Technicien d\'Atelier',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Résolution et gestion des commandes pour que les équipements puissent être assemblés sans incompatibilités et en respectant les exigences du client. Assemblage, installation et test d\'équipements de bureau et portables.'
            },
            item9: {
                date: 'Juin 2018 – Octobre 2018',
                title: 'Stage Backend',
                company: 'JMI Bruxelles (Belgique)',
                description: 'Expérience précoce en développement backend:',
                list: [
                    'Mocking, wireframing et prototype d\'application mobile',
                    'Conception et création de base de données avec MySQL WorkBench',
                    'Backend géré avec yii2 PHP et composer'
                ]
            }
        },
        languages: {
            title: 'Langues'
        },
        contact: {
            title: 'Contact',
            text: 'Je recherche actuellement des opportunités en tant que développeur full-stack junior. Que vous ayez un projet en tête, que vous souhaitiez collaborer ou simplement vous connecter, j\'aimerais avoir de vos nouvelles!',
            name: 'Nom',
            email: 'Email',
            message: 'Message',
            send: 'Envoyer le Message',
            fillFields: 'Veuillez remplir tous les champs.',
            invalidEmail: 'Veuillez entrer une adresse email valide.',
            success: 'Merci pour votre message! Ouverture de votre client de messagerie...',
            resumeAlert: 'Le téléchargement du CV sera bientôt disponible. Veuillez me contacter directement pour mon CV.'
        },
        footer: {
            copyright: '© 2024 Ousama Merrakchi. Tous droits réservés.'
        },
        meta: {
            description: 'Ousama Merrakchi - Portfolio de Développeur Full-Stack Junior. Présentation de projets full-stack et compétences techniques.',
            ogTitle: 'Ousama Merrakchi - Développeur Full-Stack Junior',
            ogDescription: 'Portfolio présentant des projets de développement full-stack et compétences',
            twitterTitle: 'Ousama Merrakchi - Développeur Full-Stack Junior',
            twitterDescription: 'Portfolio présentant des projets de développement full-stack et compétences'
        }
    },
    'en-US': {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            education: 'Education',
            experience: 'Experience',
            languages: 'Languages',
            contact: 'Contact'
        },
        hero: {
            title: 'Ousama Merrakchi',
            subtitle: 'Junior Full-Stack Developer',
            viewProjects: 'View Projects',
            getInTouch: 'Get in Touch',
            downloadResume: 'Download Resume'
        },
        about: {
            title: 'About Me',
            paragraph1: 'Multilingual Junior FullStack Developer seeking his first job in the software industry or continue in hardware (with over 6 years of experience assembling equipment).',
            paragraph2: 'My previous experience in product management, equipment assembly, and customer service has equipped me with solid communication skills, project management, and customer-oriented mindset—all valuable assets in development. I have successfully completed five full-stack projects, each demonstrating my ability to learn new technologies and deliver functional and user-friendly applications.',
            paragraph3: 'I am eager to join a development team where I can contribute with my fresh perspective, strong work ethic, and commitment to continuous learning. I seek opportunities to grow as a developer while bringing my business knowledge and collaborative spirit to innovative projects.'
        },
        skills: {
            title: 'Technical Skills',
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Databases',
            frameworks: 'Frameworks & ORMs',
            devops: 'DevOps',
            tools: 'Tools'
        },
        projects: {
            title: 'Featured Projects',
            tech: 'Tech:',
            code: 'Code',
            demo: 'Demo',
            soon: 'Soon',
            categories: {
                fullstack: 'fullstack',
                frontend: 'frontend',
                desktop: 'desktop'
            }
        },
        education: {
            title: 'Education',
            item1: {
                date: 'December 2025 – Present',
                title: 'AWS Certified Cloud Practitioner CLF-C02',
                institution: 'English (In progress)'
            },
            item2: {
                date: 'March 2024 – December 2025',
                title: 'FullStack Development',
                institution: 'MasterD Castellón',
                description: 'HTML, CSS, JS, PHP, APACHE, SQL, MYSQL, POSTGRESQL, PYTHON, EXPRESS JS, REACT, VUE, ANGULAR, BOOTSTRAP, MATERIAL UI, WORDPRESS, NODEJS, MONGODB, JOOMLA'
            },
            item3: {
                date: 'September 2016 - June 2017',
                title: 'Computer Engineering',
                institution: 'UJI Castellón',
                description: 'Assembler in C, Java and Python with OOP, data structures and patterns.'
            },
            item4: {
                date: 'September 2015 – May 2016',
                title: 'Scientific Health Baccalaureate',
                institution: 'IES Benigaslo La Vall Uixó'
            }
        },
        experience: {
            title: 'Experience',
            item1: {
                date: 'April 2025 - September 2025',
                title: 'IT Sales, Product Manager and Assembly Technician + RMA',
                company: 'SLIMBOOK - PATERNA, VALENCIA',
                description: 'Comprehensive management of commercial and technical operations:',
                list: [
                    'Order, stock and customer management with Odoo',
                    'Campaign analysis and planning',
                    'Management of national suppliers and major brands such as Micron, MSI, Adata, ASUS, Gigabyte, etc.',
                    'Desktop computer / NAS assembly for Workstation and laptop assembly',
                    'Installation and setup of operating systems such as W11, Ubuntu, Fedora, Manjaro, Debian, Linux Mint, Proxmox, TrueNAS, etc.',
                    'Organization and customer acquisition at events such as Meta World Madrid 2025 and OWN Valencia 2025',
                    'Remote support and customer service in troubleshooting failures, replacement, maintenance and setup of faulty equipment'
                ]
            },
            item2: {
                date: 'October 2024 - January 2025',
                title: 'Telecommunications Sales',
                company: 'AMFYTECH S.L - LA VALL D\'UIXO',
                description: 'Commercial and technical management in telecommunications:',
                list: [
                    'Accounting, order management and CRM creation',
                    'Customer prospecting through cold calling, cold mailing, cold calling and LinkedIn',
                    'Sale of network infrastructure equipment manageable switches, racks, access point scheme layout and fiber optic channeling',
                    'Sale of surveillance equipment and access controls',
                    'Writing and preparation of annexes for public tenders'
                ]
            },
            item3: {
                date: 'June 2024 - August 2024',
                title: 'Warehouse Worker',
                company: 'AMAZON VLC1 - ONDA, CASTELLÓN',
                description: 'Stock management, location and order preparation.'
            },
            item4: {
                date: 'March 2023 - March 2024',
                title: 'IBERIA Channel Management (Spain, Portugal) and Southern France',
                company: 'DeepCool Beijing CO LTD (Remote)',
                description: 'Comprehensive IBERIA channel management:',
                list: [
                    'Container order management, distributors such as Globomatik and CompuSpain, B2B accounts such as Coolmod, PcComponentes, Wipoid, etc.',
                    'Campaign planning, stocks, sellouts, MDF',
                    'Product rotation analysis, RMA rates and demand forecasting',
                    'Monthly customer visits performing customer success and gathering all possible feedback for HQ'
                ]
            },
            item5: {
                date: 'December 2022 – February 2023',
                title: 'RMA Technician',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Technical warranty and support management:',
                list: [
                    'RMA management, refunds and remote support',
                    'Component diagnosis and testing',
                    'Management of procedures with national and international suppliers'
                ]
            },
            item6: {
                date: 'January 2022 - December 2022',
                title: 'Product Manager',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Product and hardware family management:',
                list: [
                    'Management of products and families of towers, power supplies, RAM memories, processors, graphics cards, peripherals, etc.',
                    'Stock management, purchases, product rotations',
                    'Promotional campaign planning, liquidation campaigns',
                    'Marketing actions with NVIDIA, AMD, Cooler Master for equipment assembly for streamers such as Illojuan, ElXokas, etc.'
                ]
            },
            item7: {
                date: 'June 2020 – January 2022',
                title: 'Workshop Manager in Equipment Assembly',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Technical leadership in assembly:',
                list: [
                    'Assembly queue management, staff and workload distribution',
                    'Resolution and order management so that equipment can be assembled without incompatibilities and meeting customer requirements',
                    'Assembly, installation and testing of desktop and laptop equipment'
                ]
            },
            item8: {
                date: 'January 2019 – June 2020',
                title: 'Workshop Technician',
                company: 'COOLMOD INFORMÁTICA - ALMAZORA, CASTELLÓN',
                description: 'Resolution and order management so that equipment can be assembled without incompatibilities and meeting customer requirements. Assembly, installation and testing of desktop and laptop equipment.'
            },
            item9: {
                date: 'June 2018 – October 2018',
                title: 'Backend Internship',
                company: 'JMI Bruxelles (Belgium)',
                description: 'Early experience in backend development:',
                list: [
                    'Mocking, wireframing and mobile application prototype',
                    'Database design and creation with MySQL WorkBench',
                    'Backend managed with yii2 PHP and composer'
                ]
            }
        },
        languages: {
            title: 'Languages'
        },
        contact: {
            title: 'Get In Touch',
            text: 'I\'m currently looking for opportunities as a junior full-stack developer. Whether you have a project in mind, want to collaborate, or just want to connect, I\'d love to hear from you!',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            fillFields: 'Please fill in all fields.',
            invalidEmail: 'Please enter a valid email address.',
            success: 'Thank you for your message! Opening your email client...',
            resumeAlert: 'Resume download will be available soon. Please contact me directly for my resume.'
        },
        footer: {
            copyright: '© 2024 Ousama Merrakchi. All rights reserved.'
        },
        meta: {
            description: 'Ousama Merrakchi - Junior Full-Stack Developer Portfolio. Showcasing full-stack projects and technical skills.',
            ogTitle: 'Ousama Merrakchi - Junior Full-Stack Developer',
            ogDescription: 'Portfolio showcasing full-stack development projects and skills',
            twitterTitle: 'Ousama Merrakchi - Junior Full-Stack Developer',
            twitterDescription: 'Portfolio showcasing full-stack development projects and skills'
        }
    }
};

// Supported languages
const supportedLanguages = ['es-ES', 'fr-FR', 'en-US'];
const defaultLanguage = 'en-US';

// Current language
let currentLanguage = defaultLanguage;

// ============================================
// Language Detection and Storage
// ============================================

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Check for exact match
    if (supportedLanguages.includes(browserLang)) {
        return browserLang;
    }
    
    // Check for language code match (e.g., 'es' matches 'es-ES')
    const langCode = browserLang.split('-')[0];
    const matchedLang = supportedLanguages.find(lang => lang.startsWith(langCode));
    if (matchedLang) {
        return matchedLang;
    }
    
    return defaultLanguage;
}

function getStoredLanguage() {
    try {
        const stored = localStorage.getItem('portfolio-language');
        if (stored && supportedLanguages.includes(stored)) {
            return stored;
        }
    } catch (e) {
        console.warn('Could not access localStorage:', e);
    }
    return null;
}

function storeLanguage(lang) {
    try {
        localStorage.setItem('portfolio-language', lang);
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
}

// ============================================
// Language Setting and Translation
// ============================================

function setLanguage(lang) {
    if (!supportedLanguages.includes(lang)) {
        console.warn(`Language ${lang} is not supported. Using default.`);
        lang = defaultLanguage;
    }
    
    currentLanguage = lang;
    storeLanguage(lang);
    updateHtmlLang(lang);
    translatePage();
    updateMetaTags();
}

function updateHtmlLang(lang) {
    document.documentElement.lang = lang;
}

function updateMetaTags() {
    const t = translations[currentLanguage].meta;
    document.querySelector('meta[name="description"]').setAttribute('content', t.description);
    document.querySelector('meta[property="og:title"]').setAttribute('content', t.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', t.ogDescription);
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', t.twitterTitle);
    document.querySelector('meta[property="twitter:description"]').setAttribute('content', t.twitterDescription);
    document.title = t.ogTitle;
}

function translatePage() {
    // Validate translations are available
    if (!translations[currentLanguage]) {
        console.warn(`Translations for ${currentLanguage} not found, using default`);
        currentLanguage = defaultLanguage;
    }
    
    const t = translations[currentLanguage];
    if (!t) {
        console.error('No translations available');
        return;
    }
    
    try {
        // Navigation
        document.querySelectorAll('[data-i18n="nav.home"]').forEach(el => el.textContent = t.nav.home);
        document.querySelectorAll('[data-i18n="nav.about"]').forEach(el => el.textContent = t.nav.about);
        document.querySelectorAll('[data-i18n="nav.skills"]').forEach(el => el.textContent = t.nav.skills);
        document.querySelectorAll('[data-i18n="nav.projects"]').forEach(el => el.textContent = t.nav.projects);
        document.querySelectorAll('[data-i18n="nav.education"]').forEach(el => el.textContent = t.nav.education);
        document.querySelectorAll('[data-i18n="nav.experience"]').forEach(el => el.textContent = t.nav.experience);
        document.querySelectorAll('[data-i18n="nav.languages"]').forEach(el => el.textContent = t.nav.languages);
        document.querySelectorAll('[data-i18n="nav.contact"]').forEach(el => el.textContent = t.nav.contact);
        
        // Hero
        document.querySelectorAll('[data-i18n="hero.title"]').forEach(el => el.textContent = t.hero.title);
        document.querySelectorAll('[data-i18n="hero.subtitle"]').forEach(el => el.textContent = t.hero.subtitle);
        document.querySelectorAll('[data-i18n="hero.viewProjects"]').forEach(el => el.textContent = t.hero.viewProjects);
        document.querySelectorAll('[data-i18n="hero.getInTouch"]').forEach(el => el.textContent = t.hero.getInTouch);
        document.querySelectorAll('[data-i18n="hero.downloadResume"]').forEach(el => el.textContent = t.hero.downloadResume);
        
        // About
        document.querySelectorAll('[data-i18n="about.title"]').forEach(el => el.textContent = t.about.title);
        document.querySelectorAll('[data-i18n="about.paragraph1"]').forEach(el => el.textContent = t.about.paragraph1);
        document.querySelectorAll('[data-i18n="about.paragraph2"]').forEach(el => el.textContent = t.about.paragraph2);
        document.querySelectorAll('[data-i18n="about.paragraph3"]').forEach(el => el.textContent = t.about.paragraph3);
        
        // Skills
        document.querySelectorAll('[data-i18n="skills.title"]').forEach(el => el.textContent = t.skills.title);
        document.querySelectorAll('[data-i18n="skills.frontend"]').forEach(el => el.textContent = t.skills.frontend);
        document.querySelectorAll('[data-i18n="skills.backend"]').forEach(el => el.textContent = t.skills.backend);
        document.querySelectorAll('[data-i18n="skills.databases"]').forEach(el => el.textContent = t.skills.databases);
        document.querySelectorAll('[data-i18n="skills.frameworks"]').forEach(el => el.textContent = t.skills.frameworks);
        document.querySelectorAll('[data-i18n="skills.devops"]').forEach(el => el.textContent = t.skills.devops);
        document.querySelectorAll('[data-i18n="skills.tools"]').forEach(el => el.textContent = t.skills.tools);
        
        // Projects
        document.querySelectorAll('[data-i18n="projects.title"]').forEach(el => el.textContent = t.projects.title);
        
        // Education
        document.querySelectorAll('[data-i18n="education.title"]').forEach(el => el.textContent = t.education.title);
        document.querySelectorAll('[data-i18n="education.item1.date"]').forEach(el => el.textContent = t.education.item1.date);
        document.querySelectorAll('[data-i18n="education.item1.title"]').forEach(el => el.textContent = t.education.item1.title);
        document.querySelectorAll('[data-i18n="education.item1.institution"]').forEach(el => el.textContent = t.education.item1.institution);
        document.querySelectorAll('[data-i18n="education.item2.date"]').forEach(el => el.textContent = t.education.item2.date);
        document.querySelectorAll('[data-i18n="education.item2.title"]').forEach(el => el.textContent = t.education.item2.title);
        document.querySelectorAll('[data-i18n="education.item2.institution"]').forEach(el => el.textContent = t.education.item2.institution);
        document.querySelectorAll('[data-i18n="education.item2.description"]').forEach(el => el.textContent = t.education.item2.description);
        document.querySelectorAll('[data-i18n="education.item3.date"]').forEach(el => el.textContent = t.education.item3.date);
        document.querySelectorAll('[data-i18n="education.item3.title"]').forEach(el => el.textContent = t.education.item3.title);
        document.querySelectorAll('[data-i18n="education.item3.institution"]').forEach(el => el.textContent = t.education.item3.institution);
        document.querySelectorAll('[data-i18n="education.item3.description"]').forEach(el => el.textContent = t.education.item3.description);
        document.querySelectorAll('[data-i18n="education.item4.date"]').forEach(el => el.textContent = t.education.item4.date);
        document.querySelectorAll('[data-i18n="education.item4.title"]').forEach(el => el.textContent = t.education.item4.title);
        document.querySelectorAll('[data-i18n="education.item4.institution"]').forEach(el => el.textContent = t.education.item4.institution);
        
        // Experience
        document.querySelectorAll('[data-i18n="experience.title"]').forEach(el => el.textContent = t.experience.title);
        // Experience items will be handled separately due to complexity
        translateExperienceSection();
        
        // Languages
        document.querySelectorAll('[data-i18n="languages.title"]').forEach(el => el.textContent = t.languages.title);
        
        // Contact
        document.querySelectorAll('[data-i18n="contact.title"]').forEach(el => el.textContent = t.contact.title);
        document.querySelectorAll('[data-i18n="contact.text"]').forEach(el => el.textContent = t.contact.text);
        document.querySelectorAll('[data-i18n="contact.name"]').forEach(el => el.textContent = t.contact.name);
        document.querySelectorAll('[data-i18n="contact.email"]').forEach(el => el.textContent = t.contact.email);
        document.querySelectorAll('[data-i18n="contact.message"]').forEach(el => el.textContent = t.contact.message);
        document.querySelectorAll('[data-i18n="contact.send"]').forEach(el => el.textContent = t.contact.send);
        
        // Footer
        document.querySelectorAll('[data-i18n="footer.copyright"]').forEach(el => el.textContent = t.footer.copyright);
        
        // Update language selector active state
        updateLanguageSelector();
    } catch (error) {
        console.error('Error during translation:', error);
    }
}

function translateExperienceSection() {
    const t = translations[currentLanguage].experience;
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach((item, index) => {
        const itemKey = `item${index + 1}`;
        if (t[itemKey]) {
            const expData = t[itemKey];
            
            const dateEl = item.querySelector('.experience-date');
            const titleEl = item.querySelector('.experience-title');
            const companyEl = item.querySelector('.experience-company');
            const descEl = item.querySelector('.experience-description');
            const listEl = item.querySelector('.experience-list');
            
            if (dateEl) dateEl.textContent = expData.date;
            if (titleEl) titleEl.textContent = expData.title;
            if (companyEl) companyEl.textContent = expData.company;
            if (descEl) descEl.textContent = expData.description;
            
            if (listEl && expData.list) {
                listEl.innerHTML = expData.list.map(li => `<li>${li}</li>`).join('');
            }
        }
    });
}

function updateLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ============================================
// Initialize Language System
// ============================================

function initLanguage() {
    // Get stored language or detect browser language
    const storedLang = getStoredLanguage();
    const langToUse = storedLang || detectBrowserLanguage();
    
    // Set language
    setLanguage(langToUse);
    
    // Translate experience section (needs special handling)
    // Wait a bit for DOM to be ready
    setTimeout(() => {
        translateExperienceSection();
    }, 100);
    
    // Dispatch event to notify that i18n is ready
    if (document.readyState !== 'loading') {
        requestAnimationFrame(() => {
            document.dispatchEvent(new CustomEvent('i18nReady', { 
                detail: { language: langToUse } 
            }));
        });
    }
}

// Wrapper for setLanguage to trigger events
function setLanguageWithEvent(lang) {
    setLanguage(lang);
    // Trigger custom event for language change after translations are applied
    // Use requestAnimationFrame to ensure DOM updates are complete
    if (document.readyState !== 'loading') {
        requestAnimationFrame(() => {
            // Small delay to ensure all translations are applied
            setTimeout(() => {
                document.dispatchEvent(new CustomEvent('languageChanged', { 
                    detail: { language: lang } 
                }));
            }, 10);
        });
    }
}

// Export functions for use in other scripts
window.i18n = {
    setLanguage: setLanguageWithEvent,
    getCurrentLanguage: () => currentLanguage || defaultLanguage,
    getTranslations: () => {
        // Ensure we always return valid translations
        if (!currentLanguage || !translations[currentLanguage]) {
            console.warn(`Translations for ${currentLanguage} not found, using default`);
            return translations[defaultLanguage] || translations['en-US'];
        }
        return translations[currentLanguage];
    },
    initLanguage,
    translateExperienceSection
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

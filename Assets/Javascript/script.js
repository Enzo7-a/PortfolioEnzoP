document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        fr: {
            "nav-brand": "Portfolio",
            "nav-home": "ACCUEIL",
            "nav-projects": "PROJETS",
            "nav-cv": "À PROPOS DE MOI",
            "footer-tagline": "Étudiant en BUT Informatique · Données & Développement.",
            "footer-rights": "Tous droits réservés.",
            "btn-back-projects": "← Retour aux projets",
            "btn-view-project": "Voir le projet",
            "btn-download-zip": "Télécharger le ZIP",
            "btn-view-script": "Voir Script SQL",
            "btn-view-insert": "Voir Insert SQL",
            "btn-play-game": "Jouer au jeu",
            "btn-download-excel": "Télécharger l'Excel (.xlsm)",
            "btn-view-repo": "Voir le Code Source",
            "tech-title": "Technologies",
            "resources-title": "Ressources",
            "play-title": "Jouer",
            "download-title": "Téléchargement",
            "source-title": "Code Source",
            "project-header-title": "Mes Projets",
            "project-header-subtitle": "EXPLOREZ MON TRAVAIL",
            "project-search-placeholder": "Rechercher...",
            "filter-all": "Tous",
            "proj-status-inprogress": "En Cours",
            "proj-status-completed": "Terminé",
            
            "tag-laravel": "Laravel",
            "tag-sql": "PostgreSQL",
            "tag-php": "PHP",
            "tag-bpmn": "BPMN",
            "tag-git": "Git",
            "tag-html": "HTML5",
            "tag-css": "CSS3",
            "tag-js": "Vanilla JS",
            "tag-json": "JSON",
            "tag-excel": "Excel",
            "tag-vba": "VBA",
            "tag-csharp": "C#",
            "tag-wpf": "WPF",

            "proj6-title": "otM - Jeu de mots interactif",
            "proj6-desc": "Jeu de réflexion développé en Vanilla JS avec génération de mots aléatoires et mode sombre/clair.",
            "proj6-meta": "Novembre 2025 | Projet Personnel | Développement Jeu Web",
            "p6-badge": "Développement Jeu Web",
            "p6-title": "Jeu otM",
            "p6-date": "Novembre 2025 | Projet Personnel",
            "p6-section1-title": "À propos du projet",
            "p6-desc": "<strong>otM</strong> est un jeu de mots interactif entièrement pensé et développé pour le web. L'objectif de ce projet était de créer une expérience ludique et fluide tout en gérant une logique de jeu complexe en arrière-plan. La manipulation du DOM et la gestion des événements ont été réalisées en JavaScript pur pour assurer une réactivité optimale.",
            "p6-section2-title": "Détails Techniques",
            "p6-list1": "Développement logique complet en Vanilla JS.",
            "p6-list2": "Génération de mots aléatoires avec filtrage par difficulté et longueur.",
            "p6-list3": "Changement de thème (Sombre / Clair) dynamique.",

            "proj5-title": "Maison Sibilia - App de Gestion WPF",
            "proj5-desc": "Développement d'une application lourde (Desktop) en C# WPF pour la gestion centralisée de la production et des commandes de la Maison Sibilia. Base de données PostgreSQL.",
            "proj5-meta": "Juin 2025 | IUT Annecy | Développement Applicatif",
            "p5-badge": "Application Desktop .NET",
            "p5-title": "Sibilia - Gestion de Production",
            "p5-date": "Juin 2025 | IUT Annecy",
            "p5-section1-title": "Contexte du Projet",
            "p5-desc": "La Maison Sibilia avait besoin d'une solution robuste pour informatiser la gestion de ses 5 boutiques et de son atelier central. Le choix s'est porté sur une application Windows (WPF) pour garantir performance et ergonomie aux postes de travail.",
            "p5-section2-title": "Réalisations Techniques",
            "p5-desc2": "Conception et développement d'un client lourd performant connecté à une base de données centralisée.",
            "p5-list1": "Développement C# avec le framework WPF (Windows Presentation Foundation).",
            "p5-list2": "Architecture MVVM pour une séparation propre de la logique et de l'interface.",
            "p5-list3": "Gestion de base de données relationnelle complexe avec PostgreSQL.",
            "p5-list4": "Implémentation de tableaux de bords pour le suivi des stocks en temps réel.",

            "proj1-title": "Projet d'équipe - Application Web & Gestion de Base de Données",
            "proj1-desc": "Développement d'une application web Laravel au sein d'une équipe de 5 personnes. Conception de modèles de données et de diagrammes BPMN, implémentation de modules de cryptographie et de communication, et création de tableaux de bord en utilisant Scrum.",
            "proj1-meta": "Octobre 2025 - En cours | Université de Savoie / IUT Annecy | Projet Universitaire",
            "proj1-tag-laravel": "Laravel",
            "proj1-tag-sql": "PostgreSQL",
            "proj1-tag-git": "Git",
            "p1-badge": "Développement Web Fullstack",
            "p1-title": "Club Med - Application Laravel",
            "p1-date": "Octobre 2025 - En Cours | IUT Annecy",
            "p1-section1-title": "Vue d'ensemble",
            "p1-desc": "Développement d'une application web Laravel au sein d'une équipe de 5 personnes. Ce projet universitaire visait à simuler la gestion d'un village vacances. Nous avons utilisé la méthode Scrum pour organiser nos sprints.",
            "p1-section2-title": "Défis Techniques & Réalisations",
            "p1-list1": "Conception de modèles de données (MCD/MLD) complexes.",
            "p1-list2": "Création de diagrammes BPMN pour modéliser les processus.",
            "p1-list3": "Implémentation de modules de cryptographie.",
            "p1-list4": "Mise en place de tableaux de bord de gestion.",
            
            "proj3-title": "Automatisation de Tâches (Excel)",
            "proj3-desc": "Développement d'un Outil d'Aide à la Décision (OAD) sous Excel pour une simulation de gestion (OGPLAY). L'outil automatise le calcul des besoins en matières premières, le contrôle des machines, des ressources humaines et la gestion des pertes via un tableau de bord.",
            "proj3-meta": "Avril 2025 | Université de Savoie / IUT Annecy | Outil d'Aide à la Décision",
            "proj3-tag-excel": "Excel",
            "proj3-tag-vba": "VBA",
            "p3-badge": "Automation & Data",
            "p3-title": "Outil d'Aide à la Décision (OAD)",
            "p3-date": "Avril 2025 | IUT Annecy",
            "p3-section1-title": "Objectif",
            "p3-desc": "Développement d'un outil complexe sous Excel pour une simulation de gestion d'entreprise (OGPLAY). L'objectif était de créer un tableau de bord décisionnel.",
            "p3-section2-title": "Fonctionnalités",
            "p3-list1": "Automatisation du calcul des besoins en matières premières.",
            "p3-list2": "Gestion des plannings des ressources humaines.",
            "p3-list3": "Contrôle de la production et des machines.",
            "p3-list4": "Analyse des pertes et optimisation des coûts.",
            

            "hero-role": "Data Analyst en alternance chez Carrier",
            "hero-lead": "Étudiant en 3e année de BUT Informatique à l'Université Savoie Mont Blanc, à Annecy. J'exploite et valorise les données pour optimiser les processus et appuyer la prise de décision en milieu industriel.",
            "btn-projects": "Voir mes projets",
            "btn-cv": "Télécharger mon CV",
            "cv-headline": "Data Analyst chez Carrier | Étudiant en 3e année de BUT Informatique à l'USMB",
            "cv-btn-linkedin": "Voir mon profil LinkedIn",
            "cv-about-title": "À propos",
            "cv-about-text": "Étudiant en 3e année de BUT Informatique à l'USMB et en alternance comme Data Analyst chez Carrier. J'exploite et valorise les données pour optimiser les processus et appuyer la prise de décision en milieu industriel. J'aimerais poursuivre en master Big Data & IA en alternance, pour évoluer vers le data engineering.",
            "cv-exp-title": "Expérience",
            "cv-exp1-title": "Data Analyst",
            "cv-exp1-type": "Alternance",
            "cv-exp1-dates": "sept. 2026 – aujourd'hui",
            "cv-exp1-place": "Culoz-Béon, Auvergne-Rhône-Alpes · Sur site",
            "cv-exp1-desc": "Exploitation et valorisation des données pour optimiser les processus et appuyer la prise de décision en milieu industriel.",
            "cv-exp2-duration": "6 mois",
            "cv-exp2-place": "Annecy, Auvergne-Rhône-Alpes · Sur site",
            "cv-exp2a-title": "Assistant marketing Web",
            "cv-exp2a-type": "CDD",
            "cv-exp2a-dates": "juil. 2026 – sept. 2026 · 3 mois",
            "cv-exp2b-title": "Stagiaire en développement Web",
            "cv-exp2b-type": "Stage",
            "cv-exp2b-dates": "avr. 2026 – juin 2026 · 3 mois",
            "cv-exp3-title": "Receveur cabine péage",
            "cv-exp3-type": "Intérimaire",
            "cv-exp3-dates": "juil. 2025 – août 2025 · 2 mois",
            "cv-exp3-place": "Modane, Auvergne-Rhône-Alpes · Sur site",
            "cv-exp3-desc": "Traitement des paiements et assistance aux clients en français et en anglais, garantissant la précision et la fluidité du trafic.",
            "cv-edu-title": "Formation",
            "cv-edu1-degree": "BUT Informatique, parcours AGED – Administration, gestion et exploitation des données",
            "cv-edu1-dates": "sept. 2024 – juil. 2027",
            "cv-edu2-degree": "Baccalauréat STI2D (sciences et technologies de l'industrie et du développement durable), spécialité SIN – Systèmes d'information et numérique",
            "cv-edu2-dates": "sept. 2022 – juil. 2024",
            "cv-skills-title": "Compétences",
            "cv-skills-top": "Principales",
            "cv-skills-other": "Autres",
            "cv-skill-analysis": "Analyse de données",
            "cv-skill-dbadmin": "Administration de bases de données",
            "cv-skill-dataviz": "Visualisation de données",
            "cv-skill-stats": "Statistiques",
            "cv-skill-webdev": "Développement web",
            "cv-lang-title": "Langues",
            "cv-lang-fr": "Français",
            "cv-lang-fr-level": "Langue natale",
            "cv-lang-en": "Anglais",
            "cv-lang-en-level": "Capacité professionnelle fonctionnelle",
            "cv-lang-it": "Italien",
            "cv-lang-it-level": "Capacité professionnelle limitée",
            "cv-contact-title": "Contact",
            "cv-contact-email-label": "E-mail",
            "cv-contact-location-label": "Localisation",
            "dur-month": "mois",
            "dur-months": "mois",
            "dur-year": "an",
            "dur-years": "ans"
        },
        en: {
            "nav-brand": "Portfolio",
            "nav-home": "HOME",
            "nav-projects": "PROJECTS",
            "nav-cv": "ABOUT ME",
            "footer-tagline": "Computer Science student · Data & Development.",
            "footer-rights": "All rights reserved.",
            "btn-back-projects": "← Back to Projects",
            "btn-view-project": "View project",
            "btn-download-zip": "Download ZIP",
            "btn-view-script": "View SQL Script",
            "btn-view-insert": "View Insert SQL",
            "btn-play-game": "Play Game",
            "btn-download-excel": "Download Excel (.xlsm)",
            "btn-view-repo": "View Source Code",
            "tech-title": "Technologies",
            "resources-title": "Resources",
            "play-title": "Play",
            "download-title": "Download",
            "source-title": "Source Code",
            "footer-linkedin": "LinkedIn",
            "project-header-title": "My Projects",
            "project-header-subtitle": "EXPLORE MY WORK",
            "project-search-placeholder": "Search...",
            "filter-all": "All",
            "proj-status-inprogress": "In Progress",
            "proj-status-completed": "Completed",

            "tag-laravel": "Laravel",
            "tag-sql": "PostgreSQL",
            "tag-php": "PHP",
            "tag-bpmn": "BPMN",
            "tag-git": "Git",
            "tag-html": "HTML5",
            "tag-css": "CSS3",
            "tag-js": "Vanilla JS",
            "tag-json": "JSON",
            "tag-excel": "Excel",
            "tag-vba": "VBA",
            "tag-csharp": "C#",
            "tag-wpf": "WPF",

            "proj6-title": "otM - Interactive Word Game",
            "proj6-desc": "Puzzle game developed in Vanilla JS featuring random word generation and a dark/light mode.",
            "proj6-meta": "November 2025 | Personal Project | Web Game Development",
            "p6-badge": "Web Game Development",
            "p6-title": "otM Game",
            "p6-date": "November 2025 | Personal Project",
            "p6-section1-title": "About the Project",
            "p6-desc": "<strong>otM</strong> is an interactive word game entirely designed and developed for the web. The goal of this project was to create a fun and smooth experience while managing complex game logic in the background. DOM manipulation and event handling were implemented in pure JavaScript to ensure optimal responsiveness.",
            "p6-section2-title": "Technical Details",
            "p6-list1": "Complete logic development in Vanilla JS.",
            "p6-list2": "Random word generation with difficulty and length filtering.",
            "p6-list3": "Dynamic theme switching (Dark / Light).",

            "proj5-title": "Maison Sibilia - WPF Mgmt App",
            "proj5-desc": "Development of a heavy Desktop application using C# WPF for centralized production and order management for Maison Sibilia. PostgreSQL database.",
            "proj5-meta": "June 2025 | IUT Annecy | Software Development",
            "p5-badge": ".NET Desktop Application",
            "p5-title": "Sibilia - Production Management",
            "p5-date": "June 2025 | IUT Annecy",
            "p5-section1-title": "Project Context",
            "p5-desc": "Maison Sibilia needed a robust solution to digitize management across its 5 shops and central workshop. A Windows application (WPF) was chosen to ensure performance and ergonomics at workstations.",
            "p5-section2-title": "Technical Achievements",
            "p5-desc2": "Design and development of a high-performance heavy client connected to a centralized database.",
            "p5-list1": "C# development with WPF (Windows Presentation Foundation) framework.",
            "p5-list2": "MVVM architecture for clean separation of logic and UI.",
            "p5-list3": "Complex relational database management with PostgreSQL.",
            "p5-list4": "Implementation of dashboards for real-time stock tracking.",

            "proj1-title": "Team Project - Web Application & Database Management",
            "proj1-desc": "Developed a Laravel web app in a 5-person team. Designed data models and BPMN diagrams, implemented cryptography and communication modules, and created dashboards using Scrum.",
            "proj1-meta": "October 2025 - Present | University of Savoy / IUT Annecy | University Project",
            "proj1-tag-laravel": "Laravel",
            "proj1-tag-sql": "PostgreSQL",
            "proj1-tag-git": "Git",
            "p1-badge": "Fullstack Web Dev",
            "p1-title": "Club Med - Laravel App",
            "p1-date": "October 2025 - Present | IUT Annecy",
            "p1-section1-title": "Overview",
            "p1-desc": "Development of a Laravel web app in a 5-person team. This university project aimed to simulate a holiday resort management system using Scrum.",
            "p1-section2-title": "Technical Challenges",
            "p1-list1": "Complex Data Model design (MCD/MLD).",
            "p1-list2": "BPMN diagrams for process modeling.",
            "p1-list3": "Implementation of cryptography modules.",
            "p1-list4": "Creation of management dashboards.",
            
            "proj3-title": "Task Automation (Excel)",
            "proj3-desc": "Developed a Decision-Support Tool (OAD) in Excel for a management simulation (OGPLAY). The tool automates calculating raw material needs, machine control, human resources, and loss management via a dashboard.",
            "proj3-meta": "April 2025 | University of Savoy / IUT Annecy | Decision Support Tool",
            "proj3-tag-excel": "Excel",
            "proj3-tag-vba": "VBA",
            "p3-badge": "Automation & Data",
            "p3-title": "Decision Support Tool (OAD)",
            "p3-date": "April 2025 | IUT Annecy",
            "p3-section1-title": "Objective",
            "p3-desc": "Development of a complex Excel tool for a business simulation (OGPLAY). The goal was to create a dashboard for decision-making.",
            "p3-section2-title": "Features",
            "p3-list1": "Automated raw material calculation.",
            "p3-list2": "Human resources planning management.",
            "p3-list3": "Production and machine control.",
            "p3-list4": "Loss analysis and cost optimization.",
            

            "hero-role": "Data Analyst apprentice at Carrier",
            "hero-lead": "Third-year Computer Science (BUT) student at Université Savoie Mont Blanc in Annecy. I turn data into insight to optimise processes and support decision-making in an industrial setting.",
            "btn-projects": "See my projects",
            "btn-cv": "Download my CV",
            "cv-headline": "Data Analyst at Carrier | Third-year Computer Science (BUT) student at USMB",
            "cv-btn-linkedin": "View my LinkedIn profile",
            "cv-about-title": "About",
            "cv-about-text": "Third-year Computer Science (BUT) student at Université Savoie Mont Blanc, working as a Data Analyst apprentice at Carrier. I use and add value to data to optimise processes and support decision-making in an industrial setting. Next, I'd like to do a work-study Master's in Big Data & AI and move towards data engineering.",
            "cv-exp-title": "Experience",
            "cv-exp1-title": "Data Analyst",
            "cv-exp1-type": "Apprenticeship",
            "cv-exp1-dates": "Sep 2026 – Present",
            "cv-exp1-place": "Culoz-Béon, Auvergne-Rhône-Alpes · On-site",
            "cv-exp1-desc": "Using and adding value to data to optimise processes and support decision-making in an industrial setting.",
            "cv-exp2-duration": "6 mos",
            "cv-exp2-place": "Annecy, Auvergne-Rhône-Alpes · On-site",
            "cv-exp2a-title": "Web Marketing Assistant",
            "cv-exp2a-type": "Fixed-term",
            "cv-exp2a-dates": "Jul 2026 – Sep 2026 · 3 mos",
            "cv-exp2b-title": "Web Development Intern",
            "cv-exp2b-type": "Internship",
            "cv-exp2b-dates": "Apr 2026 – Jun 2026 · 3 mos",
            "cv-exp3-title": "Toll Booth Operator",
            "cv-exp3-type": "Temp",
            "cv-exp3-dates": "Jul 2025 – Aug 2025 · 2 mos",
            "cv-exp3-place": "Modane, Auvergne-Rhône-Alpes · On-site",
            "cv-exp3-desc": "Processed payments and assisted customers in French and English, ensuring accuracy and smooth traffic flow.",
            "cv-edu-title": "Education",
            "cv-edu1-degree": "BUT in Computer Science (Bachelor of Technology), AGED track – Data administration, management and exploitation",
            "cv-edu1-dates": "Sep 2024 – Jul 2027",
            "cv-edu2-degree": "French Baccalaureate STI2D (industrial science, technology and sustainable development), SIN specialty – Digital and information systems",
            "cv-edu2-dates": "Sep 2022 – Jul 2024",
            "cv-skills-title": "Skills",
            "cv-skills-top": "Top skills",
            "cv-skills-other": "Other skills",
            "cv-skill-analysis": "Data analysis",
            "cv-skill-dbadmin": "Database administration",
            "cv-skill-dataviz": "Data visualisation",
            "cv-skill-stats": "Statistics",
            "cv-skill-webdev": "Web development",
            "cv-lang-title": "Languages",
            "cv-lang-fr": "French",
            "cv-lang-fr-level": "Native language",
            "cv-lang-en": "English",
            "cv-lang-en-level": "Professional working proficiency",
            "cv-lang-it": "Italian",
            "cv-lang-it-level": "Limited working proficiency",
            "cv-contact-title": "Contact",
            "cv-contact-email-label": "Email",
            "cv-contact-location-label": "Location",
            "dur-month": "mo",
            "dur-months": "mos",
            "dur-year": "yr",
            "dur-years": "yrs"
        }
    };

    let currentSearchTerm = '';
    let currentTagFilter = 'all';

    function changeLanguage(lang) {
        const langButtons = document.querySelectorAll('.lang-switcher a');
        document.documentElement.lang = lang;

        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        const cvFile = lang === 'en' ? 'Assets/Image/EnzoPagesEN_CV.pdf' : 'Assets/Image/EnzoPagesFR_CV.pdf';
        document.querySelectorAll('a[data-key="btn-cv"]').forEach(link => link.setAttribute('href', cvFile));

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = translations[lang] && translations[lang][key];
            if (translation) {
                if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.type !== 'submit' && element.type !== 'button') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        updateDurations(lang);

        try { localStorage.setItem('preferredLang', lang); } catch (e) {}

        setTimeout(applyFilters, 50);
    }

    // Durée d'un poste en cours, comptée comme LinkedIn (mois de début inclus).
    function updateDurations(lang) {
        const t = translations[lang] || translations.fr;
        const now = new Date();
        document.querySelectorAll('[data-since]').forEach(el => {
            const [y, m] = el.getAttribute('data-since').split('-').map(Number);
            const total = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m) + 1;
            const years = Math.floor(total / 12);
            const months = total % 12;
            const parts = [];
            if (years) parts.push(years + ' ' + (years > 1 ? t['dur-years'] : t['dur-year']));
            if (months) parts.push(months + ' ' + (months > 1 ? t['dur-months'] : t['dur-month']));
            el.textContent = parts.join(' ');
        });
    }

    function applyFilters() {
        const projects = document.querySelectorAll('.project-card');
        if (!projects.length) return;

        const searchTerm = currentSearchTerm.toLowerCase().trim();

        projects.forEach(project => {
            const titleEl = project.querySelector('.project-card-title');
            const descEl = project.querySelector('.project-card-desc');
            const title = (titleEl ? titleEl.textContent : '').toLowerCase();
            const description = (descEl ? descEl.textContent : '').toLowerCase();
            const tagEls = Array.from(project.querySelectorAll('.project-tag'));
            const projectTagsText = tagEls.map(tag => tag.textContent.toLowerCase()).join(' ');

            const searchableText = title + ' ' + description + ' ' + projectTagsText;
            const matchesSearch = searchableText.includes(searchTerm);

            let matchesTag = false;
            if (currentTagFilter === 'all') {
                matchesTag = true;
            } else {
                const projectTagKeys = tagEls.map(tag => tag.getAttribute('data-key'));
                matchesTag = projectTagKeys.includes(currentTagFilter);
            }

            if (matchesSearch && matchesTag) {
                project.style.display = '';
                project.style.animation = 'fadeInUp 0.45s ease forwards';
            } else {
                project.style.display = 'none';
            }
        });
    }

    function setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-switcher a');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.getAttribute('data-lang');
                changeLanguage(lang);
            });
        });

        const savedLang = localStorage.getItem('preferredLang');
        const initialLang = savedLang || 'fr';
        changeLanguage(initialLang);
        document.documentElement.classList.add('lang-ready');
    }

    // Menu déroulant sur mobile (bouton à trois traits).
    function setupMobileNav() {
        const nav = document.querySelector('.navbar');
        const toggle = nav && nav.querySelector('.nav-toggle');
        if (!toggle) return;

        const setOpen = (open) => {
            nav.classList.toggle('menu-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        };

        toggle.addEventListener('click', () => setOpen(!nav.classList.contains('menu-open')));
        nav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => setOpen(false)));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('menu-open')) {
                setOpen(false);
                toggle.focus();
            }
        });
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) setOpen(false);
        });
        const desktop = window.matchMedia('(min-width: 761px)');
        const onChange = (e) => { if (e.matches) setOpen(false); };
        if (desktop.addEventListener) desktop.addEventListener('change', onChange);
        else if (desktop.addListener) desktop.addListener(onChange);
    }

    function setupScrollInteractions() {
        const progressBar = document.getElementById('progress-bar');
        const backToTopButton = document.getElementById('back-to-top');

        window.onscroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

            if (progressBar) {
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.style.width = scrolled + "%";
            }

            if (backToTopButton) {
                if (winScroll > 400) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            }
        };

        if (backToTopButton) {
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    function setupProjectFilter() {
        const searchBar = document.getElementById('project-search-bar');
        const tagContainer = document.getElementById('project-tag-filters');

        if (searchBar) {
            searchBar.addEventListener('input', (e) => {
                currentSearchTerm = e.target.value;
                applyFilters();
            });
        }

        if (tagContainer) {
            const filterTags = tagContainer.querySelectorAll('.filter-tag');
            filterTags.forEach(tagButton => {
                tagButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    filterTags.forEach(btn => btn.classList.remove('active'));
                    tagButton.classList.add('active');
                    currentTagFilter = tagButton.getAttribute('data-filter');
                    applyFilters();
                });
            });
        }
    }

    function setupScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.cv-section, .cv-item, .project-item, .text-column');
        elements.forEach(el => observer.observe(el));
    }


    function setupProjectCarousels() {
        const carousels = document.querySelectorAll('.project-carousel');
        if (!carousels.length) return;

        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <span class="image-modal-close" aria-label="Fermer">&times;</span>
            <button class="image-modal-nav prev" aria-label="Image précédente">&#10094;</button>
            <img class="image-modal-content" id="img-modal-content" alt="">
            <button class="image-modal-nav next" aria-label="Image suivante">&#10095;</button>
            <div class="image-modal-counter"></div>
        `;
        document.body.appendChild(modal);

        const modalImg = modal.querySelector('#img-modal-content');
        const counter = modal.querySelector('.image-modal-counter');
        const closeBtn = modal.querySelector('.image-modal-close');
        const lbPrev = modal.querySelector('.image-modal-nav.prev');
        const lbNext = modal.querySelector('.image-modal-nav.next');

        let lbSources = [];
        let lbIndex = 0;

        function renderLightbox() {
            modalImg.src = lbSources[lbIndex];
            counter.textContent = (lbIndex + 1) + ' / ' + lbSources.length;
            const multi = lbSources.length > 1;
            lbPrev.style.display = multi ? '' : 'none';
            lbNext.style.display = multi ? '' : 'none';
            counter.style.display = multi ? '' : 'none';
        }
        function openLightbox(sources, index) {
            lbSources = sources;
            lbIndex = index;
            renderLightbox();
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        function closeLightbox() {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
        function lbStep(dir) {
            lbIndex = (lbIndex + dir + lbSources.length) % lbSources.length;
            renderLightbox();
        }

        closeBtn.onclick = closeLightbox;
        lbPrev.onclick = (e) => { e.stopPropagation(); lbStep(-1); };
        lbNext.onclick = (e) => { e.stopPropagation(); lbStep(1); };
        modal.addEventListener('click', (e) => { if (e.target === modal) closeLightbox(); });
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('open')) return;
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') lbStep(-1);
            else if (e.key === 'ArrowRight') lbStep(1);
        });

        carousels.forEach(carousel => {
            const imgs = Array.from(carousel.querySelectorAll('img'));
            if (!imgs.length) return;
            const sources = imgs.map(i => i.src);

            const track = document.createElement('div');
            track.className = 'carousel-track';
            imgs.forEach(img => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.appendChild(img);
                track.appendChild(slide);
            });

            carousel.innerHTML = '';
            carousel.appendChild(track);

            let index = 0;
            const multi = imgs.length > 1;

            const prev = document.createElement('button');
            prev.className = 'carousel-nav prev';
            prev.setAttribute('aria-label', 'Image précédente');
            prev.innerHTML = '&#10094;';

            const next = document.createElement('button');
            next.className = 'carousel-nav next';
            next.setAttribute('aria-label', 'Image suivante');
            next.innerHTML = '&#10095;';

            const dots = document.createElement('div');
            dots.className = 'carousel-dots';
            imgs.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot';
                dot.setAttribute('aria-label', 'Image ' + (i + 1));
                dot.addEventListener('click', () => goTo(i));
                dots.appendChild(dot);
            });

            function update() {
                track.style.transform = 'translateX(' + (-index * 100) + '%)';
                dots.querySelectorAll('.carousel-dot').forEach((d, i) =>
                    d.classList.toggle('active', i === index));
            }
            function goTo(i) { index = (i + imgs.length) % imgs.length; update(); }

            prev.addEventListener('click', () => goTo(index - 1));
            next.addEventListener('click', () => goTo(index + 1));

            if (multi) {
                carousel.appendChild(prev);
                carousel.appendChild(next);
                carousel.appendChild(dots);
            }

            imgs.forEach((img, i) => {
                img.addEventListener('click', () => openLightbox(sources, i));
            });

            let startX = 0;
            track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
            track.addEventListener('touchend', (e) => {
                const dx = e.changedTouches[0].clientX - startX;
                if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
            });

            update();
        });
    }

    setupLanguageSwitcher();
    setupMobileNav();
    setupScrollInteractions();
    setupProjectFilter();
    setupScrollAnimations();
    setupProjectCarousels();
});
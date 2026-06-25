document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        fr: {
            "nav-brand": "Portfolio",
            "nav-home": "ACCUEIL",
            "nav-projects": "PROJETS",
            "nav-cv": "A PROPOS DE MOI",
            "nav-contact": "CONTACT",
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
            "pre-title": "BONJOUR,",
            "welcome-title-1": "Je suis ",
            "welcome-title-name": "Enzo",
            "welcome-title-2": " Pagès",
            "welcome-subtitle": "Étudiant en deuxième année de BUT Informatique, spécialité Administration, Gestion et Exploitation des Données à Annecy.",
            "btn-cv": "REGARDER MON CV",
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
            "tag-phaser": "Phaser 3",
            "tag-excel": "Excel",
            "tag-vba": "VBA",
            "tag-csharp": "C#",
            "tag-wpf": "WPF",

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
            
            "proj4-title": "Portfolio Personnel & Cas d'étude Web",
            "proj4-desc": "Conception intégrale d'un site portfolio sans framework (Vanilla JS) présenté comme cas d'étude technique en BUT2. Objectif : Maîtriser le cycle de vie du DOM, implémenter un système de traduction i18n dynamique via JSON, et créer des animations CSS (Glassmorphism) performantes.",
            "proj4-meta": "Novembre 2025 | Université de Savoie / IUT Annecy | Développement Front-End",
            "proj4-tag-html": "HTML5",
            "proj4-tag-css": "CSS3",
            "proj4-tag-js": "Vanilla JS",
            "p4-badge": "Front-End Development",
            "p4-title": "Portfolio Personnel",
            "p4-date": "Novembre 2025 | IUT Annecy",
            "p4-section1-title": "Description",
            "p4-desc": "Conception intégrale de mon site portfolio. Réalisé sans framework (pas de React/Bootstrap) pour maîtriser les bases fondamentales du web.",
            "p4-section2-title": "Points Forts",
            "p4-list1": "Design Glassmorphism et CSS avancé.",
            "p4-list2": "Système de traduction dynamique (i18n) via JSON/JS.",
            "p4-list3": "Performance et animations fluides.",
            "p4-list4": "Structure de code propre et modulaire.",
            
            "proj2-title": "Jeu d'esquive en Phaser 3",
            "proj2-desc": "Un jeu d'esquive simple développé avec JavaScript Phaser 3. Le joueur doit éviter des astéroïdes pour survivre.",
            "proj2-meta": "Octobre 2025 | Université de Savoie / IUT Annecy | Développement Multimédia",
            "proj2-tag-phaser": "Phaser 3",
            "proj2-tag-js": "JavaScript",
            "p2-badge": "Développement Jeu Web",
            "p2-title": "Jeu d'esquive en Phaser 3",
            "p2-date": "Octobre 2025 | IUT Annecy",
            "p2-section1-title": "Concept du Jeu",
            "p2-desc": "Un jeu d'esquive simple développé avec JavaScript Phaser 3. Le joueur doit éviter des astéroïdes pour survivre.",
            "p2-section2-title": "Détails Techniques",
            "p2-desc2": "Ce projet m'a permis d'appréhender la logique de boucle de jeu (Game Loop), la physique (gravité) et l'animation de sprites.",
            "p2-list1": "Gestion des scènes (Menu, Jeu, Game Over).",
            "p2-list2": "Animations des sprites du personnage.",
            "p2-list3": "Système de score dynamique.",
            
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
            
            "contact-header-title": "Contactez-moi",
            "contact-header-subtitle": "PRENDRE CONTACT",
            "contact-form-name": "Votre nom",
            "contact-form-email": "Votre email",
            "contact-form-subject": "Sujet",
            "contact-form-message": "Votre message...",
            "contact-form-submit": "Envoyer le message",
            "contact-form-success": "Merci ! Votre message a été envoyé.",
            "contact-form-error": "Oops! Une erreur est survenue.",
            "contact-form-error-network": "Oops! Problème de connexion réseau.",
            "cv-header-title": "Enzo Pagès",
            "cv-header-subtitle": "ÉTUDIANT EN INFORMATIQUE",
            "cv-objective-title": "Objectif",
            "cv-objective-text": "Étudiant en deuxième année d'informatique à l'Université d'Annecy, spécialisé dans la gestion des données. À la recherche d'un stage pour appliquer mes compétences en développement logiciel et en analyse de données à des projets innovants.",
            "cv-exp-title": "Expériences Professionnelles",
            "cv-exp1-title": "Projet d'équipe - Application Web & Base de Données",
            "cv-exp1-meta": "Octobre 2025 - Janvier 2026 | Université de Savoie / IUT Annecy",
            "cv-exp1-desc": "Développement d'une application web Laravel au sein d'une équipe de 4 personnes. Conception de modèles de données et de diagrammes BPMN, implémentation de modules de cryptographie et de communication, et création de tableaux de bord Power BI en utilisant Scrum.",
            "cv-exp2-title": "Agent de Péage (Contrat Saisonnier)",
            "cv-exp2-meta": "Juillet - Août 2025 | SFTRF - Modane, France",
            "cv-exp2-desc": "Traitement des paiements et assistance aux clients en français et en anglais, garantissant la précision et la fluidité du trafic.",
            "cv-skills-tech-title": "Compétences Techniques",
            "cv-skill-csharp": "C#",
            "cv-skill-python": "Python",
            "cv-skill-sql": "SQL (PostgreSQL)",
            "cv-skill-html": "HTML",
            "cv-skill-css": "CSS",
            "cv-skill-js": "JavaScript",
            "cv-skill-php": "PHP",
            "cv-skill-powerbi": "Power BI",
            "cv-skill-powerplatform": "Power Platform",
            "cv-skill-excel": "Excel/VBA",
            "cv-skill-agile": "Méthode Agile (Scrum)",
            "cv-skill-gantt": "Gantt",
            "cv-skills-soft-title": "Compétences Personnelles",
            "cv-skill-soft1": "Bonne gestion du temps et ponctualité.",
            "cv-skill-soft2": "Autonome et capable de prendre des initiatives.",
            "cv-skill-soft3": "Adaptable et autosuffisant.",
            "cv-skill-soft4": "Aime apprendre de nouvelles choses.",
            "cv-edu-title": "Formation",
            "cv-edu1-title": "BUT Informatique",
            "cv-edu1-meta": "2024 - Aujourd'hui | Université de Savoie / IUT Annecy, France",
            "cv-edu1-desc": "Bachelor Universitaire de Technologie en informatique.",
            "cv-edu2-title": "Baccalauréat STI2D - SIN",
            "cv-edu2-meta": "Obtenu en 2024 | Lycée Paul Héroult, France",
            "cv-edu2-desc": "Baccalauréat français spécialisé en Sciences et Technologies Industrielles (STI2D - Systèmes d'Information et Numérique).",
            "cv-lang-title": "Langues",
            "cv-misc-lang": "Français (Natif), Anglais (Élémentaire, B1)",
            "cv-misc-title": "Divers (Centres d'intérêt)",
            "cv-misc-hobby1": "<strong>Musculation :</strong> Pratique régulière (4 fois par semaine), avec un focus sur la progression, la technique et l’amélioration globale de la condition physique.",
            "cv-misc-hobby2": "<strong>Sports mécaniques :</strong> Passion pour le rallye et la Formule 1, autant pour la performance des véhicules que pour la stratégie, la compétition et l’innovation technologique.",
            "cv-misc-hobby3": "<strong>Programmation :</strong> Développement de projets personnels (sites web, petits jeux) pour explorer de nouvelles idées, améliorer mes compétences et créer des expériences interactives.",
            "cv-contact-title": "Contact & Données Personnelles",
            "cv-contact-phone": "+33(0)620218977",
            "cv-contact-email": "Enzo.Pages@etu.univ-smb.fr",
            "cv-contact-address": "7 Rue de la Louvatière, France",
            "cv-contact-dob": "Date de naissance : 24 Sept. 2006",
            "cv-contact-nationality": "Nationalité : Française",
            "cv-contact-license": "Permis : Permis de conduire",
            "cv-contact-linkedin": "linkedin.com/in/enzopages-06e",
            "cv-ref-title": "Références",
            "cv-ref1-name": "Luc DAMAS",
            "cv-ref1-meta": "Professeur Associé de Programmation | luc.damas@etu.univ-smb.fr",
            "cv-ref2-name": "Stéphanie VIBRAC",
            "cv-ref2-meta": "Maître de conférences en anglais, Coordinatrice internationale | stephanie.vibrac@etu.univ-smb.fr"
        },
        en: {
            "nav-brand": "Portfolio",
            "nav-home": "HOME",
            "nav-projects": "PROJECTS",
            "nav-cv": "ABOUT ME",
            "nav-contact": "CONTACT",
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
            "pre-title": "HELLO,",
            "welcome-title-1": "I'm ",
            "welcome-title-name": "Enzo",
            "welcome-title-2": " Pagès",
            "welcome-subtitle": "Second-year student in a Bachelor of Technology (BUT) in Computer Science, specializing in Data Administration, Management, and Processing, in Annecy.",
            "btn-cv": "CHECK MY CV",
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
            "tag-phaser": "Phaser 3",
            "tag-excel": "Excel",
            "tag-vba": "VBA",
            "tag-csharp": "C#",
            "tag-wpf": "WPF",

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
            
            "proj4-title": "Personal Portfolio & Web Case Study",
            "proj4-desc": "Full design of a portfolio website without frameworks (Vanilla JS) presented as a technical case study in BUT2. Goal: Master the DOM lifecycle, implement a dynamic JSON i18n translation system, and create performant CSS animations (Glassmorphism).",
            "proj4-meta": "November 2025 | University of Savoy / IUT Annecy | Front-End Development",
            "proj4-tag-html": "HTML5",
            "proj4-tag-css": "CSS3",
            "proj4-tag-js": "Vanilla JS",
            "p4-badge": "Front-End Development",
            "p4-title": "Personal Portfolio",
            "p4-date": "November 2025 | IUT Annecy",
            "p4-section1-title": "Description",
            "p4-desc": "Full design of my portfolio website. Made without frameworks (no React/Bootstrap) to master web fundamentals.",
            "p4-section2-title": "Highlights",
            "p4-list1": "Glassmorphism design and advanced CSS.",
            "p4-list2": "Dynamic translation system (i18n) via JSON/JS.",
            "p4-list3": "Performance and smooth animations.",
            "p4-list4": "Clean and modular code structure.",
            
            "proj2-title": "Phaser 3 Dodging Game",
            "proj2-desc": "A simple dodging game developed with JavaScript Phaser 3. The player must avoid asteroids to survive.",
            "proj2-meta": "October 2025 | University of Savoy / IUT Annecy | Multimedia Development",
            "proj2-tag-phaser": "Phaser 3",
            "proj2-tag-js": "JavaScript",
            "p2-badge": "Web Game Dev",
            "p2-title": "Phaser 3 Dodging Game",
            "p2-date": "October 2025 | IUT Annecy",
            "p2-section1-title": "Game Concept",
            "p2-desc": "A simple dodging game developed with JavaScript Phaser 3. The player must avoid asteroids to survive.",
            "p2-section2-title": "Technical Details",
            "p2-desc2": "This project helped me understand Game Loops, physics (gravity), and sprite animation.",
            "p2-list1": "Scene management (Menu, Game, Game Over).",
            "p2-list2": "Character sprite animations.",
            "p2-list3": "Dynamic scoring system.",
            
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
            
            "contact-header-title": "Contact Me",
            "contact-header-subtitle": "GET IN TOUCH",
            "contact-form-name": "Your Name",
            "contact-form-email": "Your Email",
            "contact-form-subject": "Subject",
            "contact-form-message": "Your Message...",
            "contact-form-submit": "Send Message",
            "contact-form-success": "Thank you! Your message has been sent.",
            "contact-form-error": "Oops! There was a problem.",
            "contact-form-error-network": "Oops! Network connection error.",
            "cv-header-title": "Enzo Pagès",
            "cv-header-subtitle": "IT STUDENT",
            "cv-objective-title": "Job Objective",
            "cv-objective-text": "Second-year Computer Science student at the University of Annecy, specializing in data management. Seeking an internship to apply my skills in software development and data analysis to innovative projects.",
            "cv-exp-title": "Work Experiences",
            "cv-exp1-title": "Team Project - Web Application & Database Management",
            "cv-exp1-meta": "October 2025 - January 2026 | University of Savoy / IUT Annecy - Annecy-le-Vieux, France",
            "cv-exp1-desc": "Developed a Laravel web app in a 4-person team. Designed data models and BPMN diagrams, implemented cryptography and communication modules, and created Power BI dashboards using Scrum.",
            "cv-exp2-title": "Toll Booth Operator (Temp Contract)",
            "cv-exp2-meta": "July - August 2025 | SFTRF - Société Française du Tunnel Routier du Fréjus - Modane, France",
            "cv-exp2-desc": "Processed payments and assisted customers in French and English, ensuring accuracy and smooth traffic flow.",
            "cv-skills-tech-title": "Technical Skills",
            "cv-skill-csharp": "C#",
            "cv-skill-python": "Python",
            "cv-skill-sql": "SQL (PostgreSQL)",
            "cv-skill-html": "HTML",
            "cv-skill-css": "CSS",
            "cv-skill-js": "JavaScript",
            "cv-skill-php": "PHP",
            "cv-skill-powerbi": "Power BI",
            "cv-skill-powerplatform": "Power Platform",
            "cv-skill-excel": "Excel/VBA",
            "cv-skill-agile": "Agile Method (Scrum)",
            "cv-skill-gantt": "Gantt",
            "cv-skills-soft-title": "Soft Skills",
            "cv-skill-soft1": "I have good time management skills and am punctual.",
            "cv-skill-soft2": "I am self-directed and able to take initiative.",
            "cv-skill-soft3": "I am adaptable and self-sufficient.",
            "cv-skill-soft4": "Love learning new things.",
            "cv-edu-title": "Education",
            "cv-edu1-title": "Technical Bachelor's Degree in computer science",
            "cv-edu1-meta": "2024 - Today | University of Savoy / IUT Annecy, France",
            "cv-edu1-desc": "University Bachelor of Technology in Computer Science.",
            "cv-edu2-title": "French Baccalaureate",
            "cv-edu2-meta": "2024 | Paul Héroult High School - Saint-Jean-de-Maurienne, France",
            "cv-edu2-desc": "High School Diploma specialized in Science and Industrial Technologies (STI2D - Information and Digital Systems).",
            "cv-lang-title": "Languages",
            "cv-misc-lang": "French (Native Speaker), English (Elementary, B1)",
            "cv-misc-title": "Miscellaneous (Hobbies)",
            "cv-misc-hobby1": "<strong>Weight Training:</strong> Regular practice (4 times a week), with a focus on progression, technique, and overall physical conditioning.",
            "cv-misc-hobby2": "<strong>Motorsports:</strong> Passion for Rally and Formula 1, appreciating vehicle performance, strategy, competition, and technological innovation.",
            "cv-misc-hobby3": "<strong>Programming:</strong> Developing personal projects (websites, small games) to explore new ideas, improve my skills, and create interactive experiences.",
            "cv-contact-title": "Personal Data",
            "cv-contact-phone": "+33(0)620218977",
            "cv-contact-email": "Enzo.Pages@etu.univ-smb.fr",
            "cv-contact-address": "7 Rue de la Louvatière, France",
            "cv-contact-dob": "Date of Birth: Sept 24, 2006",
            "cv-contact-nationality": "Nationality: French",
            "cv-contact-license": "Car License",
            "cv-contact-linkedin": "LinkedIn: linkedin.com/in/enzopages-06e",
            "cv-ref-title": "References",
            "cv-ref1-name": "Luc DAMAS",
            "cv-ref1-meta": "Programming Associate Professor | luc.damas@etu.univ-smb.fr",
            "cv-ref2-name": "Stéphanie VIBRAC",
            "cv-ref2-meta": "English Lecturer, International Coordinator | stephanie.vibrac@etu.univ-smb.fr"
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

        const cvButton = document.querySelector('a[data-key="btn-cv"]');
        if (cvButton) {
            console.log("Langue sélectionnée : " + lang);
            if (lang === 'en') {
                cvButton.setAttribute('href', 'Assets/Image/EnzoPagesEN_CV.pdf');
            } else {
                cvButton.setAttribute('href', 'Assets/Image/EnzoPagesFR_CV.pdf');
            }
            console.log("Le lien du CV pointe vers : " + cvButton.getAttribute('href'));
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = translations[lang] && translations[lang][key];
            if (translation) {
                if (element.id === 'typing-text') {
                    element.setAttribute('data-text', translation);
                    element.innerHTML = '<span class="cursor"></span>';
                } else if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.type !== 'submit' && element.type !== 'button') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        localStorage.setItem('preferredLang', lang);

        if (document.getElementById('typing-text')) {
            typingEffect(document.getElementById('typing-text'));
        }
        
        setTimeout(applyFilters, 50);
    }

    function typingEffect(element) {
        if (!element) return;
        const text = element.getAttribute('data-text');
        if (!text) return;

        let i = 0;
        element.innerHTML = '<span class="cursor"></span>';
        element.classList.add('typing');
        element.classList.remove('typing-done');

        const cursor = element.querySelector('.cursor');

        function type() {
            if (i < text.length) {
                const char = text.charAt(i);
                const textNode = document.createTextNode(char);
                element.insertBefore(textNode, cursor);
                i++;

                const elementRect = element.getBoundingClientRect();
                const elementBottom = elementRect.bottom;
                const windowHeight = window.innerHeight;

                if (elementBottom > windowHeight - 100) {
                    window.scrollBy({
                        top: 2,
                        behavior: 'auto'
                    });
                }

                setTimeout(type, 20);
            } else {
                element.classList.remove('typing');
                element.classList.add('typing-done');
            }
        }
        type();
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

    function setupFormSpreeAJAX() {
        const form = document.getElementById('contact-form-element');
        const status = document.getElementById('form-status');

        if (!form || !status) {
            return;
        }

        async function handleSubmit(event) {
            event.preventDefault();

            const data = new FormData(event.target);
            const currentLang = localStorage.getItem('preferredLang') || 'en';

            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = translations[currentLang]["contact-form-success"];
                    status.className = 'form-status-message success';
                    form.reset();
                } else {
                    status.innerHTML = translations[currentLang]["contact-form-error"];
                    status.className = 'form-status-message error';
                }
            } catch (error) {
                status.innerHTML = translations[currentLang]["contact-form-error-network"];
                status.className = 'form-status-message error';
            }
            setTimeout(() => {
                status.innerHTML = "";
                status.className = 'form-status-message';
            }, 5000);
        }

        form.addEventListener("submit", handleSubmit);
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

    function setupImageZoom() {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <span class="image-modal-close">&times;</span>
            <img class="image-modal-content" id="img-modal-content">
        `;
        document.body.appendChild(modal);

        const modalImg = document.getElementById('img-modal-content');
        const closeBtn = document.querySelector('.image-modal-close');

        const images = document.querySelectorAll('.project-hero-image, .project-hero-image-secondary, .thumb-img');

        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "flex";
                modal.style.justifyContent = "center";
                modal.style.alignItems = "center";
                modalImg.src = this.src;
                document.body.style.overflow = "hidden";
            });
        });

        function closeModal() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }

        closeBtn.onclick = closeModal;

        modal.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
        
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "flex") {
                closeModal();
            }
        });
    }

    setupLanguageSwitcher();
    setupScrollInteractions();
    setupProjectFilter();
    setupFormSpreeAJAX();
    setupScrollAnimations();
    setupImageZoom();
});
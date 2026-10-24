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
            "dur-years": "ans",

            "sec-start": "Le point de départ",
            "sec-did-team": "Ce qu'on a fait",
            "sec-did-solo": "Ce que j'ai fait",
            "sec-result": "Le résultat",
            "sec-idea": "L'idée",
            "sec-inside": "Ce qu'il y a dedans",
            "proj1-title": "Club Med – Site de réservation en Laravel",
            "proj1-desc": "Un des projets de notre 2e année de BUT, à cinq : recréer le site du Club Med en entier. De la recherche d'un séjour jusqu'au paiement, avec les comptes clients et un espace administrateur.",
            "p1-badge": "Développement web full-stack",
            "p1-title": "Club Med – Site de réservation en Laravel",
            "p1-date": "Octobre 2025 – Janvier 2026 · 2e année de BUT · Équipe de 5",
            "p1-start": "C'est un des projets de notre 2e année de BUT Informatique. Le sujet : recréer le site du Club Med de A à Z, en Laravel, à cinq. Le but était de nous mettre face à un vrai site complet, pour voir tout ce qu'il y a derrière une simple réservation en ligne.",
            "p1-list1": "Le catalogue : les destinations et les Resorts, avec une recherche et des recommandations.",
            "p1-list2": "La réservation complète, étape par étape : le Resort, les dates, le nombre de personnes, la chambre, les activités en supplément et le transport.",
            "p1-list3": "Le panier et le paiement en ligne avec Stripe.",
            "p1-list4": "Les comptes clients : inscription, connexion sécurisée par double authentification, profil, historique des réservations et avis.",
            "p1-list5": "Un espace administrateur pour consulter et modifier les réservations, ajouter et gérer les Resorts.",
            "p1-list6": "La partie gestion de projet : chiffrage du projet, modélisation des données et des processus (BPMN), travail en sprints.",
            "p1-result": "Un site qui fonctionne de bout en bout, du choix du séjour jusqu'au paiement. Ce projet m'a surtout montré la quantité de travail derrière un site qui paraît simple : une base de données conséquente à concevoir, le travail à répartir entre cinq personnes, et un même code à faire avancer ensemble avec Git.",
            "proj5-title": "Maison Sibilia – Application de gestion en C#/WPF",
            "proj5-desc": "Projet de 1re année de BUT, à trois : une application de bureau pour gérer la production et les commandes de la Maison Sibilia, reliée à une base de données PostgreSQL.",
            "p5-badge": "Application de bureau .NET",
            "p5-title": "Maison Sibilia – Gestion de la production et des commandes",
            "p5-date": "Juin 2025 · 1re année de BUT · Équipe de 3",
            "p5-start": "La Maison Sibilia, charcutier-traiteur, voulait centraliser la gestion de sa production et de ses commandes. On partait de zéro : le but du projet était d'apprendre à concevoir une vraie application de gestion, sous la forme d'une application de bureau (un client lourd) en C# WPF.",
            "p5-list1": "Une page de connexion pour accéder à l'application.",
            "p5-list2": "La gestion des produits : en ajouter, les modifier, les supprimer.",
            "p5-list3": "La gestion des commandes.",
            "p5-list4": "Le suivi de la production.",
            "p5-list5": "Une base de données PostgreSQL derrière l'interface, qui centralise toutes les informations.",
            "p5-result": "Une application de gestion complète, pensée pour un usage au quotidien. C'est avec ce projet que j'ai appris à relier une interface à une base de données, et à construire une application autour des besoins concrets d'un métier.",
            "proj3-title": "Automatisation de tâches sous Excel",
            "proj3-desc": "Pendant un jeu d'entreprise en cours, on faisait tous nos calculs à la main et on était derniers. J'ai créé seul un outil d'aide à la décision sous Excel, et on a fini premiers.",
            "p3-badge": "Automatisation & données",
            "p3-title": "Outil d'aide à la décision (OAD) sous Excel",
            "p3-date": "Avril 2025 · 1re année de BUT · Réalisé seul",
            "p3-start": "En cours, on a joué à un jeu d'entreprise (OGPLAY) contre six ou sept autres groupes. À chaque tour, il fallait décider combien produire, combien de matières premières acheter, combien d'employés et de machines utiliser. On faisait tout à la main : ça prenait du temps, on faisait beaucoup d'erreurs, et on était derniers du classement.",
            "p3-did": "J'ai conçu seul un fichier Excel qui fait ces calculs à notre place. On y entre la situation actuelle de l'entreprise, et il prépare automatiquement le tour suivant :",
            "p3-list1": "Le calcul des besoins en matières premières.",
            "p3-list2": "Le contrôle des machines et des ressources humaines.",
            "p3-list3": "La gestion des pertes.",
            "p3-list4": "Une prévision de ce qu'on allait vendre.",
            "p3-result": "L'outil est arrivé en milieu de partie, et c'est lui qui nous a fait remonter : moins d'erreurs, des décisions plus rapides et plus justes. Avec l'algorithme qu'on a mis au point en équipe vers la fin, on est passés de la dernière à la première place. C'est ce projet qui m'a montré ce que des données bien exploitées changent dans une prise de décision.",
            "proj6-title": "otM – Petit jeu de mots",
            "proj6-desc": "Un petit jeu fait pour le fun : les lettres d'un mot sont mélangées, à toi de le retrouver.",
            "p6-badge": "Projet perso",
            "p6-title": "otM – Petit jeu de mots",
            "p6-date": "Novembre 2025 · Projet perso",
            "p6-idea": "Un petit jeu fait sur mon temps libre, juste pour m'amuser : le jeu choisit un mot, mélange ses lettres, et il faut retrouver le mot d'origine.",
            "p6-list1": "Plusieurs catégories de mots.",
            "p6-list2": "Un score.",
            "p6-list3": "Un thème clair ou sombre."
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
            "dur-years": "yrs",

            "sec-start": "The starting point",
            "sec-did-team": "What we built",
            "sec-did-solo": "What I built",
            "sec-result": "The outcome",
            "sec-idea": "The idea",
            "sec-inside": "What's inside",
            "proj1-title": "Club Med – Booking website in Laravel",
            "proj1-desc": "One of our second-year BUT projects, in a team of five: rebuilding the whole Club Med website. From searching for a holiday to paying for it, with customer accounts and an admin area.",
            "p1-badge": "Full-stack web development",
            "p1-title": "Club Med – Booking website in Laravel",
            "p1-date": "October 2025 – January 2026 · 2nd year of BUT · Team of 5",
            "p1-start": "This is one of the projects of our second year of the BUT in Computer Science. The brief: rebuild the Club Med website from scratch, in Laravel, as a team of five. The point was to face a real, complete website and see everything that goes on behind a simple online booking.",
            "p1-list1": "The catalogue: destinations and Resorts, with search and recommendations.",
            "p1-list2": "The full booking flow, step by step: the Resort, the dates, the number of guests, the room, extra activities and transport.",
            "p1-list3": "The basket and online payment with Stripe.",
            "p1-list4": "Customer accounts: sign-up, secure login with two-factor authentication, profile, booking history and reviews.",
            "p1-list5": "An admin area to view and edit bookings, and to add and manage Resorts.",
            "p1-list6": "The project management side: costing the project, modelling the data and the processes (BPMN), working in sprints.",
            "p1-result": "A website that works end to end, from choosing a holiday to paying for it. Above all, this project showed me how much work sits behind a website that looks simple: a large database to design, work to split between five people, and one codebase to move forward together with Git.",
            "proj5-title": "Maison Sibilia – Management app in C#/WPF",
            "proj5-desc": "First-year BUT project, in a team of three: a desktop application to manage Maison Sibilia's production and orders, connected to a PostgreSQL database.",
            "p5-badge": ".NET desktop application",
            "p5-title": "Maison Sibilia – Production and order management",
            "p5-date": "June 2025 · 1st year of BUT · Team of 3",
            "p5-start": "Maison Sibilia, a delicatessen and caterer, wanted to manage its production and orders in one place. We started from nothing: the goal of the project was to learn how to design a real management application, as a desktop app (a thick client) in C# WPF.",
            "p5-list1": "A login screen to access the application.",
            "p5-list2": "Product management: adding, editing and deleting products.",
            "p5-list3": "Order management.",
            "p5-list4": "Production tracking.",
            "p5-list5": "A PostgreSQL database behind the interface, holding all the information in one place.",
            "p5-result": "A complete management application, designed for everyday use. This is the project where I learned to connect an interface to a database, and to build an application around the real needs of a business.",
            "proj3-title": "Task automation in Excel",
            "proj3-desc": "During a business game in class, we did all our calculations by hand and were in last place. I built a decision-support tool in Excel on my own, and we finished first.",
            "p3-badge": "Automation & data",
            "p3-title": "Decision-support tool (OAD) in Excel",
            "p3-date": "April 2025 · 1st year of BUT · Built on my own",
            "p3-start": "In class, we played a business game (OGPLAY) against six or seven other groups. Each round, we had to decide how much to produce, how many raw materials to buy, and how many staff and machines to use. We did everything by hand: it took time, we made a lot of mistakes, and we were last in the ranking.",
            "p3-did": "I designed an Excel file on my own that does these calculations for us. You enter the company's current situation, and it automatically prepares the next round:",
            "p3-list1": "Raw material requirements.",
            "p3-list2": "Machine and staff checks.",
            "p3-list3": "Loss management.",
            "p3-list4": "A forecast of what we would sell.",
            "p3-result": "The tool arrived halfway through the game, and it is what got us climbing: fewer mistakes, faster and better decisions. Together with the algorithm we worked out as a team towards the end, we went from last place to first. This project showed me how much well-used data changes a decision.",
            "proj6-title": "otM – A little word game",
            "proj6-desc": "A little game made for fun: the letters of a word are shuffled, and you have to find it.",
            "p6-badge": "Personal project",
            "p6-title": "otM – A little word game",
            "p6-date": "November 2025 · Personal project",
            "p6-idea": "A little game I made in my free time, just for fun: the game picks a word, shuffles its letters, and you have to find the original word.",
            "p6-list1": "Several word categories.",
            "p6-list2": "A score.",
            "p6-list3": "A light or dark theme."
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
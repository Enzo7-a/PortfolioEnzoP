document.addEventListener('DOMContentLoaded', () => {

  const translations = {
    fr: {
      "nav-brand": "Portfolio",
      "nav-home": "ACCUEIL",
      "nav-projects": "PROJETS",
      "nav-cv": "A PROPOS DE MOI",
      "nav-contact": "CONTACT",
      "pre-title": "BONJOUR,",
      "welcome-title-1": "Je suis ",
      "welcome-title-name": "Enzo",
      "welcome-title-2": " Pagès",
      "welcome-subtitle": "Étudiant en deuxième année de BUT Informatique, spécialité Administration, Gestion et Exploitation des Données à Annecy.",
      "btn-cv": "TÉLCHARGER MON CV",
      "footer-linkedin": "LinkedIn",
      "project-header-title": "Mes Projets",
      "project-header-subtitle": "EXPLOREZ MON TRAVAIL",
      "project-search-placeholder": "Rechercher par titre, tag (ex: SQL), ou technologie...",
      "proj1-title": "Projet d'équipe - Application Web & Gestion de Base de Données",
      "proj1-desc": "Développement d'une application web Laravel au sein d'une équipe de 5 personnes. Conception de modèles de données et de diagrammes BPMN, implémentation de modules de cryptographie et de communication, et création de tableaux de bord en utilisant Scrum.",
      "proj1-meta": "Octobre 2025 - Janvier 2026 | Université de Savoie / IUT Annecy",
      "proj1-tag-laravel": "Laravel",
      "proj1-tag-sql": "PostgreSQL",
      "proj1-btn-download": "Télécharger le ZIP",
      "proj1-btn-preview": "Prévisualiser les Fichiers",
      "proj1-preview-desc": "Fichiers Partie 1 :",
      "proj1-preview-mcd": "Voir le MCD (Image)",
      "proj1-preview-mld": "Voir le MLD (Image)",
      "proj1-preview-script": "Voir le Script de Création (SQL)",
      "proj1-preview-insert": "Voir le Script d'Insertion (SQL)",
      "proj2-title": "Jeu 'Runner' en Phaser 3",
      "proj2-desc": "Un jeu de type 'infinite runner' simple développé avec le framework JavaScript Phaser 3. Le joueur doit éviter les obstacles pour marquer des points.",
      "proj2-tag-phaser": "Phaser 3",
      "proj2-tag-js": "JavaScript",
      "proj2-btn-play": "Jouer au jeu",
      "proj3-title": "Automatisation de Tâches (Excel)",
      "proj3-desc": "Développement d'un Outil d'Aide à la Décision (OAD) sous Excel pour une simulation de gestion (OGPLAY). L'outil automatise le calcul des besoins en matières premières, le contrôle des machines, des ressources humaines et la gestion des pertes via un tableau de bord.",
      "proj3-tag-excel": "Excel",
      "proj3-tag-vba": "VBA",
      "proj3-btn-download": "Télécharger l'Excel",
      "proj-status-inprogress": "En Cours",
      "proj-status-completed": "Terminé",
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
      "cv-misc-lang": "Langues : Français (Natif), Anglais (Élémentaire, B1)",
      "cv-misc-title": "Divers",
      "cv-misc-hobbies": "Centres d'intérêt : Musculation (4x/semaine), Sports mécaniques (Rallye, F1), Projets personnels de codage",
      "cv-contact-title": "Contact & Données Personnelles",
      "cv-contact-phone": "+33(0)620218977",
      "cv-contact-email": "Enzo.Pages@etu.univ-smb.fr",
      "cv-contact-address": "7 Rue de la Louvatière, France",
      "cv-contact-dob": "Date de naissance : 24 Sept. 2006",
      "cv-contact-nationality": "Nationalité : Française",
      "cv-contact-license": "Permis : Permis de conduire",
      "cv-contact-linkedin": "LinkedIn : linkedin.com/in/enzopages-06e",
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
      "pre-title": "HELLO,",
      "welcome-title-1": "I'm ",
      "welcome-title-name": "Enzo",
      "welcome-title-2": " Pagès",
      "welcome-subtitle": "Second-year student in a Bachelor of Technology (BUT) in Computer Science, specializing in Data Administration, Management, and Processing, in Annecy.",
      "btn-cv": "DOWNLOAD MY CV",
      "footer-linkedin": "LinkedIn",
      "project-header-title": "My Projects",
      "project-header-subtitle": "EXPLORE MY WORK",
      "project-search-placeholder": "Search by title, tag (e.g., SQL), or technology...",
      "proj1-title": "Team Project - Web Application & Database Management",
      "proj1-desc": "Developed a Laravel web app in a 5-person team. Designed data models and BPMN diagrams, implemented cryptography and communication modules, and created dashboards using Scrum.",
      "proj1-meta": "October 2025 - January 2026 | University of Savoy / IUT Annecy - Annecy-le-Vieux, France",
      "proj1-tag-laravel": "Laravel",
      "proj1-tag-sql": "PostgreSQL",
      "proj1-btn-download": "Download ZIP",
      "proj1-btn-preview": "Preview Files",
      "proj1-preview-desc": "Files Part 1:",
      "proj1-preview-mcd": "View MCD (Image)",
      "proj1-preview-mld": "View MLD (Image)",
      "proj1-preview-script": "View Creation Script (SQL)",
      "proj1-preview-insert": "View Insert Script (SQL)",
      "proj2-title": "Phaser 3 'Runner' Game",
      "proj2-desc": "A simple infinite runner game developed with the JavaScript framework Phaser 3. The player must avoid obstacles to score points.",
      "proj2-tag-phaser": "Phaser 3",
      "proj2-tag-js": "JavaScript",
      "proj2-btn-play": "Play Game",
      "proj3-title": "Task Automation (Excel)",
      "proj3-desc": "Developed a Decision-Support Tool (OAD) in Excel for a management simulation (OGPLAY). The tool automates calculating raw material needs, machine control, human resources, and loss management via a dashboard.",
      "proj3-tag-excel": "Excel",
      "proj3-tag-vba": "VBA",
      "proj3-btn-download": "Download Excel File",
      "proj-status-inprogress": "In Progress",
      "proj-status-completed": "Completed",
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
      "cv-misc-lang": "Languages: French (Native Speaker), English (Elementary, B1)",
      "cv-misc-title": "Miscellaneous",
      "cv-misc-hobbies": "Interests: Weight training (4 times a week), motorsports (Rally, Formula 1), Coding personal web or game projects",
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

  const langButtons = document.querySelectorAll('.lang-switcher a');
  
  function changeLanguage(lang) {
    document.documentElement.lang = lang;

    langButtons.forEach(button => {
      if (button.getAttribute('data-lang') === lang) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

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
            element.textContent = translation;
        }
      }
    });

    localStorage.setItem('preferredLang', lang);
    
    if (document.getElementById('typing-text')) {
      typingEffect(document.getElementById('typing-text'));
    }
  }

  const savedLang = localStorage.getItem('preferredLang');
  const initialLang = savedLang || 'en';
  changeLanguage(initialLang); 

  langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = button.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });

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
          window.scrollBy({ top: 2, behavior: 'auto' });
        }
        
        setTimeout(type, 20); 
      } else {
        element.classList.remove('typing');
        element.classList.add('typing-done');
      }
    }
    type();
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
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
      });
    }
  }

  function setupProjectFilter() {
    const searchBar = document.getElementById('project-search-bar');
    const projects = document.querySelectorAll('.project-item');
    const projectList = document.getElementById('project-list');

    if (!searchBar || !projectList) {
      return;
    }

    searchBar.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();

      projects.forEach(project => {
        const title = project.querySelector('.project-summary').textContent.toLowerCase();
        const description = project.querySelector('.project-details p').textContent.toLowerCase();
        const tags = Array.from(project.querySelectorAll('.project-tag'))
                          .map(tag => tag.textContent.toLowerCase())
                          .join(' '); 

        const searchableText = title + ' ' + description + ' ' + tags;

        if (searchableText.includes(searchTerm)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  }
  
  function setupMouseGlow() {
    const glowElement = document.getElementById('mouse-glow');
    if (!glowElement) return;

    function handleFirstMove() {
      glowElement.style.opacity = '1';
      window.removeEventListener('mousemove', handleFirstMove);
    }
    window.addEventListener('mousemove', handleFirstMove);

    window.addEventListener('mousemove', (e) => {
      glowElement.style.setProperty('--mouse-x', e.clientX + 'px');
      glowElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });
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

  function setupProject1Preview() {
    const toggleButton = document.getElementById('proj1-preview-toggle');
    const previewContainer = document.getElementById('proj1-preview-container');
    
    if (!toggleButton || !previewContainer) {
      return;
    }

    toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      previewContainer.classList.toggle('visible');
      
      const currentLang = localStorage.getItem('preferredLang') || 'en';
      if (previewContainer.classList.contains('visible')) {
        toggleButton.textContent = (currentLang === 'fr') ? "Masquer les Fichiers" : "Hide Files";
      } else {
        toggleButton.textContent = translations[currentLang]["proj1-btn-preview"];
      }
    });

    document.querySelector('.lang-switcher').addEventListener('click', () => {
      if (!previewContainer.classList.contains('visible')) {
        const currentLang = localStorage.getItem('preferredLang') || 'en';
        toggleButton.textContent = translations[currentLang]["proj1-btn-preview"];
      }
    });
  }

  setupScrollInteractions();
  setupProjectFilter();
  setupMouseGlow();
  setupFormSpreeAJAX();
  setupProject1Preview();

});
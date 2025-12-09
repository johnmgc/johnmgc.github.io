// ============================================
// CV SCRIPT - VERSIÓN CORREGIDA
// ============================================

// Sistema de traducciones
const translations = {
  en: {
    // Header
    title: "Software Development Engineer",
    languageLevel: "Spanish (Native), English (Intermediate - Conversational)",
    downloadBtn: "Download CV (PDF)",
    languageTitle: "Switch to Spanish",

    // Sections
    professionalSummary: "Professional Summary",
    professionalSummaryText: `Software development engineer with over 5 years of experience in backend development, specializing in data operations and platform engineering. Skilled in designing, optimizing, and monitoring data pipelines in AWS using services such as Glue, EMR, RDS, Lambda, and S3. Strong expertise in infrastructure automation with Terraform and GitHub Actions, system monitoring with CloudWatch and New Relic, and relational database management in PostgreSQL, Aurora, and MySQL. Focused on building scalable, secure, and high-performance solutions within CI/CD environments and microservice-oriented architectures.`,

    professionalExperience: "Professional Experience",
    technologies: "Technologies:",

    // Experience items
    abatechPosition: "Backend Developer / SQL Specialist",
    abatechDate: "Nov 2022 – Present",
    abatechResponsibilities: [
      "Designed and implemented ETL pipelines using AWS Glue Jobs and tools like Mage.",
      "Managed and monitored RDS instances and conducted forensic audits in PostgreSQL.",
      "Deployed VPC infrastructure and implemented cross-database communication with FDW.",
      "Automated CI/CD workflows using GitHub Actions.",
      "Developed APIs and services using GraphQL/gRPC in a microservices architecture.",
      "Containerized services using Docker.",
      "Optimized dashboard performance through data modeling and caching strategies.",
    ],

    cobelenPosition: "Full Stack Developer",
    cobelenDate: "Sep 2022 – Nov 2022",
    cobelenResponsibilities: [
      'Led the migration and production deployment of the "Apolo" ERP system.',
      "Integrated payment methods and external web services.",
      "Managed databases and developed functional business reports.",
    ],

    dtechnologiesPosition: "Full Stack Developer",
    dtechnologiesDate: "Sep 2021 – Sep 2022",
    dtechnologiesResponsibilities: [
      "Developed REST and GraphQL microservices and APIs.",
      "Integrated distributed systems and financial platforms.",
      "Designed and consumed APIs for financial applications.",
    ],

    // Education
    education: "Education",
    educationItems: [
      "Technologist in Software Development – CESDE, 2022",
      "SAP-ABAP Academy – Business Support, 2018",
      "SAP SD Training – Selecta, 2021",
      "Ruby on Rails 7 Bootcamp – Código Facilito, 2022",
      "GitHub Actions Bootcamp – Código Facilito, 2025",
      '"From Earth to Cloud" Bootcamp – Women Who Code, 2023',
    ],

    // Skills
    certificationsSkills: "Certifications & Technical Skills",
    programmingLanguages: "Programming Languages",
    frameworks: "Frameworks",
    databases: "Databases",
    cloudDevOps: "Cloud & DevOps",
    dataTools: "Data Tools",
    others: "Others",

    // Projects
    highlightedProjects: "Highlighted Projects",
    forensicProject: "Forensic Data Auditing",
    forensicDescription:
      "Implemented audit mechanisms to identify access and manipulation of sensitive databases.",
    syncProject: "Cross-Account AWS Synchronization",
    syncDescription:
      "Migrated and synchronized data between buckets using AWS Sync and Glacier.",
    observabilityProject: "Data Observability",
    observabilityDescription:
      "Proactively monitored pipelines and databases using CloudWatch and New Relic.",
    cicdProject: "CI/CD Pipeline Automation",
    cicdDescription:
      "Automated infrastructure and service deployments using GitHub Actions and Terraform.",

    // Footer
    footerRights: "All rights reserved.",
    footerNote: "This CV is also available as a LaTeX document.",
    contact: "Contact",
  },

  es: {
    // Header
    title: "Ingeniero de Desarrollo de Software",
    languageLevel: "Español (Nativo), Inglés (Intermedio - Conversacional)",
    downloadBtn: "Descargar CV (PDF)",
    languageTitle: "Cambiar a Inglés",

    // Sections
    professionalSummary: "Resumen Profesional",
    professionalSummaryText: `Ingeniero de desarrollo de software con más de 3 años de experiencia en desarrollo backend, especializado en operaciones de datos e ingeniería de plataformas. Habilidades en diseño, optimización y monitoreo de pipelines de datos en AWS utilizando servicios como Glue, EMR, RDS, Lambda y S3. Gran experiencia en automatización de infraestructura con Terraform y GitHub Actions, monitoreo de sistemas con CloudWatch y New Relic, y gestión de bases de datos relacionales en PostgreSQL, Aurora y MySQL. Enfocado en construir soluciones escalables, seguras y de alto rendimiento en entornos CI/CD y arquitecturas orientadas a microservicios.`,

    professionalExperience: "Experiencia Profesional",
    technologies: "Tecnologías:",

    // Experience items
    abatechPosition: "Desarrollador Backend / Especialista SQL",
    abatechDate: "Nov 2022 – Presente",
    abatechResponsibilities: [
      "Diseñé e implementé pipelines ETL usando AWS Glue Jobs y herramientas como Mage.",
      "Gestioné y monitoreé instancias RDS y realicé auditorías forenses en PostgreSQL.",
      "Desplegué infraestructura VPC e implementé comunicación entre bases de datos con FDW.",
      "Automaticé flujos de trabajo CI/CD usando GitHub Actions.",
      "Desarrollé APIs y servicios usando GraphQL/gRPC en una arquitectura de microservicios.",
      "Containericé servicios usando Docker.",
      "Optimicé el rendimiento de dashboards mediante modelado de datos y estrategias de caché.",
    ],

    cobelenPosition: "Desarrollador Full Stack",
    cobelenDate: "Sep 2022 – Nov 2022",
    cobelenResponsibilities: [
      'Lideré la migración y despliegue en producción del sistema ERP "Apolo".',
      "Integré métodos de pago y servicios web externos.",
      "Gestioné bases de datos y desarrollé reportes empresariales funcionales.",
    ],

    dtechnologiesPosition: "Desarrollador Full Stack",
    dtechnologiesDate: "Sep 2021 – Sep 2022",
    dtechnologiesResponsibilities: [
      "Desarrollé microservicios y APIs REST y GraphQL.",
      "Integré sistemas distribuidos y plataformas financieras.",
      "Diseñé y consumí APIs para aplicaciones financieras.",
    ],

    // Education
    education: "Educación",
    educationItems: [
      "Tecnólogo en Desarrollo de Software – CESDE, 2022",
      "Academia SAP-ABAP – Business Support, 2018",
      "Capacitación SAP SD – Selecta, 2021",
      "Bootcamp Ruby on Rails 7 – Código Facilito, 2022",
      "Bootcamp GitHub Actions – Código Facilito, 2025",
      'Bootcamp "De la Tierra a la Nube" – Women Who Code, 2023',
    ],

    // Skills
    certificationsSkills: "Certificaciones y Habilidades Técnicas",
    programmingLanguages: "Lenguajes de Programación",
    frameworks: "Frameworks",
    databases: "Bases de Datos",
    cloudDevOps: "Cloud & DevOps",
    dataTools: "Herramientas de Datos",
    others: "Otros",

    // Projects
    highlightedProjects: "Proyectos Destacados",
    forensicProject: "Auditoría Forense de Datos",
    forensicDescription:
      "Implementé mecanismos de auditoría para identificar acceso y manipulación de bases de datos sensibles.",
    syncProject: "Sincronización AWS entre Cuentas",
    syncDescription:
      "Migré y sincronicé datos entre buckets usando AWS Sync y Glacier.",
    observabilityProject: "Observabilidad de Datos",
    observabilityDescription:
      "Monitoreé proactivamente pipelines y bases de datos usando CloudWatch y New Relic.",
    cicdProject: "Automatización de Pipeline CI/CD",
    cicdDescription:
      "Automaticé despliegues de infraestructura y servicios usando GitHub Actions y Terraform.",

    // Footer
    footerRights: "Todos los derechos reservados.",
    footerNote: "Este CV también está disponible como documento LaTeX.",
    contact: "Contacto",
  },
};

let currentLang = "en";

// Función para actualizar todos los elementos de texto
function updateLanguage(lang) {
  try {
    console.log('Actualizando idioma a:', lang);

    // Validar idioma
    if (!translations[lang]) {
      console.error('Idioma inválido:', lang, 'usando "en" por defecto');
      lang = "en";
    }

    currentLang = lang;
    const t = translations[lang];

    // Actualizar header
    const titleElement = document.querySelector(".title");
    if (titleElement) titleElement.textContent = t.title;

    const languageLevelElement = document.querySelector(
      ".contact-item:nth-child(4) span",
    );
    if (languageLevelElement) languageLevelElement.textContent = t.languageLevel;

    const downloadBtn = document.querySelector("#downloadBtn");
    if (downloadBtn)
      downloadBtn.innerHTML = `<i class="fas fa-download"></i> ${t.downloadBtn}`;

    const languageToggle = document.querySelector("#languageToggle");
    if (languageToggle) {
      languageToggle.title = t.languageTitle;
      // Actualizar texto del botón a ES/EN
      languageToggle.textContent = lang === "en" ? "ES" : "EN";
    }

    // Actualizar título de la página
    const name = "John Mario Gonzalez Correa";
    document.title = `${name} - ${t.title}`;

    // Actualizar secciones - usar selectores más específicos
    const sectionTitles = document.querySelectorAll(".section-title");
    if (sectionTitles.length >= 1) {
      sectionTitles[0].innerHTML = `<i class="fas fa-user-tie section-icon"></i> ${t.professionalSummary}`;
    }

    const summaryText = document.querySelector(".section:nth-of-type(1) p");
    if (summaryText) summaryText.textContent = t.professionalSummaryText;

    if (sectionTitles.length >= 2) {
      sectionTitles[1].innerHTML = `<i class="fas fa-briefcase section-icon"></i> ${t.professionalExperience}`;
    }

    // Actualizar elementos de experiencia
    const experienceItems = document.querySelectorAll(".experience-item");

    if (experienceItems.length >= 1) {
      const position1 = experienceItems[0].querySelector(".position");
      const date1 = experienceItems[0].querySelector(".date");
      const tech1 = experienceItems[0].querySelector(".tech-stack strong");

      if (position1) position1.textContent = t.abatechPosition;
      if (date1) date1.textContent = t.abatechDate;
      if (tech1) tech1.textContent = t.technologies;

      const abatechList = experienceItems[0].querySelectorAll(
        ".responsibilities li",
      );
      t.abatechResponsibilities.forEach((item, index) => {
        if (abatechList[index]) {
          abatechList[index].textContent = item;
        }
      });
    }

    if (experienceItems.length >= 2) {
      const position2 = experienceItems[1].querySelector(".position");
      const date2 = experienceItems[1].querySelector(".date");
      const tech2 = experienceItems[1].querySelector(".tech-stack strong");

      if (position2) position2.textContent = t.cobelenPosition;
      if (date2) date2.textContent = t.cobelenDate;
      if (tech2) tech2.textContent = t.technologies;

      const cobelenList = experienceItems[1].querySelectorAll(
        ".responsibilities li",
      );
      t.cobelenResponsibilities.forEach((item, index) => {
        if (cobelenList[index]) {
          cobelenList[index].textContent = item;
        }
      });
    }

    if (experienceItems.length >= 3) {
      const position3 = experienceItems[2].querySelector(".position");
      const date3 = experienceItems[2].querySelector(".date");
      const tech3 = experienceItems[2].querySelector(".tech-stack strong");

      if (position3) position3.textContent = t.dtechnologiesPosition;
      if (date3) date3.textContent = t.dtechnologiesDate;
      if (tech3) tech3.textContent = t.technologies;

      const dtechList = experienceItems[2].querySelectorAll(
        ".responsibilities li",
      );
      t.dtechnologiesResponsibilities.forEach((item, index) => {
        if (dtechList[index]) {
          dtechList[index].textContent = item;
        }
      });
    }

    // Actualizar educación
    if (sectionTitles.length >= 3) {
      sectionTitles[2].innerHTML = `<i class="fas fa-graduation-cap section-icon"></i> ${t.education}`;
    }

    const educationItems = document.querySelectorAll(".education-list li");
    t.educationItems.forEach((item, index) => {
      if (educationItems[index]) {
        // Preservar la estructura de strong tag
        const parts = item.split(" – ");
        if (parts.length > 1) {
          educationItems[index].innerHTML =
            `<strong>${parts[0]}</strong> – ${parts.slice(1).join(" – ")}`;
        } else {
          educationItems[index].innerHTML = `<strong>${item}</strong>`;
        }
      }
    });

    // Actualizar habilidades
    if (sectionTitles.length >= 4) {
      sectionTitles[3].innerHTML = `<i class="fas fa-certificate section-icon"></i> ${t.certificationsSkills}`;
    }

    const skillCategories = document.querySelectorAll(".skill-category h3");
    if (skillCategories.length >= 6) {
      skillCategories[0].innerHTML = `<i class="fas fa-code"></i> ${t.programmingLanguages}`;
      skillCategories[1].innerHTML = `<i class="fas fa-layer-group"></i> ${t.frameworks}`;
      skillCategories[2].innerHTML = `<i class="fas fa-database"></i> ${t.databases}`;
      skillCategories[3].innerHTML = `<i class="fas fa-cloud"></i> ${t.cloudDevOps}`;
      skillCategories[4].innerHTML = `<i class="fas fa-chart-line"></i> ${t.dataTools}`;
      skillCategories[5].innerHTML = `<i class="fas fa-tools"></i> ${t.others}`;
    }

    // Actualizar proyectos
    if (sectionTitles.length >= 5) {
      sectionTitles[4].innerHTML = `<i class="fas fa-star section-icon"></i> ${t.highlightedProjects}`;
    }

    const projectCards = document.querySelectorAll(".project-card");
    if (projectCards.length >= 4) {
      const title1 = projectCards[0].querySelector("h3");
      const desc1 = projectCards[0].querySelector("p");
      if (title1) title1.textContent = t.forensicProject;
      if (desc1) desc1.textContent = t.forensicDescription;

      const title2 = projectCards[1].querySelector("h3");
      const desc2 = projectCards[1].querySelector("p");
      if (title2) title2.textContent = t.syncProject;
      if (desc2) desc2.textContent = t.syncDescription;

      const title3 = projectCards[2].querySelector("h3");
      const desc3 = projectCards[2].querySelector("p");
      if (title3) title3.textContent = t.observabilityProject;
      if (desc3) desc3.textContent = t.observabilityDescription;

      const title4 = projectCards[3].querySelector("h3");
      const desc4 = projectCards[3].querySelector("p");
      if (title4) title4.textContent = t.cicdProject;
      if (desc4) desc4.textContent = t.cicdDescription;
    }

    // Actualizar footer
    const footerNote = document.querySelector(".footer-note");
    if (footerNote) footerNote.textContent = t.footerNote;

    const footerLink = document.querySelector(".footer-links a");
    if (footerLink)
      footerLink.innerHTML = `<i class="fas fa-envelope"></i> ${t.contact}`;

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;

    // Guardar preferencia en localStorage
    try {
      localStorage.setItem("cv-language", lang);
      console.log('Idioma guardado en localStorage:', lang);
    } catch (error) {
      console.error('Error guardando idioma en localStorage:', error);
    }
  } catch (error) {
    console.error('Error en función updateLanguage:', error);
    // Intentar recuperar estableciendo idioma por defecto
    if (lang !== "en") {
      console.log('Intentando recuperar estableciendo idioma a "en"');
      updateLanguage("en");
    }
  }
}

// ============================================
// INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM completamente cargado - Inicializando CV...');

  // 1. Configurar año actual en el footer
  const currentYearElement = document.getElementById("currentYear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
    console.log('Año actual configurado en footer');
  }

  // 2. Configurar sistema de idiomas
  console.log('Configurando sistema de idiomas...');

  // Botón de cambio de idioma
  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    console.log('Botón de idioma encontrado, agregando event listener...');

    languageToggle.addEventListener("click", function() {
      console.log('Botón de idioma clickeado, currentLang:', currentLang);
      const newLang = currentLang === "en" ? "es" : "en";
      console.log('Cambiando idioma a:', newLang);
      updateLanguage(newLang);
    });

    console.log('Event listener de idioma agregado exitosamente');
  } else {
    console.error('ERROR: Botón de idioma NO encontrado en el DOM!');
  }

  // Cargar idioma guardado
  try {
    const savedLang = localStorage.getItem("cv-language");
    console.log('Idioma guardado en localStorage:', savedLang);

    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      updateLanguage(savedLang);
      console.log('Idioma restaurado a:', savedLang);
    } else {
      console.log('No hay idioma válido guardado, usando por defecto: en');
      updateLanguage("en");
    }
  } catch (error) {
    console.error('Error cargando preferencia de idioma:', error);
    updateLanguage("en");
  }

  // 3. Configurar funcionalidad de PDF
  console.log('Configurando funcionalidad de PDF...');

  const downloadBtn = document.getElementById("downloadBtn");
  const modal = document.getElementById("pdfModal");
  const closeModal = document.querySelector(".close-modal");
  const downloadPDFBtn = document.getElementById("downloadPDF");
  const printCVBtn = document.getElementById("printCV");
  const exportHTMLBtn = document.getElementById("exportHTML");

  console.log('Elementos de PDF encontrados:', {
    downloadBtn: !!downloadBtn,
    modal: !!modal,
    closeModal: !!closeModal,
    downloadPDFBtn: !!downloadPDFBtn,
    printCVBtn: !!printCVBtn,
    exportHTMLBtn: !!exportHTMLBtn
  });

  // Abrir modal cuando se hace clic en el botón de descarga
  if (downloadBtn && modal) {
    downloadBtn.addEventListener("click", function() {
      console.log('Botón de descarga clickeado, abriendo modal');
      modal.style.display = "block";
    });
    console.log('Event listener de botón de descarga agregado');
  } else {
    console.error('ERROR: Botón de descarga o modal NO encontrados!');
  }

  // Cerrar modal cuando se hace clic en la X
  if (closeModal && modal) {
    closeModal.addEventListener("click", function() {
      console.log('Cerrar modal clickeado');
      modal.style.display = "none";
    });
  }

  // Cerrar modal cuando se hace clic fuera
  if (modal) {
    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        console.log('Clic fuera del modal, cerrando');
        modal.style.display = "none";
      }
    });
  }

  // Generar y descargar PDF
  if (downloadPDFBtn) {
    downloadPDFBtn.addEventListener("click", async function() {
      console.log('Generando PDF...');

      try {
        // Mostrar estado de carga
        downloadPDFBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando PDF...';
        downloadPDFBtn.disabled = true;

        // Verificar si las librerías requeridas están cargadas
        if (!window.jspdf) {
          throw new Error('Librería jsPDF no cargada. Por favor verifica tu conexión a internet.');
        }

        if (!window.html2canvas) {
          throw new Error('Librería html2canvas no cargada. Por favor verifica tu conexión a internet.');
        }

        const { jsPDF } = window.jspdf;

        // Obtener idioma actual para el título
        const t = translations[currentLang];

        // Crear una versión SIMPLE del CV para PDF
        const pdfContainer = document.createElement("div");
        pdfContainer.style.width = "1000px";
        pdfContainer.style.backgroundColor = "white";
        pdfContainer.style.padding = "0";
        pdfContainer.style.fontFamily = "'Source Sans Pro', sans-serif";

        // ====== CREAR HEADER OPTIMIZADO PARA PDF ======
        const pdfHeader = document.createElement("div");
        pdfHeader.style.backgroundColor = "#2c3e50";
        pdfHeader.style.color = "white";
        pdfHeader.style.padding = "40px";
        pdfHeader.style.marginBottom = "0";

        // Nombre - texto blanco simple
        const pdfName = document.createElement("h1");
        pdfName.textContent = "John Mario Gonzalez Correa";
        pdfName.style.color = "white";
        pdfName.style.fontFamily = "'Poppins', sans-serif";
        pdfName.style.fontSize = "2.5rem";
        pdfName.style.fontWeight = "700";
        pdfName.style.margin = "0 0 10px 0";
        pdfName.style.padding = "0";
        pdfHeader.appendChild(pdfName);

        // Título
        const pdfTitle = document.createElement("p");
        pdfTitle.textContent = t.title;
        pdfTitle.style.color = "#ecf0f1";
        pdfTitle.style.fontSize = "1.2rem";
        pdfTitle.style.margin = "0 0 30px 0";
        pdfTitle.style.opacity = "0.9";
        pdfHeader.appendChild(pdfTitle);

        // Información de contacto - diseño simple
        const contactGrid = document.createElement("div");
        contactGrid.style.display = "grid";
        contactGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
        contactGrid.style.gap = "15px";
        contactGrid.style.marginBottom = "20px";

        // Teléfono
        const phoneDiv = document.createElement("div");
        phoneDiv.style.display = "flex";
        phoneDiv.style.alignItems = "center";
        phoneDiv.style.gap = "10px";
        phoneDiv.innerHTML = `<span style="color:#3498db;">📱</span> <span style="color:#ecf0f1;">+57 302 839 5051</span>`;
        contactGrid.appendChild(phoneDiv);

        // Email
        const emailDiv = document.createElement("div");
        emailDiv.style.display = "flex";
        emailDiv.style.alignItems = "center";
        emailDiv.style.gap = "10px";
        emailDiv.innerHTML = `<span style="color:#3498db;">✉️</span> <span style="color:#ecf0f1;">johnmgc.dev@gmail.com</span>`;
        contactGrid.appendChild(emailDiv);

        // Ubicación
        const locationDiv = document.createElement("div");
        locationDiv.style.display = "flex";
        locationDiv.style.alignItems = "center";
        locationDiv.style.gap = "10px";
        locationDiv.innerHTML = `<span style="color:#3498db;">📍</span> <span style="color:#ecf0f1;">Colombia</span>`;
        contactGrid.appendChild(locationDiv);

        // Idiomas
        const langDiv = document.createElement("div");
        langDiv.style.display = "flex";
        langDiv.style.alignItems = "center";
        langDiv.style.gap = "10px";
        langDiv.innerHTML = `<span style="color:#3498db;">🌐</span> <span style="color:#ecf0f1;">${t.languageLevel}</span>`;
        contactGrid.appendChild(langDiv);

        pdfHeader.appendChild(contactGrid);
        pdfContainer.appendChild(pdfHeader);

        // ====== COPIAR CONTENIDO PRINCIPAL (resto del CV) ======
        const originalMain = document.querySelector(".main-content");
        if (originalMain) {
          const mainClone = originalMain.cloneNode(true);

          // Remover elementos interactivos del clon
          const interactiveElements = mainClone.querySelectorAll(
            'button, a[href^="#"], .social-links',
          );
          interactiveElements.forEach((el) => el.remove());

          // Aplicar estilos simples para PDF
          mainClone.style.padding = "40px";
          mainClone.style.backgroundColor = "white";
          mainClone.style.color = "#333333";

          // Asegurar buen contraste
          const allTextElements = mainClone.querySelectorAll(
            "h1, h2, h3, h4, h5, h6, p, li, span, div",
          );
          allTextElements.forEach((el) => {
            if (el.style.color === "" || el.style.color === "transparent") {
              el.style.color = "#333333";
            }
          });

          // Arreglar títulos de sección
          const sectionTitles = mainClone.querySelectorAll(".section-title");
          sectionTitles.forEach((title) => {
            title.style.color = "#2c3e50";
          });

          // Arreglar colores de experiencia
          const experienceItems = mainClone.querySelectorAll(".experience-item");
          experienceItems.forEach((item) => {
            item.style.borderLeftColor = "#3498db";
          });

          // Arreglar colores de proyectos
          const projectCards = mainClone.querySelectorAll(".project-card");
          projectCards.forEach((card) => {
            card.style.borderColor = "#3498db";
            card.style.backgroundColor = "#f8f9fa";
          });

          pdfContainer.appendChild(mainClone);
        }

        // ====== AGREGAR TEMPORALMENTE AL DOM Y CAPTURAR ======
        const tempContainer = document.createElement("div");
        tempContainer.style.position = "absolute";
        tempContainer.style.left = "-9999px";
        tempContainer.style.top = "0";
        tempContainer.appendChild(pdfContainer);
        document.body.appendChild(tempContainer);

        console.log('Capturando HTML con html2canvas...');
        const canvas = await html2canvas(pdfContainer, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          windowWidth: 1000,
        });

        // ====== LIMPIAR ======
        document.body.removeChild(tempContainer);

        // ====== CREAR PDF ======
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const imgWidth = 210; // Ancho A4 en mm
        const pageHeight = 297; // Alto A4 en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Agregar páginas adicionales si es necesario
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Guardar PDF
        const fileName = `John_Mario_Gonzalez_Correa_CV_${currentLang.toUpperCase()}.pdf`;
        pdf.save(fileName);

        console.log('PDF generado exitosamente:', fileName);

        // Restaurar botón
        downloadPDFBtn.innerHTML = '<i class="fas fa-file-pdf"></i> Descargar como PDF';
        downloadPDFBtn.disabled = false;
        modal.style.display = "none";

      } catch (error) {
        console.error("Error generando PDF:", error);
        alert("Error generando PDF. Por favor intenta de nuevo o usa la opción de imprimir.");

        // Restaurar botón
        downloadPDFBtn.innerHTML = '<i class="fas fa-file-pdf"></i> Descargar como PDF';
        downloadPDFBtn.disabled = false;
      }
    });

    console.log('Event listener de generación de PDF agregado');
  }

  // Imprimir CV
  if (printCVBtn) {
    printCVBtn.addEventListener("click", function() {
      console.log('Imprimiendo CV...');
      modal.style.display = "none";
      setTimeout(() => {
        window.print();
      }, 300);
    });
  }

  // Exportar como HTML
  if (exportHTMLBtn) {
    exportHTMLBtn.addEventListener("click", function() {
      console.log('Exportando como HTML...');
      const content = document.documentElement.outerHTML;
      const blob = new Blob([content], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "John_Mario_Gonzalez_Correa_CV.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      modal.style.display = "none";
    });
  }

  // 4. Scroll suave para enlaces de anclaje
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // 5. Animaciones de scroll y transiciones
  console.log('Configurando animaciones...');

  // Agregar CSS mejorado para animaciones
  const style = document.createElement("style");
  style.textContent = `
    .section, .experience-item, .project-card, .skill-category {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: opacity, transform;
    }

    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    /* Smooth scroll behavior */
    html {
      scroll-behavior: smooth;
    }

    /* Fade-in for header elements */
    .header-content > * {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.8s ease forwards;
      animation-play-state: paused; /* Paused initially */
    }

    .name { animation-delay: 0.1s; }
    .title { animation-delay: 0.2s; }
    .contact-info { animation-delay: 0.3s; }
    .action-buttons { animation-delay: 0.4s; }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
  console.log('Estilos de animación agregados');

  // Configurar IntersectionObserver para animaciones al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        console.log('Elemento animado:', entry.target.className);
      }
    });
  }, observerOptions);

  // Observar elementos para animación
  const elementsToAnimate = document.querySelectorAll(".section, .experience-item, .project-card, .skill-category");
  console.log(`Observando ${elementsToAnimate.length} elementos para animación`);

  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });

  // Agregar delays para categorías de habilidades
  document.querySelectorAll(".skill-category").forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.08}s`;
  });

  // Inicializar animaciones al cargar la página
  window.addEventListener("load", () => {
    console.log('Página completamente cargada, iniciando animaciones...');

    // Animar elementos del header
    document.querySelectorAll(".header-content > *").forEach((el, index) => {
      setTimeout(() => {
        el.style.animationPlayState = "running";
        console.log(`Animando elemento del header: ${el.className || el.tagName}`);
      }, index * 100);
    });

    // Animación inicial para elementos visibles
    const initialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            initialObserver.unobserve(entry.target);
            console.log('Animación inicial para:', entry.target.className);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar elementos inicialmente visibles
    document.querySelectorAll(".section, .experience-item, .project-card, .skill-category").forEach((el) => {
      initialObserver.observe(el);
    });

    console.log('Animaciones iniciales configuradas');
  });

  console.log('Sistema de animaciones configurado exitosamente!');
});

// ============================================
// INICIALIZACIÓN INMEDIATA PARA ELEMENTOS CRÍTICOS
// ============================================

// Algunos elementos pueden necesitar inicialización inmediata
console.log('Script CV cargado - esperando DOM...');

// Función de ayuda para verificar si un elemento existe
function elementExists(selector) {
  return document.querySelector(selector) !== null;
}
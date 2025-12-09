// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Modal functionality
const downloadBtn = document.getElementById("downloadBtn");
const modal = document.getElementById("pdfModal");
const closeModal = document.querySelector(".close-modal");
const downloadPDFBtn = document.getElementById("downloadPDF");
const printCVBtn = document.getElementById("printCV");
const exportHTMLBtn = document.getElementById("exportHTML");

// Open modal when download button is clicked
downloadBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when X is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Generate and download PDF - ULTRA SIMPLIFIED VERSION
downloadPDFBtn.addEventListener("click", async () => {
  try {
    // Show loading state
    downloadPDFBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    downloadPDFBtn.disabled = true;

    // Import jsPDF dynamically
    const { jsPDF } = window.jspdf;

    // Get current language for title
    const t = translations[currentLang];

    // Create a SIMPLE version of the CV for PDF
    const pdfContainer = document.createElement("div");
    pdfContainer.style.width = "1000px";
    pdfContainer.style.backgroundColor = "white";
    pdfContainer.style.padding = "0";
    pdfContainer.style.fontFamily = "'Source Sans Pro', sans-serif";

    // ====== CREATE PDF-OPTIMIZED HEADER ======
    const pdfHeader = document.createElement("div");
    pdfHeader.style.backgroundColor = "#2c3e50";
    pdfHeader.style.color = "white";
    pdfHeader.style.padding = "40px";
    pdfHeader.style.marginBottom = "0";

    // Name - simple white text
    const pdfName = document.createElement("h1");
    pdfName.textContent = "John Mario Gonzalez Correa";
    pdfName.style.color = "white";
    pdfName.style.fontFamily = "'Poppins', sans-serif";
    pdfName.style.fontSize = "2.5rem";
    pdfName.style.fontWeight = "700";
    pdfName.style.margin = "0 0 10px 0";
    pdfName.style.padding = "0";
    pdfHeader.appendChild(pdfName);

    // Title
    const pdfTitle = document.createElement("p");
    pdfTitle.textContent = t.title;
    pdfTitle.style.color = "#ecf0f1";
    pdfTitle.style.fontSize = "1.2rem";
    pdfTitle.style.margin = "0 0 30px 0";
    pdfTitle.style.opacity = "0.9";
    pdfHeader.appendChild(pdfTitle);

    // Contact info - simple layout
    const contactGrid = document.createElement("div");
    contactGrid.style.display = "grid";
    contactGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
    contactGrid.style.gap = "15px";
    contactGrid.style.marginBottom = "20px";

    // Phone
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

    // Location
    const locationDiv = document.createElement("div");
    locationDiv.style.display = "flex";
    locationDiv.style.alignItems = "center";
    locationDiv.style.gap = "10px";
    locationDiv.innerHTML = `<span style="color:#3498db;">📍</span> <span style="color:#ecf0f1;">Colombia</span>`;
    contactGrid.appendChild(locationDiv);

    // Languages
    const langDiv = document.createElement("div");
    langDiv.style.display = "flex";
    langDiv.style.alignItems = "center";
    langDiv.style.gap = "10px";
    langDiv.innerHTML = `<span style="color:#3498db;">🌐</span> <span style="color:#ecf0f1;">${t.languageLevel}</span>`;
    contactGrid.appendChild(langDiv);

    pdfHeader.appendChild(contactGrid);
    pdfContainer.appendChild(pdfHeader);

    // ====== COPY MAIN CONTENT (rest of CV) ======
    const originalMain = document.querySelector(".main-content");
    if (originalMain) {
      const mainClone = originalMain.cloneNode(true);

      // Remove any interactive elements from the clone
      const interactiveElements = mainClone.querySelectorAll(
        'button, a[href^="#"], .social-links',
      );
      interactiveElements.forEach((el) => el.remove());

      // Apply simple styles for PDF
      mainClone.style.padding = "40px";
      mainClone.style.backgroundColor = "white";
      mainClone.style.color = "#333333";

      // Ensure good contrast
      const allTextElements = mainClone.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, span, div",
      );
      allTextElements.forEach((el) => {
        if (el.style.color === "" || el.style.color === "transparent") {
          el.style.color = "#333333";
        }
      });

      // Fix section titles
      const sectionTitles = mainClone.querySelectorAll(".section-title");
      sectionTitles.forEach((title) => {
        title.style.color = "#2c3e50";
      });

      // Fix company names
      const companies = mainClone.querySelectorAll(".company");
      companies.forEach((company) => {
        company.style.color = "#2c3e50";
      });

      // Fix position titles
      const positions = mainClone.querySelectorAll(".position");
      positions.forEach((position) => {
        position.style.color = "#3498db";
      });

      pdfContainer.appendChild(mainClone);
    }

    // ====== CREATE TEMPORARY CONTAINER FOR CAPTURE ======
    const tempContainer = document.createElement("div");
    tempContainer.style.position = "fixed";
    tempContainer.style.left = "-9999px";
    tempContainer.style.top = "0";
    tempContainer.style.width = "1000px";
    tempContainer.style.zIndex = "-9999";
    tempContainer.style.backgroundColor = "white";
    tempContainer.appendChild(pdfContainer);
    document.body.appendChild(tempContainer);

    // ====== CAPTURE WITH HTML2CANVAS ======
    const canvas = await html2canvas(pdfContainer, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      windowWidth: 1000,
    });

    // ====== CLEAN UP ======
    document.body.removeChild(tempContainer);

    // ====== CREATE PDF ======
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF with language suffix
    const langSuffix = currentLang === "es" ? "_ES" : "_EN";
    pdf.save(`John_Mario_Gonzalez_Correa_CV${langSuffix}.pdf`);

    // Reset button state
    downloadPDFBtn.innerHTML =
      '<i class="fas fa-file-pdf"></i> Download as PDF';
    downloadPDFBtn.disabled = false;
    modal.style.display = "none";
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF. Please try again or use the print option.");
    downloadPDFBtn.innerHTML =
      '<i class="fas fa-file-pdf"></i> Download as PDF';
    downloadPDFBtn.disabled = false;
  }
});

// Print CV
printCVBtn.addEventListener("click", () => {
  modal.style.display = "none";
  setTimeout(() => {
    window.print();
  }, 300);
});

// Export as HTML
exportHTMLBtn.addEventListener("click", () => {
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

// Smooth scrolling for anchor links
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

// Enhanced animation on scroll with staggered delays
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a small delay based on element type for staggered effect
      const delay = entry.target.classList.contains("section")
        ? 0.1
        : entry.target.classList.contains("experience-item")
          ? 0.2
          : 0.3;

      setTimeout(() => {
        entry.target.classList.add("animate-in");
      }, delay * 1000);
    }
  });
}, observerOptions);

// Observe all elements for animation with more granular control
document.querySelectorAll(".section").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});

document.querySelectorAll(".experience-item").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.15}s`;
  observer.observe(el);
});

document.querySelectorAll(".project-card").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});

document.querySelectorAll(".skill-category").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.08}s`;
  observer.observe(el);
});

// Add enhanced CSS for animations
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

// Initialize animations on page load
window.addEventListener("load", () => {
  // Animate header elements
  document.querySelectorAll(".header-content > *").forEach((el, index) => {
    setTimeout(() => {
      el.style.animationPlayState = "running";
    }, index * 100);
  });

  // Initial animation for visible elements
  const initialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          initialObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 },
  );

  document
    .querySelectorAll(
      ".section, .experience-item, .project-card, .skill-category",
    )
    .forEach((el) => initialObserver.observe(el));
});

// Language translation system
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

// Function to update all text elements
function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update header
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
    // Update button text to ES/EN
    languageToggle.textContent = lang === "en" ? "ES" : "EN";
  }

  // Update page title
  const name = "John Mario Gonzalez Correa";
  document.title = `${name} - ${t.title}`;

  // Update sections - use more specific selectors
  const sectionTitles = document.querySelectorAll(".section-title");
  if (sectionTitles.length >= 1) {
    sectionTitles[0].innerHTML = `<i class="fas fa-user-tie section-icon"></i> ${t.professionalSummary}`;
  }

  const summaryText = document.querySelector(".section:nth-of-type(1) p");
  if (summaryText) summaryText.textContent = t.professionalSummaryText;

  if (sectionTitles.length >= 2) {
    sectionTitles[1].innerHTML = `<i class="fas fa-briefcase section-icon"></i> ${t.professionalExperience}`;
  }

  // Update experience items
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

  // Update education
  if (sectionTitles.length >= 3) {
    sectionTitles[2].innerHTML = `<i class="fas fa-graduation-cap section-icon"></i> ${t.education}`;
  }

  const educationItems = document.querySelectorAll(".education-list li");
  t.educationItems.forEach((item, index) => {
    if (educationItems[index]) {
      // Preserve the strong tag structure
      const parts = item.split(" – ");
      if (parts.length > 1) {
        educationItems[index].innerHTML =
          `<strong>${parts[0]}</strong> – ${parts.slice(1).join(" – ")}`;
      } else {
        educationItems[index].innerHTML = `<strong>${item}</strong>`;
      }
    }
  });

  // Update skills
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

  // Update projects
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

  // Update footer
  const footerNote = document.querySelector(".footer-note");
  if (footerNote) footerNote.textContent = t.footerNote;

  const footerLink = document.querySelector(".footer-links a");
  if (footerLink)
    footerLink.innerHTML = `<i class="fas fa-envelope"></i> ${t.contact}`;

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Save preference to localStorage
  localStorage.setItem("cv-language", lang);
}

// Language toggle button
const languageToggle = document.getElementById("languageToggle");
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "es" : "en";
    updateLanguage(newLang);
  });
}

// Load saved language preference
const savedLang = localStorage.getItem("cv-language");
if (savedLang && (savedLang === "en" || savedLang === "es")) {
  updateLanguage(savedLang);
}

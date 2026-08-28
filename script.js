// ========================================
// SHAH NEIL KHAN PORTFOLIO
// Premium JavaScript Interactions
// ========================================


// Current Year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
      navLinks.classList.contains("active") ? "✕" : "☰";
  });
}


// Close menu after clicking navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    if (menuBtn) {
      menuBtn.textContent = "☰";
    }

  });
});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
  ".about-grid, .expertise-card, .skills-intro, .skill, .project-card, .contact-card"
);


const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }

    });

  },

  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  element.classList.add("reveal");

  observer.observe(element);

});


// ========================================
// SMOOTH ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });


  navItems.forEach((link) => {

    link.classList.remove("nav-active");

    if (
      link.getAttribute("href") === `#${currentSection}`
    ) {
      link.classList.add("nav-active");
    }

  });

});


// ========================================
// HERO PARALLAX EFFECT
// ========================================

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {

  if (!heroVisual) return;

  const x =
    (window.innerWidth / 2 - event.clientX) / 50;

  const y =
    (window.innerHeight / 2 - event.clientY) / 50;


  heroVisual.style.transform =
    `translate(${x}px, ${y}px)`;

});


// ========================================
// PROJECT CARD TILT EFFECT
// ========================================

const projectCards =
  document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    const rect = card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;


    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;


    const rotateX =
      (y - centerY) / -20;

    const rotateY =
      (x - centerX) / 20;


    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const dropdown = document.querySelector(".dropdown");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  if (dropdown) {
    const trigger = dropdown.querySelector(":scope > .nav-link");
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        if (window.innerWidth <= 850) {
          e.preventDefault();
          dropdown.classList.toggle("open");
        }
      });
    }
  }

  document.querySelectorAll(".submenu a").forEach(link => {
    link.addEventListener("click", () => {
      nav?.classList.remove("show");
      dropdown?.classList.remove("open");
    });
  });

  // Efecto suave de entrada para tarjetas.
  const cards = document.querySelectorAll(".feature-card, .content-card, .game-rules, .geo-section, .finish-card, .author-card, .evaluation-intro");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(16px)";
    card.style.transition = "opacity .6s ease, transform .6s ease";
    observer.observe(card);
  });

  document.querySelectorAll(".visible").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });

  const style = document.createElement("style");
  style.textContent = ".feature-card.visible,.content-card.visible,.game-rules.visible,.geo-section.visible,.finish-card.visible,.author-card.visible,.evaluation-intro.visible{opacity:1!important;transform:translateY(0)!important}";
  document.head.appendChild(style);
});

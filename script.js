document.addEventListener("DOMContentLoaded", () => {


  // =========================
  // MOBILE MENU
  // =========================
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // =========================
  // FOOTER YEAR
  // =========================
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // =========================
  // SCROLL REVEAL
  // =========================
  const items = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(item => observer.observe(item));
  } else {
    // Fallback agar konten tidak pernah blank di browser lama.
    items.forEach(item => item.classList.add("show"));
  }
});

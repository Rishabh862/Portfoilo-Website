(() => {
  "use strict";
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");

  if (toggle && links) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      links.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      links.classList.toggle("is-open", !isOpen);
    });

    links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!links.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();

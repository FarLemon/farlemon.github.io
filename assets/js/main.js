(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle (only visible under 900px)
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active link highlighting
  const links = Array.from(document.querySelectorAll(".nav a"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function setActive(hash) {
    links.forEach((l) => l.classList.remove("active"));
    const active = links.find((l) => l.getAttribute("href") === hash);
    if (active) active.classList.add("active");
  }

  // Initial state
  if (location.hash) setActive(location.hash);
  else if (sections.length) setActive("#" + sections[0].id);

  if ("IntersectionObserver" in window && sections.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.01, 0.1, 0.25, 0.4, 0.6] }
    );

    sections.forEach((s) => obs.observe(s));
  }
})();
///////////////////////////////////////////////////////////
// Set current year
///////////////////////////////////////////////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Make mobile navigation work
///////////////////////////////////////////////////////////
const btnNavEl = document.querySelector(".mobile-navigation-button");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("navigation-open");
});
/////////////////////////////////////////////////////////
// Smooth scrolling animation
/////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll page section
    if (href.startsWith("#")) {
      e.preventDefault();

      if (href !== "#") {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("navigation-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
///////////////////////////////////////////////////////////
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-160px",
  }
);
obs.observe(sectionHeroEl);

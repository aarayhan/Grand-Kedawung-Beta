// =====================================================
// Grand Kedawung — vanilla JS (no framework required)
// =====================================================

// --- Navbar state & scroll-to-top button ---
const mainNav = document.getElementById("mainNav");
const navInner = document.getElementById("navInner");
const scrollTopBtn = document.getElementById("scrollTopBtn");

function onScroll() {
  const scrolled = window.scrollY || document.documentElement.scrollTop;

  mainNav.classList.toggle("bg-ivory/90", scrolled > 40);
  mainNav.classList.toggle("backdrop-blur-md", scrolled > 40);
  mainNav.classList.toggle("shadow-soft", scrolled > 40);
  navInner.classList.toggle("py-3", scrolled > 40);
  navInner.classList.toggle("py-5", scrolled <= 40);

  scrollTopBtn.classList.toggle("hidden", scrolled <= 600);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Mobile menu ---
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = menuBtn.querySelector("i");

function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuIcon.classList.toggle("fa-bars", !open);
  menuIcon.classList.toggle("fa-xmark", open);
}

menuBtn.addEventListener("click", () => {
  setMenu(mobileMenu.classList.contains("hidden"));
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// --- About carousel (fade) ---
const slides = Array.from(document.querySelectorAll("[data-slide]"));
const dots = Array.from(document.querySelectorAll("[data-dot]"));
let currentSlide = 0;
let slideTimer;

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("opacity-100", i === currentSlide);
    slide.classList.toggle("opacity-0", i !== currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gold", i === currentSlide);
    dot.classList.toggle("w-7", i === currentSlide);
    dot.classList.toggle("bg-ivory/60", i !== currentSlide);
    dot.classList.toggle("w-3", i !== currentSlide);
  });
}

function startAutoplay() {
  stopAutoplay();
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 4000);
}

function stopAutoplay() {
  if (slideTimer) clearInterval(slideTimer);
}

if (slides.length) {
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
      startAutoplay();
    });
  });

  const carousel = document.getElementById("carousel");
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  startAutoplay();
}

// --- Room details popup ---
const seeMoreBtn = document.getElementById("seeMoreBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

seeMoreBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.classList.add("overlay-active");
});

function closePopup() {
  overlay.classList.remove("active");
  document.body.classList.remove("overlay-active");
}

closeBtn.addEventListener("click", closePopup);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("active")) closePopup();
});

// --- Scroll reveal ---
const revealEls = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// --- Contact form ---
const contactForm = document.querySelector("#contact form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission

    alert(`Sorry, this feature is still under development, so you can't send anything yet.`);
    contactForm.reset();
  });
}

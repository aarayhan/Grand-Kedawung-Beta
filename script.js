// --- Navbar & Scroll To Top Button ---
const scrollTopBtn = document.getElementById("scrollTopBtn");
const mainNav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  const scrolled = document.body.scrollTop || document.documentElement.scrollTop;

  scrollTopBtn.style.display = scrolled > 600 ? "block" : "none";
  mainNav.classList.toggle("scrolled", scrolled > 40);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Close mobile menu after clicking a link ---
const navCollapse = document.getElementById("navMenu");
document.querySelectorAll("#navMenu .nav-link, #navMenu .btn").forEach((link) => {
  link.addEventListener("click", () => {
    if (navCollapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });
});

// --- Room Details Popup ---
const seeMoreBtn = document.getElementById("seeMoreBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Open popup
seeMoreBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.classList.add("overlay-active");
});

// Close popup function
function closePopup() {
  overlay.classList.remove("active");
  document.body.classList.remove("overlay-active");
}

closeBtn.addEventListener("click", closePopup);

// Also close when clicking outside the card
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closePopup();
  }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    closePopup();
  }
});

// --- Contact Form Handling ---
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission

      alert(`Sorry, this feature is still under development, so you can't send anything yet.`);
      contactForm.reset();
    });
  }
});

// --- Scroll To Top Button ---
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Get elements
const seeMoreBtn = document.getElementById("seeMoreBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Open popup
seeMoreBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  overlay.classList.add("active");
  document.body.classList.add("overlay-active");
});

// Close popup function
function closePopup() {
  overlay.style.display = "none";
  overlay.classList.remove("active");
  document.body.classList.remove("overlay-active");
}

// Close popup
closeBtn.addEventListener("click", closePopup);

// Also close when clicking outside the card
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closePopup();
  }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.style.display === "flex") {
    closePopup();
  }
});

// --- Contact Form Handling ---
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('#contact form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Basic validation
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert(`Sorry, for this feature is still under development, so you can't send anything`);
        return;
      }

      // Show success message
      alert(`Sorry, for this feature is still under development, so you can't send anything`);

      // Optional: Clear the form
      contactForm.reset();
    });
  }
}); 
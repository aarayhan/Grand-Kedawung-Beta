// --- Scroll To Top Button ---
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
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
});

// Close popup
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Also close when clicking outside the card
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
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
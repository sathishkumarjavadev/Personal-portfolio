const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeBtn = document.getElementById("theme-toggle");

// Safety check
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Close menu
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Theme toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "🌙" : "☀️";
});

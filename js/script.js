document.addEventListener("DOMContentLoaded", () => {
  // =============================== Greeting ===============================
  const userNameSpan = document.getElementById("userName");
  if (userNameSpan) {
    let name = prompt("Enter your name:");
    if (!name || name.trim() === "") name = "Guest";
    userNameSpan.textContent = name;
  }

  // =============================== Message Form Validation ===============================
  const form = document.getElementById("messageForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let valid = true;

      document.getElementById("name-error").classList.add("hidden");
      document.getElementById("email-error").classList.add("hidden");
      document.getElementById("message-error").classList.add("hidden");

      if (name === "") {
        document.getElementById("name-error").classList.remove("hidden");
        valid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById("email-error").classList.remove("hidden");
        valid = false;
      }

      if (message === "") {
        document.getElementById("message-error").classList.remove("hidden");
        valid = false;
      }

      if (valid) {
        document.getElementById("submittedData").classList.remove("hidden");
        document.getElementById("outputName").textContent = name;
        document.getElementById("outputEmail").textContent = email;
        document.getElementById("outputMessage").textContent = message;
        form.reset();
      }
    });
  }

  // =============================== DARK MODE TOGGLE ===============================
  const themeToggle = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;

  if (themeToggle) {
    // Check saved theme or system preference
    function initTheme() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        htmlElement.classList.toggle("dark", savedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        htmlElement.classList.toggle("dark", prefersDark);
      }
      updateToggleButton();
    }

    // Update button text based on theme
    function updateToggleButton() {
      themeToggle.textContent = htmlElement.classList.contains("dark")
        ? "🌙"
        : "☀️";
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
      htmlElement.classList.toggle("dark");
      const isDark = htmlElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateToggleButton();
    });

    // Initialize theme on page load
    initTheme();
  }
});

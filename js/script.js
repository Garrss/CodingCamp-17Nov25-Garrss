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

  // =============================== DARK MODE & MOBILE MENU ===============================
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleMobile = document.getElementById("themeToggleMobile");
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  // Deklarasi fungsi di scope yang tepat
  const updateAllToggleButtons = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const toggleText = isDark ? "☀️" : "🌙";

    if (themeToggle) themeToggle.textContent = toggleText;
    if (themeToggleMobile) themeToggleMobile.textContent = toggleText;
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    updateAllToggleButtons();
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateAllToggleButtons();
  };

  // Initialize theme pertama kali
  initTheme();

  // Event listeners untuk theme toggles
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme);
  }

  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        mobileMenu &&
        !mobileMenu.contains(e.target) &&
        !mobileMenuButton.contains(e.target)
      ) {
        mobileMenu.classList.add("hidden");
      }
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});

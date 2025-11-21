// ===============================
// Reusable Navbar & Footer
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // Navbar Template
  const navbar = `
    <div class="flex justify-between items-center p-4 bg-white shadow">
      <h1 class="text-xl font-bold">MyPortfolio</h1>
      <nav class="space-x-4">
        <a href="index.html" class="hover:text-blue-600">Home</a>
        <a href="profile.html" class="hover:text-blue-600">Our Profile</a>
        <a href="portofolio.html" class="hover:text-blue-600">Portfolio</a>
        <a href="message.html" class="hover:text-blue-600">Message Us</a>
      </nav>
    </div>
  `;

  // Footer Template
  const footer = `
    <div class="text-center p-4 bg-white shadow mt-10">
      <p class="text-sm">© 2025 My Portfolio Website</p>
    </div>
  `;

  // Inject to HTML
  if (document.getElementById("navbar")) {
    document.getElementById("navbar").innerHTML = navbar;
  }
  if (document.getElementById("footer")) {
    document.getElementById("footer").innerHTML = footer;
  }

  // ===============================
  // Greeting on Home Page
  // ===============================

  const userNameSpan = document.getElementById("userName");

  if (userNameSpan) {
    let name = prompt("Enter your name:");
    if (!name || name.trim() === "") name = "Guest";

    userNameSpan.textContent = name;
  }

  // ===============================
  // Message Form Validation
  // ===============================

  const form = document.getElementById("messageForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let valid = true;

      // Reset error messages
      document.getElementById("name-error").classList.add("hidden");
      document.getElementById("email-error").classList.add("hidden");
      document.getElementById("message-error").classList.add("hidden");

      // Validate Name
      if (name === "") {
        document.getElementById("name-error").classList.remove("hidden");
        valid = false;
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById("email-error").classList.remove("hidden");
        valid = false;
      }

      // Validate Message
      if (message === "") {
        document.getElementById("message-error").classList.remove("hidden");
        valid = false;
      }

      // If valid, show submitted data
      if (valid) {
        document.getElementById("submittedData").classList.remove("hidden");
        document.getElementById("outputName").textContent = name;
        document.getElementById("outputEmail").textContent = email;
        document.getElementById("outputMessage").textContent = message;

        form.reset();
      }
    });
  }
});

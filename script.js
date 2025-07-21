window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  if (!toggle) {
    console.error("🌓 Button not found in DOM.");
    return;
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
  });

  // Load saved theme preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
});

document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // Optional: Save preference in localStorage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    document.body.classList.add("dark");
  }
});

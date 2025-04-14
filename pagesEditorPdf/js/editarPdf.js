function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleBtn.setAttribute("data-theme-icon", "🌙");
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.setAttribute("data-theme-icon", "☀️");
    localStorage.setItem("theme", "dark");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const toggleBtn = document.getElementById("themeToggle");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (toggleBtn) toggleBtn.setAttribute("data-theme-icon", "🌙");
  } else {
    if (toggleBtn) toggleBtn.setAttribute("data-theme-icon", "☀️");
  }

  // Adiciona o evento de clique no botão
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }
});

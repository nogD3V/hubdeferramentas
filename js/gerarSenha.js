function gerarSenha() {
  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const especiais = "!@#$%^&*()";
  const todos = letras + numeros + especiais;

  let senha = "";

  // Garante pelo menos 3 caracteres especiais
  for (let i = 0; i < 3; i++) {
    senha += especiais.charAt(Math.floor(Math.random() * especiais.length));
  }

  // Adiciona os outros 9 caracteres restantes (para completar 12)
  for (let i = 0; i < 9; i++) {
    senha += todos.charAt(Math.floor(Math.random() * todos.length));
  }

  senha = senha.split('').sort(() => Math.random() - 0.5).join('');
  document.getElementById("senhaGerada").value = senha;
}

function toggleGerador(botao) {
  const box = document.getElementById("geradorSenhaBox");

  if (box.classList.contains("oculto")) {
    box.classList.remove("oculto");
    botao.textContent = "Ocultar";
  } else {
    box.classList.add("oculto");
    botao.textContent = "Usar";
  }
}

function copiarSenha() {
  const senhaInput = document.getElementById("senhaGerada");
  senhaInput.select();
  senhaInput.setSelectionRange(0, 99999);
  document.execCommand("copy");

  const botao = document.getElementById("copiarSenha");
  const original = botao.textContent;
  botao.textContent = "✅";
  setTimeout(() => (botao.textContent = original), 1000);
}

// Alternância de tema com transição suave do emoji
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
    toggleBtn.setAttribute("data-theme-icon", "🌙");
  } else {
    toggleBtn.setAttribute("data-theme-icon", "☀️");
  }
});
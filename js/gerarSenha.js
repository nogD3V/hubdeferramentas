function gerarSenha() {
  const incluirMinusculas = document.getElementById("chkMinusculas").checked;
  const incluirMaiusculas = document.getElementById("chkMaiusculas").checked;
  const incluirNumeros = document.getElementById("chkNumeros").checked;
  const incluirSimbolos = document.getElementById("chkSimbolos").checked;
  const tamanho = parseInt(document.getElementById("tamanhoSenha").value);

  let chars = "";
  if (incluirMinusculas) chars += "abcdefghijklmnopqrstuvwxyz";
  if (incluirMaiusculas) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (incluirNumeros) chars += "0123456789";
  if (incluirSimbolos) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const output = document.getElementById("senhaGerada");
  if (chars === "") {
    output.value = "Selecione ao menos 1 opção";
    return;
  }

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += chars[Math.floor(Math.random() * chars.length)];
  }

  output.value = senha;
}

function toggleGerador(botao) {
  const box = document.getElementById("geradorSenhaBox");

  if (box.classList.contains("oculto")) {
    box.classList.remove("oculto");
    botao.textContent = "Ocultar";
    gerarSenha(); // Gera ao abrir
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

function ajustarTamanho(incremento) {
  const range = document.getElementById("tamanhoSenha");
  const contador = document.getElementById("valorTamanhoSenha");
  const valorAtual = parseInt(range.value);
  const novoValor = valorAtual + incremento;

  if (novoValor < 4 || novoValor > 24) {
    return; // não faz nada se ultrapassar os limites
  }

  range.value = novoValor;
  contador.textContent = "Tamanho: " + novoValor;
  gerarSenha();
}

function atualizarContadorTamanho() {
  const range = document.getElementById("tamanhoSenha");
  const contador = document.getElementById("valorTamanhoSenha");
  contador.textContent = "Tamanho: " + range.value;
}

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
  // Tema salvo
  const savedTheme = localStorage.getItem("theme");
  const toggleBtn = document.getElementById("themeToggle");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.setAttribute("data-theme-icon", "🌙");
  } else {
    toggleBtn.setAttribute("data-theme-icon", "☀️");
  }

  // Eventos para checkboxes e range
  ["chkMinusculas", "chkMaiusculas", "chkNumeros", "chkSimbolos"].forEach(id => {
    document.getElementById(id).addEventListener("input", gerarSenha);
  });

  document.getElementById("tamanhoSenha").addEventListener("input", () => {
    atualizarContadorTamanho();
    gerarSenha();
  });

  atualizarContadorTamanho();
});

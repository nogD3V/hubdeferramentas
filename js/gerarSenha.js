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

  // Embaralha a senha para distribuir os caracteres especiais
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
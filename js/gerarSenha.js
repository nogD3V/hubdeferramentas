function gerarSenha() {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let senha = "";
    for (let i = 0; i < 12; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[index];
    }
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
  
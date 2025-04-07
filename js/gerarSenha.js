function gerarSenha(tamanho = 12) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let senha = "";
  
    for (let i = 0; i < tamanho; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[index];
    }
  
    document.getElementById("senhaGerada").value = senha;
  }
  
  function toggleGerador() {
    const box = document.getElementById("geradorSenhaBox");
    const botao = document.getElementById("toggleGeradorBtn");
  
    box.classList.toggle("oculto");
  
    if (!box.classList.contains("oculto")) {
      botao.textContent = "Ocultar";
    } else {
      botao.textContent = "Usar";
    }
  }
  
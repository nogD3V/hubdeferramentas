function toggleEditorPdf(botao) {
    const box = document.getElementById("editorPdfBox");
  
    const outros = document.querySelectorAll(".tool-card .oculto");
    outros.forEach((el) => {
      if (el !== box) {
        el.classList.add("oculto");
      }
    });
  
    // Alterna visibilidade
    box.classList.toggle("oculto");
  
    // Alterna texto do botão
    botao.textContent = box.classList.contains("oculto") ? "Usar" : "Ocultar";
  }
  
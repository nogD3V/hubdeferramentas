function toggleConversor(botao) {
  const thisCard = botao.closest(".tool-card");
  const thisBox = thisCard.querySelector("#conversorBox");

  // Fecha qualquer outro box aberto
  document.querySelectorAll(".tool-card").forEach((card) => {
    const boxConversor = card.querySelector("#conversorBox");
    const toggleConversorBtn = card.querySelector("#toggleConversor");

    if (boxConversor && boxConversor !== thisBox && !boxConversor.classList.contains("oculto")) {
      boxConversor.classList.add("oculto");
      if (toggleConversorBtn) toggleConversorBtn.textContent = "Usar";
    }

    const boxSenha = card.querySelector("#geradorSenhaBox");
    const toggleSenhaBtn = card.querySelector("#toggleBotao");

    if (boxSenha && !boxSenha.classList.contains("oculto")) {
      boxSenha.classList.add("oculto");
      if (toggleSenhaBtn) toggleSenhaBtn.textContent = "Usar";
    }
  });

  // Alterna o atual
  if (thisBox.classList.contains("oculto")) {
    thisBox.classList.remove("oculto");
    botao.textContent = "Ocultar";
  } else {
    thisBox.classList.add("oculto");
    botao.textContent = "Usar";
  }
}

function converterTexto(acao) {
  const entrada = document.getElementById("textoEntrada");
  const saida = document.getElementById("textoSaida");

  let texto = entrada.value;

  switch (acao) {
    case "maiusculas":
      saida.value = texto.toUpperCase();
      break;
    case "minusculas":
      saida.value = texto.toLowerCase();
      break;
    case "capitalizar":
      saida.value = texto
        .toLowerCase()
        .replace(/\b\w/g, (l) => l.toUpperCase());
      break;
    case "inverter":
      saida.value = texto.split("").reverse().join("");
      break;
    case "limpar":
      entrada.value = "";
      saida.value = "";
      break;
  }
}

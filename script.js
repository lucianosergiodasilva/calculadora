/**
 * ALTERAR O TEMA
 *
 * Seleciona o body, remove suas classes, e adiciona a classe do tema selecionado.
 *
 * @param {string} cor - Nome da classe referente ao tema.
 */
function trocarTema(cor) {
  const body = document.body;
  body.className = "";
  const dado = cor && body.classList.add(`tema-${cor}`);
}

/**
 * OBTER O VALOR DO BOTÃO
 *
 * Seleciona o valor do botão, e acrescenta o valor vindo do parâmetro.
 *
 * @param {string} valor - Nome da classe referente ao tema.
 */
function obterValorDoButton(valor) {
  let valorInput = document.querySelector(".calculadora__input").value;
  document.querySelector(".calculadora__input").value = valorInput + valor;
}

/**
 * LIMPAR O DISPLAY
 *
 * Seleciona o valor do botão, e limpa o seu conteúdo.
 */
function limparDisplay() {
  document.querySelector(".calculadora__input").value = "";
}

/**
 * APAGAR O ÚLTIMO
 *
 * Seleciona o valor do botão, e limpa o último valor, igual ao "backspace" do teclado.
 */
function apagarUltimo() {
  let valorInput = document.querySelector(".calculadora__input").value;
  document.querySelector(".calculadora__input").value = valorInput.slice(0, -1);
}

/**
 * CALCULAR O TOTAL
 *
 * Seleciona o valor do botão, verifica se o diplay contém o símbolo de "%",
 * caso seja verdadeiro, calcula a porcentagem,
 * caso seja falso, calcula o que tiver no display.
 */
function calcular() {
  let valorInput = document.querySelector(".calculadora__input").value;

  // Verificar se valorInput contém "%"
  if (valorInput.includes("%")) {
    // Divide num array com os dois valores, sem "%"
    const valorInputDividido = valorInput.split("%");
    // Obtem os valores separados convertidos em Float
    const porcentagem = parseFloat(valorInputDividido[0]);
    const total = parseFloat(valorInputDividido[1]);
    // Calcula a porcentagem
    const resultado = (porcentagem / 100) * total;
    document.querySelector(".calculadora__input").value = resultado;
  } else {
    // Calcula o resultado
    document.querySelector(".calculadora__input").value = eval(valorInput);
  }
}

// NÃO ESTÁ EM USO!

/**
 * INVERTE +/-
 *
 * Seleciona o valor do botão, e inverte de positivo para negativo.
 */
function inverter() {
  let valorInput = document.querySelector(".calculadora__input").value;
  document.querySelector(".calculadora__input").value = valorInput * -1;
}

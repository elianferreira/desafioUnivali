/* Função para o cadastro e conversão dos dados para JSON */
let dados = JSON.parse(localStorage.getItem('prod'));
function cadastrarProduto() {
  if (dados == null) {
    localStorage.setItem('prod', '[]');
    dados = [];
  }

  let reg = {
    name: inputNameItem.value,
    medida: inputUnidadeMedida.value,
    quantidade: inputQtdItem.value,
    preco: inputPrecoItem.value,
    fabricacao: inputProdFabricacao.value,
    validade: inputProdValidade.value,
    perecivel: inputProdPerecivel.value,
  };

  dados.push(reg);

  localStorage.setItem('prod', JSON.stringify(dados));
  alert('registro incluido com sucesso');
}

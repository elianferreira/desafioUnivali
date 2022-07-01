// @author Elian Ferreira

/* Capturando os elementos do DOM */

/* Elementos do header */
const menuToggle = document.querySelector('.menuToogle');
const navigation = document.querySelector('.navigation');

/* Elementos do formulario*/
const formItem = document.querySelectorAll('.form-item');
const inputNameItem = document.querySelector('.inputNameItem');
const inputUnidadeMedida = document.querySelector('.inputUnidadeMedida');
const inputQtdItem = document.querySelector('.inputQtdItem');
const inputPrecoItem = document.querySelector('.inputPrecoItem');
const inputProdFabricacao = document.querySelector('.inputProdFabricacao');
const inputProdValidade = document.querySelector('.inputProdValidade');
const inputProdPerecivel = document.querySelector('.inputProdPerecivel');

/* Adicionando a classe active a todos os NodeElements do formulario */
const addActiveInForm = (element) => {
  element.classList.toggle('active');
};

/* Ao clicar no menuToogle irá ativar um evento do menu */
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
  formItem.forEach(addActiveInForm);
});

/* Adicinando em tela os valores armazenados do localstorage */

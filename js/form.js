const btnSubmit = document.querySelector('.submitButton');
const cancelButton = document.querySelector('.cancelButton');

menuToggle.addEventListener('click', () => {
  btnSubmit.classList.toggle('active');
  cancelButton.classList.toggle('active');
});

/* Ao clicar no botão submit não irá deixar enviar */
preventSendRegister = (event) => {
  event.preventDefault();
};
btnSubmit.addEventListener('click', preventSendRegister);

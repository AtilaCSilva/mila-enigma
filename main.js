const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById(('btn-nao'))
const contentSections = document.querySelectorAll('.content');

// Adiciona o evento para o botão "sim"
btnSim.addEventListener('click', () => {
  // Mostra todas as sections com a classe "content"
  contentSections.forEach(section => {
    section.style.display = 'block';
  });

  // Desativar e sumir com os botões
  btnSim.style.display = 'none';
  btnNao.style.display = 'none';
})

btnNao.addEventListener('click', () => {
  window.location.href = 'https://badrequest.com/%%invalid.Url'
})
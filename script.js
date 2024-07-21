document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.cabecalho__menu-toggle');
    const menu = document.querySelector('.cabecalho__menu');
  
    toggleButton.addEventListener('click', function () {
      menu.classList.toggle('cabecalho__menu--active');
    });
  });
  
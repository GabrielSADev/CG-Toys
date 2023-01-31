const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.ul');

menu.addEventListener('click', () => {
     menu.classList.toggle('ativo');
     NavMenu.classList.toggle('ativo');
})
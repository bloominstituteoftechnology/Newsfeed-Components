
const toggleMenu = () => {
  menu.classList.toggle("menu--open");
  TweenMax.to(menu, 0.3, {
    left: 0,
    ease: Back.easeOut
  })
}

const menu = document.querySelector(".menu");

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', toggleMenu);
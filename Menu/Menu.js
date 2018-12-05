
const toggleMenu = () => {
  menu.classList.toggle("menu--open");
  if (menu.classList.contains("menu--open")) {
    TweenMax.to(menu, 0.3, {
      left: 0,
      ease: Back.easeOut
    })
  } else {
    TweenMax.to(menu, 1, {
      left: "-350px",
      ease: Back.easeOut
    })
  }
  
}

const menu = document.querySelector(".menu");

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', toggleMenu);
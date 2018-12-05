
const toggleMenu = (e) => {
  menu.classList.toggle("menu--open");
  e.stopPropagation();

  console.log("toggled");
  if (menu.classList.contains("menu--open")) {
    

    TweenMax.to(menu, 0.5, {
      left: 0,
      ease: Back.easeOut
    });
   } else {
    TweenMax.to(menu, 0.5, {
      left: -351,
      ease: Back.easeOut
    })
  }
  
}

const menu = document.querySelector(".menu");

const menuButton = document.querySelector(".menu-button");

const html = document.querySelector("html");

menuButton.addEventListener('click', toggleMenu);

html.addEventListener("click", () => {
  console.log("clicked!");
  if (menu.classList.contains("menu--open")) {
    TweenMax.to(menu, 0.5, {
      left: -351,
      ease: Back.easeOut
    })
    menu.classList.toggle("menu--open");

  }
});
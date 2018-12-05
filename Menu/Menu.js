
const toggleMenu = (e) => {
  e.stopPropagation();
  menu.classList.toggle("menu--open");
  if (menu.classList.contains("menu--open")) {
    TweenMax.to(menu, 0.5, {
      left: 0,
      ease: Back.easeOut
    })
   }else {
    TweenMax.to(menu, 1, {
      left: -350,
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
    // html.style.background = "red";
  }
});
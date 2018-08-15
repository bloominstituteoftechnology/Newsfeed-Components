const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const articlesClass = document.querySelector(".articles");
const headerH1 = document.querySelector(".header h1");
let menuOpen = false;

const toggleMenu = () => {
  if (menuOpen) {
    TweenMax.to(menu, 1, {x:0});
    menuOpen = false;
  } else {
    TweenMax.to(menu, 1, {x:350});
    menuOpen = true;
  }
}

menuButton.addEventListener("click", () => toggleMenu());

articlesClass.addEventListener("click", () => {
  menuOpen = true;
  return toggleMenu();
});

headerH1.addEventListener("click", () => {
  menuOpen = true;
  return toggleMenu();
});

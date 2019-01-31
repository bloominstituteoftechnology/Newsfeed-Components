let menu = document.querySelector(".menu");

const menuButton = document.querySelector(".hamburger");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("is-active");
  menu.classList.toggle("menu--open");
});

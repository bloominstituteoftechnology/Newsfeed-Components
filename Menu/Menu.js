const toggleMenu = () => {
  menu.classList.toggle('slide');
  stopPropagation();
}
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);
document.addEventListener('click', (event) => {
  if (event.target !== menuButton && menu.classList.contains('slide')) {
    menu.classList.toggle('slide');
    console.log(event.target);
  }
})

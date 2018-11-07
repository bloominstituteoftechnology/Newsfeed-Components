const toggleMenu = (event) => {
  event.stopPropagation();

  menu.classList.toggle('menu--open');
  menuButton.classList.toggle('button--open');
  console.log(menu.classList);
   // Toggle the "menu--open" class on your menu refence.
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

const menuLinks = document.querySelectorAll('.menu ul li')
console.log(menuLinks);

document.querySelector('body').addEventListener('click', function(event) {
  console.log(event.target);
  if (menu.classList.contains('menu--open')) {
    menu.classList.toggle("menu--open");
    menuButton.classList.toggle("button--open")
  };
})

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

menuLinks.forEach(item => item.addEventListener('click', function(event) {
  event.stopPropagation();
  if (event.target.style.color) event.target.removeAttribute('style');
  else event.target.style.color = "red";
}))

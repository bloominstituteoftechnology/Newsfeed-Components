
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
  if (menu.classList.contains('menu--open')) {
    TweenMax.fromTo((menu), .7, {css:{opacity: "0", display: "none", x: -350}}, {css:{opacity: "1", display: "block", x: 0}});
  } else {
    TweenMax.fromTo((menu), .7, {css:{opacity: "1", display: "block", x: 0}}, {css:{opacity: "0", display: "none", x: -350}});
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

document.addEventListener('click', e => {
  console.log(e.target)
  if (e.target !== document.querySelector('.menu-button') && menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    TweenMax.fromTo((menu), .7, {css:{opacity: "1", display: "block", x: 0}}, {css:{opacity: "0", display: "none", x: -350}});
  }
})
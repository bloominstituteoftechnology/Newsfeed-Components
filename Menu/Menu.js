const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence.
  event.stopPropagation()
  menu.classList.toggle('menu--open');
  TweenMax.fromTo([menu], 1.5, {
    x: -300
  }, {
    x: 0
  });
}

window.addEventListener('click', () => {
  TweenMax.fromTo([menu], 1.5, {
    x: 0
  }, {
    x: -350
  });
});

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  toggleMenu(event);
});
console.log(menu.classList)
console.log(menu.className)
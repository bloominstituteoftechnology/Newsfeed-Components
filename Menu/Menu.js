let elIsClicked = false;

const openMenu = () => {
  return (
    elIsClicked = true),
    menu.classList.toggle('menu--open', true),
    TweenMax.to(".menu", 0.3, { width: "237px", opacity: '1' }),
    TweenMax.to(".menu ul li", 0.5, { "border-bottom": "1px solid darkolivegreen" })
  // Toggle the "menu--open" class on your menu refence.
}

const closeMenu = () => {
  return (
    elIsClicked = false),
    menu.classList.toggle('menu--open', false),
    TweenMax.to(".menu", 0.2, { width: "0", opacity: '0' }),
    TweenMax.to(".menu ul li", 0.2, { border: "0" })
}

// Start Here: Create a reference to the ".menu" class
let menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu


menuButton.addEventListener('click', (e) => {
  // open and close nav
  if (elIsClicked === false) {
    e.stopPropagation();
    openMenu();
  } else if (elIsClicked === true) {
    e.stopPropagation();
    closeMenu();
  }
})

window.addEventListener('click', () => {
  if (elIsClicked === true) {
    closeMenu();
  }
})
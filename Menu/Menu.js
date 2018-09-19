let elIsClicked = false;

const openMenu = () => {
  return (
    elIsClicked = true),
    menu.classList.toggle('menu--open', true),
    TweenMax.to(".menu", 0.25, { width: "186px", opacity: '1' }),
    TweenMax.to(".menu ul li", 0.5, { right: 20, delay: 1 })
  //TweenMax.to(".menu ul li", 0.5, { "border-bottom": "1px solid darkolivegreen" })
  // Toggle the "menu--open" class on your menu refence.
}

const closeMenu = () => {
  return (
    elIsClicked = false),
    TweenMax.to(".menu", 0.5, { width: "0", opacity: '0' }),
    menu.classList.toggle('menu--open', false)
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

class ListItem {
  constructor(li) {
    this.li = li;
    this.li.addEventListener('mouseenter', () => {
      this.large();
    })
    this.li.addEventListener('mouseleave', () => {
      this.small();
    })
  }
  large() {
    TweenMax.to(this.li, 0, { opacity: 1, scale: 1.2, ease: Bounce.easeInOut })
  }
  small() {
    TweenMax.to(this.li, 0, { opacity: 1, scale: 1, ease: Bounce.easeInOut })
  }
}

let menuLists = document.querySelectorAll('.menu ul li');

menuLists = Array.from(menuLists).map(li => {
  return new ListItem(li);
});

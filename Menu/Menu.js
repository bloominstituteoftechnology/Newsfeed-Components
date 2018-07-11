// for tracking the menu is pressed or not
let isOpen = true;
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// console.log(menuButton)

// Get the menu to slide back out when the user clicks anywhere on the screen other than the menu.
const outsideTheMenu = [document.querySelector('.header'), document.querySelector('.articles')];

const menuAnimation = () => {
  // animation for menu bar 
  // left to right
  TweenMax.from(menu, 1, {
    width: 0
  })

  TweenMax.to(menu, 1, {
    width: 200
  });

  // animation for text
  if (isOpen) {   
    TweenMax.to(document.querySelector('.articles'), 1, {x: 100, ease: Linear.easeOut});
    isOpen = false;
  } else {
    TweenMax.to(document.querySelector('.articles'), 1, {x: 0, ease: Linear.easeOut});
    isOpen = true;
  }
}

const toggleMenu = (e) => {
  event.stopPropagation();
  // Toggle the "menu--open" class on your menu refence.
  // console.log(e.target)
  menu.classList.toggle('menu--open');
  menuAnimation();
}

const CloseMenuOutside = (e) => {
  if (!isOpen) {
    menu.classList.toggle('menu--open');
    menuAnimation();
  }
}

outsideTheMenu.forEach(function(element) {
  element.addEventListener('click', CloseMenuOutside);
})

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
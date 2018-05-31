const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if (!menu.classList.contains('menu--open')) {
    menu.classList.add('menu--open')
    TweenMax.fromTo(
      '.menu',
      1,
      {
        opacity: 1,
        x: -400
      },
      { x: -80 }
    )
  } else {
    menu.classList.remove('menu--open')
    TweenMax.fromTo(
      '.menu',
      1,
      {
        opacity: 1,
        x: -80
      },
      { x: -400 }
    )
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
console.log(menu)
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
console.log(menuButton)

TweenMax.fromTo(
  '.menu',
  1,
  {
    opacity: 1,
    x: -400
  },
  { x: -400 }
)

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)

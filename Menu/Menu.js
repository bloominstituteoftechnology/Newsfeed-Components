const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open')
  // TweenMax.to('.menu', 6, { left: 10 })
  // TweenLite.to('.menu', 2.5, {
  //   ease: SlowMo.ease.config(0.7, 0.7, false),
  //   x: -10
  // })
  TweenMax.fromTo(
    '.menu',
    1,
    {
      opacity: 1,
      x: -400
    },
    { x: -50 }
  )
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
console.log(menu)
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
console.log(menuButton)
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)

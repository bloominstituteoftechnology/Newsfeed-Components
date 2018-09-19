const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}

const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menu-button')

let menuOpen = false

const openMenu = () => {
  menuOpen = true
  TweenMax.to('.menu', 0.7, { left: 0 })
}

const closeMenu = () => {
  TweenMax.to('.menu', 0.7, { left: '-300px' })
  menuOpen = false
}

menuButton.addEventListener('click', event => {
  event.stopPropagation()
  menuOpen === true ? closeMenu() : openMenu()
})

menu.addEventListener('click', event => {
  event.stopPropagation()
})

document.querySelector('body').addEventListener('click', () => {
  if (true) {
    closeMenu()
    menuOpen = false
  }
})


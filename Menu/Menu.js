// Variables

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

// Callbacks

const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

// Event Handlers
menuButton.addEventListener('click', toggleMenu);
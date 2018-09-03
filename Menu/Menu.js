TweenLite.to(document.querySelector('.menu'), 0, {autoAlpha: 0, display: 'none'});


let open = false;
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu reference.
    // menu.classList.toggle('menu--open');
    TweenLite.to(menu, 0.5, {autoAlpha: !open ? 1 : 0, display: !open ? 'block' : 'none'});
    open = !open;
};

// Start Here: Create a reference to the ".menu" class
// create a reference to the ".menu-button" class
const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu);
let open = false;
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence.
    if (!open) {
        menu.classList.toggle('menu--open');
        TweenLite.to(menu, 0.5, {autoAlpha: 1, display: 'block'});
        open = !open;
    } else {
        TweenLite.to(menu, 0.5, {autoAlpha: 0, display: 'none'});
        menu.classList.toggle('menu--open');
        open = !open;
    }

};

// Start Here: Create a reference to the ".menu" class
// create a reference to the ".menu-button" class
const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu);
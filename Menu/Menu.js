const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence.
    menu.classList.toggle('menu--open');
    TweenMax.fromTo(".menu", 0.5, {
        x: -350
    }, {
        x: 0
    });

}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
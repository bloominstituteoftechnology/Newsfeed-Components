const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
    console.log('toggle menu');
    TweenMax.from(".menu", .3, {opacity: 0, height: 0});
    TweenMax.to(".menu", .3, {opacity: 1, height: '100%'});
    TweenMax.from(".menu ul li", .6, {opacity: 0, fontSize: 0});
    TweenMax.to(".menu ul li", .6 , {opacity: 1, fontSize: 24});
    menu.classList.toggle('menu--open');
    // e.target.parentNode.classList.toggle('menu--open');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
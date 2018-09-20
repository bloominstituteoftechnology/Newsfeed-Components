const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    // Toggle the "menu--open" class on your menu refence. 
}



// Start Here: Create a reference to the ".menu" class
let menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function() {
    toggleMenu();
    animation();
});

let animation = function() {


    TweenLite.to(menu, .1, {
        ease: Power3.easeInOut,
        left: "10px",
    })




}
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", function(e) {
  toggleMenu();
});

//Add animations using GSAP
TweenMax.to(menuButton, 3, { x: 180, rotation: 180, ease: Elastic.easeOut });
TweenMax.to(".menu--open", 5, { opacity: 1 });

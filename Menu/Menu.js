
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  console.log("menuButton clicked");

  //show menu when clicked
  menu.classList.toggle("menu--open");
  TweenMax.to(menu, 1, {ease: Power4.easeOut, x: 250, } );
  

  //hide menu when mouse leaves
  articles2.addEventListener('mouseover', (event) => {
    console.log("mouseover articles2")
    TweenMax.to(menu, 1, {x: -25})
  });

}

const blurPage = () => {
  console.log("blurPage function invoked")
  articles2.classlist.toggle("articles-while-menu")
}



// Start Here: Create a reference to the ".menu" class
const articles2 = document.querySelector(".articles");

const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", toggleMenu)
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', blurPage)

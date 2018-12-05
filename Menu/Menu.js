
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   menu[0].classList.toggle("menu--open");

// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelectorAll(".menu");
// console.log(menu);
// console.log(menu[0]);
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector(".menu-button");
// console.log(menuButton);
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener("click",toggleMenu)


// this is to slide the menu using jQuery
//click on the btn to slide from left and click anywhere on the menu to slide and close the list from right to left.
let  duration = 'slow';

$('.menu-button').click(function () {
  console.log("Iam being clicked");
    $('.menu-button').hide(duration, function() {
        $('.menu').show('slide', {direction: 'left'}, duration);});
});

$('body').click(function () {
  $('.menu').hide('slide', {direction: 'left'});
  $(".menu-button").show("slide",{direction:"left"},duration);
});
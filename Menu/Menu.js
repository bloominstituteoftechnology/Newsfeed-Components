// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
//   menu.classList.toggle("menu--open")
//   if (menu.classList.contains("menu--open")) {
//     TweenMax.to(menu, 1, {x: "352px"})
//   } else {
//     TweenMax.from(menu, 1, {x: "352px"})
//   }
// }
let burgerCounter = 1;
const toggleMenu = (e) => {
  e.stopPropagation();
  burgerCounter++;
  console.log(burgerCounter)
    //odd
    if (Math.abs(burgerCounter % 2) === 1) {
      console.log(Math.abs(burgerCounter % 2) === 1)
      TweenMax.to(menu, .2, {x: "0"})
    //even
    } else {
      TweenMax.to(menu, .2, {x: "350px"})
    }
  }
  // if (!menu.classList.contains("menu--open")){
  //   TweenMax.from(menu, 0.5, {
  //     left: -350,
  //   });
  //  } else {
  //   TweenMax.from(menu, 3, {
  //     left: 0,
  //   })
  // }
// }

// const toggleMenu = () => {
//   menu.classList.toggle("menu--open");
//   TweenMax.to(menu, 1, { x: "300px" });
// };

// const toggleMenu1 = () => {
//   if(menu.style.display === "block") {
//     TweenMax.from(menu, 1, { x: "300px" });
//   }
  
// };

// Start Here: Create a reference to the ".menu" class

// menuButton.addEventListener("click", (e)=>{
//   e.stopPropagation();
  
// })
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

// 1. Menu Opening - > change the css for the menu
//     get menuto slide in from the left of the screen and slide out when the button is clicked.
//     get the menu to slide back out when the user clicks anywhere on the screen other than the meny

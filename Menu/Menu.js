
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


const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

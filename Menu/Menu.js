
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu;
// create a reference to the ".menu-button" class
const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu

//STEP 1- create class holding the logic of the 
//desired element behavior, in this case listening

class Button {
  constructor(domElement) {
    this.domElement = domElement;
    this.domElement.addEventListener('click', this.btnClick);
  }
  btnClick(event) {
    event.stopPropagation();
    console.log("a click has occured!");
  }
}

//STEP 2 - initial value assignment, aka grabbing all the elements from the webpage
let buttons = document.querySelectorAll('.btn');

//STEP 3 - now that we have the initial value, 'buttons' can be manipulated and then 
//reassigned the value that results from the manipulation (**the right side of '=' evaluates first)
//example of using a compeonent to mount a styled HTML elements to the DOM 
buttons = Array.from(buttons).map(domElement => {
  return new Button(domElement);
});
// in this case, we're creating an array of the original buttons and then converting 
//each array item to the new smart button as described in Button class
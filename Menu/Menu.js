
const toggleMenu = () => {
  
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");


// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");


// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", () => menuButton.classList.togggle.toggleMenu());
console.log();

// const nav = document.querySelector(".nav");

// nav.addEventListener('click', function(event) {
//     console.log("Link was clicked!");
// })


// class Panel {
//   constructor(panel){
//     this.panel = panel;
//     this.heading = this.panel.querySelector('.panel-content h3');
//     this.content = this.panel.querySelector('.panel-content p');
//     console.log(this.heading);
//     // Non-arrow function 
//     //this.heading.addEventListener('click', this.togglePanel.bind(this));
//     this.heading.addEventListener('click', (e) => this.togglePanel(e));
//   }
//   // Methods
//   togglePanel(e) {
//     // only need the event object if we are using it***
//     console.log(e.target);
//     this.content.classList.toggle('toggle-on');
//   }
// }

// const panels = document.querySelectorAll('.panel');

// panels.forEach( panel => {
//   return new Panel(panel);  
// });

// panels = Array.from(panels).map( panel => {
//   return new Panel(panel);
// })
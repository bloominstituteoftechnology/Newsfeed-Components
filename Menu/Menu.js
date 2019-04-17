
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open")
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);




// class Panel {
//   constructor(panel) {
//     this.panel = panel;
//     this.panelButtons = this.panel.querySelector(".panel-buttons");
//     this.panelBtnOpen = this.panel.querySelector(".panel-btn-open");
//     this.panelBtnClose = this.panel.querySelector(".panel-btn-close");
//     this.panelContent = this.panel.querySelector(".panel-content")
    
//     // old binding of the this
//     // this.panelButtons.addEventListener("click", this.togglePanel.bind(this))
    
//     // new: Using Arrow functions
//     this.panelButtons.addEventListener("click", this.togglePanel)
//   }
//   // methods
//   togglePanel = () => {
//     // debugger;
//     this.panelBtnOpen.classList.toggle("hide-btn");
//     this.panelBtnClose.classList.toggle("hide-btn");
//     this.panelContent.classList.toggle("toggle-on")
//   }
// }


// let panels = document.querySelectorAll(".panel");
// // console.log(panels)

// // panels.forEach(panel => {
// //   new Panel(panel);
// // })

// // Converting to an array

// // impplicit vs explicit
// // map, filter, reduce DOES NOT APPLY to forEach
// panels = Array.from(panels).map(panel => (
//   new Panel(panel)
// ));

// const buttonClose = document.querySelector(".secondary .accordion .panel-btn-close")
// console.log(buttonClose)
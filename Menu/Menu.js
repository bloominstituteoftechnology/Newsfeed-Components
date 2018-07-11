
class Button {
  constructor(button) {
    this.item = button; // "DOM button"
    // this.orangeBtn = this.item.querySelector(".custom-color").style.color = "orange";
    // console.log(this.orangeBtn);
    console.log(this.item);
    this.item.addEventListener("click", this.btnClick);
  }
  // methods
  btnClick() {
    console.log("I was clicked!")
    menuBtn.classList.toggle("display-flex");
  }
}


const menuBtn = document.querySelector(".menu");
let myButtons = document.querySelectorAll("li");
console.log(menuBtn)
console.log(myButtons)
//extH4tag[1].innerHTML =

// Start Here: Create a reference to the ".menu" class
//const menu;
// create a reference to the ".menu-button" class
//const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu

//}

myButtons = Array.from(myButtons).map( button => new Button(button));
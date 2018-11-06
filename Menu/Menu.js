
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
    console.log("Toggle menu called")
   // menu.toggle(".menu--open");

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// Start Here: Create a reference to the ".menu" class
//const menu;
const menu =document.querySelector(".menu");
// create a reference to the ".menu-button" class

//const menuButton;
const menuButton=document.querySelector(".menu-button");
    //menuButton.addEventListener().click(toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click",toggleMenu);


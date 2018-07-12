
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if (menu.classList.contains("menu--open")===true){
    menu.classList.toggle("menu--close");     
  }else{
    menu.classList.toggle("menu--open"); 
  }         
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", (event)=>{
  console.log("clicked")
  toggleMenu();
});

const content = document.querySelector(".articles")
const header = document.querySelector(".header")

content.addEventListener("click", (event)=>{
  console.log("clicked content")
  if (menu.classList.contains("menu--open")===true){
    menu.classList.add("menu--close");     
  }
});
header.addEventListener("click", (event)=>{
  console.log("clicked content")
  if (header !== event.target) {
    console.log(event.target)
    return
  }
  if (menu.classList.contains("menu--open")===true){
    menu.classList.add("menu--close");     
  } 
});
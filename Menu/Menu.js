
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open");
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', ()=>{
  toggleMenu();
});
const menuItem = document.querySelectorAll('.menu li');
console.log(menuItem);

menuItem.forEach((item) => {
  item.addEventListener('mouseover', ()=>{
    TweenMax.to(item, 1, {scale:1.2})
    item.style.textDecoration="underline";})
})
menuItem.forEach((item) => {
  item.addEventListener('mouseout', ()=>{
    TweenMax.to(item, 2, {scale:1})
    item.style.textDecoration="none";
  })
})
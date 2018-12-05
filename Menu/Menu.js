


const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // // Toggle the "menu--open" class on your menu refence. 
  // let x = document.querySelector('.menu');
  // console.log(x.style.display);
  // console.log(x.style);
  // x.style.display = 'block';
  // console.log(x.style.display);
  // if (x.style.display === 'none') {
  //   x.style.display = 'block';
  // } else {
  //   x.style.display = 'none';
  // }
  // console.log('hello');
};

// Start Here: Create a reference to the ".menu" class
const menu = 
document.querySelector('.menu');
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = 
document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

// menu.addEventListener('click', function(e) {
//   console.log('hola');
//   e.target = toggleMenu();
// });

menuButton.addEventListener('click', function(e) {
  console.log('hola');
  e.target = toggleMenu();
});
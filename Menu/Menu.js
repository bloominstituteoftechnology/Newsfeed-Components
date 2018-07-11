const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
	// let tl = new TimelineLite();
	// tl.from('.menu', 0.5, {x: 0})
	// .to('.menu', 0.5, {x:500});
	// open = true;
	menu.classList.toggle('menu--open');
	menu.classList.toggle('menu--hidden');
}

const hideMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  let tl = new TimelineLite();
  tl.from('.menu', 1, {x:0})
  .to('.menu', 1, {x: -500})
  open = false;
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu.classList);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () => toggleMenu());


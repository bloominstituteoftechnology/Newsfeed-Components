


const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open'); //not sure this line of code is correct but we can move on
  console.log('toggle');
}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
	console.log('click');
	//not sure if i should be using this here; since only 1 menu exists and we hard reference it i think not
	toggleMenu();
});
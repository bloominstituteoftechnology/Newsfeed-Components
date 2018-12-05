const toggleMenu = () => {
	// Toggle the "menu--open" class on your menu refence.
	if (!menu.classList.contains('menu--open')) {
		menu.classList.toggle('menu--open');
		menu.style.display = 'block';
	} else {
		menu.classList.toggle('menu--open');
		menu.style.display = 'none';
	}
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// console.log(menuButton);

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (e) => {
	toggleMenu();

	console.log('clicked!');
});

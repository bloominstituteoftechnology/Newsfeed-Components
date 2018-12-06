const toggleMenu = () => {
	// Toggle the "menu--open" class on your menu refence.
	if (!menu.classList.contains('menu--open')) {
		menu.classList.toggle('menu--open');
		TweenMax.from('.menu', 1, { scale: 0.2, x: -350, ease: Back.easeOut.config(0.9) });
		TweenMax.to('.menu', 1, { opacity: 0.93 });
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

TweenMax.from('h1', 1, { scale: 0.3, ease: Back.easeOut.config(1.3) });

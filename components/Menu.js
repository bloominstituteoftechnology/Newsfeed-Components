// This is the data we will be using, study it but don't change anything, yet.

let menuItems = ['Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Log Out'];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(menuItems) {
	const nav = document.createElement('div');
	const menu = document.createElement('ul');
	const students = document.createElement('li');
	const faculty = document.createElement('li');
	const whatsNew = document.createElement('li');
	const techTrends = document.createElement('li');
	const music = document.createElement('li');
	const logout = document.createElement('li');
	const menuButton = document.querySelector('.menu-button');

	nav.classList.add('menu');

	nav.appendChild('menu');
	menu.appendChild('students');
	menu.appendChild('faculty');
	menu.appendChild('whatsNew');
	menu.appendChild('techTrends');
	menu.appendChild('music');
	menu.appendChild('logout');

	students.textContent = menuItems[0];
	faculty.textContent = menuItems[1];
	whatsNew.textContent = menuItems[2];
	techTrends.textContent = menuItems[3];
	music.textContent = menuItems[4];
	logout.textContent = menuItems[5];

	menuButton.addEventListener('click', event => {
		nav.classList.toggle('menu-open');
	});

	return nav;
}

const newMenu = menuMaker(menuItems);
const header = document.querySelector('div.header');

header.appendChild('newMenu');

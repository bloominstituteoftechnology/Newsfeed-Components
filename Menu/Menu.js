/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

const header = document.querySelector('.header');

// Step 1: Write a function that will create a menu component as seen below:
// Pass the function an array as it's only argument.

function Menu(arr) {

    const menu = document.createElement('div')
    const unorderedList = document.createElement('ul');
    const itemList = [];

    // Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
    // Add those items to the <ul>
    arr.forEach(function(i) {
        itemList[i] = document.createElement('li');
        itemList[i].textContent = i;
        unorderedList.appendChild(itemList[i]);
    })

    menu.appendChild(unorderedList);
    menu.classList.add('menu');

    // Step 3: Using a DOM selector, select the menu button currently on the DOM.
    const menuButton = document.querySelector('.menu-button');

    // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
    })

    // Step 5: return the menu component.
    return menu;
}

// Step 6: add the menu component to the DOM.
header.append(Menu(menuItems));
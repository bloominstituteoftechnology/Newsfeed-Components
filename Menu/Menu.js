//WORKING 
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  //.classList
// classList will return an array-like object of all the classes on the element. There are a number of useful methods available on classList.
// classList is a DOMTokenList.
// A DOMTokenList is an array-like object with a numerical zero-based index, a length property, also the .contains() and .forEach() methods.
// Most notably the methods .add() .remove() and .toggle() exist. All three take a single string representing the class.
// .add('className') and .remove('className') do as their names indicate.
// .toggle('className') will add the class if it does not exist and remove it if if does.
  menu.classList.toggle('menu--open')
}


//debugger
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log( ".menu", menu)
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log('.menu')
// Using your menuButton reference, add a click handler that calls toggleMenu
//reference menuButton variable above which references btn from html 

//calling it like toggleMenu() causes it to fire before clicking
// menuButton.addEventListener('click', () => {
//   toggleMenu(); //call tagglemenu function
//   console.log('click')
// })



menuButton.addEventListener('click', toggleMenu) 
//call tagglemenu function
  console.log('click', menuButton)







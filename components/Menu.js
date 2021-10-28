// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>

  // The 'menuMaker' takes an array of menu items as its only argument.

  function menuMaker({menuList}) {
    menuDiv = document.createElement('div');
    menuUl = document.createElement('ul');

    menuDiv.appendChild(menuUl);

    menuDiv.classList.add('menu');

     //loop over the array
    menuList.forEach(element => {
    //create an li every single time it loops
    const li = document.createElement('li');
    //set each li's textContent to each element
    li.textContent = element;
    //append the li's to the ul
    menuUl.appendChild(li);
    });

    const menuButton = document.querySelector('.menu-button');

    menuButton.addEventListener('click', () => {
      menuDiv.classList('menu--open');
      console.log('clicked');
    })

    return menuDiv;
  }
  window.addEventListener('load', () => {
    //select header
    const menu = document.querySelector('.header');
    //call this function while appending the return menu to the dom
    menu.appendChild(menuMaker(menuItems));
  }) 
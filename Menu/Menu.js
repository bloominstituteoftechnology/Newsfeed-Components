/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.
  
  /*Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>*/
  
  /*Step 3: Using a DOM selector, select the menu button currently on the DOM.*/
  
 /* Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself*/

 /* Step 5: return the menu component.*/

  /*Step 6: add the menu component to the DOM.*/
  
  const header = document.querySelector('.header')

  header.append(menuCreator());
  
  function menuCreator(){
    const menu = document.createElement('div')
    const menuTitle = document.createElement('ul')
    const students = document.createElement('li')
    const faculty = document.createElement('li')
    const whatsNew = document.createElement('li')
    const techTrends = document.createElement('li')
    const music = document.createElement('li')
    const logOut = document.createElement('li')
    const menuButton = document.querySelector('menu-button')
  
    students.textContent = "Students";
    faculty.textContent = "Faculty";
    whatsNew.textContent = "What's New";
    techTrends.textContent = "Tech Trends";
    music.textContent = "Music";
    logOut.textContent = "Log Out";
  
    menu.appendChild(menuTitle);
    menuTitle.appendChild(students);
    menuTitle.appendChild(faculty);
    menuTitle.appendChild(whatsNew);
    menuTitle.appendChild(techTrends);
    menuTitle.appendChild(music);
    menuTitle.appendChild(logOut);
  
    menu.classList.add('menu')
  
    menu.addEventListener('click', toggleHandler)
  
    function toggleHandler(){
      menuButton.classList.toggle('menu--open')
    }
  return menu
  }

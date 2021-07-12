// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

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
let menu = document.querySelector(".articles");//select the div.articles class
let button = document.querySelector('.menu-button');
menu.classList.add("menu") //add class menu to div parent menu
let unorderedList = document.createElement('ul');//create order list
let color = ["red", "wheat", "green", "blue", "yellow", "purple"]
function menuMaker(){
  let bodyText = document.createElement("h1");
  menuItems.forEach((item,i) => {
        let li = document.createElement('li');
        li.style.color= color[i];
        li.style.backgroundColor="black"
        li.textContent = item;
        unorderedList.appendChild(li);
        li.addEventListener("dblclick",()=>{
          let body = document.querySelector("body");
             body.style.backgroundColor= color[i];
             body.style.display="flex";
             body.style.flexDirection ="row";
             body.style.justifyContent="center";
             body.style.flexWrap="space in between"
             bodyText.style.backgroundColor=color[i];
             bodyText.style.display ="inline";
             bodyText.style.fontSize="124px";
            
             bodyText.textContent = `Hi 
              ${x}
              ${item} Coming Soon
               `;
            bodyText.classList.add("#myDiv")
             console.log(li.textContent)
             setTimeout(()=>{
                body.appendChild(bodyText)
                body.style.color= "white";
             },100)
            
        })
   
  });
 
  return unorderedList;
}
function logInName(){
  let xh1 = document.createElement("p")
  let x = prompt("Welcome to Lambda please Type you name ");
   xh1 =`${x}`;
return xh1;
}

menuMaker();
var x = logInName();
button.addEventListener('click', () => {
  menu.appendChild(unorderedList);
  menu.classList.toggle('menu--open'); 
  button.classList.toggle("close")
});

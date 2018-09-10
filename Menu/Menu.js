
function reader() {
  let menuOpen = true;
  let menuNbr = 0;
  let arr = ["Students", "Faculty", "What's New", "Tech Trends", "Music", "Log Out"]

  /*******ADDED A NEW CLASS TO MAKE ALL THE MENU *******/
  /*************   ITEMS ACTUAL LINKS  *****************/
  /****    AND I DIDN'T MODIFY THE ORIGINAL HTML   *****/
  class MenuItem {
    constructor(li) {
      this.element = li;
      let anchor = document.createElement('a');
      anchor.className = "link";
      anchor.innerHTML = arr[menuNbr];
      anchor.addEventListener("click", btnClick);
      anchor.href = "#";
      this.element.innerHTML = "";
      this.element.appendChild(anchor);
       menuNbr += 1;
    }
  }
  // Start Here: Create a reference to the ".menu" class
  let menu = document.querySelector(".menu");

  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector(".menu-button");

  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener("click", toggleMenu);

  function btnClick() {
    console.log("click");
  }

  function toggleMenu() {
    if (menuOpen === true) {
      menu.classList.remove("menu--close");
      menu.classList.add("menu--open");
      menuOpen = false;
    } else {
     console.log("should be closing the menu now")
      menu.classList.remove("menu--open");
      menu.classList.add("menu--close");
      menuOpen = true;
    }
  }

  let lis = document.querySelectorAll("li");
 
  lis = Array.from(lis).map(li => new MenuItem(li));
};

reader();

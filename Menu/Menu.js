
function reader() {
  let menuOpen = true;

  // Start Here: Create a reference to the ".menu" class
  let menu = document.querySelector(".menu");

  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector(".menu-button");

  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener("click", toggleMenu);

  let anchor = document.createElement('a');
  anchor.className = "link";
  anchor.innerHTML = "Students";

  anchor.addEventListener("click", btnClick);

  let li = document.querySelector("li");
  li.innerHTML = "";
  li.appendChild(anchor);

  function btnClick() {
    console.log("click");
  }

  function toggleMenu() {
    if (menuOpen === true) {
      menu.classList.add("menu--open");
      menuOpen = false;
    } else {
      menu.classList.remove("menu--open");
      menuOpen = true;
    }
  }
};

reader();

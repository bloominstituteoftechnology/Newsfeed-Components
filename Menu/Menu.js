const toggleMenu = e => {
  e.stopImmediatePropagation();

  if (menu.classList.contains("menu--is-open")) {
    TweenMax.to(menu, 1, { 
      x: -350, 
      ease: Power2.easeIn 
    });
  } else {
    TweenMax.to(menu, 1, { 
      x: 350, 
      ease: Power2.easeOut 
    });
  }

  menu.classList.toggle("menu--is-open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Menu slide-in/slide-out animation
// ---------------------------------

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", e => toggleMenu(e));

// Close menu if clicking outside of it
window.addEventListener("click", e => {
  if (menu.classList.contains("menu--is-open")) {
    TweenMax.to(menu, 1, { 
      x: -350, 
      ease: Power2.easeIn 
    });
    menu.classList.toggle("menu--is-open");
  }
});

// Related to code above - do not close the menu if clicking inside of it
menu.addEventListener("click", e => e.stopImmediatePropagation());

// Menu options hover animation
// ----------------------------

menuOptions = document.querySelectorAll(".menu > ul > li");
menuOptions.forEach(option => {
  option.addEventListener("mouseover", e => {
    option.style.fontWeight = "bold";
    option.style.textDecoration = "underline";
    option.style.cursor = "pointer";
  });
  option.addEventListener("mouseout", e => {
    option.style.fontWeight = "normal";
    option.style.textDecoration = "none";
  });
  option.addEventListener("mousedown", e => {
    option.style.fontWeight = "normal";
  })
  option.addEventListener("mouseup", e => {
    option.style.fontWeight = "bold";
  })
});
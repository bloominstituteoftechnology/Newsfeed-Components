
let open=false;
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  open=!open;
  if (open) {
    TweenLite.to(menu, 1, { width: '350px', display:"block", ease: Power4.easeOut} );
  } else {
    TweenLite.to(menu, 1, { width: '0px', display:"none", ease: Elastic.easeIn} );
  }

}

// Start Here: Create a reference to the ".menu" class
const menu=document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton=document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',toggleMenu);

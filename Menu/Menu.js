
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // menu.classList.toggle('menu--open');
  if(!menu.classList.contains('menu--open')){
    menu.classList.toggle('menu--open');
    TweenMax.from(menu,1,{left:-350});
  }
  else{
    TweenMax.to(menu,1,{left:-350,onComplete: ()=> {
      menu.classList.toggle('menu--open');
      menu.style.left = 0;
    }})
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',()=>{
  toggleMenu();
})

document.addEventListener('click',(event)=>{
  if(event.target != menu && event.target != menuButton && menu.classList.contains('menu--open')){
    TweenMax.to(menu,1,{left:-350,onComplete: ()=> {
      menu.classList.toggle('menu--open');
      menu.style.left = 0;
    }})
  }
})

const toggleMenu = () => {
  if(!menu.classList.contains('menu--open')) {
    menu.classList.toggle('menu--open');
    TweenMax.to(menu, 0, {x: -500});
    TweenMax.to(menu, .25, {x: 0});
  } else {
    TweenMax.to(menu, .25, {x: -500});
    TweenMax.to(menu, 0, {x: 0});
    //We setTimeout here to allow the animation of the menu going off screen before it's style is set to display: none
    setTimeout(() =>{
      menu.classList.toggle('menu--open');
    }, 250);
    
  }
}

const closeMenu = () => {
  if(menu.classList.contains('menu--open')) {
    TweenMax.to(menu, .25, {x: -500});
    TweenMax.to(menu, 0, {x: 0});
    //We setTimeout here to allow the animation of the menu going off screen before it's style is set to display: none
    setTimeout(() =>{
      menu.classList.remove('menu--open');
    }, 250);
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu()
});

//Close menu if you click off of it. We can do this by adding an event listener to the body for when you click, that closes the menu if it is open. We will also need to stopPropogation on any clicks on the menu.
const body = document.querySelector('html'); //We select html because the body is only as large as the content in this project.
body.addEventListener('click', (e) => {
  closeMenu();
});

//Make it so any click in the menu will not the html's click even to close it with stopPropagation()
menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

const articlePage = document.querySelector('.articles');
const postPage = document.querySelector('.post');

const viewArticlesBtn = document.querySelector('.view-articles');
const newArticleBtn = document.querySelector('.new-article');

viewArticlesBtn.addEventListener('click', (e) => {
  // articlePage.style.display = 'block';
  // postPage.style.display = 'none';
  pageTransition(articlePage);
  closeMenu();
});

newArticleBtn.addEventListener('click', (e) => {
  // postPage.style.display = 'block';
  // articlePage.style.display = 'none';
  pageTransition(postPage);
  closeMenu();
});

//Default page. We keep track of current page for animation effect.
let currentPage = articlePage;

function pageTransition(next) {
  let startPage = currentPage;
  currentPage = next;

  //Hide overflow during animation so screen doesn't jerk horizontally
  body.style.overflowY = 'hidden';
  //start animation of startPage leaving
  TweenMax.to(startPage, 0.2, {opacity: '0', y: -250});
  setTimeout(() => {
    startPage.style.display = 'none';
    TweenMax.to(startPage, 0.2, {opacity: '1', y: 0});

    //start animation of next page entering
    next.style.display = 'block';
    TweenMax.to(next, 0, {opacity: '0', y: 250});
    TweenMax.to(next, 0.2, {opacity: '1', y: 0});
  }, 200);
  setTimeout(() => {
    body.style.overflowY = 'auto';
  }, 400)

  
}
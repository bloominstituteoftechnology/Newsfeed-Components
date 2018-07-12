
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  console.log("menuButton clicked");
  leftMenu.classList.add('leftMenuOpen');

  //show menu when clicked
  menu.classList.toggle("menu--open");
  console.log(menu.classList)
  TweenMax.to(menu, 2, {ease: Power4.easeOut, width: 250, } );

  //hide menu when mouse leaves
  articles2.addEventListener('mouseover', (event) => {
    console.log("mouseover articles2")
    TweenMax.to(menu, .2, {width: 0})
  });
}

const toggleLeftMenu = () => {
  console.log("toggleLeftMenu function invoked")
  leftMenu.classList.add("leftMenuOpen")
}

const blurPage = () => {
  console.log(articles2.classList + " blurPage function invoked");
  articles2.classList.toggle("articlesWhileMenu");
  console.log("blurPage function executed");
}

const articleHover = () => {
  console.log(article2)
  leftMenu.classList.toggle("menu--open")
}

// A reference to the ".menu" class
const articles2 = document.querySelector(".articles");
const article2 = document.querySelector(".article")
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const leftMenu = document.querySelector(".leftMenu");


// Listeners

menuButton.addEventListener("click", toggleMenu);
menuButton.addEventListener("click", blurPage);
menuButton.addEventListener("click", toggleLeftMenu);
article2.addEventListener("mouseover", articleHover);
leftMenu.addEventListener("mouseover", toggleMenu)

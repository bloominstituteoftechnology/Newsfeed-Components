const toggleMenu = () => {
  menu.classList.toggle('menu--open');
};
//
// const slideInMenu = () => {
//   TweenLite.fromTo(
//     menu,
//     1,
//     {width: 0, height: '100%'},
//     {width: 350, height: '100%'},
//   );
// };
//
const slideOutMenuOnLinkClick = event => {
  TweenLite.fromTo(
    menu,
    1,
    {width: 350, height: '100%'},
    {width: 0, height: '100%'},
  );
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// console.log(menuButton);
// menuButton.addEventListener('click', toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu li');

menuButton.addEventListener('click', event => {
  if (menu.style.width < '350px') {
    TweenLite.fromTo(
      menu,
      1,
      {width: 0, height: '100%'},
      {width: 350, heigth: '100%'},
    );
  } else if (menu.style.width > '0px') {
    TweenLite.fromTo(
      menu,
      1,
      {width: 350, height: '100%'},
      {width: 0, heigth: '100%'},
    );
  }
});

body.addEventListener('click', () => {
  if (menu.style.width > '0px') {
    TweenLite.fromTo(
      menu,
      1,
      {width: 350, height: '100%'},
      {width: 0, heigth: '100%'},
    );
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    TweenLite.fromTo(
      menu,
      1,
      {width: 350, height: '100%'},
      {width: 0, heigth: '100%'},
    );
  });
});

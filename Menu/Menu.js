const Menu = (function(menu) {
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.menu-button');

  function registerEventHandlers() {
    // Using your menuButton reference, add a click handler that calls toggleMenu
    menuButton.addEventListener('click', event => toggleMenu());
  }

  function toggleMenu() {
    return menu.classList.toggle('menu--open');
  }

  function init() {
    registerEventHandlers();
  }
  return {
    init,
  };
  // Start Here: Create a reference to the ".menu" class
})(document.querySelector('.menu')).init();

const Menu = (function(menu) {
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.menu-button');

  const registerEventHandlers = function() {
    // Using your menuButton reference, add a click handler that calls toggleMenu
    menuButton.addEventListener('click', event => toggleMenu());
  }

  const toggleMenu = function() {
    return menu.classList.toggle('menu--open');
  }

  const init = function() {
    registerEventHandlers();
  }
  return {
    init,
  };
  // Start Here: Create a reference to the ".menu" class
})(document.querySelector('.menu')).init();

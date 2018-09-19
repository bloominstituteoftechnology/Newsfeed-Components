class Button {
	constructor() {
		/*-- DOM selectors -----------------------------*/
		this.menu = document.querySelector('.menu');
		this.menuButton = document.querySelector('.menu-button');
		/*-- event listeners ---------------------------*/
		this.menuButton.addEventListener('click', this.onClick.bind(this));
	}

	/*-- class functions ---------------------------*/
	toggleMenu() {
		this.menu.classList.toggle('menu--open');
	}

	onClick() {
		this.toggleMenu();
	}
}

const button = new Button();

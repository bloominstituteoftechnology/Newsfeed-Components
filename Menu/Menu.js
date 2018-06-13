const toggleMenu = () => {
  //  Toggle the "menu--open" class on your menu refence. 
	//if (menu.classList.contains("menu--open") === true) {
		menu.classList.toggle("menu--open");
//		TweenMax.fromTo('.menu', 1.5, {left:'0px'}, {left:'-350px'});
	//} else {
	//	menu.classList.toggle("menu--open");
		TweenMax.fromTo('.menu', 1.5, {left:'-350px'}, {left:'0px'});
//	}
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click",function(e){
	 toggleMenu();
});

var headerLambda = document.getElementById("lambdaHeader");
TweenLite.to(headerLambda, 3, {color:"black"});

//var headerColor = document.getElementsByClassName("header");
//TweenLite.to(headerColor, 2, {backgroundColor:"#b3d9ff"});


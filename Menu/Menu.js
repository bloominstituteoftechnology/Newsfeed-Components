
const toggleMenu = () => {
  t.reversed() ? t.play() : t.reverse();
}

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);
let t = TweenMax.to(".menu", 1, { x:350 })
t.reversed(true);
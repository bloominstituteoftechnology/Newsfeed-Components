let slide = function(){
  TweenMax.to(menu, .75, {
    scaleX: 1,
    transformOrigin: "0% 50%"
  })
}
let hide = function(){
  TweenMax.to(menu, .75, {
    scaleX: 0,
    transformOrigin: "0% 50%"
  })
}

let slid = true;

const toggleMenu = function(){
  if(slid === false){
    slide();
    slid = true;
  }
  else{
    hide();
    slid = false;
  }

};

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => toggleMenu());
console.log(slid);
toggleMenu();


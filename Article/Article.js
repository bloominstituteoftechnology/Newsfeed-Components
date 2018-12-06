// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
// let 
// let hide = function(){
//   TweenMax.to(menu, .75, {
//     scaleX: 0,
//     transformOrigin: "0% 50%"
//   })
// }

// let slid = true;

// const toggleMenu = function(){
//   if(slid === false){
//     slide();
//     slid = true;
//   }
//   else{
//     hide();
//     slid = false;
//   }

// };
class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'Click to Expand';
    this.expanded = false;
    this.expandButton.addEventListener('click', () => this.animateArticle());
  }

  animateArticle() {
    if(this.expanded === false){
      TweenMax.to(this.domElement, .75, {
        height: '400px',
        transformOrigin: "50% 0%"
      });
      this.expandButton.textContent = 'Click to Close';
      this.expanded = true;
    }
    else {
        TweenMax.to(this.domElement, .75, {
          height: '50px',
          transformOrigin: "50% 0%"
        });
        this.expandButton.textContent = 'Click to Expand';
        this.expanded = false;
    }

  }
}

let articles = document.querySelectorAll('.article');
articles.forEach(domElement => {
  return new Article(domElement);
});
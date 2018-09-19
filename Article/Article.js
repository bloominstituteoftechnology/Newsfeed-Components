// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    this.expandButton.addEventListener('click', item => this.expandArticle(item));
    // this.closeButton = domElement.querySelector('.article-close');
    // this.closeButton.addEventListener('click', item => this.closeButton())
  }
  expandArticle() {
      this.domElement.classList.toggle("article-open");
      TweenMax.fromTo(this.domElement, 3, 
        {height: 50},
        {height: 400}
        );
        this.expandButton.innerText = 'click to close';
      }
      closeButton() {
        this.domElement.classList.toggle("article-close")
         TweenMax.fromTo(this.domElement, 3, 
           {height: 400},
           {height: 50}
            )
        }
      }
    
  
    
  
  


// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article')
// console.log(articles);
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  return new Article(domElement);
});


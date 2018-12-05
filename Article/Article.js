// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
//Store all articles in array when they are instantiated
let articleObjects = [];
class Article {
  constructor(domElement) {
    articleObjects.push(this);
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.hideButton = this.domElement.querySelector('.hideButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.hideButton.addEventListener('click', () => this.hide());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if(!this.domElement.classList.contains('article-open')) {
      TweenMax.to(this.domElement, .20, {height: '400px'});
      this.expandButton.textContent = 'Click to Close';
      setTimeout(() => {
        this.domElement.classList.toggle('article-open');
      }, 200)
    } else {
      TweenMax.to(this.domElement, .20, {height: '50px'});
      this.expandButton.textContent = 'Click to Expand';
      setTimeout(() => {
        this.domElement.classList.toggle('article-open');
      }, 200)
    }
  }

  hide() {
    TweenMax.to(this.domElement, .5, {opacity: 0});
    //setTimeout to allow animation to finish before removing element from display.
    setTimeout(() => {
      this.domElement.style.display = 'none';
    }, 500);
    
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.articles .article');
articles.forEach(a => {
  return new Article(a);
});
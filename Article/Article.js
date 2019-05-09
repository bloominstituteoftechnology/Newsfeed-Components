// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement; // ".article"
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    // ES6 
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // ES5 
    // this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
  }
}

let articles = document
  .querySelectorAll('.article')
  .forEach( article => {
    new Article(article);
});
// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');  
    this.expandButton.textContent = 'expand';
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');

articles = Array.from(articles).map( article => new Article(article) )


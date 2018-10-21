// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;

    this.expandButton = domElement.getElementsByClassName("expandButton");

    for (let i = 0; i < this.expandButton.length; i++) {
      this.expandButton[i].textContent = 'expand';
      this.expandButton[i].addEventListener('click', this.expandArticle);
    }
  }
  expandArticle() {
    this.parentElement.classList.toggle('article-open');
    if (this.textContent === 'expand') {
      this.textContent = 'close';
    } else {this.textContent = 'expand';}
  }
}
let articles = document.querySelectorAll('.article');

articles = Array.from(articles).map(item => new Article(item));

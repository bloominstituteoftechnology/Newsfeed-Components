class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.domElement.classList.toggle('article-close');
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    this.domElement.classList.toggle('article-close');
  }
}

let articles = document.querySelectorAll('.article');

articles = Array.from(articles).map((domElement) => {
  return new Article(domElement);
});

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.domElement.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open')
  }
}

let articles = Array.from(document.querySelector('.articles').children);

articles.forEach(el => {
  return new Article(el);
})
class Article {
  constructor(article) {
    /*-- DOM selectors -----------------------------*/
    this.article = article;
    this.expandButton = this.article.querySelector('.expandButton');
    /*-- DOM manipulations -------------------------*/
    this.expandButton.innerText = 'expand';
    /*-- event listeners ---------------------------*/
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    this.article.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');
articles = Array.from(articles).map(article => new Article(article));


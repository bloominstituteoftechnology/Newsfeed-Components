class ArticleElement {
  constructor(article) {
    this.article = article;
    this.articleButtons = article.querySelector('.article-buttons');
    this.expandButton = article.querySelector('.expandButton');
    this.articleContent = article.querySelector('.article-content');
    
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    //this.expandButton.classList.toggle('close');
    this.article.classList.toggle('article-open');
    this.expandButton.innerText === 'expand' ? this.expandButton.innerText = 'collapse' : this.expandButton.innerText = 'expand';
  }
}

const articles = document.querySelectorAll('.article');
articles.forEach( article => new ArticleElement(article));


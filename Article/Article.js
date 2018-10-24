class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelectorAll(".expandButton");
    this.expandButton.forEach((button) => {
      button.textContent = 'expand';
      button.addEventListener('click', () => this.expandArticle())
    });
  }
  expandArticle() {
    this.domElement.classList.toggle('article-open');
    if (event.target.textContent === 'expand') {
      event.target.textContent = 'close';
    } else {event.target.textContent = 'expand';}
    }
}
let articles = document.querySelectorAll('.article');
articles = Array.from(articles).map(item => new Article(item));

window.addEventListener('click', () => {
  if ((event.target.classList.contains('expandButton') || event.target.classList.contains('article')) == false) {
    for (let i = 0; i<articles.length; i++) {
      if (articles[i].domElement.classList.contains('article-open')) {
        articles[i].domElement.classList.toggle('article-open');
        articles[i].expandButton.forEach((button) => button.textContent = 'expand');
      }
    }  
  }
})

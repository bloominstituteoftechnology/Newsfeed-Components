class Article {
  constructor(element) {
    /*-- DOM selectors -----------------------------*/
    this.element = element;
    this.expandButton = this.element.querySelector('.expandButton');
    /*-- DOM manipulations -------------------------*/
    this.expandButton.innerText = 'expand';
    /*-- event listeners ---------------------------*/
    this.expandButton.AddEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.

  }
}

let articles = document.querySelectorAll('.article');
articles = Array.from(articles).map(element => {
  return new Article(element);
});


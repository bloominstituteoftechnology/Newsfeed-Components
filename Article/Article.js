// Start at `let articles`

class Article {
  constructor(article) {
    this.article = article;
    this.expandButton = article.querySelector('.expandButton')
    this.expandButton.innerText = 'expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.closeButton = article.querySelector('.closeButton');
    this.closeButton.addEventListener('click', () => this.closeArticle());
    console.log(this.closeButton)

  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.article.classList.toggle('article-open')
    TweenMax.fromTo([this.article], 1.5, {
      height: 50
    }, {
      height: 400
    });
    this.expandButton.innerText = 'click to close';
  }
  closeArticle() {
    this.article.classList.toggle('article-close')

  }

}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});
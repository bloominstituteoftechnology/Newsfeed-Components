// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', e => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.article.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.articles .article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));


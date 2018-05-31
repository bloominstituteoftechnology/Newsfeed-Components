// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandText = 'Click to Expand';
    this.closeText = 'Click to Close';
    this.expandButton.textContent = this.expandText;
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    //this.expandButton.addEventListener('click', this.expandArticle);
    this.expandButton.addEventListener('click', function () {
      this.expandArticle();
    }.bind(this));

  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle('article-open');
    if (this.element.classList.contains('article-open')) {
      this.expandButton.textContent = this.closeText;
    } else {
      this.expandButton.textContent = this.expandText;
    }
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.getElementsByClassName('article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(element => element = new Article(element));
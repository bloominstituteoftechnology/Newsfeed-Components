// Start at `let articles`


class Article {
  constructor(element) {

    // assign this.element to the passed in element element
    this.element = element;

    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelectorAll('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // Set a click handler on the expandButton reference (or element element), calling the expandArticle method.
    for (let i = 0; i < this.expandButton.length; i++){
      this.expandButton[i].innerText = "expand";
      this.expandButton[i].addEventListener('click', this.expandArticle);
    }
  }

  expandArticle() {
    // Using our reference to the article article, add or remove a class to expand or hide the article.
    event.currentTarget.parentNode.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

// let buttons = document.querySelectorAll('.button');

// buttons = Array.from(buttons).map( button => new Button(button));


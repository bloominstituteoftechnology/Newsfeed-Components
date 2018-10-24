// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// create a reference to the ".expandButton" class. 
// Using your expandButton reference, update the text on your expandButton to say "expand"
// Set a click handler on the expandButton reference, calling the expandArticle method.
// Using our reference to the domElement, toggle a class to expand or hide the article.

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');  
    this.expandButton.textContent = 'expand';
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article(article) )


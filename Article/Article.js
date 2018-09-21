// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domArticle) {
    // assign this.domElement to the passed in domElement
    this.domElement = domArticle;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.domElement.addEventListener('click', (clickEvent) => this.expandArticle(clickEvent));
  }

  expandArticle(expandEvent) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.    sooooo should this be articles.classList.toggle??
    expandEvent.stopPropagation();
    this.domElement.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articlesContainer = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articlesContainer = Array.from(articlesContainer).map(containedArticle => {
  return new Article(containedArticle);
});



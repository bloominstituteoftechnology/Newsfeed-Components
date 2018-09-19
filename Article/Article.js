// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article{
  constructor(element) {
    // assign this.domElement to the passed in domElement
    this.domElement = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    expandButton.addEventHander
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.

  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.articles');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(element => {
  return new Article(element);
});



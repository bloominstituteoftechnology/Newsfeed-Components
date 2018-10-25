// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = "Expand";
    this.content = this.domElement.querySelector('p');
    
    this.expandButton.addEventListener('click', () => this.expandArticle(event));
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    this.expandButton.textContent = "Close This Window"

    console.log("the method is the problem")
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map( domElement => {
  return new Article(domElement)
});


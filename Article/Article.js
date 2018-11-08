// Because classes are not hoised you will need to start your code at
// the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    // console.log(domElement) shows all panels from the dom
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
        // was originally this.expandButton
    this.expandButton = this.domElement.querySelector('.article .expandButton');
    // this grabs the expandButton!
    console.log(this.expandButton)
    // Using your expandButton reference, update the text on your 
    //expandButton to say "expand"
    this.expandButton.textContent = 'expand';
  
    // Set a click handler on the expandButton reference, calling the 
    //expandArticle method.
    // this needs to pass two event handlers (event and a callback function)
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    }
 
// method
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand 
    //or hide the article.
      this.domElement.classList.toggle('article-open');
      console.log("article expanded")
      // console.log(this.expandButton.nextSibling)
  }
}

// START HERE: Select all classes named ".article" and assign that 
//value to the articles variable

// let articles;
let articles = document.querySelectorAll('.articles .article')
console.log(articles)


// Use .map() to iterate over the articles array and create a new 
//instance of Article by passing in each article as a parameter 
//to the constructor.

//articles = Array.from(articles);

articles = Array.from(articles).map( article => {
  return new Article(article);
});

console.log("articles", articles)

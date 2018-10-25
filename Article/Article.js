// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) { //pass in reference to DOM object
    // assign this.domElement to the passed in domElement
    this.domElement = domElement; //=====We're using this. to make a new object====
    // create a reference to the ".expandButton" class. 
    
    this.expandButton = this.domElement.querySelector('.expandButton'); //====Here we're selecting just the expand button class in our article container and housing it in the this.expandButton variable
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    this.expandButton.style.color = '#a0001e'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
   this.domElement.classList.toggle('article-open')// Using our reference to the domElement, toggle a class to expand or hide the article.
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article); //creates new articles. This allows us to build the Article class and do things to it
});



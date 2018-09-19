// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle);
    
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    event.target.parentNode.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement =>{
  return new Article(domElement);
});


// TweenMax.to(".tweet", 2, {rotation:1440, scale:1.0});

TweenMax.from(".tweet", 1, {opacity: 0, scale:.2, y:-200}); 
TweenMax.to(".tweet", 2.5, { ease: Bounce.easeOut, y:3});
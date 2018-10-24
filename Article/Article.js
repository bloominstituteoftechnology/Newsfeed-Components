// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.isOpen = false;
    this.expandButton.addEventListener('click', () => this.expandArticle(event));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if(this.isOpen === false){
      this.domElement.classList.toggle('article-open');
      this.isOpen = true;
      TweenMax.fromTo(".article-open", 1, { height: 50}, {height: 400} );
    }else if(this.isOpen === true){
      this.isOpen = false;
      TweenMax.fromTo(".article-open", 1, { height: 400}, {height: 50} );
      this.domElement.classList.toggle('article-open');
    }
  }
  
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map( article => {
  return new Article(article);
});


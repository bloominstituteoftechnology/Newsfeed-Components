// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand'
    
    this.closeButton = document.createElement('h4');
    this.closeButton.innerText = '✖️';
    this.domElement.prepend(this.closeButton);
    this.closeButton.style.position = 'absolute';
    this.closeButton.style.right = '20px';
    this.closeButton.style.cursor= 'pointer';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())
    this.closeButton.addEventListener('click', () => this.closeArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains('has-img')){
      articleIMG.classList.toggle('img-display-none');
    }
    if (this.expandButton.innerText === 'expand'){
      this.expandButton.innerText = 'collapse';
    }
    else {
      this.expandButton.innerText = 'expand'
    }
  }
  closeArticle() {
    this.domElement.style.display = 'none';
  }
  
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(x => new Article(x));

let articleIMG = document.querySelector('.img-display-none') 

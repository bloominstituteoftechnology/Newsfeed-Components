// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    this.closeButton = domElement.querySelector('.close-button');
    this.closeButton.addEventListener('mouseover', this.hoverEffect.bind(this));
    this.closeButton.addEventListener('mouseleave', this.hoverEffect.bind(this));
    this.closeButton.addEventListener('click', this.closeArticle.bind(this));
  }

  expandArticle(e) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.textContent = this.expandButton.textContent === 'Click to Expand' ? 'Click to Close' : 'Click to Expand';

    if (this.domElement.classList.contains('article-open')) {
      TweenLite.to(this.domElement, .8, {height:'400px', ease:Power1.easeOut});
    } else {
      TweenLite.to(this.domElement, .8, {height:'50px', ease:Power1.easeOut});
    }
  }

  closeArticle(e) {
    TweenLite.to(this.domElement, .8, {x:'100%', ease:Power1.easeOut});
    TweenLite.to(this.domElement, .01, {display:'none', delay: .8})
    //this.domElement.classList.add('article-close');
  }

  hoverEffect(e) {
    this.closeButton.classList.toggle('hover-button');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles);
articles.map(a => new Article(a));
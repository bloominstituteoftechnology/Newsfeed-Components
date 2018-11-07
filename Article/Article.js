// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElementArticle) {
    // assign this.domElement to the passed in domElement
    this.domElementArticle = domElementArticle;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElementArticle.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click',this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElementArticle.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.articles .article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(function(article) {
  return new Article(article);
});

const articleContainer = document.querySelector('.articles');
articleContainer.addEventListener('click', function() {
  TweenMax.set('.menu', {x: -350});
})


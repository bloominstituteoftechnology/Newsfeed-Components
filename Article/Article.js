// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
class Article {
  constructor(domElement) {
    //console.log(domElement);
    // assign this.domElement to the passed in domElement
    this.article = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButtonOpenText = "[expand]";
    this.expandButtonCloseText = "[close]";
    this.expandButton.textContent = this.expandButtonOpenText;
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandAndCollapseArticle.bind(this));
  }
  expandAndCollapseArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log(this.article.classList);
    this.article.classList.toggle('article-open');
    if(this.article.classList.contains('article-open')){ // article is expanded
      this.expandButton.textContent = this.expandButtonCloseText;
    } else { // article is closed
      this.expandButton.textContent = this.expandButtonOpenText;
    }
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map( article => {
  return new Article(article);
});
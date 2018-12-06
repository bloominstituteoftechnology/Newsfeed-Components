// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelectorAll('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.forEach((item) => item.textContent = 'Click to Expand');
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.forEach((item) => item.addEventListener('click', () => this.expandArticle()));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains('article-open')) {
      TweenMax.to(this.domElement, 1, {height: 400});
      this.expandButton[0].textContent = 'Click to Close';
    } else {
      TweenMax.to(this.domElement, 1, {height: 50});
      this.expandButton[0].textContent = 'Click to Expand';
    };
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article').forEach(article => new Article(article));
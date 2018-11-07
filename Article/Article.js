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
    this.expandButton.addEventListener('click', () => this.expandArticle());

    this.closeButton = this.domElement.querySelector('.close');
    this.closeButton.textContent = 'close';

    this.toggle = 1;

    this.closeButton.addEventListener('click', () => {
      this.domElement.classList.toggle('article-deleted');
    })
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    let buttonText = ['Click to Expand', '', 'Click to Close'];
    this.expandButton.textContent = buttonText[this.toggle + 1];
    this.toggle *= -1;
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
console.log(articles)
articles.forEach(function(article) {
  return new Article(article);
})
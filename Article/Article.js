// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // Create new button and give it text and a class
    this.readButton = document.createElement('span');
    this.readButton.textContent = '[x]';
    this.readButton.className = 'readButton';

    // Append new button to domElement
    this.domElement.appendChild(this.readButton);

    // Add event listener to button and use removeArticle() in the call back
    this.readButton.addEventListener('click', () => this.removeArticle());

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    this.isExpanded = false;
    this.expandButton.textContent = 'Click to Expand';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    // this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.expandButton.addEventListener('click', () => this.toggleArticle());

  }

  toggleArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if(!this.isExpanded){
      this.domElement.classList.add('article-open');
      this.expandButton.textContent = 'Click to Close';
      this.isExpanded = true;
    } else {
      this.domElement.classList.remove('article-open');
      this.expandButton.textContent = 'Click to Expand';
      this.isExpanded = false;
    }
  }
  removeArticle() {
    articleDiv.removeChild(this.domElement);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const articleDiv = document.querySelector('.articles');
const articles = document.querySelectorAll('.article');

articles.forEach(article => {
  return new Article(article);
});
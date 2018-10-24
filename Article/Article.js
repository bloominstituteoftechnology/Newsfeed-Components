// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {

    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    this.temp = 'Click to Close';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => { this.expandArticle() });

    this.current = 'open';
    this.moveaway = 'article-close';

    this.deleteButton = domElement.querySelector('.close');
    this.deleteButton.addEventListener('click', this.deleteArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log(this.domElement)
    if (this.current === 'open') {
      this.domElement.classList.remove('article-close');
      this.current = 'closed'
      this.expandButton.textContent = 'Click to Close';
    } else if (this.current === 'closed') {
      this.domElement.classList.add('article-close');
      this.current = 'open';
      this.expandButton.textContent = 'Click to Open';
    }

    this.domElement.classList.toggle('article-open');

  }

  deleteArticle() {
    console.log('here')
    setTimeout(() => this.domElement.parentNode.removeChild(this.domElement), 300);

  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
const articles = Array.from(document.querySelectorAll('.article'))
  .map(article => {
    return new Article(article);
  });

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
//articles = Array.from(articles);


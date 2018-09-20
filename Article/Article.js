// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle(event));

    this.closeButton = this.domElement.querySelector('.close');
    this.closeButton.addEventListener('click', () => this.closeArticle());

    this.articleButton = document.querySelector('#show-articles');
    this.articleButton.addEventListener('click', () => this.showArticles());
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    event.stopPropagation();
    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains('article-open')) {
      this.expandButton.innerText = 'close';
    } else {
      this.expandButton.innerText = 'expand';
    }
  }

  closeArticle() {
    this.domElement.style.display = 'none';
  }

  showArticles() {
    this.domElement.style.display = 'block';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  return new Article(domElement);
});

// Constructor
let formContainer = document.createElement('div');
let articleContainer = document.querySelector('.articles');
formContainer.className = 'form-group';
console.log(formContainer);
document.body.appendChild(formContainer);
document.body.insertBefore(formContainer, articleContainer);

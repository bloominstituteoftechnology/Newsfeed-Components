// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.

    this.deleteButton = domElement.querySelector('.close');

    this.expandButton.addEventListener('click', this.toggleArticle.bind(this));
    this.deleteButton.addEventListener('click', this.deleteArticle.bind(this));
    this.articleState = false;

  }

  toggleArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.

    if (this.articleState) {

      TweenMax.to(this.domElement, 1, {className: "-=article-open"});
      this.expandButton.textContent = "Click to Expand";

    }

    else {

      TweenMax.to(this.domElement, 1, {className: "+=article-open"});
      this.expandButton.textContent = "Click to Close";

    }

    this.articleState = !this.articleState;

  }

  deleteArticle() {

    TweenMax.to(this.domElement, 1, {css:{scale: 0}});
    setTimeout(() => this.domElement.parentNode.removeChild(this.domElement), 1000);

  }

}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

// Article Builder

function buildArticle(title, date, content) {

  // Create elements

  let newArticle = document.createElement('div');
  let h2 = document.createElement('h2');
  let dateTag = document.createElement('p');
  let contentTag = document.createElement('p');
  let expand = document.createElement('span');
  let close = document.createElement('span');

  // Add element classes

  newArticle.classList.add('article');
  dateTag.classList.add('date');
  expand.classList.add('expandButton');
  close.classList.add('close');

  // Populate elements

  h2.textContent = title;
  dateTag.textContent = date;
  contentTag.textContent = content;
  close.textContent = "Read";

  // Nest everything correctly

  newArticle.appendChild(h2);
  newArticle.appendChild(dateTag);
  newArticle.appendChild(contentTag);
  newArticle.appendChild(expand);
  newArticle.appendChild(close);

  return new Article(newArticle);

}

// Add a new article without touching html

document.querySelector('.articles').appendChild(buildArticle('Dynamically Created Articles Are Now A Thing!', 'Today', 'This is unbelievable. I was made in JavaScript!').domElement);

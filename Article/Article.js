// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to Close'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', e => this.expandArticle(e))
  }

  expandArticle(e) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    e.stopPropagation();
    this.domElement.classList.toggle('article-open')

    this.domElement.classList.contains('article-open')
      ? this.expandButton.innerText = 'Click to Close'
        : this.expandButton.innerText = 'Click to Expand'
  }
}

class CloseButton {
  constructor(domElement) {
    this.domElement = domElement;
    this.domElement.addEventListener('click', e => this.closeArticle(e));
  } 

  closeArticle(e) {
    e.stopPropagation();
    this.domElement.parentNode.classList.add('hide-article')
  }
}


// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(de => new Article(de));

let closeBtn = document.querySelectorAll('.close-btn');
closeBtn = Array.from(closeBtn).map(de => new CloseButton(de));


let addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', e => {
  e.currentTarget.parentNode.classList.toggle('show-form');
  if(e.currentTarget.classList.contains('fa-plus')) {
    e.currentTarget.className = 'fas fa-minus add-btn';
  } else {
    e.currentTarget.className = 'fas fa-plus add-btn';
  }
})

let submitButton = document.querySelector('form > button');

submitButton.addEventListener('click', e => {
  e.preventDefault();
})
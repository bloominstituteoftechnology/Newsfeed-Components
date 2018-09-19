// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // created reference to close button
    this.closeButton = this.domElement.querySelector('.btn');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      this.expandArticle();
    });
    // I set a click handler to close button reference
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
  
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }

  close() {
    this.domElement.style.display = 'none';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  new Article(domElement);
});


// STRETCH


let createArticle = (h2Text, date, paragraph) => {
  let articlesContainer = document.querySelector('.articles');
  let div = document.createElement('div');
  let h2 = document.createElement('h2');
  let pDate = document.createElement('p');
  let p = document.createElement('p');
  let span = document.createElement('span');
  let button = document.createElement('button');
  h2.innerText = h2Text;
  pDate.innerText = date;
  p.innerText = paragraph;
  button.innerText = 'Close';
  span.innerText = 'expand';
  div.classList.add('article');
  div.classList.add('newArticle');
  span.classList.add('expandButton');
  button.classList.add('btn');
  articlesContainer.appendChild(div);
  div.appendChild(h2);
  div.appendChild(pDate);
  div.appendChild(p);
  div.appendChild(span);
  div.appendChild(button);
}

// fixed it


// Not sure how to approach this to make it take input from a form to create new custom articles


let newArticles = document.querySelectorAll('.newArticle');

newArticles = Array.from(newArticles).map(domElement => {
  new Article(domElement);
});

const newContentButton = document.querySelectorAll('.contentButton');

newContentButton[0].addEventListener('click', () => {
  createArticle('testing1', 'Sep 19th, 2018', 'Paragraph1.');
});

newContentButton[1].addEventListener('click', () => {
  createArticle('testing2', 'Sep 19th, 2018', 'Paragraph2.');
});


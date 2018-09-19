// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    //



    this.h = domElement.h;
    this.date = domElement.date;
    this.par = domElement.par;




    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.exitButton = this.domElement.querySelector('.exitButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => { this.expandArticle(event)});
    this.exitButton.addEventListener('click', () => {this.closeArticle(event)});
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    
  }

  closeArticle() {
    this.domElement.style.display = 'none';
  }

  createArticle() {
    const newDiv = document.createElement("div"); 
    const header = document.createElement("h3").innerText = this.header;
    const newDate = document.createElement("p").innerText = this.date;
    this.par.forEach(function(curr, i) {
      document.createElement('p').setAttribute('class', 'paragraphs').innerText = this.par[i];
    });
    newDiv.setAttribute('class', 'article');
    newDiv.appendChild(header);
    newDiv.appendChild(newDate);
  }
};

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  return new Article(domElement);
});

const apples = new Article({
  h: 'Hello',
  date: 'August 9, 2017',
  par: ['HELLO', 'HELLO', 'HELLO']
});

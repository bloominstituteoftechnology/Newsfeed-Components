// Start at `let articles`

let articleTog = 0;

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector('.expandButton');
    this.readButton = this.element.querySelector('.readButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    if (this.expandButton) {
      this.expandButton.innerText = 'Click to Expand';
    }

    if (this.readButton) {
      this.readButton.innerText = 'Mark As Read';
    }
    
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.readButton.addEventListener('click', this.removeArticle.bind(this));
    
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.

    // this.element.classList.toggle('article-open');

    if (articleTog === 0) {
      TweenMax.to(this.element, 0.6, {height: 400 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Close';
      articleTog ++;
    }
    else if (articleTog === 1) {
      TweenMax.to(this.element, 0.6, {height: 50 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Expand';
      articleTog--;
    }

  }

  removeArticle() {
    this.element.parentNode.removeChild(this.element);
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article(article));

const submitBtn = document.querySelector('.submit');
// const articleText = document.querySelector('.article-text').value;
// const articleTitle = document.querySelector('.article-title').value;

const articleText = document.getElementById('article-text').value;
const articleTitle = document.getElementById('article-title').value;

submitBtn.addEventListener('click', postArticle);

class NewArticle {
  constructor(params) {
    this.element = params;
    this.title = params.title;
    this.body = params.body;
    this.date = params.date;

    this.expandButton = this.element.querySelector('.expandButton');
    this.readButton = this.element.querySelector('.readButton');

    if (this.expandButton) {
      this.expandButton.innerText = 'Click to Expand';
    }
  
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.

    // this.element.classList.toggle('article-open');

    if (articleTog === 0) {
      TweenMax.to(this.element, 0.6, {height: 400 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Close';
      articleTog ++;
    }
    else if (articleTog === 1) {
      TweenMax.to(this.element, 0.6, {height: 50 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Expand';
      articleTog--;
    }

  }

  removeArticle() {
    this.element.parentNode.removeChild(this.element);
  }
}

function postArticle() {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  let today = new Date();
  let dd = today.getDate();
  let yyyy = today.getFullYear();

  if (dd< 10) {
    dd='0'+dd;
  }
  today = `${monthNames[today.getMonth() +1]} ${dd}, ${yyyy}`;

  let div = document.createElement('div');
  let h2 = document.createElement('h2');
  let pD = document.createElement('p');
  let p = document.createElement('p');
  let rB = document.createElement('button');
  let exB = document.createElement('span');

  div.classList.add('article');
  h2.innerText = articleTitle;
  pD.innerText = today;
  p.innerText = articleText;
  rB.innerText = "Mark As Read";
  exB.innerText = "Click to Expand";

  pD.classList.add('date');
  rB.classList.add('readButton');
  exB.classList.add('expandButton');

  exB.addEventListener('click', expandNewArticle);
  rB.addEventListener('click', removeNewArticle);

  function expandNewArticle() {
    if (articleTog === 0) {
      TweenMax.to(div, 0.6, {height: 400 + 'px', ease: Power2.easeIn});
      exB.innerText = 'Click to Close';
      articleTog ++;
    }
    else if (articleTog === 1) {
      TweenMax.to(div, 0.6, {height: 50 + 'px', ease: Power2.easeIn});
      exB.innerText = 'Click to Expand';
      articleTog--;
    }
  }

  function removeNewArticle() {
    document.querySelector('.articles').removeChild(div);
  }

  div.appendChild(h2);
  div.appendChild(pD);
  div.appendChild(p);
  div.appendChild(rB);
  div.appendChild(exB);

  document.querySelector('.articles').appendChild(div);

}

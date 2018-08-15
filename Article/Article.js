// Start at `let articles`

let articleTog = 0;
let cArtTog = 0;

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

const createArticleBtn = document.querySelector('.add-new-article');
const articleCreation = document.querySelector('.article-creation');
createArticleBtn.addEventListener('click', showArticleCreation);

// Create article
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', postArticle);

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', showArticleCreation);

function showArticleCreation() {
  // articleCreation.classList.toggle('hide');

  if (cArtTog === 0) {
    TweenMax.to(articleCreation, 0.6, {opacity: 1, ease: Power2.easeIn});
    cArtTog ++;
  }
  else if (cArtTog === 1) {
    TweenMax.to(articleCreation, 0.6, {opacity: 0, ease: Power2.easeIn});
    cArtTog--;
  }
}

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

    // Animation to expand
    if (articleTog === 0) {
      TweenMax.to(this.element, 0.2, {height: 400 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Close';
      articleTog ++;
    }
    // Animation to close
    else if (articleTog === 1) {
      TweenMax.to(this.element, 0.2, {height: 50 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Expand';
      articleTog--;
    }

  }

  removeArticle() {
    this.element.parentNode.removeChild(this.element);
  }
}

// Post the new article
function postArticle() {
  const articleText = document.getElementById('article-text').value;
  const articleTitle = document.getElementById('article-title').value;

  // Months
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
// get the dates
  let today = new Date();
  let dd = today.getDate();
  let yyyy = today.getFullYear();

  if (dd< 10) {
    dd='0'+dd;
  }

  today = `${monthNames[today.getMonth() +1]} ${dd}, ${yyyy}`;

  // Create the elements needed for the article
  let div = document.createElement('div');
  let h2 = document.createElement('h2');
  let pD = document.createElement('p');
  let p = document.createElement('p');
  let rB = document.createElement('button');
  let exB = document.createElement('span');

  // Set element values
  h2.innerText = articleTitle;
  pD.innerText = today;
  p.innerText = articleText;
  rB.innerText = "Mark As Read";
  exB.innerText = "Click to Expand";

  // Add the needed classes to the elements
  div.classList.add('article');
  pD.classList.add('date');
  rB.classList.add('readButton');
  exB.classList.add('expandButton');

  // Add events to the two buttons
  exB.addEventListener('click', expandNewArticle);
  rB.addEventListener('click', removeNewArticle);

  // Expands/Contracts th article
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

  // Removes the article
  function removeNewArticle() {
    document.querySelector('.articles').removeChild(div);
  }

  // Append elements to the main element
  div.appendChild(h2);
  div.appendChild(pD);
  div.appendChild(p);
  div.appendChild(rB);
  div.appendChild(exB);

  // Append main element to articles
  document.querySelector('.articles').appendChild(div);
  showArticleCreation();

}

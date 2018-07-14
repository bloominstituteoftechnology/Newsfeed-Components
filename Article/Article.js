// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandBtn = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandBtn.innerText = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandBtn.addEventListener('click', e => this.expandArticle());

    this.closeBtn = this.article.querySelector('.closeButton');
    this.closeBtn.innerText = 'close';
    this.closeBtn.addEventListener('click', e => this.closeArticle());
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    if (this.article.classList.toggle('article-open')) {
      this.article.style.transition = 'height 1s ease-out';
      this.expandBtn.innerText = 'Click to collapse';
    }
    else {
      this.article.style.transition = 'height .75s ease-in';
      this.expandBtn.innerText = 'Click to expand';
    }
  }

  closeArticle() {
    this.article.style.display = 'none';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.articles .article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));


const ArticleConstructor = function(head, dateIn, text) {
  let article = document.createElement('div');
  let title = document.createElement('h2');
  let date = document.createElement('p');
  let closeBtn = document.createElement('span');
  let expandBtn = document.createElement('span');
  let content = document.createElement('p');

  article.classList.add('article');
  date.classList.add('date');
  closeBtn.classList.add('closeButton');
  expandBtn.classList.add('expandButton');

  document.querySelector('.articles').appendChild(article);
  article.appendChild(title);
  article.appendChild(closeBtn);
  article.appendChild(date);
  article.appendChild(content);
  article.appendChild(expandBtn);

  title.innerText = head;
  date.innerText = dateIn;
  content.innerText = text;

  new Article(article);
}

let submit = document.querySelector('.addForm .submit');

submit.addEventListener('click', e => {
  const title = document.querySelector('#title-input').value;
  const date = document.querySelector('#date-input').value;
  const content = document.querySelector('#content-input').value;

  e.preventDefault();

  new ArticleConstructor(title, date, content);
})
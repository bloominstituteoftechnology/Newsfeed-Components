// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class.
    this.expandButton = element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    /* prettier-ignore */
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    // Mark Read
    this.readButton = element.querySelector('.readButton');
    this.readButton.innerHTML = 'Mark Read';
    this.readButton.addEventListener('click', this.markRead.bind(this));
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle('article-open');
  }
  markRead() {
    this.element.style = 'display: none;';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

function createArticle(articleObj) {
  let newDiv = document.createElement('div');
  newDiv.className = 'article';

  let h2 = document.createElement('h2');
  h2.innerHTML = articleObj.title;
  newDiv.appendChild(h2);

  let newDate = document.createElement('p');
  newDate.className = 'date';
  newDate.innerHTML = articleObj.date;
  newDiv.appendChild(newDate);

  let content = document.createElement('p');
  content.innerHTML = articleObj.content;
  newDiv.appendChild(content);

  let expand = document.createElement('span');
  expand.className = 'expandButton';
  newDiv.appendChild(expand);

  let read = document.createElement('span');
  read.className = 'readButton';
  newDiv.appendChild(read);

  return newDiv;
}

function addArticle(title, content) {
  let articleObj = {
    title,
    date: formatDate(new Date()),
    content,
  };

  let articleDiv = document.querySelector('.articles');
  articleDiv.prepend(createArticle(articleObj));

  let articles = document.querySelectorAll('.article');
  articles = Array.from(articles).map(article => new Article(article));
}

function formatDate(date) {
  /* prettier-ignore */
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  let dateStr = `${monthNames[monthIndex]} ${day}`;
  if (day == 1) {
    dateStr += 'st, ';
  } else if (day == 2) {
    dateStr += 'nd, ';
  } else if (day == 3) {
    dateStr += 'rd, ';
  } else {
    dateStr += 'th, ';
  }
  dateStr += year;

  return dateStr;
}

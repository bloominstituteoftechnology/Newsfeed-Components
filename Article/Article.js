// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.expandButton.innerText = 'expand';
    TweenMax.to(this.element, .25, { height: 50 });
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

const addArticle = function (title, date, content) {
    const newArticle = document.createElement('div');
    const titleH2 = document.createElement('h2');
    const dateP = document.createElement('p');
    const paragraph = document.createElement('p');
    const expandSpan = document.createElement('span');
    const deleteSpan = document.createElement('span');

    dateP.classList.add('date')
    expandSpan.classList.add('expandButton')
    newArticle.classList.add('article');

    articles[0].parentElement.prepend(newArticle);

    newArticle.prepend(deleteSpan);
    newArticle.prepend(expandSpan);
    newArticle.prepend(paragraph);
    newArticle.prepend(dateP);
    newArticle.prepend(titleH2);

    titleH2.innerText = title;
    dateP.innerText = date;
    paragraph.innerText = content;
    deleteSpan.innerText = 'Read';

    return new Article(newArticle);
}
addArticle('my article: "created"', 'Sep 5, 2018', 'very small article.');


// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));


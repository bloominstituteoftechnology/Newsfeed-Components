import moment from 'moment';

// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    this.domElement.style.height = '50px';
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    const removeArticle = () => {
      this.domElement.classList.remove('article-open');
      this.expandButton.textContent = 'Click to Expand';
    };
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.domElement.classList.contains('article-open')) {
      TweenMax.to(this.domElement, 1, {
        height: 50,
        onComplete: removeArticle,
        ease: Power2.easeIn
      });
    } else {
      this.domElement.classList.add('article-open');
      TweenMax.to(this.domElement, 1.5, {
        height: 400, 
        onComplete: () => this.expandButton.textContent = 'Click to Minimize', 
        ease: Power2.easeOut
      });
    }
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');
articles.forEach(article => {
  const closeBtn = document.createElement('span');
  closeBtn.appendChild(document.createTextNode('Click to Close'));
  Object.assign(closeBtn.style, {
    position: 'absolute',
    right: '10px',
    top: '5px',
    fontSize: '12px',
    color: 'grey',
    cursor: 'pointer'
  });
  closeBtn.addEventListener('click', () => article.style.display = 'none');
  article.appendChild(closeBtn);
});

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

// Article builder stretch
const makeArticle = (heading, paragraphs) => {
  const article = document.createElement('div');
  article.classList.add('article');

  const h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode(heading));
  article.appendChild(h2);

  const date = document.createElement('p');
  date.classList.add('date');
  date.appendChild(document.createTextNode(moment().format('MMM Do[,] YYYY')));
  article.appendChild(date);

  for (const pText of paragraphs) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(pText));
    article.appendChild(p);
  }

  const expandBtn = document.createElement('span');
  expandBtn.classList.add('expandButton');
  article.appendChild(expandBtn);

  document.querySelector('.articles').appendChild(article);
};

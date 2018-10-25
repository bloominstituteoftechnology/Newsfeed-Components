const moment = require('moment');

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

const appendCloseBtn = (article) => {
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
};

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');
articles.forEach(appendCloseBtn);

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

// Article builder stretch
const makeArticle = (heading, paragraphs) => {
  let article = document.createElement('div');
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
  appendCloseBtn(article);
  
  document.querySelector('.articles').appendChild(article);
  article = new Article(article);
};

const getArrOf = (tag, n = 1, texts = [], styles = {}) => {
  const nodes = [];
  for (let i = 0; i < n; i++) {
    const node = document.createElement(tag);
    Object.assign(node.style, styles);
    if (texts[i]) {
      node.appendChild(document.createTextNode(texts[i]))
    }
    nodes.push(node);
  }
  return nodes;
};

// Form for building articles
{
  const form = document.createElement('form');
  Object.assign(form.style, {
    margin: '0 auto',
    textAlign: 'center',
    width: '500px',
    position: 'relative',
    border: '1px solid lightgray',
    borderRadius: '5px',
    paddingBottom: '20px',
    background: 'white'
  });

  const title = document.createElement('h3');
  title.appendChild(document.createTextNode('Make your own article!'));

  const [ headingDiv, paragraphDiv ] = getArrOf('div', 2);

  const [ headingLabel, paragraphLabel ] = getArrOf(
    'label',
    2,
    [ 'Heading', 'Paragraphs' ],
    { fontSize: '20px' }
  );
  headingLabel.style.marginRight = '47px';
  Object.assign(paragraphLabel.style, {
    marginRight: '20px',
    verticalAlign: 'middle',
    height: '50px',
    marginBottom: '50px',
    display: 'inline-block'
  });

  const heading = document.createElement('input');
  Object.assign(heading.style, {
    width: '220px',
    background: 'whitesmoke',
    border: '1px solid black'
  });
  const paragraph = document.createElement('textarea');
  Object.assign(paragraph.style, {
    width: '220px',
    height: '100px',
    background: 'whitesmoke',
    border: '1px solid black'
  });

  const submitBtn = document.createElement('button');
  Object.assign(submitBtn.style, {
    position: 'absolute',
    bottom: '30px',
    left: '55%',
    cursor: 'pointer'
  });
  submitBtn.appendChild(document.createTextNode('Submit'));

  form.appendChild(title);

  headingDiv.appendChild(headingLabel);
  headingDiv.appendChild(heading);
  form.appendChild(headingDiv);

  paragraphDiv.appendChild(paragraphLabel);
  paragraphDiv.appendChild(paragraph);
  form.appendChild(paragraphDiv);

  form.appendChild(submitBtn);

  form.addEventListener('submit', e => {
    e.preventDefault();
    makeArticle(heading.value, paragraph.value.split('\n'));
    form.reset();
  });

  document.querySelector('body').appendChild(form);
}

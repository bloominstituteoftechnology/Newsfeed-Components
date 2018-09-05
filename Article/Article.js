// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class.
    this.expandButton = element.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to Expand';

    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      this.expandButton.innerText === 'Click to Expand' ? this.expandButton.innerText = 'Click to Close' : this.expandButton.innerText = 'Click to Expand';


      this.expandArticle(element);
      });

      // add close buttons and event listeners
      this.close = element.querySelector('.close');
      this.close.addEventListener('mouseenter', () => {
        this.close.style.color = 'red';
      });
      this.close.addEventListener('mouseleave', () => {
        this.close.style.color = 'black';
      });
      this.close.addEventListener('click', () => {
        this.closeArticle();
      });
  }
  closeArticle() {
    this.close.parentElement.style.display = 'none';
  }

  expandArticle(element) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.

    return element.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map((article) => {

  // append an element to delete the article once read
  let a = document.createElement('a');
  let aTxt = document.createTextNode('X');
  a.appendChild(aTxt);
  a.setAttribute('class', 'close');
  article.prepend(a);



  return new Article(article);

});

// create a function that makes a tag class name
let articleArr = {};
let contentArr = [
  '',
  'X',
  'Mastering the Back End',
  'Sept 8th, 2018',
  'Click to Expand',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
];

const creElement = (el, cla, obj) => {
  this.el = el;
  this.cla = cla;
  this.obj = obj;

  // create the element with an object to insert it in.
  let element = document.createElement(this.el);
  // add the given id

  element.setAttribute('class', this.cla);

  return this.obj[this.el] = this.cla;
}

creElement('div', 'article', articleArr);
creElement('a', 'close', articleArr);
creElement('h2', '', articleArr);
creElement('p', 'date', articleArr);
creElement('span', 'expandButton', articleArr);
// BUG: Cannot find out why I cannot output more than one p tag.
creElement('article', '', articleArr);
// create a function that accepts an object and creates an article with it
const createArticle = (obj, contentArr) => {

  // create a keys and values array
  let keyArr = Object.keys(obj);
  let valueArr = Object.values(obj);
  // add javascript varibale for articles div
  let articles = document.querySelector('.articles');
  let container = document.createElement(keyArr[0]);
  container.setAttribute('class', valueArr[0]);
  articles.appendChild(container);

  // add the rest of the array as children
  keyArr.forEach( (singleKey) => {
    let element = document.createElement(singleKey);
      if (keyArr.indexOf(singleKey) > 0) {
      element.setAttribute('class', valueArr[keyArr.indexOf(singleKey)]);
      element.innerHTML = contentArr[keyArr.indexOf(singleKey)];
      container.appendChild(element);
    }
    });
  return new Article(container);
}

createArticle(articleArr, contentArr);

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"


class Article {
  constructor(domElement) {
    articleObjectArray.push(this);
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.removeButton = this.domElement.querySelector('.remove');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click To Expand';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.

    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.removeButton.addEventListener('click', () => this.removeArticle()); 
  }

  removeArticle() {
    this.domElement.style.display = 'none';
  }

  expandArticle() {
    articleObjectArray.forEach(item => item.closeArticle());
    TweenMax.to(this.domElement, 0.5, {height:400});
    this.expandButton.textContent = 'Click To Close';
    this.expandButton.addEventListener('click', () => this.closeArticle());
  }

  closeArticle() {
    TweenMax.to(this.domElement, 0.5, {height:50});
    this.expandButton.textContent = 'Click To Expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }
}

let articleObjectArray = [];

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
articles.forEach( article => new Article(article) );



/// add new article from inputs 
const articleContainer = document.querySelector('.articles');
const firstArticle = document.querySelector('.article');



function createDOMElement() {
  let newElement = firstArticle.cloneNode(true);
  let newH2 = document.querySelector('#title-input').value;
  let newContent = document.querySelector('#content-input').value;
  newElement.querySelector('h2').textContent = newH2;
  newElement.querySelector('.content').textContent = newContent;
  newElement.querySelector('.date').textContent = new Date();
  newElement = new Article(newElement);
  articleContainer.appendChild(newElement.domElement);
  document.querySelector('#title-input').value = '';
  document.querySelector('#content-input').value = '';
}






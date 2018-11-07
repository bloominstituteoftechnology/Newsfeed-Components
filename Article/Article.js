// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article').forEach(x => new Article(x));

class NewArticle {
  constructor(content){
    this.article = document.createElement('div');
    this.article.classList.add('article');
    this.header = document.createElement('h2');
    this.header.textContent = content.header;
    this.date = document.createElement('p');
    this.date.classList.add('date');
    this.date.textContent = content.date;
    this.main = document.createElement('p');
    this.main.textContent = content.main;
    this.expandButton = document.createElement('span');
    this.expandButton.classList.add('expandButton');
    this.expandButton.textContent = 'expand';
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.article.appendChild(this.header);
    this.article.appendChild(this.date);
    this.article.appendChild(this.main);
    this.article.appendChild(this.expandButton);
    document.querySelector('.articles').appendChild(this.article); // I think it makes more sense to prepend, but the trend seems to be having the most recent at the bottom.
  }
  expandArticle(){
    this.article.classList.toggle('article-open');
  }
}

document.querySelector('.addArticle').addEventListener('click', () => {
  const title = document.querySelector('.title');
  const main = document.querySelector('.main');
  if (!title.value || !main.value) {
    alert('Please fill out all fields!');
    return;
  }
  new NewArticle({header: title.value, date: Date().substring(4, 15), main: main.value});
  title.value = '';
  main.value = '';
});
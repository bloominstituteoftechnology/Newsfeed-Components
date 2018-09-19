// Because classes are not hoised you will need to 
//start your code at the bottom of the page. 
// Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your 
    //expandButton to say "expand"
    this.expandButton.innerText = 'EXPAND';

    // Set a click handler on the expandButton reference, 
    //calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

  }

  expandArticle() {
    // Using our reference to the domElement, 
    //toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains('article-open')) {
      this.expandButton.innerText = "CLOSE";
    }
    else if (!this.domElement.classList.contains('article-open')) {
      this.expandButton.innerText = "EXPAND";
    }
  }
}

// START HERE: Select all classes named ".article" and 
//assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and 
//create a new instance of Article by passing in 
//each article as a parameter to the constructor.

articles = Array.from(articles).map(article => new Article(article));

//    FORM BOX EXPERIMENT  \\

let formBox = document.querySelector('.form-box');

formBox.addEventListener('click', function () {
  formBox.classList.toggle('reg-form');
  formBox.classList.remove('btn-form');
}, { once: true })

let publishBtn = document.querySelector('.publish-btn');

let articleContainer = document.querySelector('.articles');




let titleInput = document.querySelector('#title').value;
let dateInput = null;
let paraInput = document.querySelector('textarea').value;




class Articles {
  constructor(props) {

    this.props = props;
    this.artBody = document.createElement('div');
    this.h2 = document.createElement('h2');
    this.date = document.createElement('p');
    this.p = document.createElement('p');
    this.expandBtn = document.createElement('span');

    this.artBody.classList.add('article');
    this.date.classList.add('date');
    this.expandBtn.classList.add('expandButton');
    this.expandBtn.innerText ='EXPAND';

    this.artBody.appendChild(this.h2);
    this.artBody.appendChild(this.date);
    this.artBody.appendChild(this.p);
    this.artBody.appendChild(this.expandBtn);
    if (this.props['title']) {
      this.h2.innerText = this.props['title'];
    }
    if (this.props['date']) {
      this.date.innerText = this.props['date'];
    }
    if (this.props['para']) {
      this.p.innerText = this.props['para'];
    }

    this.expandBtn.addEventListener('click', this.expandArticle.bind(this));

  }
    expandArticle() {
      this.artBody.classList.toggle('article-open');
      if (this.artBody.classList.contains('article-open')) {
        this.expandBtn.innerText = "CLOSE";
      }
      else if (!this.artBody.classList.contains('article-open')) {
        this.expandBtn.innerText = "EXPAND";

      }
    }

  }

  publishBtn.addEventListener('click', function () {
    let artObj = {
      'title': titleInput ,
      'date': dateInput , 
      'para': paraInput}
  
    let newArt = new Articles(artObj).innerHTML;
    articleContainer.append(new Articles(artObj).artBody.innerHTML);
  
  });
  let artOb = {
    'title': titleInput ,
    'date': dateInput , 
    'para': paraInput}

    let newwww = new Articles(artOb);

  

    

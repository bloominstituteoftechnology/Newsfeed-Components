// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
     this.expandButton.innerHTML = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
     this.expandButton.addEventListener('click', () => this.expandArticle(event));
    // Setting a click handler on the trash reference, calling the removeArticle method.
     this.trash = domElement.querySelector('.trash');
     this.trash.addEventListener('click', () => this.removeArticle(event));

  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article (and change the text depending on state).
    event.stopPropagation();
    this.domElement.classList.toggle('article-open');
    if (this.expandButton.innerHTML == 'Click to Expand'){
      this.expandButton.innerHTML = 'Click to Close';
    } else {
      this.expandButton.innerHTML = 'Click to Expand';
    }
  }
  //hides an article when clicking on the trash button.
  removeArticle(){
    event.stopPropagation();
    this.domElement.classList.add('done');
  }
}

//stretch - function to convert data to articles
function convertArticle(article){
  let newArticleHeader = document.createElement('h2');
  newArticleHeader.innerText = article.header;

  let newArticleDate = document.createElement('p');
  newArticleDate.classList.add('date');
  newArticleDate.innerText = article.date;

  let newArticleText = document.createElement('p');
  newArticleText.innerText = article.text;

  let newExpandButton = document.createElement('span');
  newExpandButton.classList.add('expandButton');

  let newTrash = document.createElement('div');
  newTrash.classList.add('trash');
  newTrash.innerHTML='<img src="assets/trash.png" alt="trash can"/>';

  let articleContainer = document.querySelector('.articles');

  let addArticles = document.createElement('div');
  addArticles.classList.add('article')
  addArticles.appendChild(newTrash);
  addArticles.appendChild(newArticleHeader);
  addArticles.appendChild(newArticleDate);
  addArticles.appendChild(newArticleText);
  addArticles.appendChild(newExpandButton);
  articleContainer.appendChild(addArticles);
  return new Article(addArticles);
}

//form input of articles
let form = document.querySelector('#write-article');
form.querySelector('.button').addEventListener('click', event => {
  event.preventDefault();
  convertArticle({
    header: form.querySelector('#header').value,
    date: new Date().toDateString(),
    text: form.querySelector('#text').value,
  })
  form.querySelector('#header').value = '';
  form.querySelector('#text').value= '';
})


// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  return new Article(domElement);
});

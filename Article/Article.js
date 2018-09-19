// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
     this.expandButton.innerText = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
     this.expandButton.addEventListener('click', () => this.expandArticle(event));
     this.readButton = domElement.querySelector('.read-button');
     this.readButton.addEventListener('click', () =>
     this.closeArticle(event));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    event.stopPropagation();
    this.domElement.classList.toggle('article-open');
    if (this.expandButton.innerHTML == 'Click to Expand'){
      this.expandButton.innerHTML = 'Click to Close';
    } else {
      this.expandButton.innerHTML = 'Click to Expand';
    }
  }

  closeArticle(){
    event.stopPropagation();
    this.domElement.classList.add('done');
  }
}


let articlesToBeAdded = [{
  header: 'Article One',
  date: Date(),
  text: 'Today conceptually blew my mind, tho.'
},
{
  header: 'Article Two',
  date: Date(),
  text: 'Adding new articles is haaaaaaaaaard.'
}];

function convertArticles(){
  articlesToBeAdded.forEach((article) =>{
    return articleHtml(article);
  })
}

function articleHtml(article){
  let newArticleHeader = document.createElement('h2');
  newArticleHeader.innerText = article.header;

  let newArticleDate = document.createElement('p');
  newArticleDate.classList.add('date');
  newArticleDate.innerText = article.date;

  let newArticleText = document.createElement('p');
  newArticleText.innerText = article.text;

  let newExpandButton = document.createElement('span');
  newExpandButton.classList.add('expandButton');

  let newReadButton = document.createElement('div');
  newReadButton.classList.add('read-button');
  let newReadButtonText = document.createElement('p');
  newReadButtonText.innerHTML = 'Done Reading';


  let articleContainer = document.querySelector('.articles');

  let addArticles = document.createElement('div');
  addArticles.classList.add('article')
  addArticles.appendChild(newArticleHeader);
  addArticles.appendChild(newArticleDate);
  addArticles.appendChild(newArticleText);
  addArticles.appendChild(newExpandButton);
  addArticles.appendChild(newReadButton);
  newReadButton.appendChild(newReadButtonText);
  articleContainer.appendChild(addArticles);
}

articlesToBeAdded.push({
  header: 'Article Three',
  date: Date(),
  text: 'Whoaaaa there, buddy does this actually work???'
})
convertArticles();

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  return new Article(domElement);
});

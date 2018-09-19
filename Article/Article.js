// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class.
    this.expandButton = element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle(event));
  }

  expandArticle(event) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    event.stopPropagation();
    this.element.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable


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

  let newButton = document.createElement('span');
  newButton.classList.add('expandButton');

  let articleContainer = document.querySelector('.articles');

  let addArticles = document.createElement('div');
  addArticles.classList.add('article')
  addArticles.appendChild(newArticleHeader);
  addArticles.appendChild(newArticleDate);
  addArticles.appendChild(newArticleText);
  addArticles.appendChild(newButton);
  articleContainer.appendChild(addArticles);
}

articlesToBeAdded.push({
  header: 'Article Three',
  date: Date(),
  text: 'Whoaaaa there, buddy does this actually work???'
})
convertArticles();
// let articleData = {
//   header: 'Article One',
//   date: Date(),
//   text: 'Today conceptually blew my mind, tho.'
// };
//
// let newArticleHeader = document.createElement('h2');
// newArticleHeader.innerText = articleData.header;
//
// let newArticleDate = document.createElement('p');
// newArticleDate.classList.add('date'); newArticleDate.innerText = articleData.date;
//
// let newArticleText = document.createElement('p');
// newArticleText.innerText = articleData.text;
//
// let newButton = document.createElement('span');
// newButton.classList.add('expandButton');
//
// let articleContainer = document.querySelector('.articles');
//
// let addArticles = document.createElement('div');
// addArticles.classList.add('article')
// addArticles.appendChild(newArticleHeader);
// addArticles.appendChild(newArticleDate);
// addArticles.appendChild(newArticleText);
// addArticles.appendChild(newButton);
// articleContainer.appendChild(addArticles);

let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  return new Article(domElement);
});

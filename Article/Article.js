

//== Article ===================================================================

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', function (clickEvent){
      this.expandArticle()
    }.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.innerText = 'collapse';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles);
articles.map((articleElement) => {
  return new Article(articleElement);
})


//== Stretch Goal: Dynamically add new Articles ================================

//-- The addArticle Function ---------------------
function addArticle (articleData){
  // Create Basic HTML elements for article
  const articleBody    = document.createElement('div' );
  const articleTitle   = document.createElement('h2'  );
  const articleDate    = document.createElement('p'   );
  const articleToggle  = document.createElement('span');
  // Set classes on subelements
  articleBody  .classList.add('article'     );
  articleDate  .classList.add('date'        );
  articleToggle.classList.add('expandButton');
  // Set text content of basic subelements
  articleTitle.innerText = articleData.title;
  articleDate .innerText = articleData.date.toDateString(); // Not exactly the same, but close enough for this demo
  // Append subelements (up to the article body)
  articleBody.appendChild(articleTitle);
  articleBody.appendChild(articleDate);
  // Create a paragraph element for each line of text in the article, append to the article element
  articleData.body.split('\n').forEach(line => {
    let newParagraph = document.createElement('p');
    newParagraph.innerText = line;
    articleBody.appendChild(newParagraph);
  });
  // Append remaining subelements
  articleBody.appendChild(articleToggle);
  // Prepend Article to articles list
  document.querySelector('.articles').insertBefore(articleBody, document.querySelector('.articles .article'));
  // Create Component from DOM Element
  new Article(articleBody);
}

//-- A form for adding articles at runtime -------
document.querySelector('#publish').addEventListener('submit', function (event){
  // Construct Article Data from user input
  const articleData = {};
  articleData.date  = new Date();
  articleData.title = this.elements['title'].value;
  articleData.body  = this.elements['body' ].value;
  // Clear form, scroll to top of page
  this.reset();
  window.scrollTo({top: 0});
  // Prevent page refresh
  event.preventDefault();
  // Create the new Article
  addArticle(articleData);
});
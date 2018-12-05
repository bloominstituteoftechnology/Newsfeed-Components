// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => {
  return new Article(article);
})




/*
// class takes in parameter of static html panels, allows `this` keyword
class Panel {
  constructor(panel){
    this.panel = panel; // `this` binds panel x to block
    console.log(this.panel); // returns full panel as DOM element
    this.heading = this.panel.querySelector('panel-content h3');
    this.content = this.panel.querySelector('panel-content p');
    console.log(this.heading); // returns each H3 from panels

    // non-arrow function binding for method access
    this.heading.addEventListener('click', this.togglePanel.bind(this)); // use this keyword to access object methods

    // arrow function binding for method access
    this.heading.addEventListener('click', () => this.togglePanel()); // arrow function implicitly binds `this` to method!!!

  }
  // methods
  togglePanel(){
    this.content.classList.toggle('toggle-on'); // can't access object scope without binding (see above)
  }
}


*/
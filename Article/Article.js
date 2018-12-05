// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;


    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
   // this.closeButton = this.domElement.querySelector('.closeButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
   this.expandButton.textContent = 'Expand';
   //this.closeButton.textContent = 'Read';
      
   // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    //this.closeButton.addEventListener('click', () => this.closeArticle());
  }

    
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log('Expand button clicked.');
    this.domElement.classList.toggle('article-open');

    this.closeButton = this.domElement.querySelector('.closeButton');
    this.closeButton.textContent = 'Read';
    this.closeButton.addEventListener('click', () => this.closeArticle());
    
  }

  // closeArticle() {
  //   console.log('Article read and/or closed.');
  //   this.domElement.classList.toggle('close');
  // }

}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/
let articles = document.querySelectorAll('.article');

articles.forEach( article => {
  return new Article(article);
});
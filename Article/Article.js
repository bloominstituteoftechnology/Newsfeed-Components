// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class ArticleElement {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.articleContent = article.querySelector('.article-content');
    // create a reference to the ".expandButton" class. 
    this.expandButton = article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click'() => this.expandArticle());
  }

  expandArticle() {
    this.expandButton.classList.toggle('close');
    // Using our reference to the domElement, toggle a class to expand or hide the article.
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const article = document.querySelectorAll('.article');
articles.forEach( article => new ArticleElement(article));
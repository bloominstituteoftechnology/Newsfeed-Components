// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if(!this.domElement.classList.contains('article-open')) {
      TweenMax.to(this.domElement, .20, {height: '400px'});
      setTimeout(() => {
        this.domElement.classList.toggle('article-open');
      }, 200)
    } else {
      TweenMax.to(this.domElement, .20, {height: '50px'});
      setTimeout(() => {
        this.domElement.classList.toggle('article-open');
      }, 200)
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.articles .article');
articles.forEach(a => {
  return new Article(a);
});
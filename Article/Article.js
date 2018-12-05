// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.Button = this.domElement.querySelector('.expandButton'); // <------------- Fix this reference to the expandButton class
    this.pElements = this.domElement.querySelectorAll('p');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.Button.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.Button.addEventListener('click', (e) => this.expandArticle(e));
  }

  expandArticle(e) {
    // this.pElements.forEach(element => element.classList.toggle('showhide'));
    this.domElement.classList.toggle('article-open');
    // Using our reference to the domElement, toggle a class to expand or hide the article.
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article')

articles.forEach( item => {
  return new Article(item)
});
// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = 
    this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }
   expandArticle() {

    this.domElement.classList.toggle("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/


let articles =
document.querySelectorAll('.article');

articles.forEach(article => {
  return new Article(article);
});
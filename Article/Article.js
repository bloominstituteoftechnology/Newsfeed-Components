class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = document.querySelector('.expandButton');
    this.expandButton.textContent = "Expand";
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }
  // Methods
  expandArticle() {
    this.domElement.classList.toggle('article-open');
  }
}

/* START HERE: 
- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable 
to iterate over the articles NodeList and create a new instance of Article 
by passing in each article as a parameter to the constructor.

*/

const articles = document.querySelectorAll('.article');
articles.forEach(domElement => {
  return new Article(domElement);
});
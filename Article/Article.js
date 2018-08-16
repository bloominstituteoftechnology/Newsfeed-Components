class Article {
  constructor(element) {
    this.element = element; // ".article"
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    // ES6 this.expandButton.addEventListener('click', () => { this.expandArticle() })
    // ES5 this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    // The DOM way 
    this.expandButton.addEventListener('click', this.expandArticle);
  }

  expandArticle() {
    // ES6/ES5 
    //this.element.classList.toggle('article-open');
    event.currentTarget.parentNode.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');
// we convert our NodeList into an Array then we map over the array and create new objects
articles = Array.from(articles).map( article => new Article(article));



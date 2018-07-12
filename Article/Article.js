class Article {
  constructor(element) {
    this.element = element; // ".article"
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerText = 'expand'
    // When using DOM things, we are accessing the DOM
    // ES6 this.expandButton.addEventListener('click', () => { this.expandArticle() })
    // ES5 this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    // The DOM way 
    this.expandButton.addEventListener('click', this.expandArticle);
    
  }

  expandArticle(event) {
    // ES6/ES5 
    //this.element.classList.toggle('article-open');
    event.target.parentNode.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');

articles = Array.from(articles).map( article => new Article(article));





class Article {
  constructor(element) {
    
    this.element = element;
    
    this.expandButton = this.element.querySelector('.expandButton');
    
    this.expandButton.innerText = "expand";
    
    this.expandButton.addEventListener("click", this.expandArticle)
  }

  expandArticle(event) {
    event.target.parentNode.classList.toggle("article-open") 
  }
}


let articles = document.querySelectorAll('.article');

articles = Array.from(articles).map(article => new Article(article));


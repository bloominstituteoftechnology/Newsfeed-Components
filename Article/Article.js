
class Article {
  constructor(element) {
    
    this.element = element;
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerHTML = "Expand";
    this.expandButton.addEventListener('click', this.expandArticle);
  }

  expandArticle(e) {
    e.target.parentNode.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');

articles = Array.from(articles).map((element) => {
  element = new Article(element);
});


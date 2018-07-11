// Start at `let articles`

class Article {
  constructor(element) {
    this.element = element;
    this.expandButton = this.element.querySelector(".expandButton");
    this.expandButton.innerHTML = "expand";
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle(element) {
    console.log(this.element)
    this.element.classList.toggle("article-open")
  }
}


let articles = document.querySelectorAll(".article");

articles = Array.from(articles).map(article => new Article(article));


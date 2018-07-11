// Start at `let articles`

class Article {
  constructor(element) {
    this.element = element;
    this.expandButton = this.element.querySelector(".expandButton");
    this.expandButton.innerHTML = "expand";
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    this.articleTween = TweenMax.to(this.element, 2, {height:400})
    this.articleTween.reversed(true);
  }

  expandArticle(element) {
    this.articleTween.reversed() ? this.articleTween.play() : this.articleTween.reverse();
  }
}


let articles = document.querySelectorAll(".article");

articles = Array.from(articles).map(article => new Article(article));



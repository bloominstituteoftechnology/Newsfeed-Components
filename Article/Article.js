// Start at `let articles`

class Article {
  constructor(element) {
    this.element = element;
    this.expand = "Click to Expand";
    this.close = "Click to Close";
    this.expandButton = this.element.querySelector(".expandButton");
    this.expandButton.innerHTML = this.expand;
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    this.articleTween = TweenMax.to(this.element, 2, {height:400})
    this.articleTween.reversed(true);
  }

  expandArticle() {
    this.articleTween.reversed() ? this.articleTween.play() : this.articleTween.reverse();
    this.expandButton.innerHTML === this.expand ? this.expandButton.innerHTML = this.close : this.expandButton.innerHTML = this.expand;
  }
}


let articles = document.querySelectorAll(".article");
articles = Array.from(articles).map(article => new Article(article));


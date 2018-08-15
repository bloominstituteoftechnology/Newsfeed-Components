class Article {
  constructor(element) {
    this.element = element;
    this.expandButton = this.element.querySelector(".expandButton");
    this.expandButton.innerText = "Click to Expand";
    this.articleExpanded = false;
    this.expandButton.addEventListener("click", () => this.expandArticle());
    this.closeButton = this.element.querySelector(".close-btn");
    this.closeButton.addEventListener("click", () => this.closeArticle());
  }

  expandArticle() {
    if (this.articleExpanded) {
      TweenMax.to(this.element, 1, {height:50});
      this.expandButton.innerText = "Click to Expand";
      this.articleExpanded = false;
    } else {
      TweenMax.to(this.element, 1, {height:400});
      this.expandButton.innerText = "Click to Close";
      this.articleExpanded = true;
    }
  }

  closeArticle() {
    TweenMax.to(this.element, 1, {height: 5, display: "none", opacity: 0,});
  }
}

let articles = document.querySelectorAll(".article");

articles = Array.from(articles).map(article => new Article(article));

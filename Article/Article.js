// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
let allPanels = [];
class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.closeButton = this.domElement.querySelector(".close");
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener("click", () => this.expandArticle());
    this.closeButton.addEventListener("click", () => this.deleteArticle());
    allPanels.push(this);
  }
  expandArticle() {
    if (this.domElement.classList.contains("article-open")) {
      TweenMax.to(this.domElement, 1, { className: "-=article-open" });
    } else {
      allPanels.forEach(article => {
        article.closeArticles();
      });
      TweenMax.to(this.domElement, 1, { className: "+=article-open" });
    }
  }
  closeArticles() {
    TweenMax.to(this.domElement, 1, { className: "-=article-open" });
  }
  deleteArticle() {
    TweenMax.to(this.domElement, 0.5, { opacity: 0, display: "none" });
  }
}
let articles = document.querySelectorAll(".article");
articles.forEach(article => {
  return new Article(article);
});

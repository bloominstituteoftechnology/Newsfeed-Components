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
      this.domElement.classList.toggle("article-open");
    } else {
      allPanels.forEach(article => {
        article.closeArticles();
      });
      this.domElement.classList.toggle("article-open");
    }
  }

  closeArticles() {
    this.domElement.classList.remove("article-open");
  }

  deleteArticle() {
    TweenMax.to(this.domElement, 2, { opacity: 0, display: "none" });
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => {
  return new Article(article);
});

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.expandButton.textContent = "Click to Expand";
    this.expandButton.addEventListener("click", () => this.expandArticle());
    // for deleting articles
    this.delete = this.domElement.querySelector(".x");
    this.delete.addEventListener("click", (e) => {
      
      TweenMax.to(this.domElement, 0.2, {
        opacity: 0
      });
      setTimeout(() => {this.domElement.style.display = "none"}, 250);
    });
  }

  expandArticle() {

    this.domElement.classList.toggle("article-open");

    if (this.domElement.classList.contains("article-open")) {
      TweenMax.to(this.domElement, 0.3, {
        height: 400,
        ease: Circ.easeInOut
      });

      this.expandButton.textContent = "Click to Close";

    } else {

      TweenMax.to(this.domElement, 0.3, {
        height: 50,
        ease: Circ.easeInOut
      });

      this.expandButton.textContent = "Click to Expand";
    }
    
  }//end expandArticle
}//end Article

let articles = document.querySelectorAll(".article");

articles.forEach(article => { 
  return new Article(article)});


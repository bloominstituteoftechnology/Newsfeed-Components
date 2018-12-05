// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener("click", () => this.expandArticle());
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.close = this.domElement.querySelector(".close");
    this.close.addEventListener("click", () => this.handleClose());
  }

  handleClose() {
    this.domElement.style.display = "none";
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.domElement.classList.toggle("article-open")) {
      this.expandButton.textContent = "close";
    } else {
      this.expandButton.textContent = "expand";
    }
    TweenLite.set(".article p", { height: "auto" });
    TweenLite.from(".article p", 1, { height: 0 });
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article").forEach(article => {
  return new Article(article);
});

const article = document.querySelectorAll(".article");

article.forEach(article => {
  TweenMax.to(article, 2.5, {
    ease: SlowMo.ease.config(0.7, 0.7, false),
    x: 20
  });
});

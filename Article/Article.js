// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.read = this.domElement.querySelector(".read");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    this.read.textContent = "Mark as read";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", _ => this.expandArticle());
    this.read.addEventListener("click", _ => this.close());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    if (Array.from(this.domElement.classList).includes("article-open")) {
      TweenMax.to(this.domElement, 0, { height: 50 });
      TweenMax.to(this.domElement, 0.5, { height: 400 });
      this.expandButton.textContent = "Click to Close";
    } else {
      TweenMax.to(this.domElement, 0, { height: 400 });
      TweenMax.to(this.domElement, 0.35, { height: 50 });
      this.expandButton.textContent = "Click to Expand";
    }
  }

  close() {
    TweenMax.to(this.domElement, 0.35, {
      opacity: 0,
      marginTop: 0,
      marginBottom: 0,
      scale: 0,
      height: 0,
      padding: 0
    });
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".articles .article");
articles.forEach(e => new Article(e));

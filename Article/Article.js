// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
    // Add a close button, set click handler calling closeArticle method
    this.closeButton = this.domElement.querySelector(".closeButton");
    this.closeButton.textContent = "Click to Close";
    this.closeButton.addEventListener("click", () => this.closeArticle());
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.domElement.classList.contains("article-open")) {
      // collapse article
      TweenMax.to(this.domElement, .3, {
        height: 50,
        ease: Cubic.easeOut
      });
      setTimeout(() => {
        // console.log("done waiting to collapse")
        this.expandButton.textContent = "Click to Expand";
        this.domElement.classList.remove("article-open");
      }, 300)
    } else {
      // expand 
      // // old way, hard-coded max-height:
      // TweenMax.fromTo(this.domElement, 3, {
      //   height:50,
      // },{
      //   height:500
      // });
      // need this since TweenMax left inline height property after animating collapse:
      this.domElement.style.removeProperty("height"); 
      this.domElement.classList.add("article-open");
      TweenMax.from(this.domElement, .3, {
        height: 50,
        ease: Elastic.easeOut
      })
      setTimeout(() => {
        // console.log("done waiting to expand")
        this.expandButton.textContent = "Click to Close";
        // this.domElement.classList.toggle("article-open");  // need this for old way
      }, 300)
    }

  }

  closeArticle() {
    console.log(this.domElement);
    TweenMax.to(this.domElement, .3, {
      height: 0,
      padding: 0,
      opacity: 0
    })
    setTimeout(() => {
      this.domElement.classList.add("article-close");
    }, 300);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article").forEach((article) => {
  return new Article(article);
});
// console.log(articles);
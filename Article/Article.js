// Animate the article opening. Change the css. animate the component so that it slids open and slides closed on each click. Update the text "Click to Expand or "Click to Close

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
let articleCounter = 1;
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.deleteX = this.domElement.querySelector(".deleteX");
    // Using your expandButton reference, update the text on your expandButton to say "expand"

    this.expandButton.textContent = "Click to Expand";

    this.expandButton.addEventListener("click", e => {
      this.updateText();
    });

    this.deleteX.addEventListener("click", e => this.deleteThis(e));

    // Set a click handler on the expandButton reference, calling the expandArticle method.

    this.expandButton.addEventListener("click", e => this.expandArticle(e));
  }

  deleteThis() {
    TweenMax.to(this.domElement, 2, {
      ease: Power4.easeOut,
      x: -5500,
      onComplete: ()=>{
        this.domElement.style.display = "none";
      }
    });
    console.log("hello");

    
  }

  updateText() {
    this.expandButton.textContent = "Click to Close";
    if (this.domElement.style.height === "400px") {
      this.expandButton.textContent = "Click to Expand";
    }
  }

  expandArticle(e) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    e.stopPropagation();
    articleCounter++;
    console.log(articleCounter);
    //odd

    if (Math.abs(articleCounter % 2) === 1) {
      console.log(articleCounter % 2 === 1);
      TweenMax.to(this.domElement, 0.2, { height: "50px" });
      //even
    } else {
      TweenMax.to(this.domElement, 0.2, { height: "400px" });
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

// new element for the x

let articles = document.querySelectorAll(".article");

articles.forEach(item => {
  return new Article(item);
});

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
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));

    this.closeButton = this.domElement.querySelector("i");

    this.closeButton.addEventListener("click", this.closeArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    if (this.expandButton.textContent === "Click to Expand") {
      this.expandButton.textContent = "Click to Close"
    }
    else if (this.expandButton.textContent === "Click to Close") {
      this.expandButton.textContent = "Click to Expand"
    }
  }

  closeArticle() {
    this.domElement.style.display = "none";
  }
}

function showEditor() {
  document.querySelector(".gray").style.display = "block";
}
/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

function publish() {
  
}

let articles = document.querySelectorAll(".article");
articles.forEach((item) => {
  return new Article(item);
});

let createArticle = document.querySelector("button");

createArticle.addEventListener("click", showEditor);

let submitArticle = document.querySelectorAll("button")[1];

createArticle.addEventListener("click", publish);
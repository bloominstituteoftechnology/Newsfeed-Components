// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "Click to Expand";

    this.articleExpanded = false;
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", () => {
      if (this.articleExpanded) {
        TweenMax.to(this.element, 1, {height:50});
        this.expandButton.innerText = "Click to Expand";
        this.articleExpanded = false;
      } else {
        TweenMax.to(this.element, 1, {height:400});
        this.expandButton.innerText = "Click to Close";
        this.articleExpanded = true;
      }
    });
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

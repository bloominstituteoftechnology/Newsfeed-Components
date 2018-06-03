// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "expand"
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle);
    this.expandButton.addEventListener("click", function () {
      TweenMax.to( ".article-open", 2, {borderColor: "#388E3C", borderWidth: "5px"})
    });
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    console.log("I was clicked");
    this.parentNode.classList.toggle("article-open");

  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(element => new Article(element));

// expandButton.addEventListener("click", function () {
//   TweenMax.from( ".article-open", 2, {backgroundColor: "#388E3C"})
// });

TweenMax.staggerFrom(".article", 1.5, {left: -2000, delay: 2}, 0.5)
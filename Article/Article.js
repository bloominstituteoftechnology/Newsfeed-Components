// Start at `let articles`
let expanded = false;
class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    this.removeButton = this.element.querySelector(".removeButton");
    this.removeButton.textContent = "Remove Article";
    this.removeButton.addEventListener("click", this.removeArticle.bind(this), true);
  }

  expandArticle(event) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    if (expanded === false) {
      event.stopPropagation();
      // this.element.classList.add("article-open");
      TweenMax.to(this.element, 1, {height:400});
      this.expandButton.textContent = "Click to Close";
      expanded = true;
    } else {
      event.stopPropagation();
      TweenMax.to(this.element, 1, {height:50});
      this.expandButton.textContent = "Click to Expand";
      expanded = false;
    }
  }

  removeArticle() {
    event.stopPropagation();
    this.element.style.display = "none";
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

console.log(articles);
// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "Expand";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", (event) => {
      this.expandArticle();
    });
    //Close Button
    this.closeButton = this.element.querySelector(".close");
    this.closeButton.addEventListener("click", () => {
      this.deleteArticle();
    });
  }

  deleteArticle() {
    this.closeButton.parentElement.style.display = "none";
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle("article-open");
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  let newAnchor = document.createElement('a');
  newAnchor.innerHTML = "X";
  newAnchor.setAttribute('class', 'close')
  article.appendChild(newAnchor);
  return new Article(article)});


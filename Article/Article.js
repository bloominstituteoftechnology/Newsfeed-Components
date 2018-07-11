// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "expand";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle);
    console.log(this.element)
    
  }

  expandArticle() {
    console.log(this.element)
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    // this.element.classList.toggle(".article-open")
  }
}


let articles = document.querySelectorAll(".article");

articles = Array.from(articles).map(article => new Article(article));


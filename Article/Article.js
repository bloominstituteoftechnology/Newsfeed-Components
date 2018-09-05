// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.e = article;
    // create a reference to the ".expandButton" class. 
    this.e.expandButton = document.querySelectorAll(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"

    //***text not updating? */
    this.e.expandButton.innerHTML = "expand";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.e.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
      this.e.classList.toggle("article-open")
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

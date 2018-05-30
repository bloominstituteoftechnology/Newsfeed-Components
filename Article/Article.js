// Start at `let articles`

class Article {
  constructor(element) {
    this.element=element;
    this.expandButton=this.element.querySelector(".expandButton");
    this.expandButton.innerHTML="expand";
    this.expandButton.addEventListener("click", ()=> { this.expandArticle() });
  }

 expandArticle() {
    this.element.classList.toggle("article-open");
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles=document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(value => new Article(value));


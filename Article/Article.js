// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = ("expand");
    this.expandButton.style.color = 'green';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle);
    // ES6 option: this.expandButton.addEventListener('click', () => {this.expandArticle()})
    // ES5 option: this.expandButton.addEventListener('click', this.expandArticle.bind(this)); Bind makes the ES 6 method below work.
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.parentElement.classList.toggle("article-open");
    //The following also works:
    // event.target.parentNode.classList.toggle('article-open');
    //ES6 option: this.element.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");
console.log(articles);

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( element => new Article(element));
console.log(articles);


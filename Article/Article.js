// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = expandButton;
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // this.expandButton.innerHTML = "expand";
    // console.log(expandButton);
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    element.addEventListener('click', this.expandArticle);
  }

  expandArticle(event) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    console.log(event.currentTarget);
    event.currentTarget.classList.toggle('article');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');
let expandButton = document.querySelectorAll('.expandButton');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map((element,index) => new Article(element));

expandButton = Array.from(expandButton).map((element,index) => element.innerHTML = "expand");


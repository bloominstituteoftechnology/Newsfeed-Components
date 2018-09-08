// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class.

    this.expandButton = element.querySelector('.expandButton');
    this.closeButton = element.querySelector('.closeBox');
    this.expandButton.innerText = "expand";
    // Using your expandButton reference, update the text on your expandButton to say "expand"
   
    this.expandButton.addEventListener('click', this.expandArticle);
    this.closeButton.addEventListener('click', this.closeBoxHandler);
  }

  expandArticle(event) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    
    event.currentTarget.parentNode.classList.toggle('article-open');
    event.currentTarget.parentNode.classList.toggle('close');
  }

  closeBoxHandler(event) {
    event.currentTarget.parentNode.style.display = "none";
  }

}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');
// let expandButton = document.querySelectorAll('.expandButton');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map((element,index) => new Article(element));


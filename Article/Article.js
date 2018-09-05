// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = element.querySelector('.expandButton');
    this.closeButton = element.querySelector('.close');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = 'expand';
    this.closeButton.innerHTML = '<i class="fas fa-times"></i>';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle);
    this.closeButton.addEventListener('click', this.deleteArticle);
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    // event.currentTarget.parentNode.classList.toggle('article-open');
    if (event.currentTarget.parentNode.style.height == "" || event.currentTarget.parentNode.style.height == "50px") {
      TweenMax.to(event.currentTarget.parentNode, 1, {height: 400});
      event.currentTarget.innerHTML = 'collapse';
    } else {
      event.currentTarget.innerHTML = 'expand';
      TweenMax.to(event.currentTarget.parentNode, 1, {height: 50});
    }
  }

  deleteArticle() {
    TweenMax.to(event.currentTarget.parentNode, .5, {opacity: 0, display: "none"});
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(element => new Article(element));


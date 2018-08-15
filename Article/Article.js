// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.article = article;
    this.expandButton = Array.from(this.article.childNodes).filter(child => child.className === "expandButton")[0];
    this.expandButton.innerText = "Expand";
    this.expandButton.addEventListener('click', this.expandArticle.bind(this), false );
    this.article.addEventListener('click', this.closeArticle.bind(this), false);
    // _/ create a reference to the ".expandButton" class.
    // _/ Using your expandButton reference, update the text on your expandButton to say "expand"
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    
  }

  closeArticle() {
      console.log(event.target);
      event.target.parentNode.classList.toggle('article-open');
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
      event.stopPropagation();

      console.log(event.target);
      event.target.parentNode.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));


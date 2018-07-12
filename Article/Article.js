// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.element = article;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    //close button
    this.closeButton = this.element.querySelector('.close-btn');
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    //close button event listener
    this.closeButton.addEventListener('click', this.closeArticle);
  }

  expandArticle(){
  // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle('article-open');
    if(this.element.classList.contains('article-open')){
      TweenLite.to(this.element, 1, {height: 400});
    }else {
      TweenLite.to(this.element, 1, {height: 50})
    }
  }

  closeArticle() {
    let node = event.target.parentNode;
    TweenLite.to(node, .5, {height: 0, opacity: 0});
    TweenLite.to(node, .5, { marginTop: -20, marginBottom: -20 });
    setTimeout(() => node.style.display = 'none', 500);
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

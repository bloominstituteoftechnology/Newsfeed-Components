// Start at `let articles`

class Article {
  constructor(article) {
    // _/ assign this.element to the passed in article element
    this.article = article;
    this.toggleArticle = this.toggleArticle.bind(this);
    this.expandArticle = this.expandArticle.bind(this);
    this.expandButton = Array.from(this.article.childNodes).filter(child => child.className === "expandButton")[0];
    this.expandButton.innerText = "Expand";
    this.expandButton.addEventListener('click', this.expandArticle);
    this.article.addEventListener('click', this.toggleArticle);
    // _/ create a reference to the ".expandButton" class.
    // _/ Using your expandButton reference, update the text on your expandButton to say "expand"
    // _/ Set a click handler on the expandButton reference (or article element), calling the expandArticle method.

  }

  toggleArticle() {
      console.log(event.target);
      if(event.target.parentNode.style.height === "450px"){
          console.log('yes');
          TweenMax.from('.article-open', 2, {height: "450"});
          TweenMax.to('.article-open', 2, {height: "50"});
      }
      event.target.parentNode.classList.toggle('article-open');
      TweenMax.from('.article-open', 2, {height: "0"});
      TweenMax.to('.article-open', 2, {height: "450"});
  }

  expandArticle() {
    // _/ Using our reference to the article element, add or remove a class to expand or hide the article.
      event.stopPropagation();
      console.log(event.target);
      if(event.target.parentNode.style.height === "450px"){
          console.log('yes');
          TweenMax.from('.article-open', 2, {height: "450"});
          TweenMax.to('.article-open', 2, {height: "50"});
      }
      event.target.parentNode.classList.toggle('article-open');
      TweenMax.from('.article-open', 2, {height: "0"});
      TweenMax.to('.article-open', 2, {height: "450"});
  }
}

// _/ START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// _/ Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));
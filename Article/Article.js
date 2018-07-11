class Article {
  constructor(article) {
    this.element = article;
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerHTML = 'expand';
    this.expandButton.addEventListener('click', this.expand);
  }

  expand(e) {
    e.target.parentNode.classList.toggle('article-open');
  }  
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articleList = Array.from(document.querySelectorAll('.article'));
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articleList = articleList.map(function(article) {
  return new Article(article);
})
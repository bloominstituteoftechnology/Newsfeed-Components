// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    this.article = article;
    this.expandButton = article.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    this.article.addEventListener('click', () => this.expandArticle());
  }
  expandArticle() {
      this.article.classList.toggle("article-open");
      console.log(this.article)
      TweenMax.to(this.article, 1, {height: this.article.classList.contains('article-open') ? '100vh' : '8vh'});
        
      this.article.classList.contains('article-open') ? this.expandButton.innerText = '' : this.expandButton.innerText = 'expand' 
      
      }
    }
 
    
  
// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article')
// console.log(articles);
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});


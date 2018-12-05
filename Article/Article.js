// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    this.article = article;
    this.expandButton = this.article.querySelector('.expandButton');
    this.content = this.article.querySelector('.news-content');

    this.expandButton.textContent = 'expand';

    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.content.classList.toggle('news-content');
    $(this.content).slideToggle("slow");
  }
}




let articles = document.querySelectorAll('.article');

articles.forEach(article => {
  return new Article(article);
})
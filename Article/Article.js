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
    // this.content.classList.toggle('news-content');
    $(this.content).slideToggle("slow");
    this.content.classList.toggle('button-switch');

    if (this.content.classList.contains('button-switch')) {
      this.expandButton.textContent = 'close';
    } else {
      this.expandButton.textContent = 'expand';
    }
  }
}

let articles = document.querySelectorAll('.article');

articles.forEach(article => {
  return new Article(article);
})
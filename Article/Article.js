// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.article = article;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // Close Article
    this.article.addEventListener('click', e => this.closeArticle(e));
  }

  closeArticle(e) {
    if (e.target.classList.contains('close')) {
      TweenMax.to(this.article, 1, {
        x: 2000,
        ease: Bounce.easeOut
      });
      TweenMax.to(this.article, 0.5, {
        height: 0,
        delay: 1
      });
      setTimeout(() => (this.article.style.display = 'none'), 2000);
    }
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    if (!this.article.classList.contains('article-open')) {
      this.article.classList.add('article-open');
      TweenMax.to(this.article, 1.25, {
        height: 400,
        ease: Bounce.easeOut
      });
      setTimeout(() => (this.expandButton.innerText = 'Click to close'), 1250);
    } else if (this.article.classList.contains('article-open')) {
      this.article.classList.remove('article-open');
      TweenMax.to(this.article, 0.5, {
        height: 50
      });
      setTimeout(() => (this.expandButton.innerText = 'Click to expand'), 600);
    }
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});

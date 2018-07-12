// Start at `let articles`

class Article {
  constructor(articleItem) {
    // assign this.element to the passed in article element
    this.element = articleItem;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.element.querySelector('.expandButton');
    //this.expandButton = articleItem.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    //this.expandButton.addEventListener('click', this.expandArticle);
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.element.addEventListener('mouseover', this.colorMe.bind(this));
  }

  colorMe (e) {
    let posX = e.offsetX + 75;
    let posY = e.offsetY + 75;
    let ranDom = Math.floor(Math.random() * (230 - 10)) + 10;
    this.element.style.background = `linear-gradient(rgb(${posX}, ${ranDom}, ${posY}), rgb(${ranDom}, ${posX}, ${posY}))`;
  }

  expandArticle(e) {
    
    TweenMax.from(this.element, 3, {width:30});
    TweenMax.from(this.element, 1, {rotation:0});
    TweenMax.to(this.element, 1, {rotation:360});
    
    if (!this.element.classList.contains('article-open')) {
      this.element.classList.add('article-open');
      TweenMax.from(this.element, 2, {height:40});
      TweenMax.to(this.element, 2, {height:400});
    } else {
      this.element.classList.remove('article-open');
      TweenMax.to(this.element, 2, {height:40});
    }

    // Using our reference to the article element, add or remove a class to expand or hide the article.
    //e.target.parentElement.classList.toggle('article-open');
    //this.element.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(articleItem => new Article(articleItem));


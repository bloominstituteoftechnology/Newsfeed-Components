// Start at `let articles`

let articleTog = 0;

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    if (this.expandButton) {
      this.expandButton.innerText = 'Click to Expand';
    }
    
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.

    // this.element.classList.toggle('article-open');

    if (articleTog === 0) {
      TweenMax.to(this.element, 0.6, {height: 400 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Close';
      articleTog ++;
    }
    else if (articleTog === 1) {
      TweenMax.to(this.element, 0.6, {height: 50 + 'px', ease: Power2.easeIn});
      this.expandButton.innerText = 'Click to Expand';
      articleTog--;
    }

  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article(article));

// articles.forEach(elem => {
//   let tl = new TimelineLite({paused:true});
//   tl.to(elem, 0.6, {height: 400 + 'px', ease: Power2.easeIn});
//   elem.animation = tl;
// });

// function enter() {
//   this.animation.play();
// }

// function out() {
//   this.animation.reverse();
// }
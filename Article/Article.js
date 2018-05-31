// Start at `let articles`

// class Article {
//   constructor(element) {
//     // assign this.element to the passed in article element
//     this.element = element;
//     // create a reference to the ".expandButton" class. 
//     this.expandButton = this.element.querySelector('.expandButton');
//     this.closeButton = this.element.querySelector('.closeButton');
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
//     this.expandButton.textContent = '-------------   expand   -------------';
//     // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
//     this.expandButton.addEventListener('click', () => {this.expandArticle()}); 
//     this.closeButton.addEventListener('click', () => {this.expandArticle()});
//   }

//   expandArticle() {
//     // Using our reference to the article element, add or remove a class to expand or hide the article.
  
//   this.element.classList.toggle('article-open');
//   this.closeButton.classList.toggle('hidden');
//   }

// }

class Article {
  constructor(element) {
    this.element = element;
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    //this.expandArticle = this.expandArticle.call(this)
    //this.expandButton.addEventListener('click', () => { this.expandArticle() })
    this.expandButton.addEventListener('click', this.expandArticle);
  }

  expandArticle(e) {
    //this.element.classList.toggle('article-open');
    //this.parentNode.classList.toggle('article-open');
    e.target.parentNode.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.

articles = Array.from(articles).map(element => new Article(element)); //?


let articleBounce = document.querySelectorAll('.article');
	window.addEventListener('load', () => {
TweenMax.staggerTo(articleBounce, 1, {
  y: 30,
  ease: Bounce.easeOut,
}, .1)

  });


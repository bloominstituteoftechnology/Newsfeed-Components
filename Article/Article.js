// Start at `let articles`


class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = element.querySelector('.expandButton');
    this.expandButton.innerText = 'expand'
       

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.

    this.expandButton.addEventListener('click', this.expandArticle) 
    this.element.addEventListener('wheel', this.scrollArticle)    
  }

  expandArticle() {    
    event.target.parentNode.classList.toggle('article-open')
    
    if(event.target.parentNode.classList.contains('article-open')){
      event.target.innerText = 'close'
    } else {
      event.target.innerText = 'expand'
    } 
    // Using our reference to the article element, add or remove a class to expand or hide the article.
  }
  scrollArticle() {
    let last_known_scroll_position = 0
    let ticking = false;
    if(event.target.parentNode.classList.contains('article-open')){
      
        last_known_scroll_position = window.scrollY;

        if (!ticking) {

       window.requestAnimationFrame(function() {
            console.log(last_known_scroll_position);
            event.target.style.height += last_known_scroll_position;
            ticking = false;
        });
          
          ticking = true;

        }
    }
  }
}



// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');
Array.from(articles).map(article => console.log(article.querySelector('.expandButton')));
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article) );


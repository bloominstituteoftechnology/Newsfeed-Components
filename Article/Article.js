class Article {
  constructor(article) {
    this.element = article;
    // tracking the state of article
    this.isOpened = false;
    // expand button
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerHTML = 'Expand';
    this.expandButton.addEventListener('click', this.expand);
    // close button
    this.closeBtn = document.createElement('button');
    this.closeBtn.innerHTML = ' X ';
    this.closeBtn.style.marginTop = "5px";
    this.closeBtn.style.border = '3px solid black';
    this.closeBtn.style.borderRadius = '2px';
    this.closeBtn.style.float = 'right';
    this.element.insertAdjacentElement('afterbegin', this.closeBtn);
    this.closeBtn.addEventListener('click', this.close);
   }

  expand(e) {
    const individualArticle = e.target.parentNode;
    // to get the height for animation
    // since package does not support %
    individualArticle.classList.toggle('article-open');
    
    if (!this.isOpened) {
      const openHeight = individualArticle.clientHeight;

      // animation for opening
      TweenMax.from(individualArticle, 1, {
        height: 0
      })
    
      TweenMax.to(individualArticle, 3, {
        height: openHeight,
        ease: Linear.easeOut
      });

      this.isOpened = true;
      e.target.innerHTML = 'Click to Close';
    } else {

      // animation for closing
      TweenMax.to(individualArticle, 2, {
        height: 50,
      });  
      
      this.isOpened = false;
      e.target.innerHTML = 'Click to Expand';
    }
  }  

  close(e) {
    e.target.parentNode.style.display = 'none';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articleList = Array.from(document.querySelectorAll('.article'));
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articleList = articleList.map(function(article) {
  return new Article(article);
})
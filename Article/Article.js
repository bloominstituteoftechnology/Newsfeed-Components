// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', (e) => this.expandArticle(e));
    this.expandButton.addEventListener('mouseover', () => this.expandAnimation());

    this.expandButton.addEventListener('mouseleave', () => this.expandAnimationGone());
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
  }
  expandAnimation() {

    TweenMax.to(this.expandButton, .2, {css:{scaleX:0.8, scaleY:0.8, opacity:0.7}});  
    }

    expandAnimationGone() {
      TweenMax.to(this.expandButton, .2, {css:{scaleX:1, scaleY:1, opacity:1}});
    }
}




/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const articles = document.querySelectorAll('.article');

articles.forEach(e => {return new Article(e)})
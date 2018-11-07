// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to expand';

    this.flag = true; //Flag to know if open or closed

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle(event));
    
  }

  expandArticle() {
    if(this.flag) {  // Open the article
      this.expandButton.textContent = "Click to close";
      TweenMax.to(this.domElement, 1, {height:400});
      this.flag = false;
    } else {  // close the article
      this.expandButton.textContent = "Click to expend";
      TweenMax.to(this.domElement, 1, {height:50});
      this.flag = true;
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList 
and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article').forEach(article => new Article(article));

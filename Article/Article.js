// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    let counter = 1;
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      counter++;
      if (counter % 2 == 0) {
        TweenLite.fromTo(this.domElement, 0.5, {height: 50}, {height: 400});
        this.expandButton.textContent = 'close';
      } else {
        TweenLite.fromTo(this.domElement, 0.5, {height: 400}, {height: 50});
        this.expandButton.textContent = 'expand';
      }
    });
  }

  // expandArticle() {
  //   // Using our reference to the domElement, toggle a class to expand or hide the article.
  //   this.domElement.classList.toggle('article-open');
  // }
}

//  START HERE:

// - Select all classes named ".article" and assign that value to the articles variable.
//
// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.
//

let articles = document.querySelectorAll('.article').forEach(article => {
  return new Article(article);
});

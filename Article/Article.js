// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.expandButton');
    // console.log("expand", this.expandButton);
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.domElement.addEventListener('click', () => this.expandArticle());
    
  }

  expandArticle() {
    console.log(this.domElement);
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.classList.toggle('hidden');
  }

}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => {
  new Article(article);
})

let expandButtons = document.querySelectorAll('.expandButton');
expandButtons.forEach(button => {
  button.textContent = "Expand";
})
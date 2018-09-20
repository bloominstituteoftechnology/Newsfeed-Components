// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    // this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    this.expandButton.addEventListener("click", e => this.expandArticle(e));
  }

  expandArticle(event) {
    event.stopPropagation();
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    TweenMax.fromTo(this.domElement, 4, { height: 50 }, { height: 400 });
    this.expandButton.innerText = "Click to Close";
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");
// ======= COMPREHENSION CHECK =======
// articles = array-like object / Nodelist

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));
// ======= COMPREHENSION CHECK =======
// Array.from converts nodelist into real array, giving us acces to .map
// .map creates a new array
// domElement is our parameter, it acts like [i] in a for loop
// new keyword creates a new 'instance' of our Article class aka component

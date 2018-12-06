// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class.g
    this.heading = this.article.querySelector(".article h2");
    this.content = this.article.querySelector(".article p");
    this.expand = this.article.querySelector(".expandButton ");
    console.log(this.heading);
    this.expand.textContent = "expand";
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expand.addEventListener("click", e => this.expandArticle(e));
    // Set a click handler on the expandButton reference, calling the expandArticle method.
  }

  expandArticle() {
    this.article.classList.toggle("article-open"); // Using our reference to the domElement, toggle a class to expand or hide the article.
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const article = document.querySelectorAll(".article ");
console.log(article);
article.forEach(article => {
  return new Article(article);
});

console.log(articles);
window.onload = function() {
  if (window.jQuery) {
    // jQuery is loaded
    alert("Yeah!");
  } else {
    // jQuery is not loaded
    alert("Doesn't Work");
  }
};

window.onload = function() {
  if (window.jQuery) {
    // jQuery is loaded
    alert("Yeah!");
  } else {
    location.reload();
  }
};

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.closeButton = this.domElement.querySelector('.close')
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Expand'
    
    this.expandButton.addEventListener('click', () => this.expandArticle(event))

    this.closeButton.addEventListener('click', () => this.removeArticle(event))
  }



  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.innerText = 'Collapse';
    if(this.expandButton.innerText === 'Collapse'){
      this.expandButton.innerText = 'Expand';
    } else {
      this.expandButton.innerText = 'Collapse';
    }
  }

  removeArticle() {
    this.domElement.style.display = 'none'
  }
}
// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});

var gridWidth = 800;
var gridHeight = 1000;
Draggable.create(".article", {
    type:"x,y",
    edgeResistance:0.65,
    bounds:".articles",
    lockAxis:true,
    // throwProps:true,
    snap: {
        x: function(endValue) {
            return Math.round(endValue / gridWidth) * gridWidth;
        },
        y: function(endValue) {
            return Math.round(endValue / gridHeight) * gridHeight;
        }
    }
});
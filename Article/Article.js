// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    //Don't overcomplicate. Remember obj constructors
    this.domElement = domElement
    // create a reference to the ".expandButton" class. 
    //pointing this.expandButton at the location of the button using the passed in arg from the constructor
    this.expandButton = this.domElement.querySelector('.article .expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    //textContent is same as innerHTML, will change value of text
    this.expandButton.textContent = "Expand"
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    
    this.content = document.querySelector('p')
    this.expandButton.addEventListener('click', () => this.expandArticle(event));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
  }
}

//-----> START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");


//------> STEP TWO
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
//remember article (note singular) is the passed in arg in map
//remember articles (note plural) is the array that is being iterated over
articles = Array.from(articles).map( article => {
  return new Article(article);
});


const struggleBus = document.querySelector(".header .struggle")
TweenMax.to(".struggle", 2, {x:800}, {opacity:0.5}, );

TweenLite.to(".struggle", 2.5, { ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}), x: "400%" });


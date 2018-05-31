// Start at `let articles`

class Article {
  constructor(element) {
    //// assign this.element to the passed in article element
    //gives us a reference to the article element (".article") being passed in right on the DOM 
    this.element = element;

    //// create a reference to the ".expandButton" class. 
    // this.element here refers to the article element that's being passed in. we're grabbing a reference to it. 
    // with this.element referring to the article element being passed (.article), the second part of this equality makes a reference to the .expandButton class that is a child of the .article class
    this.expandButton = this.element.querySelector(".expandButton");

    //// Using your expandButton reference, update the text on your expandButton to say "expand"
    // with the refence being set up in the previous line, we inject a string in the span with the class .expandButton
    this.expandButton.innerHTML = "expand";

    // // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    // note here that, because we're referencing to the DOM reference that was assigned to the .expandButton class, the addEventListener is referring to the DOM (we're accessing the DOM level). we actually leave the class, and go to the DOM element/node being referred to
    // this is why we couldn't just use ("click", this.expandArticle) (if we did, we'd only have one expand button and it wouldn't do anything. You get an error in the console). because we used the DOM, we jumped out of our class. 
    // addEventListener is referring to the elements on the webpage, not the this.element in the construct.
    // you can use this.expandArticle.bind(this) (ES5 way), which takes the stuff to the left of the .bind and and binds it to the this of the construct
    // (ES6) way is done in the code below. we pass in an arrow function with no parameters. 
    // we're invoking the method (different than ES5). by using the arrow function, we're calling not the DOM element, but we're forcing it back into the construct context (instead of DOM).
    this.expandButton.addEventListener("click", () => {this.expandArticle()}) ;
    this.element.classList.remove("article-open");

  }

  expandArticle() {
    //// Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle("article-open");
    
  }
}

//// START HERE: Select all classes named ".article" and assign that value to the articles variable

// here we grab reference to all of our articles. note that we're choosing the .article class in the html, not the .articles class (parent of article) 
// in grabbing these references we put them in a node list (don't have access to array methods)
let articles = document.querySelectorAll(".article");  

//// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.

// we're doing a nodelist conversion to an array here
// with map we're doing method chaining, which is the practice of using multiple methods in a row (notice the dot notation being used twice)
// the capital A is calling the class
// the articleElement that's been passed in makes it so that four unique classes are being created
articles = Array.from(articles).map(articleElement => new Article(articleElement));


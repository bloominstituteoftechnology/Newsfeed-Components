// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element
    // console.log(this.element, 'this.element')
    // create a reference to the ".expandButton" class. 
    // Learned that you can acutally run query selector on any piece of the DOM!!! That's fuckin crack
    this.expandButton = this.element.querySelector('.expandButton')
    // console.log(this.expandButton, 'this.expandButton')

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = 'EXPAND'

    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    
    // Now this right here was magic. I want to add the eventListener to expand button only. See below
    
    // Attempt #1 
    // this.expandButton.addEventListener('click', this.expandArticle)
    
    // Problem with Attempt #1
    // The expand button is a child of the `this.element`. Doing the above results in the `this` keyword 
    // in the eventHandler will have a context of expandButton. When firing the eventHandler....

      // this.expandArticle(){
      //   console.log(this) // <span class="expandButton">EXPAND</span>  
      // }

    // The console log shows that we get a span which is not a DOMTokenList

    // We also get an error
    // Uncaught TypeError: Cannot read property 'classList' of undefined at HTMLSpanElement.expandArticle
    
    // Since the 'this' isn't a DOMTokenList it doesn't have the classList method available
    
    // Attempt #2 - Working with Allen helped us discover that we could change the context of `this` by using .bind()
    // this.expandButton.addEventListener('click', this.expandArticle.bind(this))
    
    // What's happening here is that .bind is taking the Article `this` and binding it to the local `this` which is for the .expandButton
    
    // Attempt #3 - ES6 arrow takes care of the context of `this` binding mentioned above.
    this.expandButton.addEventListener('click', () => {this.expandArticle()})  // Works!
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    console.log(this)
    this.element.classList.toggle('article-open')
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
// When doing querySelector it returns a nodeList. These can usually be accessed via list[index].attributeName
let articles = document.querySelectorAll('.article')
// console.log(articles, 'NodeList')

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( art => {
  // console.log(art, 'article in map callback')
  new Article(art)});
// console.log(articles)


//Animation for Articles
// function staggerArticles(){
let tl = new TimelineMax();
    tl.staggerFrom(".article", 1, {
    opacity:0,
    delay:1,
    cycle:{
        rotationX:[-90,90],
        transformOrigin:["50% top","50% bottom"]
    }
},.1)





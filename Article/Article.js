

/* 

Event Sequence:

1. let articles is grabbing every element from the DOM with a class name of ".article", and returning it in a NodeList.

2. articles = Array is turning that NodeList into a true array, and then mapping over it, while calling the Article class constructor for each element.

3. The Article class constructor is given a parameter of article, for the article element that gets passed in from the mapped array that calls it.

4. this.element is assigned the value of the parameter/argument passed in.

5. this.expandButton then uses querySelector(All) to assign the value of every element within this.element/article with a classname of ".expandButton", that exists inside of this.element/article, to itself.

6. this.expandButton is now a group of span elements, so this.expandButton has access to the innerHTML method/property, which can be used to alter the text inside of this.expandButton.

7. An event listener is added to this.element/article, which calls the this.expandArticle method on the Article class constructor.

8. the expandArticle method is adding/removing classes from this.element/article, by targeting the classList of the current target of the event/Event Listener, to toggle the 'article-open' class on/off, which makes sense because the target of the event is this.element/article. 

The end result is that when this.element/article recieves a click event, the event listener will call the expandArticle method, which will run on the element that the event listener is attached to (this.element/article), and toggle the 'article-open' class, allowing the article to expand when clicked.

*/

// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.element = article ;
    // create a reference to the ".expandButton" class. 
   this.expandButton = this.element.querySelectorAll('.expandButton');
   console.log(this.expandButton);
    this.expandButton.innerHTML='expand'; 
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.element.addEventListener('click', this.expandArticle);
    
  }
 
  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.

    event.currentTarget.classList.toggle('article-open');

    // TweenLite.to(element, 2, {rotation:30, scaleX:0.8});



    let h2Italics = Array.from(document.getElementsByTagName('h2'))
    
    h2Italics.map(element => {
      element.style.fontStyle = 'italic';
    })
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article (article));
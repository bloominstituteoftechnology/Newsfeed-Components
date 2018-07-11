// Start at `let articles` 

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.element = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "expand";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.element.addEventListener("click", this.expandArticle);
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.classList.toggle("article-open");
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article(article));


/// Stretch Goals, adding Green Sock
/// Would have made a new js file, and imported
/// afraid of merge conflicts

class LaunchButton {
  constructor(article) {
    // assign this.element to the passed in article element
    this.element = article;
    // create a reference to the ".expandButton" class. 
    this.launchButtons = this.element.querySelector(".launchButton");
    console.log(this.launchButtons)
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.launchButtons.innerHTML = "launch";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.element.addEventListener("click", this.launchButton);
  }

  launchButton() {
    // 
    // TweenMax.to(".article", .5, {x:200, opacity: 0, scale:0.5});
    console.log("test")
  }
}

let articles2 = document.querySelectorAll(".article");

articles2 = Array.from(articles2).map( article => new LaunchButton(article));



// customButton.addEventListener('click', (event) => {
//   console.log("button was moused over!");
//   TweenMax.to("#cta-img", .5, {x:200, opacity: 0, scale:0.5});
  
//   event.stopPropagation();
//   //console.log(event)
// });


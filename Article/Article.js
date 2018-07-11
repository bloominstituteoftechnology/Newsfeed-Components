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

// // Got the text to fill new buttons on my html when active, just can't get them to show up
// class LaunchButton {
//   constructor(article) {
//     // assign this.element to the passed in article element
//     this.element = article;
//     // console.log(this.element)
//     // create a reference to the ".expandButton" class. 
//     this.launchButtons = this.element.querySelector(".launchButton");


//     this.indArticle = this.element.querySelector(".article")
//     console.log(this.indArticle)
//     // Adding h2 selector so I can create click event
//     this.launchHeadline = this.element.querySelector("h2");
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
//     this.launchButtons.innerHTML = "launch";

//     // adding pointer to headline, so you know to click
//     this.launchHeadline.style.cursor = "pointer";
//     // console.log(this.launchButtons)
//     // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
//     this.element.addEventListener("click", this.launchButton);

//     this.launchHeadline.addEventListener("click", this.launchH2);
    
//   }

//   launchButton() {
//     // 
//     // TweenMax.to(".article", .5, {x:200, opacity: 0, scale:0.5});
//     // console.log("test")
//   }

//   launchH2() {
//     // console.log(this.element)
//     console.log('Hey')
//     TweenMax.to(this.indArticle, .5, {x:200, opacity: 0, scale:0.5});
//   }

// }

// let articles2 = document.querySelectorAll(".article");

// articles2 = Array.from(articles2).map( article => new LaunchButton(article));





class LaunchHeadline {
  constructor(articles) {
    // articles array containing all ind articles
    this.element = articles;
    this.indArticle = this.element.querySelector(".article")
    // console.log(this.indArticle)
    // Adding h2 selector so I can create click event
    this.launchHeadline = this.element.querySelector("h2");
    console.log(this.launchHeadline)
    // console.log(this.launchHeadline)
    // adding pointer to headline, so you know to click
    this.launchHeadline.style.cursor = "pointer";
    // console.log(this.launchButtons)
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.launchHeadline.addEventListener("click", this.launchH2.bind(this));
  }

  launchH2() {
    // console.log(this.element)
    console.log('Hey')
    // console.log(this.indArticle)
    TweenMax.to(this.indArticle, .5, {x:200, opacity: 0, scale:0.5});
  }

}

let articles3 = document.querySelectorAll(".articles");

articles3 = Array.from(articles3).map( articles => new LaunchHeadline(articles));

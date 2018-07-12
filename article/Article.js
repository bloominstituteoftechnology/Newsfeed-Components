// Start at `let articles`

let articles = document.querySelectorAll(".article");

class Article {
  constructor(button){
    this.element = button;
    this.expandButton.addEventListener('click', this.btnClick);
  }
  btnClick(){
    console.log("I was clicked")
  }

}



articles = Array.from(articles).map(button => new Article(button))







// class Article {
//   constructor(element) {
//     // assign this.element to the passed in article element
//     this.element = button;
//     // create a reference to the ".expandButton" class. 
//     this.expandButton;
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
    
//     // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    
//   }





//   expandArticle() {
//     // Using our reference to the article element, add or remove a class to expand or hide the article.

//   }
// }

// // START HERE: Select all classes named ".article" and assign that value to the articles variable
// let articles;

// // Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
// // articles = Array.from(articles).map();

// //making changes and pulls 
// //less-watch-compiler is not found on computer and been configuring that
//  Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.element = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelectorAll(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    	  for(let i=0; i<this.expandButton.length; i++){
	 	 this.expandButton[i].innerHTML = "expand";
  }
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
	this.element.addEventListener("click", () => {this.expandArticle()});
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
	this.element.classList.toggle("article-open");
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article (article));


var picture = document.getElementById("picture");
TweenLite.to(picture, 6, {width:"500px", height:"300px"});

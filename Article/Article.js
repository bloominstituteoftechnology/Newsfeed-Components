// Start at `let articles`
function makeArticles() {

  class Article {
    constructor(article) {
      // assign this.element to the passed in article element
      this.element = article;
      this.expand = this.element.querySelector(".expandButton")
      // create a reference to the ".expandButton" class. 
    
      let expandButton = document.querySelector(".expandButton");

     this.expand.innerHTML = "expand";
     this.expand.addEventListener("click", this.expandArticle);

    }
    expandArticle() {
      // Using our reference to the article element, add or remove a class to expand or hide the article
      event.currentTarget.parentNode.classList.toggle("article-open");
      //******** Added this code because it should be here :) *******/
      if (event.currentTarget.innerHTML === "expand") {
        event.currentTarget.innerHTML = "close";
      } else {
       if (event.currentTarget.innerHTML === "close") {
         event.currentTarget.innerHTML = "expand";
      }
    };
  }
  };

  // START HERE: Select all classes named ".article" and assign that value to the articles variable
  let articles = document.querySelectorAll(".article");
  
  // Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
  articles = Array.from(articles).map(article => new Article(article));
  

};

makeArticles();



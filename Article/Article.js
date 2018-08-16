// Start at `let articles`

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.item = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.item.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "expand";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.item.addEventListener('click', this.expandArticle);
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    if(event.currentTarget.className.includes("article-open")) {
      console.log(event.currentTarget.className);
      event.currentTarget.classList.remove("article-open");
      TweenLite.to(event.currentTarget, 2.5, { ease: Bounce.easeOut, height: 50});
    } else {
      event.currentTarget.classList.add("article-open");
      TweenLite.set(".article", {clearProps:"all"})
      TweenLite.from(event.currentTarget, 2, { ease: SlowMo.ease.config(0.7, 0.7, false), height: 50});
    }
      
      //TweenLite.from(".article-open p", 2, {ease: Power1.easeOut, y: -500 });
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));


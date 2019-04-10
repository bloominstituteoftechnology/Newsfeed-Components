// Because classes are not hoisted you will need to start your 
//code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.closeButton = this.domElement.querySelector(".closeButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to expand";
    this.closeButton.textContent = "Close";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => {
      this.expandArticle();
      if (this.expandButton.textContent == "Click to expand") {
        this.expandButton.textContent = "Click to close"
      } else {
        this.expandButton.textContent = "Click to expand"
      }
    })

    this.closeButton.addEventListener("click", () => {
      this.closeArticle();
    })
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
  closeArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-close');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
iterate over the articles NodeList and create a new instance of Article by passing 
in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

articles.forEach(article => {
  new Article(article);
})



//Stretch 

let articleDiv = document.querySelector(".articles");

function addArticle(artTitle, artDate, artContent) {

  let art = document.createElement("div");
  art.className = "article";

  let title = document.createElement("h2");
  title.textContent = artTitle;

  let date = document.createElement("p");
  date.className = "date";
  date.textContent = artDate;

  let content = document.createElement("p");
  content.textContent = artContent;

  let btn1 = document.createElement("span");
  btn1.className = "expandButton";

  let btn2 = document.createElement("span");
  btn2.className = "closeButton";

  art.append(title);
  art.append(date);
  art.append(content);
  art.append(btn1);
  art.append(btn2);

  articleDiv.append(art);

  new Article(art);

  console.log("Working!");
}

addArticle("Hola", "Apr 10th 2019", "Bla bla bla");
addArticle("Hola", "Apr 10th 2019", "Bla bla bla");
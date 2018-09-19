// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class.
    // this.expandButton = document.querySelector('.expandButton');
    this.expandButton = domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }
}

// * Component Constructor

//   Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints.

// * Implement a way to write your own articles using the Component Constructor and some input fields.
const articlesDiv = document.querySelector(".articles");

const articleConstructor = () => {
  let articleHeading = prompt("Article title: ");
  let articleContent = prompt("Article content: ");

  let element = document.createElement("div");
  element.classList.add("article");
  element.innerHTML = `<h2>${articleHeading}</h2>
  <p class="date">${new Date()}</p> 
  <p>${articleContent}</p>
  <span></span>`;
  let span = element.querySelector("span");
  span.classList.add("expandButton");

  articlesDiv.appendChild(element);
};

const submit = document.querySelector(".submit");
submit.addEventListener("click", function() {
  articleConstructor();
  mapComponents();
});
// create articles using articleConstructor here

// START HERE: Select all classes named ".article" and assign that value to the articles variable

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
const mapComponents = () => {
  let articles = document.querySelectorAll(".article");
  articles = Array.from(articles);

  articles = articles.map(domElement => {
    return new Article(domElement);
  });
};

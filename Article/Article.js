// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// event listener and anonymous function to create new articles
document.querySelector('#submit').addEventListener('click', function(event){
  event.preventDefault();
  let div = document.createElement("div");
  div.classList.add('article')

  // the article title
  let header = `${document.getElementsByName("title")[0].value}`

  // the date
  let d = new Date();
  let date = `${d.toLocaleString('en-US', {month: "short"})} ${d.getDate()}th, ${d.getFullYear()}`;

  // the article text
  let para = `${document.getElementsByName("body")[0].value}`

  // the full post
  div.innerHTML = `<span class='close'></span>
  <h2>${header}</h2>
  <p class='date'>${date}</p>
  <p>${para}</p>
  <span class='expandButton'></span>`;

  var section = document.querySelector(".articles");
  section.appendChild(div);
})


class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to Expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", () => {this.expandArticle()});

    //Creating the close article functionality
    this.closeButton = element.querySelector('.close');
    this.closeButton.innerText = '×';
    this.closeButton.addEventListener("click", () => {this.closeArticle()});

  };
  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle('article-open');
    if (this.element.classList.contains('article-open') === true){
      this.expandButton.innerText = 'Click to Close';
    }
    else {
      this.expandButton.innerText = 'Click to Expand';
    }
  };
  closeArticle() {
    this.element.style.display = 'none';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable

window.addEventListener('mouseover', function() {
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});

})
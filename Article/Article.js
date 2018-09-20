// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'click to expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    
    this.closeButton = domElement.querySelector('.close');
    this.closeButton.innerText = 'X';
    this.closeButton.addEventListener('click', this.closeArticle.bind(this))
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.domElement.className.includes('article-open') ? this.expandButton.innerText = 'click to close' : this.expandButton.innerText = 'click to expand';
  }
  closeArticle() {
    this.domElement.style.display = 'none';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

// create new articles
document.querySelector('#publish').addEventListener('submit', e => {
  e.preventDefault();
  // making a div element
  let div = document.createElement("div");
  div.classList.add('article');

  // accessing the values of the input fields as well as creating a date
  let title = document.querySelector('#title').value;
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  let d = new Date();
  let date = `${monthNames[d.getMonth()]} ${d.getDate()}th, ${d.getFullYear()}`
  let content = document.querySelector('#content').value;

  // putting the input field values and dates into the div
  div.innerHTML = `<h2>${title}</h2><span class="close"></span>
    <p class="date">${date}</p>
    <p>${content}</p>
    <span class="expandButton"></span>`

  // using the Article class to change the div
  new Article(div);

  // accessing the parent element .articles to prepend the div
  let articlesSection = document.querySelector('.articles');
  articlesSection.prepend(div);

  // reset form and scroll to top
  document.querySelector('#publish').reset();
  window.scrollTo({top: 0});
})
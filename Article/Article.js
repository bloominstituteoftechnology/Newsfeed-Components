// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));

    this.closeButton = this.domElement.querySelector("i");

    this.closeButton.addEventListener("click", this.closeArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    if (this.expandButton.textContent === "Click to Expand") {
      this.expandButton.textContent = "Click to Close"
    }
    else if (this.expandButton.textContent === "Click to Close") {
      this.expandButton.textContent = "Click to Expand"
    }
  }

  closeArticle() {
    this.domElement.style.display = "none";
  }
}

function showEditor() {
  document.querySelector(".gray").style.display = "block";
}
/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

function hideEditor() {
  document.querySelector(".gray").style.display = "none";
}

let articles = document.querySelectorAll(".article");
articles.forEach((item) => {
  return new Article(item);
});

let createArticle = document.querySelector("button");

createArticle.addEventListener("click", showEditor);

let submitArticle = document.querySelectorAll("button")[1];

submitArticle.addEventListener('click', e => {
  publish(document.querySelector("input").value, document.querySelector("textarea").value);
  newArticles = document.querySelectorAll('.new').forEach(article => new Article(article));
  document.querySelector(".gray").style.display = 'none';
});

function publish(title, body){
  const content = document.createElement('div');
  content.classList.add('article');
  content.classList.add('new');

  const rightsi = document.createElement('div');
  rightsi.classList.add('rightside');

  const ttitle = document.createElement('h2');
  ttitle.textContent = title;
  rightsi.append(ttitle);

  const close = document.createElement('i');
  close.classList.add('fa');
  close.classList.add('fa-window-close');
  rightsi.append(close);
  content.append(rightsi)

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date();
  const dateFormat = `${months[d.getMonth()]} ${d.getDay()}rd, ${d.getFullYear()}`;
  const dt = document.createElement('p');
  dt.classList.add('date');
  dt.textContent = dateFormat;
  content.append(dt);

  const textbody = document.createElement('p');
  textbody.textContent = body;
  content.append(textbody);

  const expander = document.createElement('span');
  expander.classList.add('expandButton');
  content.append(expander);

  document.querySelector('.articles').append(content);
}
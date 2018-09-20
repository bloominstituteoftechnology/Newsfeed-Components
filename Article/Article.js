// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Expand';
    this.expandButton.addEventListener('click',this.expandArticle.bind(this));
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    event.stopPropagation();
    this.domElement.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');
articles = Array.from(articles).map(element=>{return new Article(element);})

class NavLink{
  constructor(domElement){
    this.domElement = domElement;
    this.domElement.classList.add('finger');
    this.domElement.addEventListener('click',this.nav.bind(this));
  }
  nav(event){
    event.stopPropagation();
    let navTo = this.domElement.dataset;
    window.location.href = navTo.nav
  }
}


let listItems = document.querySelectorAll('li');
listItems = Array.from(listItems).map(element =>{return new NavLink(element)});
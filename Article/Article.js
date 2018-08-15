// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector('.expandButton');
    this.closeButton = this.element.querySelector('.closeButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.closeButton.addEventListener('click', this.deleteArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    if(this.element.classList.contains('article-open')) {
      this.expandButton.innerText = 'Expand';
      TweenMax.to(this.element, .25, {height: 50});
    } else {
      this.expandButton.innerText = 'Close';
      TweenMax.to(this.element, .25, {height: 400});
    }
    this.element.classList.toggle('article-open'); 
  }

  deleteArticle() {
    TweenMax.to(this.element, .25, {opacity: 0, height: 0, padding: 0, borderWidth: 0, margin: 0, onComplete: () => {this.element.style.display = 'none'; this.element.innerHTML = ""}});
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

const addArticle = function(title, date, content) {
  const newArticle = document.createElement('div');
  const titleH2 = document.createElement('h2');
  const dateP = document.createElement('p');
  const paragraph = document.createElement('p');
  const expandSpan = document.createElement('span');
  const deleteSpan = document.createElement('span');
  
  dateP.classList.add('date')
  expandSpan.classList.add('expandButton')
  deleteSpan.classList.add('closeButton')
  newArticle.classList.add('article');

  articles[0].parentElement.prepend(newArticle);

  newArticle.prepend(deleteSpan);
  newArticle.prepend(expandSpan);
  newArticle.prepend(paragraph);
  newArticle.prepend(dateP);
  newArticle.prepend(titleH2);

  titleH2.innerText = title;
  dateP.innerText = date;
  paragraph.innerText = content;
  deleteSpan.innerText = "Already Read";

  return new Article(newArticle);
}

addArticle('AN EXCELLENT CREATION: "I HAVE BEEN CREATED."','Aug 15, 2018','Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2 windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba owen jinn tatooine sith organa.');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));




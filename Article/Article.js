// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.article = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.article.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( element => new Article(element));

function createArticle (articleData) {
  const articleDiv = document.createElement('div');
  articleDiv.classList.add('article');

  const articleHeading = document.createElement('h2');
  articleHeading.textContent = articleData.headingData;
  articleDiv.appendChild(articleHeading);
  const articleParagraph = document.createElement('p');
  articleParagraph.textContent = articleData.paragraphData;
  
  articleDiv.appendChild(articleParagraph);

  const articleSpan = document.createElement('span');
  articleSpan.classList.add('expandButton');

  articleDiv.appendChild(articleSpan);
  document.querySelector('.articles').appendChild(articleDiv);
  new Article (articleDiv);
}

createArticle({
  headingData: "This my article adder article.",
  paragraphData: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
        watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
        jar twi'lek jinn leia jango skywalker mon.`,
})

document.querySelector('form').addEventListener('submit', (event)=> {
  event.preventDefault();
  let headingSubmission = document.querySelector('.title').value;
  let paragraphSubmission = document.querySelector('.paragraph').value;
  createArticle({headingData: headingSubmission, paragraphData: paragraphSubmission});
});
// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class.
    this.expandButton = element.lastElementChild ;

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to Expand';

    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      this.expandButton.innerText === 'Click to Expand' ? this.expandButton.innerText = 'Click to Close' : this.expandButton.innerText = 'Click to Expand';

      this.expandArticle(element);
    });
  }

  expandArticle(element) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.

    return element.classList.contains('article-open') ? element.classList.remove('article-open') : element.classList.add('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map((article) => {

  // append an element to delete the article once read
  let a = document.createElement('a');
  let aTxt = document.createTextNode('X');
  a.appendChild(aTxt);
  a.setAttribute('class', 'close');
  article.prepend(a);



  return new Article(article);

});


// add delete function and hover effects to the X buttons

let buttons = document.querySelectorAll('.close');

buttons = Array.from(buttons).map((close) => {
  close.addEventListener('mouseenter', () => {
    close.style.color = 'red';
  });
  close.addEventListener('mouseleave', () => {
    close.style.color = 'black';
  });
  close.addEventListener('click', () => {
    close.parentElement.style.display = 'none';
  });
});

// Start at `let articles`


class Article {
  constructor(element) {

    // assign this.element to the passed in element element
    this.element = element;

    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelectorAll('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // Set a click handler on the expandButton reference (or element element), calling the expandArticle method.
    for (let i = 0; i < this.expandButton.length; i++){
      this.expandButton[i].innerText = "expand";
      this.expandButton[i].addEventListener('click', this.expandArticle);
    }
  }

  expandArticle() {
    // Using our reference to the article article, add or remove a class to expand or hide the article.
    event.currentTarget.parentNode.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

TweenMax.from(".header", 3, {x:-200, rotation: 180, scale:0.1, ease:Bounce.easeOut});


TweenMax.staggerFrom(".article", 3, {
  right: -200, 
  borderColor: "red",
  padding: 100,
  rotation: 360,
  delay: 3,
}, .4)


TweenMax.to(".header, .article", 3, {opacity: 0, delay: 8});

TweenMax.from(".header", 3, {opacity: 1, delay: 11});

TweenMax.staggerFrom(".article", 6, {opacity: 1, delay: 11, rotation: -360 }, .4);

TweenMax.from(".article", .5, {delay: 18.5, onComplete:complete })

function complete(){
  alert("that was fun");
  document.querySelector('.header').style.backgroundColor = 'red';
}




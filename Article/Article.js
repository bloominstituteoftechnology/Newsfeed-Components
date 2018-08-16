class Article {
  constructor(element){
    this.element = element;
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    this.expandButton.addEventListener('click', this.expandArticle);
  }
  expandArticle(){
    event.currentTarget.parentNode.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');
// we convert our NodeList into an Array then we map over the array and create new objects
articles = Array.from(articles).map( article => new Article(article));





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




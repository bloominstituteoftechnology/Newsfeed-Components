

class Article {
  constructor(element) {
    
    this.element = element;
  console.log(this.element);
    this.expandButton = this.element.querySelector('.expandButton');
    // console.log(this.expandButton);
    
    this.expandButton.innerHTML = "Expand";

  }

  expandArticle() {
    
  }
}

let articles = document.querySelectorAll('.article');
// console.log(articles);

articles = Array.from(articles).map((element) => {
  // console.log(element);
  element = new Article(element);
});


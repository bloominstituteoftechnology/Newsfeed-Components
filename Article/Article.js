// Start at `let articles`

class Article {
  constructor(element) {
    this.element = element;
    this.expand = "Click to Expand";
    this.close = "Click to Close";
    this.expandButton = this.element.querySelector(".expandButton");
    this.expandButton.innerHTML = this.expand;
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    this.articleTween = TweenMax.to(this.element, 2, {height:400})
    this.articleTween.reversed(true);
  }

  expandArticle() {
    this.articleTween.reversed() ? this.articleTween.play() : this.articleTween.reverse();
    this.expandButton.innerHTML === this.expand ? this.expandButton.innerHTML = this.close : this.expandButton.innerHTML = this.expand;
  }
}



let buildArticle = (header, date, text) => {
  let newArticle = document.createElement("div");
  newArticle.className = "article";
  let newHeader = document.createElement("h2");
  newHeader.innerHTML = header;
  let newDate = document.createElement("p");
  newDate.className = "date";
  newDate.innerHTML = date;
  let newText = document.createElement("p");
  newText.innerHTML = text;
  let newButton = document.createElement("span");
  newButton.className = "expandButton";
  newArticle.appendChild(newHeader);
  newArticle.appendChild(newDate);
  newArticle.appendChild(newText);
  newArticle.appendChild(newButton);
  return newArticle;
};
let articles = document.querySelectorAll(".article");
let parent = articles[0].parentNode;


let newA = buildArticle("hi","today","okay")
parent.append(newA)
articles = Array.from(articles).map(article => new Article(article));
articles.push(new Article(newA))
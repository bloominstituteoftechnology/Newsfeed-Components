class NewArticle {
  constructor(input) {
    this.input = input;
    this.title = document.querySelector("#title");
    this.date = document.querySelector("#date");
    this.text = document.querySelector("#article");
    this.submitBtn = document.querySelector("#submitBtn");
    this.articlesSection = document.querySelector(".articles");
    // this.Article = {
    //   title: "",
    //   date: "",
    //   text: ""
    // };
    // this.title.addEventListener("change", e => {
    //   this.Article.title = e.target.value;
    // });

    // this.date.addEventListener("change", e => {
    //   this.Article.date = e.target.value;
    // });

    // this.text.addEventListener("change", e => {
    //   this.Article.text = e.target.value;
    // });
    this.submitBtn.addEventListener("click", () => {
      this.appendArticle(this.articlesSection);
    });
  }

  appendArticle(articleSection) {
    let newElement = articleSection.querySelector(".article").cloneNode(true);

    let newH2 = document.querySelector("#title").value;
    let newContent = document.querySelector("#article").value;
    newElement.querySelector("h2").textContent = newH2;
    newElement.querySelector(".content").textContent = newContent;
    newElement.querySelector(".date").textContent = document.querySelector(
      "#date"
    ).value;
    newElement = new Article(newElement);
    articleSection.appendChild(newElement.domElement);
    document.querySelector("#title").value = "";
    document.querySelector("#article").value = "";
    // const articleDiv = document.createElement("div");
    // articleDiv.className = "article";
    // const closeBtn = document.createElement("button");
    // closeBtn.className = "close";
    // const x = document.createTextNode("X");
    // closeBtn.appendChild(x);
    // closeBtn.addEventListener("click", e => this.handleClose(e));
    // const h2Title = document.createElement("h2");
    // const h2TitleText = document.createTextNode(article.title);
    // h2Title.appendChild(h2TitleText);
    // const date = document.createElement("p");
    // date.className = "date";
    // const dateEntered = document.createTextNode(article.date);
    // date.appendChild(dateEntered);
    // const text = document.createElement("p");
    // const textEntered = document.createTextNode(article.text);
    // const span = document.createElement("span");
    // span.className = "expandButton";
    // const spanText = document.createTextNode("expand");
    // span.appendChild(spanText);
    // span.addEventListener("click", e => this.expandArticle(e));
    // articleDiv.append(closeBtn, h2Title, date, text, span);
    // text.appendChild(textEntered);
    // articleSection.appendChild(articleDiv);
    //console.log(articleSection);
  }
  expandArticle(e) {
    e.target.textContent = "close";
    this.articlesSection
      .querySelector(".article p")
      .classList.toggle("article-open");
  }

  handleClose(e) {
    e.target.parentElement.style.display = "none";
  }
}

// const inputs = document.querySelectorAll("input, textarea");
// inputs.forEach(input => {
//   return new NewArticle(input);
// });

const input = document.querySelector("input");
input = new NewArticle(input);

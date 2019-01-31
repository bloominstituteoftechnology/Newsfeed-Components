class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.panel = this.domElement.querySelector("div");
    this.button = this.domElement.querySelector("button");
    this.button.addEventListener("click", () => {
      this.toggleArticle();
    });
  }

  toggleArticle() {
    let c = this.panel.classList;
    let d = this.button.classList;
    c.toggle("active");
    c.toggle("close");
    d.toggle("open");
    d.toggle("shut");
  }
}

let blog = document.querySelectorAll(".article");

blog = Array.from(blog).map(art => {
  return new Article(art);
});

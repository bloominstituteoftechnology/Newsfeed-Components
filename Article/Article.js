
class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.Button = this.domElement.querySelector('.expandButton');
    this.Button2 = this.domElement.querySelector('.closeButton');
    this.pElements = this.domElement.querySelectorAll('p');
    this.Button.textContent = "Expand";
    this.Button2.textContent = "Discard Article";
    this.Button.addEventListener('click', () => this.expandArticle());
    this.Button2.addEventListener('click', () => this.closeArticle());
  }

  expandArticle() {
    this.pElements.forEach(element => element.classList.toggle('showhide'));
  }
  closeArticle() {
    this.domElement.style.display = 'none';
  }
}


let articles = document.querySelectorAll('.article')

articles.forEach( item => {
  return new Article(item)
});
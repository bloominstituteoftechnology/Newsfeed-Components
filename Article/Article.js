class Article {
  constructor(domElement) {
    this.domElement = domElement;

    this.readButton = document.createElement('span');
    this.readButton.textContent = '[x]';
    this.readButton.className = 'readButton';
    this.domElement.appendChild(this.readButton);
    
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'Click to Expand';
    this.isExpanded = false;
    
    this.readButton.addEventListener('click', () => this.removeArticle());
    this.expandButton.addEventListener('click', () => this.toggleArticle());
  }

  toggleArticle() {
    if(!this.isExpanded){
      this.domElement.classList.add('article-open');
      this.expandButton.textContent = 'Click to Close';
      this.isExpanded = true;
    } else {
      this.domElement.classList.remove('article-open');
      this.expandButton.textContent = 'Click to Expand';
      this.isExpanded = false;
    }
  }
  removeArticle() {
    articleDiv.removeChild(this.domElement);
  }
}

const articleDiv = document.querySelector('.articles');
const articles = document.querySelectorAll('.article');

articles.forEach(article => {
  return new Article(article);
});
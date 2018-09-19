class Article {
  constructor(domElement) {
    this.expanded = false
    this.domElement = domElement
    this.expandButton = this.domElement.querySelector('.expandButton')
    this.expandButton.innerText = 'Click to expand'
    this.expandButton.addEventListener(
      'click',
      () => (this.expanded ? this.hideArticle() : this.expandArticle())
    )
    this.closeButton = this.domElement.querySelector('.close')
    this.closeButton.addEventListener('click', () => this.closeArticle())
  }

  expandArticle() {
    TweenMax.to('.article', 0.7, { height: '400px' })
    this.expanded = true
    this.expandButton.innerText = 'Click to close'
  }

  hideArticle() {
    TweenMax.to('.article', 0.7, { height: '40px' })
    this.expanded = false
    this.expandButton.innerText = 'Click to expand'
  }

  closeArticle() {
    this.domElement.style.display = 'none'
  }
}

let articles = document.querySelectorAll('.article')
articles = Array.from(articles).map(article => new Article(article))

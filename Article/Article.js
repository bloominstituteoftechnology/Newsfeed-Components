class Article {
  constructor(domElement) {
    this.expanded = false
    this.domElement = domElement
    this.expandButton = this.domElement.querySelector('.expandButton')
    this.expandButton.innerText = 'Click to expand'
    this.expandButton.addEventListener(
      'click',
      () => (this.expanded ? this.closeArticle() : this.expandArticle())
    )
  }

  expandArticle() {
    TweenMax.to('.article', 0.7, { height: '400px' })
    this.expanded = true
    this.expandButton.innerText = 'Click to close'
  }

  closeArticle() {
    TweenMax.to('.article', 0.7, { height: '40px' })
    this.expanded = false
    this.expandButton.innerText = 'Click to expand'
  }
}

let articles = document.querySelectorAll('.article')
articles = Array.from(articles).map(article => new Article(article))

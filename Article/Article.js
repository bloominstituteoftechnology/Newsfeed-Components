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
    TweenMax.to(this.domElement, 0.7, { height: '400px' })
    this.expanded = true
    this.expandButton.innerText = 'Click to close'
  }

  hideArticle() {
    TweenMax.to(this.domElement, 0.7, { height: '40px' })
    this.expanded = false
    this.expandButton.innerText = 'Click to expand'
  }

  closeArticle() {
    this.domElement.style.display = 'none'
  }
}

let articles = document.querySelectorAll('.article')
articles = Array.from(articles).map(article => new Article(article))

const articleConstructor = (props) => {
  let container = document.createElement('div')
  container.classList.toggle('article', true)

  let close = document.createElement('p')
  close.innerText = 'close'
  close.classList.toggle('close', true)
  container.appendChild(close)

  let title = document.createElement('h2')
  title.innerText = props.title
  container.appendChild(title)

  let date = document.createElement('p')
  date.innerText = new Date()
  date.classList.toggle('date', true)
  container.appendChild(date)

  let article = document.createElement('p')
  article.innerText = props.article
  container.appendChild(article)

  let expand = document.createElement('span')
  expand.classList.toggle('expandButton', true)
  container.appendChild(expand)

  // this works for some reason
  new Article(container)

  document.querySelector('.articles').appendChild(container)
}


const form = document.querySelector('.form')
form.querySelector('button').addEventListener('click', event => {
  event.preventDefault()
  articleConstructor({
    title: form.querySelector('input').value,
    article: form.querySelector('textarea').value
  })
  form.querySelector('input').value = ''
  form.querySelector('textarea').value = ''
})

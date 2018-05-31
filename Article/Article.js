// Start at `let articles`

class Article {
  constructor (article) {
    // assign this.element to the passed in article element
    this.element = article
    // create a reference to the ".expandButton" class.
    this.expandButton = this.element.querySelector('.expandButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = '<strong>Expand</strong>'
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle)
  }

  expandArticle () {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    if (!this.parentNode.classList.contains('article-open')) {
      this.parentNode.classList.add('article-open')
      this.lastChild.innerHTML = '<strong>Close</strong>'
      TweenMax.fromTo(
        this.parentNode.children[2],
        1,
        {
          opacity: 1,
          y: -400
        },
        { y: 0 }
      )

      TweenMax.fromTo(
        this.parentNode.children[3],
        1,
        {
          opacity: 1,
          y: -700
        },
        { y: 0 }
      )

      TweenMax.fromTo(
        this.parentNode.children[4],
        1,
        {
          opacity: 1,
          y: -400
        },
        { y: 0 }
      )
    } else {
      this.parentNode.classList.remove('article-open')
      this.lastChild.innerHTML = '<strong>Expand</strong>'
    }
  }
}
// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article')
console.log(articles)
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map((article) => new Article(article))
console.log(articles)

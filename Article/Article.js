// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
    constructor(domElement) {
        // Set Props
        this.domElement = domElement;

        this.expandButton = this.domElement.querySelector('.expandButton');

        // Set Values
        this.expandButton.innerHTML = 'expand';

        // Event Handlers
        this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    }

    // Methods
    expandArticle() {
        this.domElement.classList.toggle('article-open');
    }
}

// Selectors
let articles = document.querySelectorAll('.article');


articles = Array.from(articles).map(article => {
    return article = new Article(article);
});
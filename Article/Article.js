// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

const createArticle = function(articleElement) {
  const article = {
    __proto__: articleProto,
    articleElement: articleElement,
    expandButton: articleElement.querySelector('.expandButton'),
  };

  article.expandButton.textContent = 'Expand';
  article.registerEventHandlers();

  return article;
};

const articleProto = {
  registerEventHandlers: function() {
    this.articleElement.addEventListener('click', this.toggleExpandArticle);
  },

  toggleExpandArticle: (event) => {
    if (event.target.classList.contains('expandButton')) {
      event.currentTarget.classList.toggle('article-open');
    }
  }
};

const articles = [...document.querySelectorAll('.article')].map(elem => {
  return createArticle(elem);
});

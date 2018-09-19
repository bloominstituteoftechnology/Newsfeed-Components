class NewArticle {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.date = Date.now();
  }
}

// Form selectors
const articleTitle = document.querySelector('#articleTitle');
const articleContent = document.querySelector('#articleContent');
const submitArticle = document.querySelector('.form-btn');

submitArticle.addEventListener('click', () => {
  console.log('hello');
  console.log(articleTitle.value);
  console.log(articleContent.value);
  //
  const newArticle = new NewArticle(articleTitle.value, articleContent.value);
  const article = document.createElement('div');
  article.className = 'article';
  article.innerHTML = `
  <h2>${newArticle.title}</h2>
  <p class="date">${newArticle.date}</p>
  <div class="close">Close</div>
  <p>${newArticle.body}</p>
  <span class='expandButton'></span>
  `;
  const articles = document.querySelector('.articles');
  articles.prepend(article);
});

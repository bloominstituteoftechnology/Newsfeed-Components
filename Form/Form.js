(function() {
  const submitButton = document.querySelector('#submitBtn');
  let articles = document.querySelectorAll('.article');
  const form = document.querySelector('.form-container');
  const title = document.querySelector('#titleInput');
  const content = document.querySelector('#bodyInput');
  const addButton = document.querySelector('#buttonAdd');
  const page = document.querySelector('.articles');

  addButton.addEventListener('click', e => {
    articles.forEach(e => e.style.display = 'none') 
    form.style.display = 'block';
    addButton.style.display = 'none';
  });

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (title.value && content.value) {
      const titleValue = title.value;
      title.value = null;
      const contentValue = content.value;
      content.value = null;
      let date = new Date();
      date = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;

      let newArticle = new ArticleGenerator({
        'h2': titleValue,
        'date': date,
        'content': [contentValue]
      })

      new Article(newArticle.domElement);
      page.prepend(newArticle.domElement);
      articles = document.querySelectorAll('.article');
    }

    articles.forEach(e => e.style.display = null);
    form.style.display = null;
    addButton.style.display = null;
  })
})();
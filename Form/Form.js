(function() {
  const submitButton = document.querySelector('#submitBtn');
  let articles = document.querySelectorAll('.article');
  const form = document.querySelector('.form-container');
  const title = document.querySelector('#titleInput');
  const content = document.querySelector('#bodyInput');
  const addButton = document.querySelector('#buttonAdd');
  const page = document.querySelector('.articles');

  addButton.addEventListener('click', e => {
    TweenLite.to([articles, addButton], .8, {opacity:0, display:'none', ease:Power1.easeOut});
    TweenLite.to(form, .8, {display:'block', ease:Power1.easeOut, delay:.8})
    TweenLite.to(form, .8, {opacity:1, ease:Power1.easeOut, delay:.8})
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
      newArticle.domElement.style.display = 'none';
      newArticle.domElement.style.opacity = 0;
      page.prepend(newArticle.domElement);
      articles = document.querySelectorAll('.article');
    }

    form.style.display = null;

    articles.forEach(e => e.style.display = null);
    addButton.style.display = null;
    TweenLite.to([articles, addButton], .8, {opacity:1, ease:Power1.easeOut, delay:.81})
  })
})();
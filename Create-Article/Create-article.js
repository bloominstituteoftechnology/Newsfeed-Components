//Open & Close Editor
const createArticlebtn = document.querySelector('.create-article');
const closeEditorBtn = document.querySelector('.carticle-close');
const editor = document.querySelector('.carticle-cont');

createArticlebtn.addEventListener('click', _ => {
  editor.style.display = 'flex';
});

closeEditorBtn.addEventListener('click', _ => {
  editor.style.display = 'none';
});

//Find Inputs & Call create Article
const addArticleBtn = document.querySelector('.carticle-create');
const createTitle = document.querySelector('.carticle-title');
const createBody = document.querySelector('.carticle-body');

addArticleBtn.addEventListener('click', _ => {
  createArticle(createTitle.value, createBody.value);
  articles = document.querySelectorAll('.article').forEach(article => new Article(article));
  editor.style.display = 'none';
});

//Create Article Component
function createArticle(title, body){
  const artCont = document.createElement('div');
  artCont.classList.add('article');

  const artCloseBtn = document.createElement('i');
  artCloseBtn.classList.add('fas');
  artCloseBtn.classList.add('fa-times');
  artCloseBtn.classList.add('article-close');
  artCont.append(artCloseBtn);

  const artTitle = document.createElement('h2');
  artTitle.textContent = title;
  artCont.append(artTitle);

  const d = new Date();
  const theDate = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
  const artDate = document.createElement('p');
  artDate.classList.add('date');
  artDate.textContent = theDate;
  artCont.append(artDate);

  const artBody = document.createElement('p');
  artBody.textContent = body;
  artCont.append(artBody);

  const artExpandBtn = document.createElement('span');
  artExpandBtn.classList.add('expandButton');
  artCont.append(artExpandBtn);

  document.querySelector('.articles').append(artCont);
}
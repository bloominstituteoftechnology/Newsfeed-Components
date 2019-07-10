const articlesC = document.querySelector('.articles');
console.log(articlesC);

function createNewArticle(title, date, content) {
  const articleC = document.createElement('div');
  const titleC = document.createElement('h2');
  const dateC = document.createElement('p');
  const contentC = document.createElement('p');
  const buttonC = document.createElement('span')

  articlesC.appendChild(articleC);
  articleC.appendChild(titleC);
  articleC.appendChild(dateC);
  articleC.appendChild(contentC);
  articleC.appendChild(buttonC);

  articlesC.classList.add('articles');
  articleC.classList.add('article');
  dateC.classList.add('date');
  buttonC.classList.add('expandButton');

  buttonC.textContent = 'Expand'

  buttonC.addEventListener('click', event => {
    buttonC.classList.toggle('article-open');
  })
}

const articleData = [
  {
    title: "Lambda School Students: 'We're the best!'",
    date: "Nov 5th, 2017" ,
    content: "Content"
  },
  {
    title: "Javascript and You, ES6",
    date: "Nov 7th, 2017",
    content: "Content"
  },
  {
    title: "React vs Angular vs Vue",
    date: "Nov 7th, 2017",
    content: "Content"
  },
  {
    title: "Professional Software Development in 2018",
    date: "Nov 7th, 2017",
    content: "Content"
  }
]

articlesC.appendChild(createNewArticle('title', 'date', 'content'))

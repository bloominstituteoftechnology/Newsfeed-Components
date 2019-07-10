const articlesC = document.querySelector('.articles');
console.log(articlesC);

function createNewArticle(title, date, content) {
  console.log(title, date, content);
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
  titleC.textContent = title
  contentC.textContent = content
  dateC.textContent = date

  buttonC.addEventListener('click', event => {
    articleC.classList.toggle('article-open');
  })
  return articleC
}

const articleData = [
  {
    title: "Lambda School Students: 'We're the best!'",
    date: "Nov 5th, 2017" ,
    content: "Lucas unde omnis iste natus error sit voluptatem accusantium hutt organa chabaka. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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

articleData.forEach(data => {
  articlesC.appendChild(createNewArticle(data.title, data.date, data.content))
})
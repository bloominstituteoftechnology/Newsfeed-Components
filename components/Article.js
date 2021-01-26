// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

import fakeData from "../data/fakeData"

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/


const articleMaker = (article) => {
  const articleDiv = document.createElement('div')
  const titleH2 = document.createElement('h2')
  const dateP = document.createElement('p')
  const textP1 = document.createElement('p')
  const textP2 = document.createElement('p')
  const textP3 = document.createElement('p')
  const buttonPlus = document.createElement('span')

  articleDiv.classList.add('article')
  dateP.classList.add('date')
  buttonPlus.classList.add('expandButton')

  titleH2.textContent = article.title
  dateP.textContent = article.date
  textP1.textContent = article.firstParagraph
  textP2.textContent = article.secondParagraph
  textP3.textContent = article.thirdParagraph
  buttonPlus.textContent = '+'

  articleDiv.appendChild(titleH2)
  articleDiv.appendChild(dateP)
  articleDiv.appendChild(textP1)
  articleDiv.appendChild(textP2)
  articleDiv.appendChild(textP3)
  articleDiv.appendChild(buttonPlus)

  //  This listener should toggle the class 'article-open' on div.article.
  buttonPlus.addEventListener('click', evnt => {
    articleDiv.classList.toggle('article-open')
  })

  return articleDiv
}

const container = document.querySelector('.articles')

fakeData.forEach(item => {
  const newArticle = articleMaker(item)
  container.appendChild(newArticle)
})

// console.log(container)
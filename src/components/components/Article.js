// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from '../dummydata'
import menuMaker from './Menu'

const articleDiv = document.querySelector('div.articles')
const expandingbutton = document.querySelector('.expandButton')

const articleMaker = ({ title, date, firstParagraph, secondParagraph, thirdParagraph }) => {

  const panel = document.createElement('div')
  const headTitle = document.createElement('h2')
  const theDate = document.createElement('p')
  const paragraph1 = document.createElement('p')
  const paragraph2 = document.createElement('p')
  const paragraph3 = document.createElement('p')
  const spanButton = document.createElement('span')

  panel.appendChild(headTitle)
  panel.appendChild(theDate)
  panel.appendChild(paragraph1)
  panel.appendChild(paragraph2)
  panel.appendChild(paragraph3)
  panel.appendChild(spanButton)

  headTitle.textContent = title
  theDate.textContent = date
  paragraph1.textContent = firstParagraph
  paragraph2.textContent = secondParagraph
  paragraph3.textContent = thirdParagraph

  panel.classList.add('article')
  theDate.classList.add('date')
  spanButton.classList.add('expandButton')

  expandingbutton.addEventListener('click', () => {
    expandingbutton.classList.add('article-open')
  })

  return panel

}

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
data.forEach(articles => {
  articleDiv.appendChild(articleMaker(articles))
})

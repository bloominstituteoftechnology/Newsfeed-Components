// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import articleData from './data.js';

  // Step 1: Write a component called 'articleMaker' to create an article.
  // Your component is a function that takes an article object as its only argument,
  // and returns a DOM node looking like the one below:
function articleMaker({ title, date, firstParagraph, secondParagraph, thirdParagraph }) {
  const article = document.createElement('div');
  const header = document.createElement('h2');
  const articleDate = document.createElement('p');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const button = document.createElement('span');

  article.appendChild(header);
  article.appendChild(articleDate);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(button);

  article.classList.add('.article');
  articleDate.classList.add('.date');
  button.classList.add('.expandButton');

  button.addEventListener('click', () => {
    article.classList.toggle('.article-open');
  });

  console.log(article);

  return article;
}

articleData.forEach(article => {
  const newArticle = articleMaker(article);
  document.querySelector('.articles').appendChild(newArticle);
})

  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>

  //   {three separate paragraph elements}

  //   <span class="expandButton">+</span>
  // </div>

  // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  // This listener should toggle the class 'article-open' on div.article.

  // Step 3: Don't forget to return something from your function!

  // Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  // to create a div.article element and append it to the DOM inside div.articles (see index.html).

  // Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  // Refresh the page to see the new article.


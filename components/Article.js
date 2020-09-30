// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import {data} from './data.js';

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

function articleMaker(article) {
  let newArticle = document.createElement("div");
  newArticle.classList.add("article");
  let h2 = document.createElement("h2");
  h2.textContent = `${article.title}`;
  function paragraphMaker(text, classToAdd) {
    let p = document.createElement("p"); 
    p.textContent = `${text}`;
    if (classToAdd) p.classList.add(`${classToAdd}`);
    return p;
  }
  let date = paragraphMaker(article.date, "date");
  let firstParagraph = paragraphMaker(article.firstParagraph);
  let secondParagraph = paragraphMaker(article.secondParagraph);
  let thirdParagraph = paragraphMaker(article.thirdParagraph);
  let span = document.createElement("span");
  span.classList.add("expandButton");
  span.textContent = "+"
  span.addEventListener("click", openArticle);
  function openArticle(e) {
    e.target.parentElement.classList.toggle("article-open");
  }
  let components = [h2, date, firstParagraph, secondParagraph, thirdParagraph, span];
  components.forEach(el => newArticle.appendChild(el));
  return newArticle;
}

for (let i of data) {
  let articles = document.getElementsByClassName("articles")[0];
  articles.appendChild(articleMaker(i));
}
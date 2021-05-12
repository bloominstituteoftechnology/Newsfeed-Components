import data from "../modules/data";
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

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
*/

function articleMaker(articleObj) {
  const articleDiv = document.createElement("div");
  articleDiv.classList.add("article");

  const articleH2 = document.createElement("h2");
  articleH2.innerText = articleObj.title;
  articleDiv.appendChild(articleH2);

  const articleDate = document.createElement("p");
  articleDate.innerText = articleObj.date;
  articleDate.classList.add("date");
  articleDiv.appendChild(articleDate);

  const paragraph1 = document.createElement("p");
  paragraph1.innerText = articleObj.firstParagraph;
  articleDiv.appendChild(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.innerText = articleObj.secondParagraph;
  articleDiv.appendChild(paragraph2);

  const paragraph3 = document.createElement("p");
  paragraph3.innerText = articleObj.thirdParagraph;
  articleDiv.appendChild(paragraph3);

  const expandButton = document.createElement("span");
  expandButton.innerText = "+";
  expandButton.classList.add("expandButton");
  expandButton.addEventListener("click", (event) => {
    event.preventDefault();
    articleDiv.classList.toggle("article-open");
  });
  articleDiv.appendChild(expandButton);

  return articleDiv;
}

const articleWrapper = document.querySelector("div.articles");

data.map((item) => {
  const article = articleMaker(item);
  articleWrapper.appendChild(article);
});

console.log(articleWrapper);

/*
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

import data from "./data";

const articles = document.querySelector(".articles");

function articleMaker(obj) {
  // instantiate new elements
  const article = document.createElement("div");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const firstParagraph = document.createElement("p");
  const secondParagraph = document.createElement("p");
  const thirdParagraph = document.createElement("p");
  const expandButton = document.createElement("span");

  // set up structure of new elements
  article.append(title, date, firstParagraph, secondParagraph, thirdParagraph, expandButton);

  // assign classes to new elements
  article.classList.add("article");
  date.classList.add("date");
  expandButton.classList.add("expandButton");

  // add text content

  title.textContent = obj.title;
  date.textContent = obj.date;
  firstParagraph.textContent = obj.firstParagraph;
  secondParagraph.textContent = obj.secondParagraph;
  thirdParagraph.textContent = obj.thirdParagraph;
  expandButton.textContent = 'Click Here';

  // add event listener(step 3)
  expandButton.addEventListener("click", () => {
    article.classList.toggle("article-open")
  })

return article
}
  // iterate over data and create new articles and append to DOM
data.forEach(item => {
  articles.append(articleMaker(item))
})
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

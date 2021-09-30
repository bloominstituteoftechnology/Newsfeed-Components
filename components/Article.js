// This is the data we will be using to create our articles. Look at it, then proceed to line 93 (7).
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

import articleData from '../data/articleData';

const articles = document.querySelector('.articles');

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:*/
    
function articleMaker(data) {
    
    const article = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const paragraphs = document.createElement('div');
    const expandButton = document.createElement('span');

    articleTitle.textContent = data.title;
    articleDate.textContent = data.date;
    paragraphs.innerHTML = ` 
    <div>   
      <div>${data.firstParagraph}</div>
      <div>${data.secondParagraph}</div>
      <div>${data.thirdParagraph}<div>
    </div>`;
    expandButton.textContent = '+';

    article.appendChild(articleTitle);
    article.appendChild(articleDate);
    article.appendChild(paragraphs);
    article.appendChild(expandButton);

    article.classList.add('article', 'article-open');
    articleDate.classList.add('date');
    paragraphs.classList.add();
    expandButton.classList.add('expandButton');
 
/*
  <div class="article">
      <h2>{title of the article}</h2>
      <p class="date">{date of the article}</p>

      {three separate paragraph elements}

      <span class="expandButton">+</span>
  </div> 

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article. */
  expandButton.addEventListener('click', event => {
    article.classList.toggle('article-open');    
  })

/*
  Step 3: Don't forget to return something from your function! */

  return article;
}

const testArticle = articleMaker(articleData);

console.log('testArticle: ', testArticle);

/*
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html). */

  const articleElements = articleData.map(elem => {
    return articleMaker(elem);
  })
  
  console.log(articleElements);
  
  articleElements.forEach(elemToAdd => {
    articles.appendChild(elemToAdd);
  });

/*
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

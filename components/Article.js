// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

import data from './data';
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

function articleMaker(obj)
{ 
  const article = document.createElement('div'); 
  const title = document.createElement('h2');
  const date = document.createElement('p');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p'); 
  const expandButton = document.createElement('span');

  article.classList.add('article');
  date.classList.add('date');
  expandButton.classList.add('expandButton');
  paragraph1.classList.add('text-content', 'paragraph1');
  paragraph2.classList.add('text-content', 'paragraph2');
  paragraph3.classList.add('text-content', 'paragraph3');

  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(paragraph1);
  article.appendChild(paragraph2);
  article.appendChild(paragraph3);
  article.appendChild(expandButton);

  date.textContent = obj.date;
  title.textContent = obj.title;
  paragraph1.textContent = obj.firstParagraph;
  paragraph2.textContent = obj.secondParagraph;
  paragraph3.textContent = obj.thirdParagraph; 
  expandButton.textContent = "+";

  expandButton.addEventListener('click', (e) =>
  { 
    article.classList.toggle('article-open');
  })

  return article;
}

/*

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

data.forEach((item) => 
{ 
  document.querySelector('.articles').append(articleMaker(item));
})

const newData = {
  title: 'Test Add',
    date: 'Jan 20st, 2016',
    firstParagraph: `This is a test `,

    secondParagraph: `Also test `,

    thirdParagraph: `still test`
}

document.querySelector('.articles').append(articleMaker(newData));
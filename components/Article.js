// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import {data} from './Data.js';

data.push({
  title: 'Lorem Ipsum"',
  date: 'Dec 2nd, 2020',
  firstParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada nisi odio, in rutrum elit aliquet et. Sed ornare, velit faucibus rhoncus congue, eros nisi porttitor libero, in lacinia felis velit ut dui. Nullam ex orci, varius in sollicitudin eget, tempus a elit. Aenean magna risus, convallis in elit eu, ornare gravida felis. Vivamus dignissim porta ipsum id bibendum. Proin eu efficitur nisl. Morbi viverra arcu at ligula malesuada venenatis. Vestibulum at ante sed ligula vestibulum porta. Nam vitae placerat tortor, in mattis tortor. Aenean nibh felis, faucibus at tincidunt sed, congue vel urna. Maecenas nec malesuada mauris, vel tempor eros. Curabitur egestas, ante nec lobortis ullamcorper, sem odio euismod ligula, et egestas turpis sapien ac lorem. Suspendisse in hendrerit risus. Phasellus porttitor sollicitudin vestibulum. Aenean imperdiet fermentum velit, eget scelerisque sapien maximus quis.`,

  secondParagraph: `Suspendisse elementum sodales odio. Proin non nulla sodales, consequat nibh in, fringilla est. In vitae eros vitae sapien vestibulum dictum id ut lorem. Integer ullamcorper in tellus nec pharetra. Proin feugiat tortor sem, non cursus sapien convallis vel. Nulla orci augue, placerat vitae enim nec, aliquam feugiat erat. Duis gravida metus sed ex consequat, non dapibus mauris lobortis. Donec dignissim odio sed enim porttitor fermentum. Nunc vehicula auctor mi et laoreet. Sed non pretium odio. Mauris eu elit in ex aliquet varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tellus quam, semper eleifend enim vitae, eleifend commodo purus. Donec ullamcorper iaculis augue sit amet convallis. Donec sit amet lacus nec mauris accumsan mattis. Mauris facilisis semper elit et congue.`,

  thirdParagraph: `Vestibulum eget egestas diam, a consequat ex. In nec lorem sit amet ipsum efficitur euismod a in risus. Sed tempor urna sollicitudin dolor tincidunt, id finibus orci pharetra. Sed placerat condimentum quam a facilisis. Morbi ullamcorper pharetra dapibus. Vivamus lacinia ut mauris ut aliquet. Donec viverra sollicitudin sapien eget interdum. Maecenas neque tortor, dictum at enim in, auctor viverra eros. Phasellus id suscipit lacus. Ut faucibus arcu non magna rhoncus, nec laoreet eros scelerisque. Vivamus vitae pulvinar metus. Integer fringilla dapibus eros a vulputate. Donec urna orci, vestibulum condimentum iaculis non, semper vitae lacus. Maecenas elementum, metus ut interdum ullamcorper, tellus tellus aliquam leo, cursus ultrices ipsum augue viverra ex. Mauris dignissim erat at elementum sodales. Donec ornare efficitur lorem.`
});
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


function articleMaker(articleObj){
  const article = document.createElement("div");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const expandButton = document.createElement("span");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  const paragraph3 = document.createElement("p");

  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(paragraph1);
  article.appendChild(paragraph2);
  article.appendChild(paragraph3);
  article.appendChild(expandButton);

  article.classList.add("article");
  date.classList.add("date");
  expandButton.classList.add("expandButton");

  title.textContent = articleObj.title;
  date.textContent = articleObj.date;
  paragraph1.textContent = articleObj.firstParagraph;
  paragraph2.textContent = articleObj.secondParagraph;
  paragraph3.textContent = articleObj.thirdParagraph;
  expandButton.textContent = "+";
  expandButton.style.fontSize = "2em";

  expandButton.addEventListener("mouseup", event =>{
    article.classList.toggle("article-open");
  });

  
  return article;
}

const articles = document.querySelector(".articles");

data.forEach(item => {
  articles.appendChild(articleMaker(item));
});

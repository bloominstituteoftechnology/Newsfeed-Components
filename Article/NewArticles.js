const mainArticles = document.querySelector('.articles');
const newArticle = document.createElement('div');
newArticle.classList.add('article');

const newArticleH2 = document.createElement('h2');
newArticleH2.innerText = 'DOM';

const newArticleDate = document.createElement('p');
newArticleDate.classList.add('date');
newArticleDate.innerText = 'Sep 6th, 2018';

const newArticleP = document.createElement('p');
newArticleP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem eget erat molestie luctus.';

const newArticleP2 = document.createElement('p');
newArticleP2.innerText = 'Donec in leo id est vehicula posuere. Donec condimentum pretium urna. Suspendisse nec sodales libero, quis efficitur felis.';

const newArticleP3 = document.createElement('p');
newArticleP3.innerText = 'Donec vestibulum tellus mi, vitae aliquet nibh tristique nec. Maecenas pellentesque id diam a vestibulum. Maecenas neque metus, interdum vel euismod sit amet, hendrerit in erat.';

const newArticleExpand = document.createElement('span');
newArticleExpand.classList.add('expandButton');
newArticleExpand.innerText = 'expand';

newArticle.appendChild(newArticleH2);
newArticle.appendChild(newArticleDate);
newArticle.appendChild(newArticleP);
newArticle.appendChild(newArticleP2);
newArticle.appendChild(newArticleP3);
newArticle.appendChild(newArticleExpand);

mainArticles.prepend(newArticle);





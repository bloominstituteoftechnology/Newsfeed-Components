articles = [
  {
    title: 'Brand New Title',
    date: 'Nov 5th, 2017',
    paragraph1: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
    paragraph2: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
  },
  {
    title: 'Amazing Article',
    date: 'Apr 13th, 2018',
    paragraph1: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
    paragraph2: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
  },
  {
    title: 'Stunning News Yall',
    date: 'Dec 22nd, 2018',
    paragraph1: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
    paragraph2: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
  }
];

class Article {
  constructor(data) {
    this.article = data;  
    this.articleContainer = document.querySelector('.articles');

    this.articleDiv = document.createElement('div');
    this.articleDiv.className = 'article';

    this.articleTitle = document.createElement('h2');
    this.articleTitle.textContent = data.title;
    this.articleDiv.appendChild(this.articleTitle);

    this.articleDate = document.createElement('p');
    this.articleDate.className = 'date';
    this.articleDate.textContent = data.date;
    this.articleDiv.appendChild(this.articleDate);

    this.articleParagraph1 = document.createElement('p');
    this.articleParagraph1.textContent = data.paragraph1;
    this.articleParagraph1.className = 'content';
    this.articleDiv.appendChild(this.articleParagraph1);
    
    this.articleParagraph2 = document.createElement('p');
    this.articleParagraph2.textContent = data.paragraph2;
    this.articleParagraph2.className = 'content';
    this.articleDiv.appendChild(this.articleParagraph2);
    
    this.expandButton = document.createElement('span');
    this.expandButton.textContent = 'Click to Expand';
    this.expandButton.className = 'expandButton';
    this.isExpanded = false;
    this.expandButton.addEventListener('click', () => this.toggleArticle());
    this.articleDiv.appendChild(this.expandButton);

    this.readButton = document.createElement('span');
    this.readButton.textContent = '[x]';
    this.readButton.className = 'readButton';
    this.readButton.addEventListener('click', () => this.removeArticle());
    this.articleDiv.appendChild(this.readButton);

    this.articleContainer.prepend(this.articleDiv);
  }
  toggleArticle() {
    if(!this.isExpanded){
      this.articleDiv.classList.add('article-open');
      this.expandButton.textContent = 'Click to Close';
      this.isExpanded = true;
    } else {
      this.articleDiv.classList.remove('article-open');
      this.expandButton.textContent = 'Click to Expand';
      this.isExpanded = false;
    }
  }
  removeArticle() {
    this.articleContainer.removeChild(this.articleDiv);
  }
}

// Article Input Form

function handleFormSubmit() {
  const titleInput = document.querySelector('.title-input');
  const dateInput = document.querySelector('.date-input');
  const contentInput = document.querySelector('.content-input');

  const newArticleData = {
    title: titleInput.value,
    date: dateInput.value,
    paragraph1: contentInput.value,
  };
  
  titleInput.value = '';
  dateInput.value = '';
  contentInput.value = '';
  
  if (newArticleData.title && newArticleData.date && newArticleData.paragraph1) {
    return new Article(newArticleData);
  }
}

const submit = document.querySelector('.submit-article');
submit.addEventListener('click', () => handleFormSubmit());

// Render Articles Array

function renderArticles(array) {
  array.map(articleData => new Article(articleData));
}

renderArticles(articles);
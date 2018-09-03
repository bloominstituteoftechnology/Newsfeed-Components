// Start at `let articles`

class Article {
    constructor(element) {
        // assign this.element to the passed in article element
        this.element = element;

        // create a reference to the ".expandButton" class.
        this.expandButton = element.querySelector('.expandButton');
        // Using your expandButton reference, update the text on your expandButton to say "expand"

        this.expandButton.innerHTML = "EXPAND";

        // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
        this.expandButton.addEventListener('click', () => this.expandArticle());

    }

    expandArticle() {
        // Using our reference to the article element, add or remove a class to expand or hide the article.
        this.element.classList.toggle('article-open');
        this.expandButton.innerHTML = this.expandButton.innerHTML === "EXPAND" ? "COLLAPSE" : "EXPAND"
    }
}


// START HERE: Select all classes named ".article" and assign that value to the articles variable
const render = () => {
    let articles = document.getElementsByClassName('article');
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
    Array.from(articles).map(article => new Article(article));
};

const addArticle = (props) => {
    let articles = document.querySelector('.articles'),
        newArticle = document.createElement('div'),
        title = document.createElement('h2'),
        date = document.createElement('p'),
        para1 = document.createElement('p'),
        para2 = document.createElement('p'),
        button = document.createElement('span');

    title.innerHTML = props.titleText;
    date.innerHTML = props.dateText;
    para1.innerHTML = props.para1Text;
    para2.innerHTML = props.para2Text;
    newArticle.classList.add('article');
    date.classList.add('date');
    button.classList.add('expandButton');
    newArticle.appendChild(title);
    newArticle.appendChild(date);
    newArticle.appendChild(para1);
    newArticle.appendChild(para2);
    newArticle.appendChild(button);

    articles.appendChild(newArticle);
    render();
};

render();

let button = document.querySelector('.add');
button.addEventListener('click', () => addArticle({
    titleText: "New Article",
    dateText: "Sep 3 2018",
    para1Text: "Article text 1",
    para2Text: "Article text 2"
}));

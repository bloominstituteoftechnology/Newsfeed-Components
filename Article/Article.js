// Start at `let articles`

class Article {
	constructor(element) {
		// assign this.element to the passed in article element
		this.element = element;
		// create a reference to the ".expandButton" class. 
		this.expandButton = this.element.querySelector('.expandButton');
		this.closeButton = this.element.querySelector('.close');
		// Using your expandButton reference, update the text on your expandButton to say "expand"
		this.expandButton.innerText = 'Click to expand';
		// // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
		this.expandButton.addEventListener('click', ()=>this.expandArticle());
		this.closeButton.addEventListener('click', () =>this.removeArticle());
	}

	expandArticle() {
		// Using our reference to the article element, add or remove a class to expand or hide the article.
		this.element.classList.toggle('article-open');
		console.log(this.element.classList);
		if (this.element.classList[1] === 'article-open' && this.element.classList.length > 1){
			this.expandButton.innerText = 'Click to close';
		} else {
			this.expandButton.innerText = 'Click to expand';
		}
	}
	removeArticle() {
		this.element.style.display = 'none';
	}
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

// function buildArticle(title, date, content){
// 	let articleDiv = document.createElement("div"); 
// 	let closeButton = document.createElement("button");
// 	let h2Title = document.createElement("h2");
// 	let pDate = document.createElement("p");
// 	let pContent = document.createElement("p");
// 	let expandButton = document.createElement("span");

// 	var buttonContent = document.createTextNode("X");
// 	var titleContent = document.createTextNode(title);
// 	var dateContent = document.createTextNode(date);
// 	var contentContent = document.createTextNode(content);
// 	var expandContent = document.createTextNode("Click to expand");
// 	// add the text node to the newly created div
// 	articleDiv.appendChild(closeButton);
// 	articleDiv.appendChild(title);
// 	articleDiv.appendChild(date);
// 	articleDiv.appendChild(expandButton);
// 	closeButton.appendChild(buttonContent);
// 	h2Title.appendChild(titleContent);
// 	pDate.appendChild(dateContent);
// 	pContent.appendChild(contentContent);
// 	expandButton.appendChild(expandContent);

// 	// add the newly created element and its content into the DOM 
// 	return articleDiv;
// }

// console.log(buildArticle('abcd', 'date', 'asdofiasjdf'));
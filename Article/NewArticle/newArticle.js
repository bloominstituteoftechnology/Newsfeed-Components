function newArticleMaker() {
	let newArticle = document.createElement('form');
	newArticle.classList.add('new-article');
	newArticle.name = 'new-article-form';

	let newArticleHeading = document.createElement('h2');
	newArticleHeading.textContent = 'Post New Article';
	newArticle.appendChild(newArticleHeading);

	let newTitle = document.createElement('input');
	newTitle.setAttribute('type', 'text');
	newTitle.setAttribute('placeholder', 'Title:');
	newArticle.appendChild(newTitle);

	let newDate = document.createElement('input');
	newDate.setAttribute('type', 'text');
	newDate.setAttribute('placeholder', 'date');
	newArticle.appendChild(newDate);

	let newFirstParagraph = document.createElement('textarea');
	newFirstParagraph.setAttribute('placeholder', 'First Paragraph:');
	newArticle.appendChild(newFirstParagraph);

	let newSecondParagraph = document.createElement('textarea');
	newSecondParagraph.setAttribute('placeholder', 'Second Paragraph:');
	newArticle.appendChild(newSecondParagraph);

	let newThirdParagraph = document.createElement('textarea');
	newThirdParagraph.setAttribute('placeholder', 'Third Paragraph:');
	newArticle.appendChild(newThirdParagraph);

	function createNewArticle(e) {
		let newArticleText = {
			title: newTitle.value,
			date: newDate.value,
			firstParagraph: newFirstParagraph.value,
			secondParagraph: newSecondParagraph.value,
			thirdParagraph: newThirdParagraph.value,
		};
		data.push(newArticleText);
		articles.appendChild(articleMaker(data[data.length - 1]));
		document.forms['new-article-form'].reset();
		e.preventDefault();
		console.log(newArticleText);
		console.log(data);
	}

	let submit = document.createElement('input');
	submit.setAttribute('type', 'submit');
	newArticle.appendChild(submit);
	submit.addEventListener('click', createNewArticle);

	const newArticleButton = document.querySelector('.new-article-button');
	newArticleButton.addEventListener('click', (e) => {
		newArticle.classList.toggle('new-article--open');
	});

	return newArticle;
}

header.appendChild(newArticleMaker(menuItems));

class Article {
    constructor(heading, date, body) {
        this.heading = attrs.heading;
        this.date = attrs.date;
        this.body = attrs.body;
    }
}

const createArticle = (formInputs) => {
    let formID = document.querySelector("#articleForm");
    let articles = document.querySelector(".articles");
    let heading = formID.elements.articleHeading.value;
    let date = formID.elements.articleDate.value;
    let body = formID.elements.articleBody.value;

    let article = new Article(heading, date, body);

    formID.appendChild(article);
}
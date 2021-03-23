import data from "./Article.js";

let articleHTML = data.map((article) => {
    // container
    const articleContainer = document.createElement("div");
    articleContainer.className = "article";
    // title element
    const articleTitle = document.createElement("h2");
    articleTitle.innerText = article.title;
    // date element
    const articleDate = document.createElement("p");
    articleDate.className = "date";
    articleDate.innerText = article.date;
    // paragraphs
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const paragraph3 = document.createElement("p");
    paragraph1.innerText = article.firstParagraph;
    paragraph2.innerText = article.secondParagraph;
    paragraph3.innerText = article.thirdParagraph;
    // button 
    const button = document.createElement("span");
    button.className = "expandButton";
    button.innerText = "+";
    button.addEventListener("click", () => {
        articleContainer.className.includes("article-open") ? articleContainer.className.replace("article-open","") : articleContainer.className += "article-open";
    });
    articleContainer.append(articleTitle, articleDate, paragraph1, paragraph2, paragraph3, button);
    return articleContainer;
})
const articleHTMLContainer = document.querySelector(".articles");
articleHTML.forEach((article) => {
    articleHTMLContainer.append(article);
})
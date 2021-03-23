import data from "./Article";

data.map((article) => {
    const articleContainer = document.createElement("div");
    articleContainer.className = article.title;
})
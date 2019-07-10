const articleData = [
    {title: "Lambda School Students: We are the best!",
    date: "Nov 5th, 2017",
    content: "Lucas ipsum dolor sit amet ben twilek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker land"
    },

    {title: "Javascript and You, ES6",
    date:"Nov 7th, 2017",
    content: "Lucas ipsum dolor sit amet ben twilek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker land"
    }
]


const articles = document.querySelector('.articles');

articleData.forEach(data=>{
    console.log('creating articles:', data.title)
    articles.appendChild(createArticles(data.title, data.date, data.content))
})


function createArticles(title,date,content){
    const articleComponent = document.createElement('div')
    const article = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const articleContent = document.createElement('p');
    const expandButton = document.createElement('span');

articleComponent.appendChild(article)
article.appendChild(articleTitle)
article.appendChild(articleDate)
article.appendChild(articleContent)
article.appendChild(expandButton)

article.classList.add('article')
articleDate.classList.add('date')
expandButton.classList.add('expandButton')

articleTitle.textContent = title
articleDate.textContent = date
articleContent.textContent = content
expandButton.textContent = "expand"

expandButton.addEventListener('click', ()=>{
    // console.log('expand clicked', event.target)
    articleContent.classList.toggle("article-open")
})

return articleComponent
}


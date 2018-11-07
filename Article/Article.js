// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.article .expandButton')

    // Using your expandButton reference, update the text on your expandButton to say "expand"


    this.expandButton.innerHTML = "Expand";

    this.expandButton.addEventListener('click', this.expandArticle.bind(this))

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    
  }

  expandArticle() {
    // for(i=0;i<textContent.length;i++){
    //   console.log(textContent[i])
      
    // }
    // this.articleDOM.classList.toggle('.article-open')
    // console.log(this.textContent)
    this.domElement.classList.toggle('article-open') 
  }

    // Using our reference to the domElement, toggle a class to expand or hide the article.
}



/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.articles .article');

articles.forEach(function(articlesss){
  return new Article(articlesss)
})
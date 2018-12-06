// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    this.content = this.domElement.querySelector('.news-content');
    this.remove = this.domElement.querySelector('.remove');

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', (e) => this.expandArticle(e));    

    // Setting click handler to remove the article
    this.remove.addEventListener('click', (e) => this.removeArticle(e));    
    
    
  }//End of constructor

  removeArticle(e) {
    setTimeout(() => {this.domElement.style.display = 'none'},400);
    TweenMax.to(this.domElement, 0.5, {
      opacity:0,
    });
  }//End of remove method

  expandArticle(e) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log(e.target)
    // $(this.content).toggle( "slow")

    if(this.domElement.classList.contains('article-open')){
      articles.forEach((e)=>{
        e.classList.remove('article-open');
      });  
    }else{
      articles.forEach((e)=>{
        e.classList.remove('article-open');
      });  
      this.domElement.classList.add('article-open');

    }
  }//End of expandArticle method
}// End of Class

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
// console.log(articles);

articles.forEach(domElement => {return new Article(domElement);})
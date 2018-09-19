// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"


class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton  = this.domElement.querySelector('.expandButton');
 
    // Using your expandButton reference, update the text on your expandButton to say "expand"
      this.expandButton.innerText = "Click to Expand"
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());    

    let newElement = document.createElement("span");
    newElement.className = 'close';
    newElement.innerText = "Close";
    this.domElement.append(newElement);
    
    this.close  = this.domElement.querySelector('.close');
    this.close.addEventListener('click', () => this.closeArticle());    

  }

  closeArticle() {
    this.domElement.style.display = "none";
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.

    if (this.domElement.classList.contains("article-open")){
      this.domElement.classList.toggle("slideOut");
      this.domElement.classList.toggle("article-open");  
      this.expandButton.innerText = "Click to Expand";
    }
     
    else{
      this.domElement.classList.toggle("article-open");  
      this.domElement.classList.toggle("slideIn");
      this.expandButton.innerText = "Click to Collapse";
      }
  }
}



function buildArticle(h2Text, pArray){
  let divElement = document.createElement("div");
  divElement.className = 'article';
 
  let h2Element = document.createElement("h2");
   h2Element.innerText = h2Text;
  divElement.append(h2Element);
 
  let pElement = document.createElement("p");
  pElement.className = 'date';
  pElement.innerText = "Sept 19, 2018";
  divElement.append(pElement);

 
  for (let i=0; i < pArray.length; i++){
    pElement = document.createElement("p");
    pElement.innerText = pArray[i];
    divElement.append(pElement);
  }

  let spanElement = document.createElement("span");
  spanElement.className = 'expandButton';
  spanElement.innerText = "Click to Expand";
  divElement.append(spanElement);

 
  console.log(divElement);
return divElement;
}

let createArticle = buildArticle("This is New", ["1st phara", "2nd Para"]);
let articlesDiv = document.querySelector(".articles");
articlesDiv.append(createArticle);

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles);

articles = articles.map(domElement => {
  return new Article(domElement);
})
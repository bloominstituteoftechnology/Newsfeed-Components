// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
  
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
  
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", e => this.expandArticle())
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
   this.domElement.classList.toggle('article-open');
   this.domElement.classList.toggle('test');

  }
}

/* START HERE: 


// - Select all classes named ".article" and assign that value to the articles variable.



- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles 
NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const paragraph = document.createElement("p")
paragraph.textContent = "News sites come and go but there are several thebecome extremely popular. For instance, The Verge was founded less than 3 yearago and has become a dominant tech news player with millions of monthly visitors. Thereare several other large news sites using WordPress such as TechCrunch, Engadget, CNN, Forbes, Reuters, The New York Times and others. They are hosted on WordPress VIP hosting, which iscreated to handle millions of monthly visitors. It is a Nginx-powered web hosting, which."

const seconaryContent = document.querySelector(".articles");

const articleDiv = document.createElement('div')
articleDiv.classList.add('article')
articleDiv.classList.add('test')

const header2 = document.createElement('h2')
header2.textContent = 'I just create a header'

const explandSpan = document.createElement('span')
explandSpan.classList.add('expandButton')

articleDiv.append(header2)
articleDiv.append(paragraph)
articleDiv.append(explandSpan)

seconaryContent.append(articleDiv);

let articles = document.querySelectorAll(".article");
articles.forEach(function(article){
  return  new Article(article)
})

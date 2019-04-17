// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement

    this.domElement = domElement;

    // create a reference to the ".expandButton" class.

    this.expandButton = this.expandButton.querySelector(".expandButton")

    // Using your expandButton reference, update the text on your 
    // expandButton to say "expand"
  
    // Set a click handler on the expandButton reference,
    // calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle)
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to 
    // expand or hide the article.
    console.log('EXPAND!', this.article)
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles 
variable to iterate over the articles NodeList and create a new instance 
of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article')
articles.forEach(function(article) {
  const fancyArticle = new Article(article)
});


// class Panel {
//   constructor(panel) {
//     this.panel = panel;
//     this.panelButtons = this.panel.querySelector(".panel-buttons");
//     this.panelBtnOpen = this.panel.querySelector(".panel-btn-open");
//     this.panelBtnClose = this.panel.querySelector(".panel-btn-close");
//     this.panelContent = this.panel.querySelector(".panel-content")

//     this.panelButtons.addEventListener("click", this.togglePanel)
//   }
//   togglePanel = () => {
//     this.panelBtnOpen.classList.toggle("hide-btn");
//     this.panelBtnClose.classList.toggle("hide-btn");
//     this.panelContent.classList.toggle("toggle-on")
//   }
// }


// let panels = document.querySelectorAll(".panel");

// panels = Array.from(panels).map(panel => (
//   new Panel(panel)
// ));

// const buttonClose = document.querySelector(".secondary .accordion .panel-btn-close")
// console.log(buttonClose)
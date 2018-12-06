// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", e => this.expandArticle(e));
    
    this.closeButton = this.domElement.querySelector(".closeButton");
    this.closeButton.addEventListener("click", e => this.closeArticle(e))
  }

  expandArticle(e) {
    e.stopImmediatePropagation();

    if (this.domElement.classList.contains("article--is-open")) {
      TweenMax.to(this.domElement, 1.5, { 
        height: 50 
      });
      this.expandButton.textContent = "Click to Expand";
    } else {
      TweenMax.set(this.domElement, { 
        height: "auto" 
      });
      TweenMax.from(this.domElement, 1.5, { 
        height: 50 
      });
      this.expandButton.textContent = "Click to Hide";
    }

    this.domElement.classList.toggle("article--is-open");
  }

  closeArticle(e) {
    e.stopImmediatePropagation();
    this.domElement.remove();
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => {
  return new Article(article);  
});

// For adding new articles
// -----------------------

function addArticle(e) {
  // Get content of form for new article content
  let formArticleTitle = document.querySelector(".formArticleTitle");
  let formArticleText = document.querySelector(".formArticleText"); 

  // Check if form fields were filled up
  if (formArticleTitle.value && formArticleText.value) {
    // Create div element that will contain the new article
    let newArticleElement = document.createElement("div");
    newArticleElement.classList.add("article");

    // Clone the close button onto the new article's div element
    newArticleElement.appendChild(closeButton.cloneNode());

    // Create the title heading element for the new article
    let newArticleTitle = document.createElement("h2");
    newArticleTitle.textContent = formArticleTitle.value;
    newArticleElement.appendChild(newArticleTitle);

    // Adding the date when the new article was posted
    let currentDate = new Date();
    let newArticleDate = document.createElement("p");
    newArticleDate.classList.add("date");
    newArticleDate.textContent = formatDate(currentDate);
    newArticleElement.appendChild(newArticleDate);

    // Adding paragraph elements for the new article's text (2 consecutive line breaks -> new paragraph)
    formArticleText.value.split("\n\n").forEach(formArticleParagraph => {
      let newArticleParagraph = document.createElement("p");
      newArticleParagraph.style.whiteSpace = "pre-line";
      newArticleParagraph.textContent = formArticleParagraph;
      newArticleElement.appendChild(newArticleParagraph);      
    });

    // Clone the expand button onto the new article's div element
    newArticleElement.appendChild(expandButton.cloneNode());

    // Add the new article element + its children to the page and clear form fields
    articleArea.appendChild(newArticleElement);
    formArticleTitle.value = formArticleText.value = "";

    // Return a new instantiation of the Article class  (bind class members and methods to the new article element)
    return new Article(newArticleElement);
  } else if (!formArticleTitle.value) { // If missing title
    alert("Please give your new article a title first.")
  } else if (!formArticleText.value) { // If missing article text
    alert("Please add some text to your article first.");
  }
}

// Return a formatted date string from a Date object
function formatDate(date) {
  const monthAbbrevs = [
    "Jan", "Feb", "Mar", "Apr", 
    "May", "Jun", "Jul", "Aug", 
    "Sep", "Oct", "Nov", "Dec",
  ];

  const ordinalSuffixes = [
    "st", "nd", "rd"
  ];

  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();

  return `${monthAbbrevs[month]} ${day}${day > 2 ? "th" : ordinalSuffixes[day]}, ${year}`;
}

const articleArea = document.querySelector(".articles");

const closeButton = document.querySelector(".closeButton");
const expandButton = document.querySelector(".expandButton");

const submitArticleBtn = document.querySelector(".submitArticleBtn");
submitArticleBtn.addEventListener("click", e => addArticle(e));
// Import the GSAP library
import { gsap } from "gsap";

// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const articleData = require("./ArticleData").data;

console.log("Article Data", articleData);

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>
    {three separate paragraph elements}
    <span class="expandButton">+</span>
  </div>
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.
  Step 3: Don't forget to return something from your function!
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

function articleMaker(article) {
  // Declare the variable to create the element
  const newArticle = document.createElement("div");

  // Add some attributes into the new element
  newArticle.classList.add("article");

  // Declare the inner HTML elements to add inside the newArticle element
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const bodyParagraph1 = document.createElement("p");
  const bodyParagraph2 = document.createElement("p");
  const bodyParagraph3 = document.createElement("p");
  const expandBtn = document.createElement("span");
  const closeBtn = document.createElement("span");

  // Add some attributes to the inner HTML elements
  articleDate.classList.add("date");
  expandBtn.classList.add("expandButton");
  closeBtn.classList.add("close");

  // Add the text content into the HTML elements
  articleTitle.textContent = article.title;
  bodyParagraph1.textContent = article.firstParagraph;
  bodyParagraph2.textContent = article.secondParagraph;
  bodyParagraph3.textContent = article.thirdParagraph;
  articleDate.textContent = article.date;
  expandBtn.textContent = "Click to Expand";
  closeBtn.textContent = "x";

  // Add an Event Listener to the button
  expandBtn.addEventListener("click", () => {
    // Toggle the active class when expand button clicks
    newArticle.classList.toggle("article-open");

    // Change the text of the expand button, depending on active class
    expandBtn.textContent = newArticle.classList.contains("article-open")
      ? "Click to Close"
      : "Click to Expand";

    if (newArticle.classList.contains("article-open")) {
      gsap.to(newArticle, { height: "auto", duration: 2 });
      gsap.to(articleDate, { opacity: 1, x: 0, duration: 2 });
      gsap.to(bodyParagraph1, { opacity: 1, x: 0, duration: 2 });
      gsap.to(bodyParagraph2, { opacity: 1, x: 0, duration: 2 });
      gsap.to(bodyParagraph3, { opacity: 1, x: 0, duration: 2 });
    } else {
      gsap.to(newArticle, { height: 60, duration: 2 });
      gsap.to(articleDate, { opacity: 0, x: -100, duration: 2 });
      gsap.to(bodyParagraph1, { opacity: 0, x: -100, duration: 2 });
      gsap.to(bodyParagraph2, { opacity: 0, x: -100, duration: 2 });
      gsap.to(bodyParagraph3, { opacity: 0, x: -100, duration: 2 });
    }
  });

  // Add an event listener to the close button
  closeBtn.addEventListener("click", (e) => {
    gsap.to(newArticle, { opacity: 0, display: "none", x: -100, duration: 1 });

    setTimeout(function () {
      newArticle.parentNode.removeChild(newArticle);
    }, 1500);
  });

  // Create an array with all inner elements to add
  let childElements = [];
  childElements.push(
    articleTitle,
    articleDate,
    bodyParagraph1,
    bodyParagraph2,
    bodyParagraph3,
    expandBtn,
    closeBtn
  );

  // Add the inner HTML inside the article element
  childElements.forEach((item) => {
    newArticle.appendChild(item);
  });

  // Return the new article
  return newArticle;
}

// Create a new array of elements that will be added to the DOM
let allArticlesArr = articleData.map((item) => {
  let newArticle = articleMaker(item);

  return newArticle;
});

// Add them to the DOM
const articlesContainer = document.querySelector(".articles");

allArticlesArr.forEach((article) => {
  articlesContainer.appendChild(article);
});

console.log("Elements to insert to DOM", allArticlesArr);

/************************************************
 *  Function to create new article from form
 ************************************************/

// Add a form in the front-end
function addArticleForm() {
  // Variables for the form content
  const formContainer = document.createElement("form");
  const formTitle = document.createElement("h3");
  const titleField = document.createElement("input");
  const dateField = document.createElement("input");
  const paragraphField = document.createElement("textarea");
  const submitBtn = document.createElement("button");
  const response = document.createElement("p");

  // Add attributes to elements above
  formContainer.classList.add("add-article");
  formTitle.textContent = "Add an Article";
  titleField.setAttribute("type", "text");
  titleField.setAttribute("placeholder", "Enter Article Title");
  titleField.setAttribute("id", "article-name");
  dateField.setAttribute("type", "text");
  dateField.setAttribute("placeholder", "Enter Article Date");
  dateField.setAttribute("id", "article-date");
  paragraphField.setAttribute("placeholder", "Enter Article Content");
  paragraphField.setAttribute("id", "article-body");
  submitBtn.textContent = "Add Article";
  response.classList.add("response");

  // Create an array with all inner childs
  let childElements = [];
  childElements.push(formTitle, titleField, dateField, paragraphField, submitBtn, response);

  // Add the inner HTML inside the article element
  childElements.forEach((item) => {
    formContainer.appendChild(item);
  });

  return formContainer;
}

// Insert the form in the DOM
const body = document.querySelector("body");
body.appendChild(addArticleForm());

// Add an event listener to the submit button
const addArticleSubmit = document.querySelector(".add-article button");
addArticleSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  // Get the values
  const titleVal = document.getElementById("article-name").value;
  const dateval = document.getElementById("article-date").value;
  const paragraphVal = document.getElementById("article-body").value;

  // If some values are empty, throw an error
  if (titleVal === "") {
    alert("Please enter a title");
    return false;
  } else if (dateval === "") {
    alert("Please enter a date");
    return false;
  } else if (paragraphVal === "") {
    alert("Please enter body text");
    return false;
  }

  // Create an object with the new paragraph
  const newArticle = {
    title: titleVal,
    date: dateval,
    firstParagraph: paragraphVal,
  };

  // Use the callback function to make the article
  const articleToAdd = articleMaker(newArticle);

  // Add some styling prior to creating
  articleToAdd.style.opacity = 0;
  articleToAdd.style.transform = "translateX(-100px)";

  // Insert into the DOM
  articlesContainer.prepend(articleToAdd);

  // Add an animation to come in
  gsap.to(articleToAdd, { opacity: 1, x: 0, duration: 1 });

  // Clear the form once it is submitted
  const addArticleForm = document.querySelector(".add-article");
  addArticleForm.reset();

  // Load in response
  const responseSection = document.querySelector(".response");
  gsap.to(responseSection, { height: "auto", duration: 1 });
  responseSection.textContent = "Article Submitted";

  // Remove the response after 2s
  setTimeout(function () {
    gsap.to(responseSection, { height: 0, duration: 1 });
  }, 2000);
});
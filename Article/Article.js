/* Using jQuery, select all the article elements */
let articles;


class Article {
  /* The constructor will take an element as it's only argument */
  constructor(element) {
    /* 
      We need to make sure the elemnt being passed to us is a jQuery element.
      To do so, wrap the element in jQuery syntax. 
    */
    this.element = $();
    /* 
      Using our new refernce to the element, find the expand button within 
      the element and set a new property on the Article class. 
    */
    this.expandButton;
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
    */

    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
  }

  expandArticle() {
    /* Using our reference to the article element, add or remove a class */
  }
}

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/
articles = articles.map();
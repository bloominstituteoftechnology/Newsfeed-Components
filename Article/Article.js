// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element;
    // create a reference to the ".expandButton" class. 
    this.expandButton;
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    // HINT: expandArticle is like .toggle menu--open

    /* SYNTAX
      // element.addEventListener('click', callback);

        const eventHandler = (event) => {
        //Handle event
          event.stopPropagration()
          event.preventDefault() // if needed
      };

      EXPAND BUTTON LOGIC
        // create a reference to the ".expandButton" class
        const expandButton = document.querySelector('.expandButton');

        // Toggle the "menu--open" class on your menu reference. 
          CSS: .menu--open {display: block;}

        const toggleMenu = function (event){
          menu.classList.toggle('menu--open')
        }

        // Using your expandButton reference, add a click handler that calls toggleMenu
        // REFACTORS (both work) 
        // Approach 1
            expandButton.addEventListener('click',toggleMenu);
        */
       
    // create a reference to the ".expandButton" class
    const expandButton = document.querySelector('.expandButton');

  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles;

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map();


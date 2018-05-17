# Newsfeed-jQuery

In this project we are going to be building a news feed reader. The goal is to have a collapsing menu, and expandable news articles. The HTML and CSS is already done for you, you simply need to connect the pieces. After the CSS is connected it is time to move on to building out our components using Javascript and jQuery. We will be adding common functionality and styling to build reusable components.

### Need to know:
* jQuery:
  * Selector( `$()` )
  * Methods (map, find, text, hide, show, events, etc.)
* CSS:
  * import
* Javascript:
  * ES6 classes and the constructor function.
		
### Setup
  * Run `less-watch-compiler` from the top level of the Newsfeed-jQuery folder. 
  * Open index.html in your browser

### Part 1: The Menu

* Import menu.less from the correct path into index.less (follow the lead for header if you’re not sure how to write the correct path)
* Use jQuery to select the menu and menu button components from the HTML. Look at the HTML code to determine the class names of both.
* Write a callback function that add and removes a class to the menu when called. Hint: Look in the Menu.less file for the name of the class. 
* Look at the LESS and determine what Is happening when the classes are added or removed. 
Using jQuery, pass the callback to a click event listener on the button.


### Part 2: The Articles

* Make sure the Article LESS rules are being applied to the page.
* Look over the LESS to see what is happening, but don’t change anything yet.
* Using jQuery, select all articles. Map over the array creating individual instances of the Article class.
* Within the Article class, set properties for the element, and expandButton.
* Add text to the expand button reading: ‘Click to Expand’
* Add a click event to the expand button (or entire article if you need to at first), pass the click event the ‘expandArticle’ method.
* Within the expand article method add or remove the open class from the article. (Check the LESS for the correct class name)

### Part 3: Add Articles

* Now that we have our components built, add a few articles of your own to the HTML. Notice how our javascript and jQuery code automatically selects the new articles and adds the styling and functionality we just built to them. This is the power of components. Write the code once and add as many components as you want all while maintaining the functionality we built!

### Stretch Goals:

If you complete the main goals of the page let's play around with jQuery a bit more. As you learned during the lecture, jQuery is a massive library capable of all kinds of amazing things. We have only touched the surface, but your job is now to dig a bit deeper into the documentation and learn more about this library. 

Note: Just a reminder the stretch goals are just extra practice using the tools we have learned. These are not required. Only parts 1-3 are required portions of the project. If you do not get to the stretch goals, don't worry.

* Animation: There are many ways to animate elements on the screen corresponding to user interactions. jQuery gives us a fantastic method called `.animate()`. There are also simpler methods such as `slideDown` `slideUp`, `slideToggle`, `show`, `hide` and more. Read the documentation on these methods and animate all of the components on click. You can either jump right into the jQuery, or you can research how to animate using CSS and it's properties: `transform` and `animate`. 
  * Animation Goal #1. Animate the menu opening: You will need to change the CSS for the menu in order to acheive this. Get the menu to slide in from the left side of the screen. And slide out when the button is clicked. Bonus: Get the menu to slide back out when the user clicks anywhere on the screen other than the menu. 
  * Animation Goal #2 Animate the article opening. This one is a bit trickier. You will need to change the CSS for this component as well. Animate the component so that it slides open and slides closed on each click. Update the text in the expand button to read `'Click to Expand'` or `'Click to Close'` depending on the state of the article. 

* Close Button

  Add a close (or 'read') button to each Article component. When clicked the article will dissapear.

* Component Constructor
  
  Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. 

* Implement a way to write your own articles using the Component Constructor and some input fields. 
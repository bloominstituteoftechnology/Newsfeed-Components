// Start at `let articles` 

class Article {
  constructor(article) {
    // assign this.element to the passed in article element
    this.element = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector(".expandButton");

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "expand";

    this.launchHeadline = this.element.querySelector("h2");
    // console.log(this.launchHeadline)
    // adding pointer to headline, so you know to click
    this.launchHeadline.style.cursor = "pointer";
    // console.log(this.launchButtons)
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    // This works, only one element being used
    this.launchHeadline.addEventListener("click", this.launchH2.bind(this));
    // event.target.parentNode.classList.addEventListener("click", this.launchH2);
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.element.addEventListener("click", this.expandArticle);
  }

    launchH2() {
      // console.log(this.element)
      console.log('Hey')
      // console.log(this.indArticle)
      // TweenMax.to(this.element, .5, {x:200, opacity: 0, scale:0.5});
      TweenMax.to(this.element, 2.5, { ease: Bounce.easeInOut, y: -500 });
    }
    
    expandArticle() {
      // Using our reference to the article element, add or remove a class to expand or hide the article.
      this.classList.toggle("article-open");
    }

}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article(article));










// === Stretch ===
let submitFormButton = document.querySelector('.submitFormButton');


// function addArticle() {
//   let articleHTML = document.createElement('div');

//   articleHTML.className = 'article';

//   articleHTML.innerHTML = 
//     "<div class='article'>
//     <h2>Lambda School Students: 'We're the best!'</h2>
//     <p class='date'>Nov 5th, 2017</p>
//     <p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
//     moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
//     watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
//     Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
//     jar twi'lek jinn leia jango skywalker mon. </p>
//     <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
//     windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
//     mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
//     k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
//     solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
//     owen jinn tatooine sith organa.</p>
//     <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
//     naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
//     han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
//     moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>
//     <span class='expandButton'></span>\
//     <span class='launchButton'></span>\
//   </div>";

//   document.querySelector(".articles").appendChild(articleHTML);
// }

class ArticleAdd {
  constructor(element) {
    this.article = element;
    this.articleDiv = document.createElement('div');
    this.articleDiv.className = 'article';
    this.article.appendChild(this.articleDiv);
    // create a reference to the ".tabs-link" class nested in your tab object
    this.articles = this.article.querySelectorAll(".article"); 
  //   // console.log(this.links) works
  //   // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
  //   this.links = Array.from(this.links).map( link => {
  //     console.log(this)
  //     return new TabsLink(link, this);
  //   });
  //   // console.log(this.links)
  //   // Set the active link to the first item in the array
  //   this.activeLink = this.links[0];
  //   // Nothing to update here, just notice we are invoking the init() method
  //   this.init();
  // }

  // init() { 
  //   // invoke the method select() on activeLink
  //   this.activeLink.select();
  // }

  // updateActive(newActive) {
  //   // invoke the method deselect() on activeLink
  //   this.activeLink.deselect();
  //   // assign this.activeLink to the new active link (newActive)
  //   this.activeLink = newActive;
  // }

  // getTab(data) {
  //   // return a reference to the element's data attribute
  //   return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  // }

}}

let articles2 = document.querySelectorAll(".articles");
// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
articles2 = Array.from(articles2).map( article => new ArticleAdd(article));


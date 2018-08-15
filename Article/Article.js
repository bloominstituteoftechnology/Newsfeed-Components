// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "expand";
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this)); // almost poped an anonymous method in here out of habbit :)
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle("article-open");
    if (menuOpen === false) {
      this.element.classList.toggle("article-open");
      this.expandButton.innerHTML = "close";
      TweenMax.fromTo(this.element, 0.3, {height:50}, {height:500});
      menuOpen = true;
    } else if(menuOpen === true) {
      TweenMax.fromTo(this.element, 0.3, {height:500}, {height:50});
      this.expandButton.innerHTML = "expand";
      menuOpen = false;
    }
  }
}

/*
<div class="article">
      <h2>Lambda School Students: "We're the best!"</h2>
      <p class="date">Nov 5th, 2017</p>

      <p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker
        lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth
        baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge
        utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker
        dantooine skywalker. Qui-gonn jar twi'lek jinn leia jango skywalker mon. </p>

      <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2 windu mothma. Sidious darth calamari
        moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine mace amidala. C-3po solo skywalker
        anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine luke. Fisto
        mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff solo leia ben ponda
        jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba owen jinn
        tatooine sith organa.</p>

      <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious naboo ackbar tatooine.
        Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket han. C-3po antilles
        moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia moff calamari
        mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>
      <span class='expandButton'></span>
    </div>
*/

// create article function
function createArticle(heading, date, p1, p2, p3) {
  // grab a hook to the articles div
  let articleParent = document.querySelector(".articles");
  // build the article
  let articleData = `
                      <div class="article">
                      <h2>${heading}</h2>
                      <p class="date">${date}</p>

                      <p>${p1}</p>
                      <p>${p2}</p>
                      <p>${p3}</p>

                      <span class='expandButton'></span>
                    </div>
  `;
  articleParent.innerHTML += articleData;
}

// lets create a new article component from the data we provide
createArticle("This new Heading", "Dec 5th, 2017", " This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool. "," This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool. "," This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool. ");


// lets try to add a few aka 200 articles
for(let i = 0; i < 200; i++) {
  createArticle(`for loop heading ${i + 1}.`, "Dec 5th, 2017", " This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool. "," This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool. "," This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool.This is some filler text that i have writter lorem ipsom mordor dolor sit on a toadstool. ");
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");


// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));


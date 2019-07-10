// // Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement = domElement;
//     // create a reference to the ".expandButton" class. 
//     this.expandButton = this.domElement.querySelector('.expandButton');
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
//     this.expandButton.textContent = 'expand'
//     // Set a click handler on the expandButton reference, calling the expandArticle method.
//     this.expandButton.addEventListener('click', () => this.expandArticle())
//   }
//   expandArticle() {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.
//     console.log("click")
//     return this.domElement.classList.toggle('article-open')
//   }
// }

// //  START HERE: 
// // - Select all classes named ".article" and assign that value to the articles variable.  
// // - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
// let articles = document.querySelectorAll('.article');

// articles.forEach(articles => {
//   new Article(articles)
// })

const panelData = [{
    title: `Lambda School Students: "We're the best!"`,
    content: `<p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura
        skywalker lando
        moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth
        baba skywalker
        watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau
        darth calamari.
        Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine
        skywalker. Qui-gonn
        jar twi'lek jinn leia jango skywalker mon. </p>

      <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
        windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff
        chewbacca palpatine
        mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando
        dantooine moff
        k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth
        darth. Moff
        solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto.
        Yavin jawa sebulba
        owen jinn tatooine sith organa.</p>

      <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff
        baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé
        wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>`
  },
  {
    title: `Javascript and You, ES6`,
    content: `<p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura
            skywalker lando
            moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth
            baba skywalker
            watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau
            darth calamari.
            Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine
            skywalker. Qui-gonn
            jar twi'lek jinn leia jango skywalker mon. </p>

          <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
            windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff
            chewbacca palpatine
             mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando
             dantooine moff
             k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth
             darth. Moff
             solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto.
            Yavin jawa sebulba
             owen jinn tatooine sith organa.</p>

           <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
             naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff
             baba wicket
             han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé
             wookiee. Leia
             moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>`
  },
  {
    title: "React vs Angular vs Vue",
    content: `<p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura
        skywalker lando
        moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth
        baba skywalker
        watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau
        darth calamari.
        Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine
        skywalker. Qui-gonn
        jar twi'lek jinn leia jango skywalker mon. </p>

      <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
        windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff
        chewbacca palpatine
        mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando
        dantooine moff
        k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth
        darth. Moff
        solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto.
        Yavin jawa sebulba
        owen jinn tatooine sith organa.</p>

      <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff
        baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé
        wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>`
  },
  {
    title: "Professional Software Development in 2018",
    content: `<p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura
        skywalker lando
        moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth
        baba skywalker
        watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau
        darth calamari.
        Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine
        skywalker. Qui-gonn
        jar twi'lek jinn leia jango skywalker mon. </p>

      <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
        windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff
        chewbacca palpatine
        mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando
        dantooine moff
        k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth
        darth. Moff
        solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto.
        Yavin jawa sebulba
        owen jinn tatooine sith organa.</p>

      <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff
        baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé
        wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>`
  }
]

// Remove panel from HTML
// create new function that will create a panel component exactly as you see it in the HTML
// give the component functionality when the open or closed button is clicked, the content is toggled on/off
// create components for each of the items in the above array.

// write a function 
// use createElement 
// returns a new DOM element

// <div class="articles">
//     <div class="article">
//       <h2>Lambda School Students: "We're the best!"</h2>
//       <p class="date">Nov 5th, 2017</p>
//       <p></p>
//       <p></p>
//       <p</p>
//       <span class='expandButton'></span>
//     </div>
//     <div class="article">
//       <h2>Javascript and You, ES6</h2>
//       <p class="date">Nov 7th, 2017</p>
//       <p></p>
//       <p></p>
//       <span class='expandButton'></span>
//     </div>
//     <div class="article">
//       <h2>React vs Angular vs Vue</h2>
//       <p class="date">Nov 7th, 2017</p>
//       <p></p>
//       <p></p>
//       <span class='expandButton'></span>
//     </div>
//     <div class="article">
//       <h2>Professional Software Development in 2018</h2>
//       <p class="date">Nov 7th, 2017</p>
//       <p></p>
//       <p></p>
//       <p></p>
//       <p></p>
//       <span class='expandButton'></span>
//     </div>
//     <div class="article">
//       <h2>Lambda School Students: "We're the best!"</h2>
//       <p class="date">Nov 5th, 2017</p>
//       <p></p>
//       <p></p>
//       <p</p>
//       <span class='expandButton'></span>
//     </div>
//   </div>





const accordion = document.querySelector('.accordion')

panelData.forEach(data => {
  console.log('creating', data.title)
  accordion.appendChild(createPanel(data.title, data.content))
})
// accordion.appendChild(createPanel('Test Title','Test Content'))

function createPanel(title, content) {
  // define new elements
  const panel = document.createElement('div');
  const panelBar = document.createElement('div');
  const panelTitle = document.createElement('h3');
  const buttonPanel = document.createElement('div');
  const buttonOpen = document.createElement('button');
  const buttonClose = document.createElement('button');
  const panelContent = document.createElement('div');

  // Setup structure of elements
  panel.appendChild(panelBar)
  panel.appendChild(panelContent)
  panelBar.appendChild(panelTitle)
  panelBar.appendChild(buttonPanel)
  buttonPanel.appendChild(buttonOpen)
  buttonPanel.appendChild(buttonClose)

  // set class names
  panel.classList.add('panel')
  panelBar.classList.add('panel-bar')
  buttonPanel.classList.add('panel-buttons')
  buttonOpen.classList.add('panel-btn-open')
  buttonClose.classList.add('panel-btn-close', 'hide-btn')
  panelContent.classList.add('panel-content')

  // set text content
  buttonOpen.textContent = 'Open'
  buttonClose.textContent = 'Close'
  panelContent.textContent = content
  panelTitle.textContent = title

  // button events
  buttonPanel.addEventListener('click', event => {
    console.log('button clicked', event.target)
    // 1. toggle hide-btn on BOTH buttons
    buttonOpen.classList.toggle('hide-btn')
    buttonClose.classList.toggle('hide-btn')
    // 2. Change visibility of the content w/ 'toggle-on'
    panelContent.classList.toggle('toggle-on')
  })


  // (DO THIS) buttonPanel.addEventListener('click', toggleHandler)
  // (DO NOT DO)buttonPanel.querySelectorAll('button').forEach(btn => btn.addEventListener('click', clickHandler))

  return panel
}
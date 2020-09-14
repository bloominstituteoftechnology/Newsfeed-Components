// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

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

  Step 4: Outside your function now, loop over the data. At each iteration
   you'll use your component
  to create a div.article element and append it to the DOM inside div.articles
   (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in 
  the same format as the others.
  Refresh the page to see the new article.
*/
function addMoreArticles(artObj,newArt){
  for(let i = 0; i <  newArt.length; i++){
    let s = 0;
    artObj.push(newArt[i]);
    
  }
  // artObj.push(newArt[0]);
}

function articleMaker(artObj){
/*
Creazte a these
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

*/
let nodelist = document.createDocumentFragment();
  for(let i = 0; i < artObj.length; i++){
    let dv = document.createElement('div');
    dv.classList.add('article');
    // Elements to go in article Div
    let h2 = document.createElement('h2');
    h2.innerText = artObj[i]['title'];
    let pdate = document.createElement('p');
    pdate.classList.add('date');
    pdate.innerText =  artObj[i]['date']
    let p1 = document.createElement('p');
    p1.innerText =  artObj[i]['firstParagraph'];
    let p2 = document.createElement('p');
    p2.innerText =  artObj[i]['secondParagraph'];
    let p3 = document.createElement('p');
    p3.innerText =  artObj[i]['thirdParagraph'];
    let span = document.createElement('span');
    span.classList.add('expandButton');
    let button = document.createElement('button');
    button.textContent = '+';
    // button.onclick = test;
    span.appendChild(button);
 

    // Apend to div
    dv.appendChild(h2);
    dv.appendChild(pdate);
    dv.appendChild(p1);
    dv.appendChild(p2);
    dv.appendChild(p3);
    dv.appendChild(span);
    /// Apend to nodelist
    nodelist.appendChild(dv);
    // btn = nodelist.querySelector('button');

    
  }
 

return nodelist;
}
let moreData = [{
  title: 'New Title',
  date: 'Jan 9th, 2011',
  firstParagraph: `Made up first paragraph maybe the other one woudl be a copy and paste thing but who knows what I woudl do in this situation 
  All I know is that i am typing stuff so there is more data in the more data object`,

  secondParagraph: `balah alhal hsldf hk I made stuff up but dont want to use lorum epsum instead i just say things like this and hope it works
  but when it wont I dont give up and try again until I dont know what to do and stop doing the wrong thing and then it works `,

  thirdParagraph: `Another article once found hrere in this third paraphgra with other stuff instide thie data array going over here and there `
},{
  title: 'Thats not the title',
  date: 'Jan 19th, 2101',
  firstParagraph: `Made up first paragraph maybe the other one woudl be a copy and paste thing but who knows what I woudl do in this situation 
  All I know is that i am typing stuff so there is more data in the more data object`,

  secondParagraph: `balah alhal hsldf hk I made stuff up but dont want to use lorum epsum instead i just say things like this and hope it works
  but when it wont I dont give up and try again until I dont know what to do and stop doing the wrong thing and then it works `,

  thirdParagraph: `Another article from the future thats been repeated after many years. No one knew this existested back in 2011 until 
  someone in 2101 knew about this once found hrere in this third paraphgra with other stuff instide thie data array going over
  here and there `
}];

function addEvent(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
  }
}
function theClick(){
  return function(){
  console.log('clicked');
  }
}


// const addEvent = (h) =>{
//   let buttons = h.querySelectorAll('button');
//   for (const button of buttons) {
//     button.addEventListener('click', function(event) {
//        console.log('heyhh');
//     })
//   }
// }
addMoreArticles(data,moreData);
const addE =(h)=>{

  const buttons = h.querySelector("span");
  buttons.addEventListener('click',e=>{
  
    e.target.classList.add('article-open');
    
  console.log('click');
  },true)
}
class _test{
  constructor(wr){
    this.wr = wr;
  }
  makeEvent(){
    console.log(this.wr);
    this.wr[0].onclick = this.makeEvent;

      return this.testit();
  
  }
  testit(){
    return this.wr[0].addEventListener('click',e = () =>{
      console.log('justwork');
    })
  }
}
function test(wr){
  // wr.onclick = true;
  // wr[0].addEventListener('onclick',  e=>{
  //    return 'hi';
  // });
  let t = new _test(wr);
  t.makeEvent();
}
// window.span.addEventListener('click',e=>{
//   console.log('click');
// // btn.classList.add('article-open');
  
// });


// let h = articleMaker(data).firstElementChild.childNodes[0];
let h = articleMaker(data);
var ar_coins = document.querySelectorAll('button');
addEvent(ar_coins, 'click', theClick()); 
// addE(h);
 console.log(h);
//  let wr = h.querySelectorAll('button');
// //  h.onclick = test(wr);

// //  document.test.addEventListener('onclick',(e)=>{
// //    console.log('no')
// //  },true);
// // Onclick will not become anything else but null No action event listen works here. 
// h.childNodes[0].childNodes[5].onclick = test(wr);
// h.childNodes[0].childNodes[5].addEventListener('click',test = (wr)=>{
//   test(wr);
// });
//  console.log(wr);
// document.querySelector('.articles').innerHTML = h.outerHTML;
let thehtml = '';
for(let l = 0; l < h.childElementCount; l++){
  
  thehtml  = thehtml + h.childNodes[l].innerHTML ;

}
console.log(data);

document.querySelector('.articles').innerHTML = thehtml;
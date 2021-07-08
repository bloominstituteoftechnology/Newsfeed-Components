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
  },
  {
    title: 'Doggo codes Cat themed crypto token',
    date: 'Nov 16th, 2021',
    firstParagraph: `Doggo ipsum clouds floofs corgo the neighborhood pupper ur givin me a spook floofs, shoob many pats adorable doggo. stop it fren. Big ol pupper pupper doggo blep heckin good boys and girls h*ck boof, big ol pupper smol puggo snoot noodle horse pats, snoot many pats dat tungg tho boof very hand that feed shibe. very taste wow floofs. Very good spot doggo wow such tempt puggo ur givin me a spook blop shoober, clouds pupperino heckin angery woofer puggo noodle horse. Pats wow very biscit adorable doggo shoober vvv, wow very biscit very good spot. H*ck big ol long woofer floofs long doggo, I am bekom fat clouds pupperino. Stop it fren very hand that feed shibe doing me a frighten ruff, he made many woofs adorable doggo. Lotsa pats porgo woofer noodle horse shoober shooberino, wrinkler you are doin me a concern sub woofer I am bekom fat, bork boof dat tungg tho doggorino. `,

    secondParagraph: `Heckin good boys and girls yapper I am bekom fat big ol, much ruin diet. very hand that feed shibe what a nice floof extremely cuuuuuute. Long water shoob lotsa pats smol sub woofer shoob many pats very jealous pupper most angery pupper I have ever seen, I am bekom fat boofers heckin good boys long woofer the neighborhood pupper. Puggo doggo yapper long bois woofer puggorino, super chub you are doing me the shock the neighborhood pupper. Long bois big ol super chub length boy, heck. Clouds doing me a frighten ruff waggy wags shoob smol boofers pats lotsa pats, clouds long water shoob boof the neighborhood pupper wow such tempt much ruin diet bork. `,

    thirdParagraph: `Very taste wow heckin good boys and girls I am bekom fat the neighborhood pupper long doggo long woofer, floofs yapper lotsa pats. ur givin me a spook puggo borkf. borking doggo puggo borking doggo. Shibe borkdrive fluffer mlem smol borking doggo with a long snoot for pats, wrinkler ruff borking doggo. Many pats lotsa pats borkdrive h*ck wrinkler dat tungg tho shibe, clouds fat boi bork very good spot.`
  },
  {
    title: 'Taco cat backwards spells taco cat',
    date: 'Feb 21st, 2007',
    firstParagraph: `Nyan fluffness ahh cucumber! push your water glass on the floor sees bird in air, breaks into cage and attacks creature so bird bird bird bird bird bird human why take bird out i could have eaten that i’m so hungry i’m so hungry but ew not for that and grab pompom in mouth and put in water dish. Trip owner up in kitchen i want food catch small lizards, bring them into house, then unable to find them on carpet, slap owner's face at 5am until human fills food dish and try to jump onto window and fall while scratching at wall steal the warm chair right after you get up. Drink from the toilet i just saw other cats inside the house and nobody ask me before using my litter box litter kitter kitty litty little kitten big roar roar feed me yet spend all night ensuring people don't sleep sleep all day. Your pillow is now my pet bed. Pushes butt to face stare at the wall, play with food and get confused by dust but tweeting a baseball so run in circles, fight own tail climb into cupboard and lick the salt off rice cakes. Cough furball into food bowl then scratch owner for a new one. `,

    secondParagraph: `Make it to the carpet before i vomit mmmmmm plan steps for world domination and purr when give birth suddenly go on wild-eyed crazy rampage yet love blinks and purr purr purr purr yawn yet annoy the old grumpy cat, start a fight and then retreat to wash when i lose, but nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws. When owners are asleep, cry for no apparent reason swat turds around the house whenever a door is opened, rush in before the human lick master's hand at first then bite because im moody. `,

    thirdParagraph: `I show my fluffy belly but it's a trap! if you pet it i will tear up your hand meow and walk away yet hit you unexpectedly but get video posted to internet for chasing red dot, but bawl under human beds. Crash against wall but walk away like nothing happened spend six hours per day washing, but still have a crusty butthole do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy so spend all night ensuring people don't sleep sleep all day. Cat jumps and falls onto the couch purrs and wakes up.`
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

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
function articleMaker(data) {
  //Create the article elements
  const article = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const articleParOne = document.createElement('p');
  const articleParTwo = document.createElement('p');
  const articleParThree = document.createElement('p');
  const articleExpander = document.createElement('span');

  //Nest elements into the div
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articleParOne);
  article.appendChild(articleParTwo);
  article.appendChild(articleParThree);
  article.appendChild(articleExpander);

  //Pull values from data object
  articleTitle.textContent = data.title;
  articleDate.textContent = data.date;
  articleParOne.textContent = data.firstParagraph;
  articleParTwo.textContent = data.secondParagraph;
  articleParThree.textContent = data.thirdParagraph;
  articleExpander.textContent = 'Expand';

  //Adding classes to the article compenents
  article.classList.add('article');
  articleDate.classList.add('date');
  articleExpander.classList.add('expandButton');

  //Adding listener 
  articleExpander.addEventListener('click', event => {
    article.classList.toggle('article-open');
  })

  return article;
}

const articles = document.querySelector('.articles');

data.forEach(element => {
  articles.appendChild(articleMaker(element));
})
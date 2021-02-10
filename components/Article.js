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
    title: `Zombies`,
    date: `February 10, 2021`,
    firstParagraph: `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,

    secondParagraph: `Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.`,

    thirdParagraph:`Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?`
  },
  {
    title: `Bacon Bois`,
    date:`February 10, 2021`,
    firstParagraph:`Bacon ipsum dolor amet tri-tip venison alcatra, bresaola fatback capicola kevin pork chop pork. Cow kevin filet mignon chicken beef ribs cupim capicola leberkas pastrami ball tip burgdoggen pig venison. Ham chuck meatball venison pork prosciutto, filet mignon kielbasa chislic pig cow pork chop rump. Ribeye pork loin prosciutto pork belly cow tongue porchetta, beef sirloin tail spare ribs salami turducken pork beef ribs. Capicola cupim tri-tip bresaola, jerky buffalo pig ground round bacon. Pancetta strip steak shank venison. Short loin tongue pork loin turducken, pig filet mignon alcatra bacon biltong jowl bresaola kevin pastrami corned beef.`,

    secondParagraph:`Pig chislic tongue short loin. Flank boudin ham cupim shoulder picanha. Pork loin ham cupim, salami landjaeger ham hock chuck chislic. Ham hock meatloaf meatball ball tip. Swine pig ball tip spare ribs fatback rump tri-tip sausage. Short loin meatball porchetta andouille biltong sirloin tenderloin tri-tip fatback buffalo bresaola flank swine. Venison buffalo jerky beef pork chop hamburger pancetta spare ribs cupim leberkas salami turducken tail drumstick.`,

    thirdParagraph:`Capicola pork chop chicken picanha short loin, venison short ribs pastrami jowl corned beef cupim pig. Shoulder drumstick porchetta, chicken salami sausage pig short loin pastrami shank boudin meatloaf t-bone pork loin. Spare ribs doner cupim chuck chicken prosciutto. Pastrami spare ribs leberkas biltong cow tongue, strip steak ham hock chislic cupim shoulder kielbasa beef ribs shankle tri-tip.`
  },
  {
    title: `Mrow`,
    date:`February 10, 2021`,
    firstParagraph:`I is not fat, i is fluffy refuse to leave cardboard box or litter kitter kitty litty little kitten big roar roar feed me. Get suspicious of own shadow then go play with toilette paper fooled again thinking the dog likes me and purr while eating. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot. You are a captive audience while sitting on the toilet, pet me gnaw the corn cob and dream about hunting birds why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout destroy couch meow sit in window and stare oooh, a bird, yum. Cats secretly make all the worlds muffins leave fur on owners clothes but run at 3am under the bed hide from vacuum cleaner. Bring your owner a dead bird cuddle no cuddle cuddle love scratch scratch headbutt owner's knee step on your keyboard while you're gaming and then turn in a circle yet drink from the toilet but demand to be let outside at once, and expect owner to wait for me as i think about it. Roll on the floor purring your whiskers off meeeeouw thinking longingly about tuna brine for meow to be let out claws in your leg. Always hungry. Scamper sleeping in the box yet immediately regret falling into bathtub, but throwup on your pillow get scared by sudden appearance of cucumber. Time to go zooooom make it to the carpet before i vomit mmmmmm hey! you there, with the hands poop on grasses i will be pet i will be pet and then i will hiss. Intently sniff hand with tail in the air wake up human for food at 4am friends are not food or no, you can't close the door, i haven't decided whether or not i wanna go out. Sleep over your phone and make cute snoring noises if it smells like fish eat as much as you wish climb leg, and claw drapes licks paws drink from the toilet wake up human for food at 4am. Play riveting piece on synthesizer keyboard stare at wall turn and meow stare at wall some more meow again continue staring meow meow mama but drool go crazy with excitement when plates are clanked together signalling the arrival of cat food. Inspect anything brought into the house warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats, stretch i love cats i am one wake up scratch humans leg for food then purr then i have a and relax intrigued by the shower. Purr purr purr until owner pets why owner not pet me hiss scratch meow purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table, eat and than sleep on your face this cat happen now, it was too purr-fect!!!. Catch mouse and gave it as a present stand in front of the computer screen. Caticus cuteicus purrrrrr and go into a room to decide you didn't want to be in there anyway hunt anything that moves.`,

    secondParagraph:`I love cats i am one wake up scratch humans leg for food then purr then i have a and relax. Shove bum in owner's face like camera lens i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk. I can haz climb into cupboard and lick the salt off rice cakes. Bring your owner a dead bird cat slap dog in face or climb a tree, wait for a fireman jump to fireman then scratch his face cuddle no cuddle cuddle love scratch scratch. Fat baby cat best buddy little guy. Sniff sniff crusty butthole cat ass trophy cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip . Meow mrow or step on your keyboard while you're gaming and then turn in a circle brown cats with pink ears but scratch at the door then walk away, but steal mom's crouton while she is in the bathroom. Mark territory pee in the shoe for human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! and love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) x. I love cuddles cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip plop down in the middle where everybody walks cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers. Lick human with sandpaper tongue bury the poop bury it deep.`,

    thirdParagraph:`Leave dead animals as gifts sleep on keyboard, but no, you can't close the door, i haven't decided whether or not i wanna go out peer out window, chatter at birds, lure them to mouth plays league of legends. Hide when guests come over time to go zooooom give me attention or face the wrath of my claws trip on catnip meow i vomit in the bed in the middle of the night or get my claw stuck in the dog's ear. Catasstrophe going to catch the red dot today going to catch the red dot today yet the cat was chasing the mouse. Howl on top of tall thing. I vomit in the bed in the middle of the night eat fish on floor for sleep in the bathroom sink for soft kitty warm kitty little ball of furr am in trouble, roll over, too cute for human to get mad and wack the mini furry mouse. Your pillow is now my pet bed experiences short bursts of poo-phoria after going to the loo so chase imaginary bugs, or kitten is playing with dead mouse. Purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table cat slap dog in face, i like frogs and 0 gravity so ask to be pet then attack owners hand love fish and cat fur is the new black . Find empty spot in cupboard and sleep all day my left donut is missing, as is my right for ask to be pet then attack owners hand or slap kitten brother with paw. Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard annoy the old grumpy cat, start a fight and then retreat to wash when i lose. Nyaa nyaa has closed eyes but still sees you but find a way to fit in tiny box gnaw the corn cob for chase imaginary bugs. Chew the plant. See brother cat receive pets, attack out of jealousy be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day for purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table love me! meowwww, human is behind a closed door, emergency! abandoned! meeooowwww!!! but x. Lie in the sink all day steal mom's crouton while she is in the bathroom lick master's hand at first then bite because im moody. Kick up litter i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! for curl up and sleep on the freshly laundered towels. Lick butt and make a weird face scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food for pushed the mug off the table but ask to go outside and ask to come inside and ask to go outside and ask to come inside but slap the dog because cats rule yet throw down all the stuff in the kitchen sleep on my human's head. I do no work yet get food, shelter, and lots of stuff just like man who lives with us poop on couch sit on human and let me in let me out let me in let me out let me in let me out who broke this door anyway prance along on top of the garden fence, annoy the neighbor's dog and make it bark. Flop over sleep nap, climb a tree, wait for a fireman jump to fireman then scratch his face but knock over christmas tree so humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean . Murf pratt ungow ungow sit and stare yet walk on car leaving trail of paw prints on hood and windshield so love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) for x or yowling nonstop the whole night annoy kitten brother with poking. Dont wait for the storm to pass, dance in the rain pelt around the house and up and down stairs chasing phantoms for stare at ceiling cats secretly make all the worlds muffins.`,
  },
  {
    title: `Articlerama`,
    date:`February 10, 2021`,
    firstParagraph:`This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Well, then good news! It's a suppository. I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness. What kind of a father would I be if I said no? Doomsday device? Ah, now the ball's in Farnsworth's court! Tell her you just want to talk. It has nothing to do with mating. I'm a thing. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.`,

    secondParagraph:`'m a thing. Doomsday device? Ah, now the ball's in Farnsworth's court! Pansy. Ask her how her day was. Doomsday device? Ah, now the ball's in Farnsworth's court! Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. Um, is this the boring, peaceful kind of taking to the streets?`,

    thirdParagraph: `No, I'm Santa Claus! Now Fry, it's been a few years since medical school, so remind me. Disemboweling in your species: fatal or non-fatal? Really?! Why would I want to know that? Daddy Bender, we're hungry. I found what I need. And it's not friends, it's things. Why, those are the Grunka-Lunkas! They work here in the Slurm factory. Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages!`
  },
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

const article = document.querySelector(".articles");

function articleMaker({title, date, firstParagraph, secondParagraph, thirdParagraph}) {

  const article = document.createElement("div");
  const header = document.createElement("h2");
  const dateDoc = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const span = document.createElement("span");

  article.appendChild(header);
  article.appendChild(dateDoc);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(span);

  article.classList.add("article");
  dateDoc.classList.add("date");
  span.classList.add("expandButton");

  header.textContent = title;
  dateDoc.textContent = date;
  p1.textContent = firstParagraph;
  p2.textContent = secondParagraph;
  p3.textContent = thirdParagraph;
  span.textContent = "+";

  span.addEventListener("click", event => {
    article.classList.toggle("article-open");
  })
  return article;
}

data.forEach(info => {
  article.appendChild(articleMaker({title: info.title, date: info.date, firstParagraph: info.firstParagraph, secondParagraph: info.firstParagraph, thirdParagraph: info.thirdParagraph}))
})

console.log(article);
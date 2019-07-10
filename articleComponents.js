const articlesC = document.querySelector('.articles');
// console.log(articlesC);

function createNewArticle(title, date, content) {
  // console.log(title, date, content);
  const articleC = document.createElement('div');
  const titleC = document.createElement('h2');
  const dateC = document.createElement('p');
  const contentC = document.createElement('p');
  const buttonC = document.createElement('span')

  articlesC.appendChild(articleC);
  articleC.appendChild(titleC);
  articleC.appendChild(dateC);
  articleC.appendChild(contentC);
  articleC.appendChild(buttonC);

  articlesC.classList.add('articles');
  articleC.classList.add('article');
  dateC.classList.add('date');
  buttonC.classList.add('expandButton');

  buttonC.textContent = 'Expand'
  titleC.textContent = title
  contentC.textContent = content
  dateC.textContent = date

  buttonC.addEventListener('click', event => {
    articleC.classList.toggle('article-open');
  })
  return articleC
}

const articleData = [
  {
    title: "Lambda School Students: 'We're the best!'",
    date: "Nov 5th, 2017" ,
    content: "Lucas ipsum dolor sit amet ben twi\'lek padm\u00E9 darth darth darth moff hutt organa twi\'lek. Ben amidala secura skywalker lando\r\nmoff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker\r\nwatto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.\r\nHutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn\r\njar twi\'lek jinn leia jango skywalker mon. \r\n\r\nGrievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2\r\nwindu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine\r\nmace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff\r\nk-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff\r\nsolo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba\r\nowen jinn tatooine sith organa.\r\n\r\nDagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious\r\nnaboo ackbar tatooine. Hutt lars padm\u00E9 darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket\r\nhan. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi\'lek padm\u00E9 wookiee. Leia\r\nmoff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon."
  },
  {
    title: "Javascript and You, ES6",
    date: "Nov 7th, 2017",
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
    title: "React vs Angular vs Vue",
    date: "Nov 7th, 2017",
    content: "Content"
  },
  {
    title: "Professional Software Development in 2018",
    date: "Nov 7th, 2017",
    content: "Content"
  }
]

articleData.forEach(data => {
  articlesC.appendChild(createNewArticle(data.title, data.date, data.content))
})

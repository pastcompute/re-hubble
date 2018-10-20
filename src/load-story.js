const exports = module.exports = {};
const d3 = require('d3-fetch');
const _ = require('lodash/core');

function genPage(id, inner, ...classes) {
  const el = document.createElement('page');
  el.setAttribute('id', id);
  el.innerHTML = inner;
  if (classes && classes.length > 0) {
    el.classList.add(...classes);
  }
  return el;
}

exports.loadDemoStory = (sourceJson) => {
  console.log(`Load Story from ${sourceJson}`);

  const story = document.createElement('div');

  const initScript = document.createElement('initscript');
  initScript.innerHTML = `
    story.messageDamage  = 0;
    story.messageScrewed = function () { return story.messageDamage < 2; };
    story.cloakPutOn     = false;
    story.cloakJustPutOn = false;`;

  console.log(initScript);

  const title = document.createElement('title');
  title.innerHTML = 'Title hello world';

  const intro = genPage('intro',`
    <p>Hurrying through the rainswept November night, you're glad to see the bright lights of the Opera House. It's surprising that there aren't more people about but, hey, what do you expect in a cheap demo game...?</p>
    <div class="center">Cloak of Darkness</div>
    <div class="center">A basic IF demonstration.</div>`
  );

  const foyer = genPage('foyer',`
    <p>You are standing in a spacious hall, splendidly decorated in red and gold, with glittering chandeliers overhead.
    There is an entrance from the <show paragraph="street">street</show>,
    and there are doorways <turn to="bar" id="south">south</turn> and <turn to="cloakroom">west</turn>.</p>

    <img class="nebula" src="assets/images/12.jpg">

    <paragraph id="street">
        You've only just arrived, and besides, the weather outside seems to be getting worse.
    </paragraph>`, 'first'
  );

  story.appendChild(initScript);
  story.appendChild(title);
  story.appendChild(intro);
  story.appendChild(foyer);
  story.setAttribute('id', 'story');

  return story;
}

function parseMap(json, titleInner) {
  // console.log(json);
  const story = document.createElement('div');
  story.setAttribute('id', 'story');

  const initScript = document.createElement('initscript');
  initScript.innerHTML = `
    story.messageDamage  = 0;
    story.messageScrewed = function () { return story.messageDamage < 2; };
    story.cloakPutOn     = false;
    story.cloakJustPutOn = false;`;

  console.log(initScript);

  const title = document.createElement('title');
  title.innerHTML = titleInner;

  const nodes = json.nodes;
  // console.log(nodes);

  // For now, intro is type start
  // const start1 = _.find(nodes, (o) => o.type === 'intro');
  // if (!start1) { console.error('type=intro not found in json'); }
  // const intro = genPage('intro', `<h1>${start1.title}</h1><p>${start1.body}</p>`);
  // const foyer1 = _.find(nodes, (o) => o.type === 'first');
  // if (!foyer1) { console.error('type=first not found in json'); }
  // let hh = `<h1>${foyer1.title}</h1><p>${foyer1.body}</p>`;
  // if (foyer1.image) {
  //   hh += `<img class="nebula" src="assets/images/${foyer1.image}">`
  // }
  // const foyer = genPage('foyer', hh, 'first');

  let intro;
  let first;
  const pages = [];
  _.each(nodes, (v, k) => {
    console.log(`Node id=${v.id} type=${v.type} title=${v.title}`);
    const txt = `<h2>${v.title}</h2><p>${v.body}</p>`
    if (v.type === 'intro') {
      intro = genPage('intro', txt);
      return;
    }
    if (v.image) {
      txt += `<img class="nebula" src="assets/images/${foyer1.image}">`;
    }
    const classes = [];
    if (!first && v.type === 'foyer') {
      classes.push('first');
      first = true;
    }
    pages,push(genPage(v.id, txt, classes));
  });


  story.appendChild(initScript);
  story.appendChild(title);
  story.appendChild(intro);
  pages.each((v) => story.appendChild(v));
  return story;
}

// TODO: load title from json
exports.loadStoryJson = (titleInner, sourceJson) => {
  console.log(`Load Story from ${sourceJson}`);
  return new Promise((resolve, reject) => d3.json(sourceJson).then((json) => { resolve(parseMap(json, titleInner)); }));
}

const exports = module.exports = {};

function genDemoPage(id, inner, ...classes) {
  const el = document.createElement('page');
  el.setAttribute('id', id);
  el.innerHTML = inner;
  if (classes) {
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

  const intro = genDemoPage('intro',`
    <p>Hurrying through the rainswept November night, you're glad to see the bright lights of the Opera House. It's surprising that there aren't more people about but, hey, what do you expect in a cheap demo game...?</p>
    <div class="center">Cloak of Darkness</div>
    <div class="center">A basic IF demonstration.</div>`
  );

  const foyer = genDemoPage('foyer',`
    <p>You are standing in a spacious hall, splendidly decorated in red and gold, with glittering chandeliers overhead. There is an entrance from the <show paragraph="street">street</show>, and there are doorways <turn to="bar" id="south">south</turn> and <turn to="cloakroom">west</turn>.</p>
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


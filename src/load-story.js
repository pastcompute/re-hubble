const exports = module.exports = {};

exports.loadStory = (sourceJson) => {
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

  const intro = document.createElement('page');
  intro.setAttribute('id', 'intro');
  intro.innerHTML = `
    <p>Hurrying through the rainswept November night, you're glad to see the bright lights of the Opera House. It's surprising that there aren't more people about but, hey, what do you expect in a cheap demo game...?</p>
    <div class="center">Cloak of Darkness</div>
    <div class="center">A basic IF demonstration.</div>`;


  story.appendChild(initScript);
  story.appendChild(title);
  story.appendChild(intro);
  story.setAttribute('id', 'story');

  return story;
}


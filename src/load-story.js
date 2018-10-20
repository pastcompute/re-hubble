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

  story.appendChild(initScript);
  story.setAttribute('id', 'story');

  return story;
}


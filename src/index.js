console.log('Hello, World');

$(function () {

  const story = document.getElementById('story');

  var el;
  
  el = document.createElement('initscript');
  el.innerHTML = `
  story.messageDamage  = 0;
  story.messageScrewed = function () { return story.messageDamage < 2; };
  story.cloakPutOn     = false;
  story.cloakJustPutOn = false;
`;

  story.appendChild(el);

  console.log(story);



  new DedalusWeb({
      domSource         : $('#story'),
      domTarget         : $('#host'),
      titleTarget       : $('#title'),
      inventoryTarget   : $('#inventoryHost'),
      interactionTarget : $('#interactionHost'),
      undoTarget        : $('#undoHost'),
      undoStageTarget   : $('#undoStageHost'),
      saveTarget        : $('#saveHost'),
      restoreTarget     : $('#restoreHost'),
      resetTarget       : $('#reseteHost'),
  });
});

module.exports = {}

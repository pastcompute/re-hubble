const StoryLoader = require('./load-story');

console.log('Hello, World');

$(function () {

  // const story = StoryLoader.loadDemoStory('story.json');
  StoryLoader.loadStoryJson('Welcome to Re:Hubble', 'assets/map.json').then(story => {
    const container = document.getElementById('story-container');
    container.appendChild(story);
    // console.log(container);
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
});

module.exports = {}

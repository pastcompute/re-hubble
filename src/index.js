console.log('Hello, World');

$(function () {
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

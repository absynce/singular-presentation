$(initPresentation); // Called on jquery dom ready.

function initPresentation() {
  var frontX = 3000;
  var frontZ = 0;
  var frontRotate = { x: 0, y: 0, z: 0 };
  var frontScale = 3;

  var options = {
    steps: {
      'title':  { x: frontX, y: -1000, z: frontZ, rotate: frontRotate, scale: frontScale },
      'static': { x: frontX, y: 0,     z: frontZ, rotate: frontRotate, scale: frontScale }

    }
  }
  initData(options);
  initEvents();
  impress().init(options);
}

function initData(options) {
  for (var step in options.steps) {
    var stepData = options.steps[step];

    var element = document.querySelector('#' + step);

    for (var stepElement in stepData) {
      element.dataset[stepElement] = stepData[stepElement];
    }
  }
}

function initEvents() {
  initEscOnOverview();
}

function initEscOnOverview() {
  // Press ESC to go to overview
  $('body').keyup(function (e) {
    if (e.keyCode == 27) {
      impress().goto('overview');
    }
  });
}

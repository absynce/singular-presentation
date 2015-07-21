$(initPresentation); // Called on jquery dom ready.

function initPresentation() {
  // Front & center coords
  var front = {
    x         : 3000,
    z         : 0,
    rotate    : { x  : 0, y: 0, z: 0 },
    scale     : 3
  };

  // Angular 1.x coords
  var ng1x = {
    x         : -1150,
    z         : 0,
    rotate    : { x  : 0, y: -30, z: 0 },
    scale     : 3
  };

  // Angular 2 coords
  var ng2 = {
    x         : 7000,
    z         : -1000,
    rotate    : { x  : 0, y: 30, z: 0 },
    scale     : 3
  };

  var options = {
    steps: {
      'title':               { x: front.x, y: -1000, z: front.z, rotateX: front.rotate.x, rotateY: front.rotate.y, rotateZ: front.rotate.z, scale: front.scale },
      'static':              { x: front.x, y: 0,     z: front.z, rotateX: front.rotate.x, rotateY: front.rotate.y, rotateZ: front.rotate.z, scale: front.scale },
      'angularized':         { x: front.x, y: 600,   z: front.z, rotateX: front.rotate.x, rotateY: front.rotate.y, rotateZ: front.rotate.z, scale: front.scale },
      'angular1x-tech':      { x: ng1x.x,  y: 900,   z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-tech':       { x: ng2.x,   y: 1200,  z: ng2.z,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-directives':{ x: ng1x.x,  y: 2200,  z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-directives': { x: ng2.x,   y: 2200,  z: ng2.z,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-mvc':       { x: ng1x.x,  y: 3300,  z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-mvc':        { x: ng2.x,   y: 3300,  z: ng2.z,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-bindings':  { x: ng1x.x,  y: 4700,  z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-alpha':      { x: ng2.x,   y: 1200,  z: -8000,   rotateX: ng2.rotate.x,   rotateY: 210,            rotateZ: ng2.rotate.z,   scale: ng2.scale  },
    }
  }
  initData(options);
  initEvents();
  impress().init(options);
}

function initData(options) {
  for (var step in options.steps) {
    var stepData = options.steps[step];

    console.log('step', step);
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

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
      'title':               { x: front.x, y: -1200, z: front.z, rotateX: front.rotate.x, rotateY: front.rotate.y, rotateZ: front.rotate.z, scale: front.scale },
      'static':              { x: front.x, y: 0,     z: front.z, rotateX: front.rotate.x, rotateY: front.rotate.y, rotateZ: front.rotate.z, scale: front.scale },
      'angularized':         { x: front.x, y: 900,   z: front.z, rotateX: front.rotate.x, rotateY: front.rotate.y, rotateZ: front.rotate.z, scale: front.scale },
      'angular1x-tech':      { x: ng1x.x,  y: 900,   z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-tech':       { x: ng2.x,   y: 1000,  z: ng2.z,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-mvc':       { x: ng1x.x,  y: 2400,  z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-mvc':        { x: ng2.x,   y: 2400,  z: ng2.z,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-directives':{ x: ng1x.x,  y: 3800,  z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-directives': { x: ng2.x,   y: 3800,  z: ng2.z,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-ng-repeat': { x: ng1x.x,  y: 5500,  z: ng1x.z,  rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-ng-for':     { x: ng2.x,   y: 5500,  z: ng2.z,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-bindings':  { x: ng1x.x,  y: 1200,  z: -8000,   rotateX: ng1x.rotate.x,  rotateY: 210,            rotateZ: ng1x.rotate.z,  scale: ng1x.scale  },
      'angular2-alpha':      { x: ng2.x,   y: 1200,  z: -8000,   rotateX: ng2.rotate.x,   rotateY: 210,            rotateZ: ng2.rotate.z,   scale: ng2.scale  },
      'angular1x-overview':  { x: ng1x.x,  y: 3000,  z: -1000,   rotateX: ng1x.rotate.x,  rotateY: ng1x.rotate.y,  rotateZ: ng1x.rotate.z,  scale: 10  },
      'angular2-overview':   { x: ng2.x,   y: 3000,  z: -1000,   rotateX: ng2.rotate.x,   rotateY: ng2.rotate.y,   rotateZ: ng2.rotate.z,   scale: 10  },
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
  initOverviewOnEsc();
  initRefBranchOnShiftHold();
}

function initOverviewOnEsc() {
  // Press ESC to go to overview
  $('body').keyup(function (e) {
    if (e.keyCode == 27) {
      impress().goto('overview');
    }
  });
}

function initRefBranchOnShiftHold() {
  // Hold shift to show ref branch.
  $('body').keydown(function (e) {
    if (e.keyCode == 16) {
      document.querySelector('.step.active .ref-branch').style.opacity = 1;
    }
  });
  $('body').keyup(function (e) {
    if (e.keyCode == 16) {
      document.querySelector('.step.active .ref-branch').style.opacity = 0;
    }
  });
}

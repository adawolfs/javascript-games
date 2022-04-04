var sceneEl = document.querySelector('a-scene');

AFRAME.registerComponent('guategeeks', {
    init: function () {
      console.log("guategeeks");
    },
    
    tick: function () {
      // Don't call query selector in here, query beforehand.
    // let camera = document.getElementById('camera');
    // let position = { ...camera.getAttribute('position') };
    // console.log(position);
    // position.z =  position.z - 3;
    // position.y =  0.75;
    // console.log(position);
    // cylinder.setAttribute('position', position);
    }
});
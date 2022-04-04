let body = document.getElementsByTagName('body')[0];
body.addEventListener('keydown', (e) => {
    console.log(e)
    setCylinderPosition(getCameraPosition());
});


function getCameraPosition() {
    let camera = document.getElementById('camera');
    let position = camera.getAttribute('position');
    console.log(position)
    return position
}

function setCylinderPosition(position) {
    let cylinder = document.getElementById('cylinder');
    cylinder.setAttribute('position', position);
}
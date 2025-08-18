var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');

function updateColor() {
    let r = red.value;
    let g = green.value;
    let b = red.value;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`

}
red.oninput = updateColor;
green.oninput = updateColor;
blue.oninput = updateColor;
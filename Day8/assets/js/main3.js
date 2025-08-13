let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var btn = document.getElementById('btn');
var color = document.getElementById('color');

function addCanvas() {
    for (var i = 0; i < 100 * Math.random(); i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            10 * Math.random(),
            0,
            Math.PI * 2
        );
        ctx.strokeStyle = color.value;
        ctx.stroke();
    }

}


btn.addEventListener('click', addCanvas)
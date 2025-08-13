var rate1 = document.getElementById('rate1');
var rate2 = document.getElementById('rate2');
var rate3 = document.getElementById('rate3');

function animateProgress(progressElem, max, rate) {
    let value = 0;
    let increasing = true;

    setInterval(() => {
        if (increasing) {
            value++;
            rate.innerHTML = `<p style="color: aliceblue;">${value}%</p>`;
            if (value >= max) increasing = false;
        } else {
            value--;
            if (value <= 0) increasing = true;
        }
        progressElem.value = value;
        // rate.innerHTML = `<p style="color: aliceblue;">${value}%</p>`;
    }, 50);
}

let html = document.getElementById('html_progress');
let css = document.getElementById('css_progress');
let js = document.getElementById('js_progress');
animateProgress(html, 100, rate1);
animateProgress(css, 80, rate2);
animateProgress(js, 50, rate3)
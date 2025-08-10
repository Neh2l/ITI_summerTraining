// =========== task1 =================


var sum = 0;

do { 1
    var num = parseInt(prompt("Enter number"));
    sum += num;
    console.log("Sum = " + sum);

} while (num !== 0 && sum < 100 && isFinite(num) && num !== null && num !== " ");

alert("Bad luck !");


// var sum = 0;

// do {
//     var num = parseInt(prompt("Enter number"));
//     sum += num;
//     console.log("Sum = " + sum);

// } while (num == 0 || sum < 100 || isNaN(num) || num == null || num == " ");

// alert("Bad luck !");

// =========== task2 =================

// prompt("Welcome to my page");

// let YourName = prompt("Enter your name");
// let color = prompt("Enter favourite color");

// switch (color) {
//     case 'red':
//         color = "red";
//         break;
//     case 'Blue':
//         color = "blue";
//         break;
//     case 'Green':
//         color = "green";
//         break;
//     case 'White':
//         color = "white";

//         break;

//     default:
//         color = "Black";
//         break;

// }
// document.body.innerHTML = `
//  <h1>My name is : ${YourName}</h1>
//   <h3 style="color: ${color};">My favourite color is :${color}</h3>

// `;

// =========== task3 =================

// var msg = prompt("Send a message");
// document.body.innerHTML = `
//     < h1 > ${msg}</h1 >
//   <h2>${msg}</h2>
//   <h3>${msg}</h3>
//   <h3>${msg}</h3>
//   <h4>${msg}</h4>
//   <h5>${msg}</h5>
//   <h5>${msg}</h5>

// `;
// var msg = prompt("Send a message");

// for (var i = 1; i <= 6; i++) {
//     document.body.innerHTML += `<h${i}>${msg}</h${i}>`;
// }


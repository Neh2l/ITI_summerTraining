// var arr = [1.98, "Ahmed", true, false, "nehal", 98];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// // console.log(arr);
// // arr.push("Angel");   //add at the end
// // console.log(arr);

// // arr.unshift("nehal");
// // console.log(arr);    //add at the start

// // arr.pop();
// // console.log(arr);  //delete the end

// // arr.shift();
// // console.log(arr);  //delete the start

// // var newArr = arr.concat(["tamer", 54, true]);
// // console.log(newArr);

// // console.log(arr);
// // arr.slice(2, 3);
// var newArr = arr.slice(2);
// console.log(newArr);

// console.log(arr.indexOf("nehal"));
// console.log(arr.includes(4));

// // console.log(arr);
// // arr.reverse();
// // console.log(arr);

// var arr2 = [3, 8, 5, 1, 0]
// console.log(arr2);
// arr2.sort((a, b) => a - b);
// console.log(arr2);

// // console.log(arr2);
// arr2.sort((a, b) => b - a);
// console.log(arr2);

// var value = arr.join("-");
// console.log(value);

// var value2 = value.split("-");
// console.log(value2);

// // -----------------------------------------

// console.log(Math.PI);
// value = Math.max(5, 9, 7, 32);
// console.log(value);

// value2 = Math.min(5, 9, 7, 32);
// console.log(value2);

// console.log(Math.pow(2, 5));
// console.log(Math.round(Math.random() * 10));

// console.log(Math.ceil(1.6));  //بترفع رقم فوق
// console.log(Math.ceil(1.4));

// console.log(Math.floor(1.6));  //بترفع رقم تحت
// console.log(Math.floor(1.4));

// console.log(Math.round(1.6));  //  بتقرب عادي
// console.log(Math.round(1.4));

// // err = new Error["sorry"];
// // console.log(err);
// // throw err;
// var arrone = ["Ahmed", 'mohamed', 65, true, "nehal"];
// var arrtwo = ["Angel", '43', 65, false, 12];

// // console.log(arrone);
// // console.log(arrtwo);
// // arrtwo = arrone;
// // console.log(arrtwo);

// // arrone.pop();
// // console.log(arrtwo);

// // for (var i = 0; i < arrone.length; i++) {
// //     arrtwo[i] = arrone[i];
// // }
// // console.log(arrtwo);
// // arrone.pop();
// // console.log(arrtwo);
// // console.log(arrone);

// // -----------------------------------------------------
// // var today = new Date(2025, 12, 6);
// // console.log(today);
// // console.log(today.getDate());
// // console.log(today.getMonth());
// // console.log(today.getFullYear());

// // -------------------------------------------------------
// // regx

// // var pattern=/[a-z]
// // ------------------------------------------------------


// function test() {
//     // console.log(a, b);
//     console.log(Array.from(arguments));
//     //هي زي الاراي بس مش بالظبط

// }
// test(2, 6, 9, 7, 7, 4);

// function fun() {
//     console.log("hello world1");

// }
// fun();

// var fun = function () {
//     console.log("hello world1");

// }
// fun();

// (function fetchApi() {
//     console.log("Apii");


// })(); //فانكشن بتنادي نفسها

// ----------------------Task1-------------------------------------


var str = new String(prompt("Pls write any thing ! "));

if (str == null || str.trim() == " " || !isNaN(str)) {
    alert("Enter valid numbers");
} else {
    var count = 0;
    for (var i = 0; i < str.length; i++) {

        if (str[i] == "e" || str[i] == "E") {
            count++;
        }
    }
    console.log(count);
}

// ----------------------Task2-------------------------------------

var arr = [];
for (var i = 0; i < 3; i++) {
    arr[i] = parseInt(prompt("Enter Any numbers !"))

}
function operation() {
    var result;
    var sign = prompt("pls enter the sign ?");
    if (sign == "+") {
        result = 0
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }
    } else if (sign == "-") {
        result = arr[0];
        for (var i = 0; i < arr.length; i++) {
            result -= arr[i];
        }
    } else if (sign == "*") {
        result = 1;
        for (var i = 0; i < arr.length; i++) {
            result *= arr[i];
        }
    }
    else if (sign == "/") {
        result = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] == 0) {
                alert("invalid operation !");
                return;
            }
            result /= arr[i];
        }
    }

    console.log("Final result :", result);

}
operation();

// ----------------------Task3-------------------------------------
var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = parseInt(prompt("Enter Any numbers !"))

}
console.log(arr);
arr.sort((a, b) => a - b);
console.log("Ascending Order:", arr);

arr.sort((a, b) => b - a);
console.log("Descending Order:", arr);


// ----------------------Task4-------------------------------------

const nameRegex = /^[\p{L} ]+$/u;
const mobileRegex = /^(?:010|011|012)\d{8}$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

let name = prompt("Please enter name!");
let mobile = prompt("Please enter mobile!");
let email = prompt("Please enter email!");

console.log("Hello " + name + " => Name valid? " + nameRegex.test(name));
console.log("Your mobile " + mobile + " => Mobile valid? " + mobileRegex.test(mobile));
console.log("Your email " + email + " => Email valid? " + emailRegex.test(email))


















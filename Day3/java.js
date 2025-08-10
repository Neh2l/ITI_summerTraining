var num = 5;
var name = "Nehal";
var bool = true;
var nullValue = null;
var undefinedValue = undefined;
console.log(typeof (num));
console.log(typeof (name));
console.log(typeof (bool));
console.log(typeof (nullValue));
console.log(typeof (undefinedValue));

var FullName = "Nehal Reda ";
var age = 20;
console.log("Hello", FullName, age, "Years");

var x = 10, y = 5, z = 2;
console.log(x + y);
console.log(x - z);
console.log(x * y);
console.log(x / z);
console.log(x % z);
console.log(++x);
console.log(--y);

var score = 0;
console.log(score += 5);
console.log(score -= 2);
console.log(score *= 3);
console.log(score /= 2);


var isAdmin = prompt("Are you admin? (yes/no)") === "yes";
var isLoggedIn = prompt("Are you logged in? (yes/no)") === "yes";

if (isAdmin && isLoggedIn) {
    console.log("Hello World");
}

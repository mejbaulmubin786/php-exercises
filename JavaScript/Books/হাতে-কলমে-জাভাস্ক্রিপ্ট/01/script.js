// --------------------------------------------------------------------------------------------Page-21
//document.write("<br>" + "<br>" + "<strong>Page-21</strong>" + "<br>");

console.log("Mejbaul Mubin");
console.log(a);
var a = 20;
console.log("Hellow world from Inside!");
var m;
console.log(m); //Undefined data
var someThing = null;
console.log(someThing);

// --------------------------------------------------------------------------------------------Page-32
var text = "How" + "are you?";
var welcomeMsg = "Hello," + text;
console.log(welcomeMsg);

console.log(typeof welcomeMsg);

var myName = "Mejbaul";
myName = "Mejbaul Mubin";
console.log(myName);
someThing = "Zonayed Ahmed";
console.log(typeof someThing);
someThing = 10;
console.log(typeof someThing);
// --------------------------------------------------------------------------------------------Page-49
var b = 10;
var c = a > b ? 10 : 30;
console.log(c);

if (3 > 5) {
  console.log("Yeah I will be excited!");
}

// --------------------------------------------------------------------------------------------Page-55

var whatDay = "Sunday";
var Holyday = null;
if (whatDay === "Friday" || whatDay === "Saturday") {
  console.log("weekend");
} else if (
  (whatDay === "Sunday" ||
    whatDay === "Monday" ||
    whatDay === "Tuesday" ||
    whatDay === "Wednesday" ||
    whatDay === "Thursday") &&
  Holyday == null
) {
  console.log("My Working day");
} else {
  console.log("Public Holyday");
}

let min;
if ((a < b || a == b) && (a < c || a == c)) {
  min = a;
} else if (b < a && b < c) {
  min = b;
} else {
  min = c;
}

console.log(min);

var Day = "Fryday";

switch (Day) {
  case "Sunday":
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Working day");
    break;
  case "Fryday":
  case "Saturday":
    console.log("Weekend");
    break;
  default:
    console.log("Not a Day");
}
// --------------------------------------------------------------------------------------------Page-59
//for loop
for (let i = 0; i < 10; i++) {
  console.log("Go " + i + " step");
}

//While loop
let x = 8;
while (x < 10) {
  console.log("Inside the while Loop");
  x++;
}
console.log("Outsite the while loop");

//do-while loop
let num = 8;
do {
  console.log("Inside the loop, num is: " + num);
  num += 1;
} while (num < 10);

console.log("Outsite the loop");

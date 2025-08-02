//1. Alert
//first
alert("Hello, World!");

//second
alert("Sameer Ali");

//third
alert(10);

//fourth
var msg = "Welcome to my page";
alert(msg);

//fifth
let obj = "PC";
let order = "Restart " + obj;
alert(order);

//2.Variables for strings
//first
let userName = "Ali";

//second
let welcome = "Welcome to our website.";
alert(welcome);

//third
let firstName = "Sameer";
let lastName = "Ali";
let combine = firstName + lastName;

// fourth
let quote = "One day's life of a lion is better than 100 years life of a jackal.";

//fifth
let city = "Karachi";
alert("Welcome to " + city);

//3.Variables for numbers
//first
let age = 18;

//second
let num1 = 10;
let num2 = 15;
console.log(num1 + num2);

//third
console.log(num1 - num2);

//fourth
console.log(num1 * num2);

//fifth
alert("You are 18 year old.");

//4. Math Expressions
//first
let x = 10;
let y = 5;
let addResult = x + y;
alert(addResult);

//second
let subResult = x - y;
alert(subResult);

//third
let multiResult = x * y;
console.log(multiResult);

//fourth
let divResult = x / y;
console.log(divResult);

//fifth
let remainder = x % y;
console.log(remainder);

//5. Getting Result from the User
//first
let consumerName = prompt("What's your name?");
alert("Hello " + consumerName);

//second
let consumerAge = prompt("What's your age?");
alert("You are " + consumerAge + ".");

//third
let userNumber = prompt("Say a number");
let doubleNumber = userNumber * 2;
alert(doubleNumber);

//fourth
let favColor = prompt("What's your favourite color?");
alert("Oh wow! I like " + favColor + " too!");

//five
let userCity = prompt("What's your city name?");
alert("You are from " + userCity + ".");

//6. If Statement and Comparison Operators
//first
let userAge = 25;
if(userAge < 30) {
    console.log("You are still young man.");
}

//second
let even_odd = prompt("Write any number");
even_odd = parseInt(even_odd)
if(even_odd % 2 === 0) {
    alert(even_odd + " is an Even number.");
} else {
    alert(even_odd + " is Odd number.")
}

//third
let number1 = 10;
let number2 = 12;
if(number1 > number2){
    console.log(number1 + " is greater than " + number2);
} else {
    console.log(number2 + " is greater than " + number1);
}

//fourth
let password = prompt("Write password");
if(password === 123) {
    alert("Access granted");
} else {
    alert("Access denied");
}

//fifth
let value1 = 12;
let value2 = "12";
//"=="
if(value1 == value2){
    console.log(value1 + " and " + value2 + " are equal.");
}
else {
    console.log("They aren't equal.");
}

//"==="
if(value1 === value2) {
    console.log(value1 + " is not equal to " + value2 + ".");
} 
else {
    console.log(value1 + " is not equal to " + value2 + ".")    
}

//"!="
if(value1 != value2) {
    console.log(value1 + " and " + value2 + " are two different values.");
}
else {
    console.log(value1 + " and " + value2 + " are the same values.");
}

//"!=="
if(value1 !== value2) {
    console.log(value1 + " and " + value2 + " are not equal.");
}
else {
    console.log(value1 + " and " + value2 + " are equal.");
}
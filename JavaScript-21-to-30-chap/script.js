// Strings: Measuring Length and Extracting Part

// Q1

let str = "Hello, World!";
console.log(str.length);

// Q2

console.log(str.substring(7, 12));

// Q3

let sentence = "The cat is sleeping";
console.log(sentence.includes("cat"));

// Q4

console.log(sentence.indexOf("sleep"));


// Strings: Finding a Character at a Location

// Q1

let text = "JavaScript";
console.log(text.charAt(3));

// Q2

let text2 = "Programming";
console.log(text2[text2.length-1]);


// Rounding Numbers

// Q1

let num = 7.8;
console.log(Math.round(num));

// Q2

let num2 = 5.9;
console.log(Math.floor(num2));

// Q3

let num3 = 4.2;
console.log(Math.ceil(num3));


// Generating Random Numbers

// Q1

console.log(Math.random());

// Q2

console.log(Math.floor(Math.random() * 10) + 1);


// Q3 Converting Strings to Integers and Decimals

// Q4

let strNum = "100";
console.log(parseInt(strNum));
;

// Q5

let strFloat = "3.141";
console.log(parseFloat(strFloat));


// Converting Strings to Numbers and Numbers to Strings

// Q1

let number = 250;
console.log(number.toString());

// Q2

let strNumber = "45.67";
console.log(Number(strNumber));

// Q3

let number1 = 5.6789;
console.log(number1.toFixed(2));

// Q4

let number2 = 3.1415926535;
console.log(number2.toFixed(4));

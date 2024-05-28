// creating variable process

// 1. var/let/cont - keywords
// 2. variable/container name
// 3. =, assingnmental operator , right(value) to shift 
// to left (variable asign)
// 4. value/info/data

// example - 
let a = 12;

//   #naming convention of thr @variables
// 1. must be related to the  data
// 2. must start with the small/capital letters or with "_"
// 3. must be the single word
// 5. must use the case pattern if variable is more than in a word (i.e) "_"
//  snake_case_pattern
//  camelCasePattern
//  PascalCasePattern
//                  XXXXX    kabab-case-pattern XXXXXXXXX


// data types 
// number -> 123/-234/-2.3
// String -> "asd" or `kdj`
// boolean -> true(right)/false(wrong)
//            to vanish the value from programmer
// object -> null{ when programmer intentionally empty the value}
//            to vanish the value from the server side
// undefined -> undefined { when the value is empty by the compiler}
// object ke types -> array[] /object{}


//            what is symbol in datatype in js (H.W.)

//  input output methods in js 
    // input methods
//  take two numerical input from the user and output the final result name result by adding them

// input
// enter number 1
// enter number 2

// output 
// e.g -> the sum is xyz

// var x=prompt(enter value of x)
// var y=prompt(enter value of y)
// console.log .............


// implicit/explicit type convrsion
//  explicit type converters is used to convert the  data type from the user side and vice versa when the value is converted by the js it is known as the implicit converts
var num1 = number(prompt("enter number 1"));
var num2 = +prompt("enter number 1");
var sum = num1 + num2;
console.log(typeof num2);
console.log(the sum is "+sum");


// var m = confirm("do you want to leave this page");
// alert("the output is "+m);


// usually the alert and confirm provides the dialog box at the console 
// like the pop up which is responsible to take the input from the user in the form of the dialog box


// **scope
// {

//     var -> global scopic variable
//     let-> local scopic variable
//     const-> local scopic variable with constant vlaue which means the value  is once assingned
// }

// **********comparison operators -> Boolean(true or false)
// > >= < <= != == === !==

// in string comparison, js ,always compares the first non equal character only with the help of the aski values
// console.log("john" > "doe");


// to learn the AND(&) and or(||) operators

a=13;

x = a > 10;
y = a % 2 == 0;
console.log(x || y);
console.log(x & y);

// truth table for the above
//                  &&       ||
// false false     false    false
// false true      false    true
// true false      false    true
// true  true      true     true

//  falsy values 
// 0 null undefined ""  false

// console.log(0 && 13);
console.log("hello" || null)
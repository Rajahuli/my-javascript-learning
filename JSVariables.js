//Declare variable and then initialize
let message;
message="Hello Dhanya";
alert("Print Message: "+message);

//Declare multiple variables and initialize in one line
//The multiline variant is a bit longer, but easier to read:
 let user = 'Dhnaya', age = 1, message = 'Hello';
 alert("Printing:"+user);

//the “comma-first” style:
let user = 'John'
  , age = 25
  , message = 'Hello';

//When value is change variable will hold the latest value
let message;
message = 'Hello!';
message = 'World!'; // value changed
alert(message);

"use strict";

num = 5; // error: num is not defined


var count = 5;
var a = 0;
var b =1;
console.log(a+","+b);
for(var i=0;i<=count;i++) {
    var c = a+b;
    a = b;
    b =c;
    console.log(c);
}
//Case matterns
// Variables named apple and AppLE are two different variables.
//
// Non-Latin letters are allowed, but not recommended
// It is possible to use any language, including cyrillic letters or even hieroglyphs, like this:
//
// let имя = '...';
// let 我 = '...';

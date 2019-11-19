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

/**
A variable in JavaScript can contain any data.
A variable can at one moment be a string and at another be a number:
 ## no error
*/

let message = "hello";
message = 123456;

/*
Programming languages that allow such things are called “dynamically typed”.
meaning that there are data types, but variables are not bound to any of them.

Besides regular numbers, there are so-called “special numeric values”
which also belong to this data type: Infinity, -Infinity and NaN.
We can get it as a result of division by zero:
*/

 alert( 1 / 0 ); // Infinity
/*
 NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation,
 for instance:
*/
  alert( "not a number" / 2 ); // NaN, such division is erroneous

 //NaN is sticky. Any further operation on NaN returns NaN:

  alert( "not a number" / 2 + 5 ); // NaN

/*
In JavaScript, there are 3 types of quotes.
Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
Double and single quotes are “simple” quotes.
There’s no difference between them in JavaScript.

Backticks are “extended functionality” quotes.
They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
*/
  let name = "John";

  // embed a variable
  alert( `Hello, ${name}!` ); // Hello, John!

  // embed an expression
  alert( `the result is ${1 + 2}` ); // the result is 3

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello Ilya

alert( `hello ${name}` ); // ? hello name

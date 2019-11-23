/**
Java script has mainly three logical operators
1. OR   [||]
2. AND  [&&]
3. NOT  [!]
 **/

 /** OR Operator **/
 // OR operator works with all types of operands values.
 // since it coververts operands to boolean and operforms operations
 // OR operator always looks for first true value and returns the last operand value without converting it
 let result = 1||0

 //Chain OR
 let result = 1||null||5; //1

 //Alerts in OR condition
 let result = alert(1)||null||0; // Ans: 0 all values are false since alert doesn't return any value[undefined].

 //Short-circuit evaluation.
 /**
 Operands can be not only values, but arbitrary expressions.
 OR evaluates and tests them from left to right.
 The evaluation stops when a truthy value is reached.
 The value is returned. This process is called “a short-circuit evaluation”
 because it goes as short as possible from left to right.
This is clearly seen when the expression given
as the second argument has a side effect like a variable assignment.

In the example below, x does not get assigned:
**/

let x;
true || (x = 1);
alert(x); // undefined because because (x = 1) not evaluated

// AND && Operator
/**
Evaluates operands from left to right.
For each operand, converts it to a boolean.
If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
**/

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

//We can also pass several values in a row.
//See how the first falsy one is returned:
alert( 1 && 2 && null && 3 ); // null


/********  Precedence of AND && is higher than OR || *****/

//Logical Operator "! (NOT)"
let result = !value;

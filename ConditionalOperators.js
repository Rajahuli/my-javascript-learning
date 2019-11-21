/**
If conditional operator:
The if(...) statement evaluates a condition in parentheses and,
if the result is true, executes a block of code.
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
Rule of conversion
>> 0,null,undefined and NaN all become false, Because of that they are called “falsy” values.
>> Other values become true, so they are called “truthy”.

**/
let age = prompt("How old are you?", 10);
if(age> 18){
  alert("allowed to vote");
}

/*
else if:
if block contains additional block "ELSE" it will be executed when condition is false
*/
let age =prompt("How old are you?", 10);
if(age>18){
  alert("Congrats eligible vote!!");
}else {
  alert("Sorry Not eligible vote :( ");
}


/*
The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
The operator is represented by a question mark ?. Sometimes it’s called “ternary”,
because the operator has three operands.
It is actually the one and only operator in JavaScript which has that many.
*/

let result = condition?value1:value2;
//The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

//example
let age=prompt("Enter your age",10);
let eligibleToVote=age>18?true:false;
alert(`Allowed to Vote? ${eligibleToVote}`);

//multiple conditions
let age = prompt("How old are you?",10);
let message =
(age<3) ? 'Hello Dhnaya':
(age<28) ? 'Hello Paddu':
(age<60) ? 'Hello Amma':
'What an unusual age!';
alert( message );

//TASK
//Will alert be shown?
if ("0") {
  alert( 'Hello' );
}
// answer: Hello if condition is true since it as valid string.

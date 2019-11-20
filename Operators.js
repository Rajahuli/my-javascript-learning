//String concatenation, binary +
let myStr1="Hello";
let myStr2 ="Dhanya";
alert(myStr1+myStr2);

//When one of the operand is string other operand will converted to String;
alert(typeof('1'+3)); //13 and type is String

/**
To convert string to number add unary + infront of string
The unary plus or, in other words,
the plus operator + applied to a single value, doesn’t do anything to numbers.
But if the operand is not a number, the unary plus converts it into a number.
**/

alert(typeof(+'1'+ +3));

//Use Number()
alert((Number('1')+3)); //4

/*
Operator precedence
16    unary plus	+
16	unary negation	-
14	multiplication	*
14	division	/
13	addition	+
13	subtraction	-
3	assignment	=
*/

//assignment operator assigns values to a variables
//Like any other operator assignment operator return value.
let x = 2 * 2 + 1; // multiplication executes first then addition
alert( x ); //5

//chain assignments:
a=b=c=2*4;
alert(a);//8
alert(b);//8
alert(c);//8

//Remainder %
alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3

//Exponentiation **
//A**B operand A will be multiplied by itself B times
alert(2**2); //4 (2*2)
alert(2**3); //8 (2*2*2)
alert(2**4); //16 (2*2*2*2)

//Increament and Decreament
let counter =0;
//Pre-Increament: ++countter it will increase the value and assignes new value
//Increment ++ increases a variable by 1:
let a = ++counter //1 works the same as counter = counter + 1, but is shorter

//Post Increament: counter++ it will return the old value first then it will Increament value by 1
let b= counter++; //0

//Pre Decrement -- decreases a variable by 1:
let counter =3;
let a = --counter; //works the same as counter = counter - 1, but is shorter
alert(a);//2

//Post Decreament
let counter =3;
let a = counter--; //works the same as counter = counter - 1, but is shorter
alert(a);//3

//Increment/decrement among other operators
let counter = 1;
alert( 2 * ++counter ); //4 (2*counter=counter+1)

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

//Modify-in-place

let n = 2;
n = n + 5;
n = n * 2;
//This notation can be shortened using the operators += and *=:
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14

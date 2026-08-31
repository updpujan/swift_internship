//Assignment Operators
//used to assign the value to the variable
let a = 5;
let b = 10;

//Arithmetic Operators
//addition
console.log(a+b);

//subtraction
console.log(b-a);

//multiplication
console.log(a*b);

//division
console.log(b/a);

//modulus or remainder
console.log(b%a);

//exponentiation
console.log(a**2);


//Comparison Operators
//used to compare two values and return a boolean value

//equal to
console.log(a==b);

//not equal to
console.log(a!=b);

//strict equal to
console.log(a===b);

//strict not equal to
console.log(a!==b);

//greater than
console.log(a>b);

//less than
console.log(a<b);

//greater than or equal to
console.log(a>=b);

//less than or equal to
console.log(a<=b);


//bitwise Operators
//used to perform bitwise operations on the binary representation of the numbers

//bitwise AND
//if both 1 then will return 1 else 0
console.log(a&b);

//bitwise OR
//if any one is 1 then will return 1 else 0
console.log(a|b);

//bitwise XOR
//if both are same then will return 0 else 1
console.log(a^b);

//bitwise NOT
//it will return one if zero and zero if one
console.log(~a);

//left shift
//it will shift the bits to left and add 0 to the right
console.log(a<<1);

//right shift
//it will shift the bits to right and add 0 to the left
console.log(a>>1);

//unsigned right shift
//it will shift the bits to right and add 0 to the left and will not consider the sign bit
console.log(a>>>1); 


//logical Operators
//used to perform logical operations on the boolean values

//logical AND
//if both are true then will return true else false
console.log(true && false);

//logical OR
//if any one is true then will return true else false
console.log(true || false);

//logical NOT
//it will return true if false and false if true
console.log(!true); 


//unary Operators
//used to perform operations on a single operand

//unary plus
//it will convert the operand to number
console.log(+a);

//unary minus
//it will convert the operand to number and negate it
console.log(-a);

//prefix increment
//it will increment the operand by 1 then return the value
console.log(++a);

//prefix decrement
//it will decrement the operand by 1 then return the value
console.log(--a);

//postfix increment
//it will return the operand and then increment it by 1
console.log(a++);

//postfix decrement
//it will return the operand and then decrement it by 1
console.log(a--);


//ternary Operators
//used to perform operations on a single operand

//ternary operator
//it will return the value based on the condition
console.log(a>b ? "a is greater than b" : "a is less than or equal to b");


//string operators
//used to perform operations on strings

//string concatenation
//it will concatenate two strings
let str1 = "Hello";
let str2 = "World";
console.log(str1 + str2);

//string concatenation assignment
//it will concatenate two strings and assign the value to the first string
str1 += str2;
console.log(str1);

//typeof operator
//used to know the type of the variable
console.log(typeof a);
console.log(typeof str1);

//string concatinate with numbers and combinations
console.log(1+'1'); //it will convert the number to string and concatenate it with the string as there is one string in the operation
console.log(1+1+'1'); //it will add the 2 numbers then concatenate the result with the string
console.log('1'+1+1); //it will convert the number to string and concatenate it with the string as first it will read the string
console.log(6/'3'); //it will convert the string to number and perform the operation
console.log(6-'hi'); //string operation can only be with + not others, will throw NaN

//javascript is dynamically typed language as when entering the values in variable we do not need to specify the data type of the variable and
// we can freely change data in that variable from string to numbers and so.

//string
//string must be surrounded by single or double quotes or ``
let data = "hello";
console.log(data);

//numeric
data = 100;
console.log(data);

//boolean
//it has only two value true or false
data = true;
console.log(data);


//BigInt
// the numeber greater then 2^53 - 1 and less then -(2^53 - 1) cannot be fit in normal number so we have to represent it as BigInt
// and to represent it as BigInt we have to add 'n' at the end of the number else it will print the number as 1.2345678901234568e+39 or so.
let bigIntData = 1234567890123456789012345678901234567890n;
console.log(bigIntData);

//error
let bigIntDataL = 123456789012345612237878901234567890;
console.log(bigIntDataL);


//null
//null is used when there is no value in the variable
let age = null;
console.log(age);

//undefined
//undefined is used when the variable is declared but not assigned any value
let name;
console.log(name);

//typeof
//used to know the type of data in the variable
console.log(typeof data);


//datatype conversion
//we can convert the data type of the variable using the following methods

//string to number
let str = "123";
let num = Number(str);
console.log(num+" is of type "+typeof num);

//number to string
let num2 = 456;
let str2 = String(num2);
console.log(str2 +" is of type "+typeof str2);

//boolean to string
//when converting from string to boolean then if the string is empty it will be false else it will be true
let bool = true;
let str3 = String(bool);
console.log(str3 +" is of type "+typeof str3);

console.log(Boolean(123));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));


//methods of string
let st = "My name is Pujan"
console.log(st.length);//returns the length of the string
console.log(st[2]);//returns the character at index 2
st[2] = "a";//strings are immutable as we cannot change the character
console.log(st);

console.log(st.toUpperCase());//returns the string in uppercase
console.log(st.toLowerCase());//returns the string in lowercase

console.log(st.indexOf("ame"));//will return the index of the string or character send as argument, if not found then will return -1
console.log(st.indexOf("Phello"));

//include, startwith, endwith
console.log(st.includes("name"));//returns true if the string contains the provided string else returns false
console.log(st.startsWith("My"));//returns true if the string starts with the provided string else returns false
console.log(st.endsWith("Pujan"));//returns true if the string ends with the provided string else returns false

//substring with substring, slice and substr methos
console.log(st.slice(-7,-1));//returns the substring from index 0 to 10: it says take from the index of -7 to -1
console.log(st.substring(3,9));//returns the substring from index 0 to 10  : it is similar to slice but can swap start and end index if start is greater than end, it does not take negative argumens
console.log(st.substr(3,9));//returns the substring from index 3 to 9 characters from it: it says from 3rd position take 9 characters, it allwos negative start


//comparing string
console.log("apple" > "banana"); // what it does is, it checks first character from both the string and comapares them, if they are equal then it checks the next character, it comapre based on unix value of that character
console.log(st.localeCompare("My name is Pujan"));//it compares the strings and returns 1 if st is grater, -1 if st is smaller and 0 if both are equal

let ch="Pujan";
ch = ch[0].toLowerCase() + ch.slice(1);
console.log(ch);

//trim
console.log("   hello world   ".trim());//removes the white spaces from the start and end of the string

//charat
console.log(st.charAt(3));//returns the character at the index 3

//includes
console.log(st.includes("name"));//returns true if the string contains the provided string else returns false

//replace
console.log(st.replace("Pujan","John"));//replaces the first occurence of the string with the provided string

//split
console.log(st.split(" "));//splits the string into an array of strings based on the provided string

//concat
console.log(st.concat(" and I am a student"));//concatenates the provided string to the original 



//NUmber methods---------------------------------------
let number = 123.456789;
//toFixed: returns the number with fixed number of decimal points
console.log(number.toFixed(2));

//isInteger: returns true if the number is an integer else returns false
console.log(Number.isInteger(number));
console.log(typeof(number));
console.log(Number.isInteger(123));

let shorten = 1.2e5;//in js to shorten the number we write e as 0, and in front e5 means 5 zeros after 1.2
console.log(shorten);//it will print 120000 as it is in scientific notation


//with parseInt and parseFloat we can convert the string to number, parseInt will return the integer part of the number and parseFloat will return the float part of the number
let numberStr = "123.456";
let numberInt = parseInt(numberStr);
let numberFloat = parseFloat(numberStr);
console.log(numberInt);
console.log(numberFloat);

//rounding the number with Math.round, Math.ceil and Math.floor
console.log(Math.round(4.5));//round to the nearest integer
console.log(Math.ceil(4.1));//round to the next integer
console.log(Math.floor(4.9));//round to the previous integer

//sysmbols: used when need to create uniqe identifier
let sym = Symbol("id");
console.log(sym);
console.log(typeof sym);
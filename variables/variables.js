//-----variables------------------
//variables are containers for storing data values
//here in js varialbs dont have fixed types as it is dynamically typed language


//let variable: works in the block scope and cannot redeclard inside same scope but can be reassigned
let name = "John Doe";
console.log(name);

//var variable: works everywhere even when decelared within a scope {except fucntion scope deceleration} and cannot be redeclared but can be reassigned
var age = 30;
console.log(age);

//const variable
//cost varaible must be assigned a value when declared else throws error
//var also allows redeclaration 
const COUNTRY = "Nepal";
console.log(COUNTRY);

//const error
//COUNTRY = "USA"; //throws error because const variable cannot be reassigned but work for other variables
name = 'Pujan Upadhyay';
console.log(name);

//reassign the variable name throws error no matter the variable types (let, var, const)
//var name = "Pujan";
//console.log(name);

//variable names must start with a letter, underscore or dollar sign and can be combinations of letters, numbers, underscores, and dollar signs.
//variables value can be reassigned to different data types too
//js is case sensitive language so pujan and PUJAN are different variables
//if variable is printed without being assigned a value it will return undefined (except const, it throw error)

/*
function variableTypes() {
    var variable1 = "Hello";
}
console.log(variable1); //throws error because variable1 is not defined in this scope
*/


//functions are block of code that can be called and executed when needed. 
//they help in resuing code and make it more organized and readable.
//function consists of functiion name, paramters and body.
//function example

let name ="Pujan Upadhyay";
function function_name(){
    let age = 22;

    console.log("Hello World");
    console.log("My name is " + name);
    console.log("My age is " + age);
}
//function calling
function_name();


//console.log("My age is " + age);
//as per this function above local variable(defined inside function) cannot be accessed outside the function. it wil throw error.
//but glabal variable can be accessed inside the function.

//also if the same variable name is declared inside the function that is same as global variable then local variable will be given priority over global variable.

//there is () in the side of function, it is used to pass the variables to the function, these variables are called parameters and the value passed to the function is called arguments.

function function_name2(name, age){
    console.log("Hello World");
    console.log("My name is " + name);
    console.log("My age is " + age);
}
//function calling with arguments
function_name2("Pujan Upadhyay", 22);


function min(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}

console.log("Minimum number is " , min(10,20));


function pow(x,n){
    return x**n;   
}
console.log("Power is " , pow(3,2));


//function can be kept in variable and can be called using the variable name, this is known as function expression
function hi(){
    console.log("Hi");
}

const hello = hi;
hello();
hi();


//here in the last of function we have kept the ; sign because we are assigning the function to a variable.
let sum = function(a,b){
    return a+b;
};
console.log("Sum is " , sum(10,20));


//anonymous function
//these are kind of function without the function name,
//these are mainly used in the function expression and also in the callback function.
const anonymous = function(){
    console.log("This is anonymous function");
}
anonymous();


//arrow function
//these are the new way of writing functions, they provide more shorter syntax and code
const arrow =() => {console.log("This is arrow function")};
arrow();

//if the function is called before the function defined code it will still work because of function hoisting,
//  but this is not the case with function expression and arrow function,
sayHi();
function sayHi(){
    console.log("Hello");
}

//in function anything/code of block after return statement will not be executed because return statement will terminate the function execution
//function can also be without return statement, in that case it will return undefined by default.

const add = (a,b) => {
    let z =0;
}
console.log(add());

//rest parameters
//rest parameters are used to pass varaibles of large/not fixd size to the function,
//it is denoted by ... before the parameter name
const rest = (...args) => {
    console.log(args);
    console.log(args[5]);// based on the index
}
rest(1,2,3,4,5,6,7,8,9,10);

//when a function is passed as an argument to another function it is called callback function, it is mainly used in asynchronous programming.

//Immediately Invoked Function Expression
//IIFE is a function that is executed immediately after it is defined, it is mainly used to create a new scope and avoid polluting the global scope.
(function(){
    console.log("This is IIFE");
})();

//recursive function
//function that calls itself is called recursive function
function factorial(n) {
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log("Factorial is " , factorial(5));

//nested function
//function defined inside another function is called nested function, it can access the variables of the outer function
function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        let innerVariable = "I am from inner function";
        console.log(outerVariable);
        console.log(innerVariable);
    }
    innerFunction();
}
outerFunction();
//innerFunction(); // Tthis will throw error because inner function is not accessible from the outer scope.


//methods
//function stored as a property of an object is called method,
//it can be called using the object name and the method name
//also in that method this keyword is used to access the property of an object
const person = {
    name: "Pujan123",
    greet: function() {
        console.log("Hello"+" " + this.name);
    }
};
person.greet();
//if not used this then if the name is declared above then will use that value instead of object property value.

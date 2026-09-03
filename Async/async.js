/*
//synhronous Programming
//in this code execute one by one which means the first line of code will be executed first and then second and so on. until the beofore execution is completed
// the next line of code will not be executed until the previous line of code is completed.

console.log("Start");
console.log("Processing");
console.log("End");


//Asynchronous Programming
//in this the js will allow the execution of next line of code without waiting the previous line of code to be completed, it will not wait for the previous line
//of code be completed.

/*
console.log("Start");
setTimeout(() => {
    console.log("Timer finished");
}, 0);
console.log("End");


//other example of asynchronous programming
//food order program
console.log("Food order asyncrnous programming");
function orderFood(){
    console.log("Order food");
    console.log("Cooking food.....");
    setTimeout(() => {
        console.log("Oreder ready, take food.");
    },3000);
    console.log("Do something.");
    console.log("Do something..");
    console.log("Do something...");
}

orderFood();


//multiple food order
console.log("Multiple food order");
const foodOrder = function(){
    console.log("Order food");
    console.log("Order pizza");
    console.log("pizza cooking");
    setTimeout(()=>{
        console.log("Pizza ready");
    },5000);

    console.log("Burger order");
    setTimeout(()=>{
        console.log("Burger ready");
    },3000);
     console.log("Mo:Mo order");
    setTimeout(()=>{
        console.log("Mo:Mo ready");
    },2000);
}

foodOrder();




//callback function
//a callback function is a function that is passed as an argument to another function and is executed after some operation has been completed in the passed function
function fun1(name,callback){
    console.log("Hello " + name);
    callback();
}
function fun2(){
    console.log("I am callback function");
}

fun1("Pujan",fun2);


//example of callback function
function divide(a,b,callback){
    return b == 0 ? callback("Division by zero is not allowed",null) : callback(null,a/b);
}
function fun3(error,result){
    if(error){
        console.log(error);
    } else {
        console.log(result);
    }
}

divide(1,1,fun3);



//async 
//async always return promise
async function asc(){
    return 1;
}
console.log(asc());


async function asc1(){
    return Promise.resolve(1);
}
asc1().then(console.log());
console.log(asc1().then())


//await: it only work inside the asyn function
async function division(a,b){
    let promise = new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if (b!=0) resolve(`The division of ${a} and ${b} is ${a/b}`);
            else reject(new Error("Division by zero is not possible"));
        },3000);
    });

    let result = await promise;
    console.log(result)
}

division(1,1);
console.log("The program is executing ...");
console.log("The division's answer will be performed shortly");

*/

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function main() {
    console.log("A");

    const data = await getData();
    console.log(data);

    console.log("B");
}

main();

console.log("C");
console.log("D");

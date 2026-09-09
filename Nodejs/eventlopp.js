//task1

console.log("A");
setTimeout(()=>{
    console.log("B");
},0);

console.log("C");


//task 2
function one() {
    console.log("One");

    two();
}

function two() {
    console.log("Two");

    three();
}

function three() {
    console.log("Three");
}

one();


//task 3
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");



console.log("1");
setTimeout(()=>{
    console.log("2");
},5000);

setTimeout(()=>{
    console.log("3");
},3000);


module.exports = three;
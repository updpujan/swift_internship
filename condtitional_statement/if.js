//if statements are used to perform different actions based on different conditions.
let name = "Pujan";
if(name == "Pujan"){
    console.log("Hello Pujan");
}else{
    console.log("Hello Guest");
}
//in above example if the name is Pujan then it will print Hello Pujan otherwise it will print Hello Guest
//if statement can have multiple else if statements to check for multiple condtions.
let age = 20;
if(age < 18){
    console.log("You are a minor");
}else if(age >= 18 && age < 60){
    console.log("You are an adult");
}else{
    console.log("You are a senior citizen");
}

let message;
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
console.log(message);

//the else statement is optional and can be remove as it will only execute its block of code if none of the mentioned condtions are true/met.


//conditional (ternary) operator
//ternary operator is used to evaluate a condition and return a value based on the condition.
//it is the shortform of if-else statement

console.log("conditional (ternary) operator");
console.log("Minor:",(age < 18? true:false));
//this can also have multiple conditions using nested ternary operator


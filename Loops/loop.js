//we often need to repeat a block of code multiple times, if we keep on wrtitng same code again and again it will be lengthy, time consuming and also difficult to manage.
//so we use loops to repeat a block of code again and again until the condition is met.

//while loop
console.log("while loop");
let a =10;
while(a>=0){
    console.log(a);
    a -=1;
}

//while loop first check the condtion if true then it will execut the block of code and then will keep on executing until the condition is false.
//if the block of code is not written properly there is chance that it will run infinite times and never stop


//do while loop
console.log("do while loop");
let b=5;
do{
    console.log(b);
    b -=1;
}while(b>=0);

//do while loop first executes the block of code and then checks the condition if true then it will keep on executing until the condition is false.
//this is used when we want to execute the block of code at least once even if the condition is false.
//if the block of code is not written properly there is chance that it will run infinite times and never stop


//for loop
console.log("for loop");
for (let i=0;i<=5;i++){
    console.log(i);
}

//for loop is used when we know the number of times we want to execute the block of code.
//in this the starting point, condtion and steps(increment/decrement/other) are written in the same line as seen in the example above.

//breaking the loop
//in loops statement sometimes we need to break or stop the loop at certain point, for that we use break statement
//when used then all the remaining iterations of the loop are immmeditely stooped and code after the loop is executed

console.log("breaking the loop");
for (let i=0;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}
//in above example when i value becomes 3 then the loop is broken and remaning iterations are not executed


//continue statement
//continue statement is used when we want to skip the current iteration of the loop and move to next iteration if the condtion is met.

console.log("continue statement");
for (let i=0;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
//in above example when i value becomes 3 then the current iteration is skipped which means it will not print 3 and will move to next iteration and print 4.
//continue cannot be written in the condtion of ternary operator as it will throw error
/*
console.log("continue statement in ternary operator");
for (let i=0;i<=5;i++){
    (i==3)? continue :console.log(i);
}
*/


//label for break and continue
//when working with nested loops we need to break or continue the outer loop from inner loop, for that we use label with break and continue statement.
console.log("label for break and continue");
outerLoop: for (let i=0;i<=5;i++){
    innerLoop: for (let j=0;j<=5;j++){
        if(i==3 && j==3){
            break outerLoop;
        }
        console.log(i,j);
    }
}
//in the above example if the break was used without the label then only the inner loop would have been broken and outer would have continued which made the innner loop execute it again

//switch statement
//switch statement is used when we have multiple conditions to check and we want to execute different block of code for each condition.
//it is more readable and easier to manage than multiple if-else statements.
console.log("switch statement");
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
//break is used in each case because if we don't use it then code will continue to execute the next case even though the one match is already found.
//in default break is not used because in switch it goes serially one by one from the top, as default is in the last and there is no case after it so it will not execute any other case after default.


//for in loop
//for in loop is used to iterate over the properties of an object, but it can also be used in array, strings and other iterable objects.
const obj = {
    a:1,
    b:2,
    c:3
}
console.log("for in loop");
for(let key in obj){
    console.log(key+":"+obj[key]);
}

//in array
const arr=[1,2,3,4,5];
console.log("for in loop in array");
for(let index in arr){
    console.log(`index: ${index}, value: ${arr[index]}`);
}


//for of loop
//while the for...in give the index of the arry and key of object, then for...of give the value of the array, string,set,map,...
console.log("for of loop");
for(let x of "PUjan"){
    console.log(x);
}

//in array
console.log("for of loop in array");
for(let value of arr){
    console.log(value);
}


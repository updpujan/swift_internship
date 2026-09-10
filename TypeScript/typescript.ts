//typescript style of give the typed information for the variable
//even if the input is string in number it will compile and give output
//js can change the data type but in ts it will show error even though it will compile
//js is dynamic typed means if you enter the value in variable later changed it to other datatye it will work but in the ts you cannot it will show the error
//it checks the type during development and build time not in the runtime
//  ts - ts compiler into js - nodejs -v8 -execution, this make the execution possible even though it shows error

const ramu: number = "1";
console.log(typeof ramu);

//type annotation: define the type of variable
const message: string = "Hello, this is my typescript progrma";
console.log(message);

//string number
const fname:string ="Pujan";
const lname:string ="UPadhyay";
const age:number = 22;
const isStudent: boolean = true;

console.log(`Full name: ${fname} ${lname}, age is ${age} and is a student: ${isStudent}`);

//array
let arr: string[] =["Pujan","upd","hello"];
let arr2: number[]=[1,2,3,4,5];

//object
const user: {
    ame: string;
    age: number;
    isStudent: boolean;
    marks: number[];
} = {
    ame : fname,
    age : age,
    isStudent : true,
    marks: [20,50,60,50]
};

//null
let select: null = null;

//undefined is string but value is not assigned
let value1 : string|undefined;

//any: it does not check for this value, its used when we dont know which type of value will it store
let variables : any;

//unknown: similar to any but unlike any where it does not check the value in this you can keep any data
// but will check before performing any operation
//narrow tying concept used in this  will check for the type first then only perform operation
let value2: unknown;
if(typeof value2 === "string"){
    value2 = value2.toLocaleLowerCase();
}

//void: used for function that does not return a value
function hi():void{
    console.log("Hello");
}

//never: represents a value that never occurs, function that throws an error
function throwError(message: string): never {
    throw new Error(message);
}


//union TYpes: when need to use more datatyes in single variable
let id : string|number;// the id can be string or number

//Literal Types
let status1 : "pending"| "completed";// status1 can only contain value among the one written either pending or completed and if other then will show error



//Functions in typescript
function add(a:number,b:number):number{//:return type use of :void if no return in the function
    return a+b;
}
console.log(add(1,2));

function sub(a:number,b:number):string{
    return `${a-b}`;
}
console.log(typeof sub(1,2));

// ? =>optional paramter: number or undefined in the functino parameter, the parameter can be sent or not send
function fun12(a:number,b?:number):void{
    console.log("hey");
}
fun12(1,2);//even if i sent only one parameter it will not throw the error because second is optional one
//default; IF THE argument is not passed then the value in the parameter will be taken
// function add(name:string,message:string="Hello"){}

//arrow function
const add1 = (a:number,b:number):number => {
    return a+b;
}
console.log(add1(2,3));

//for object we would need to define the tye the number of times we use it so we make it reusable by making it type
//type alias
type Task ={
    id:number;
    name1:string;
    bool:boolean;
} ;

const obj1: Task ={
    id: 1,
    name1:"Pujna",
    bool: true,
}
//with type we can make any datatype name changed like
type userId = number;
let id1:userId;//here userId is a number

//interface: another way for object structure
interface TaskInterface{
    id:number;
    task:string;
    status:"peding"|"completed";
    email?: string;//optional property it can be used as well as not ued
}
//the differenes of type and interface is interface can use extends, which means can contaion the value of whom it extends
//simply it inheritaes the propertry of whom to extended
interface moreTask extends TaskInterface{
    adminlevel:number;
}

//type alias  can also work like extends
/*

type User = {
    name: string;
    email: string;
};

type Admin = User & {
    adminLevel: number;
};

*/


//Generic
type Str<T>={
    value:T;
}

type value1=Str<string>;



function helloWorld<T>(test:T,world?:T):T{

    console.log(test);
    console.log(typeof test);

    return test;
}

const hw = helloWorld<number>(1234);


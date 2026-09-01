//Objects
//objects are the collection of key-value pair stored in structure way. it can consists of single or more data types  weather it is primitive or non-primitive inside it.

//object declaration using new
const person =new Object();
//0r object literal
const user = {
    name: "pujan",
    age:23,
    isStudent: true
}

//or function constructor
function userDet(name){
    this.name = name;
}
const user1 = new userDet("pujan");
console.log(user1);

console.log(user);
//delete the key-value pair from object
delete user.isStudent;
console.log(user);


//objects are stored by refrences not by value so that when copied it copy the refrence rather than value.
const new_user = user;
new_user.name = "ram";
console.log(user); //it will print ram in place of pujan in name, because it is copied by refrence not by value.


//add new property in object
user.gender = "male";
console.log(user);

//accessing property of object
console.log(user.name);//using ;
console.log(user["age"]);//using []

//show thw keys of object
console.log(Object.keys(user));

//show the values of object
console.log(Object.values(user));

//display key-values pair
console.log(Object.entries(user));

//objects example
let a=1,b=2;
const obj={
    a,
    b,
    sum(){
        return this.a+this.b;
    }
}

console.log(obj.sum());

//use of in operator
console.log("name" in user);

for (let key in user){
    console.log(key, user[key]);
}

//Object referencing and copying
//const a={};
//const b=a;
//const c ={};
//here a==b is true because they are pointing to the same object in memory but 
// a==c is false because they are pointing to different objects in memory event though they
// both are are empty object.


//object.assign
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);

//but the above can create a problem because when there is another property as object inside a
// object then the reference is copied, not the value of that nested oject.

//so we use structuredClone() method to copy the valueof nested instead of refrence
const abc= {
    xyz: {
        name: "pujan",
        age: 23
    }
}

const mer = Object.assign({},abc);
mer.xyz.name = "hari";
console.log(abc.xyz.name);

const mer2 = structuredClone(abc);
mer2.xyz.name = "ram";
console.log(abc.xyz.name);



//object this: in the example below we can see that the use of this keyword refers 
// to the object itself. if we didnt use the this keyword then it will refer to the 
// global variable helo which is 123 and not the object property helo which is 456.
let helo=123;
const asdd = {
    helo: 456,
    getHelo: function(){
        return this.helo;
    }
}
console.log(helo);
console.log(asdd.getHelo());
console.log(helo);






//Array
//Functions
//dates
//map
//sets
//regular expressions


//---------------------Array---------------------//
//array is a collection of values that is stored in a single variable.
//it can be of similar data type or different data type(mixed data type).
//it can store function or object as well as other data types.

//declaring an array
const arr = [1,2,3,4,5];
//accessing the array elements, array elements are accessed using the index number, index starts from 0.
console.log(arr[0]);
//length of the array
console.log(arr.length);
//iterating the array using for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//changing/replace the value of an array element
arr[0] = 10;
console.log(arr);
//try to access an index that is not present in the array, it will return undefined.
console.log(arr[10]);

//mix array
const arr_ = [1,2,"hello",true, {name: "Pujan"}, [1,2,3]];
console.log(arr_);
//accessing the object inside the array
console.log(arr_[4].name);

//access last element of array
console.log(arr[arr.length-1]);


//use of at method in array to access the element of an array
console.log(arr.at(0)); //first element
console.log(arr.at(-1));// last element

console.log(arr);
//pop: removes the last element of an array
console.log(arr.pop());
console.log(arr);
//push: adds an element to the end of an array
console.log(arr.push(6));
console.log(arr);
//shift: removes the first element of an array
console.log(arr.shift());
console.log(arr);
//unshift: adds an element to the beginning of an array
console.log(arr.unshift(0));
console.log(arr);


//arrary is also copied by refrence just like object so if we change the value of the array then it will change the value of the original array as well.
const arr1=arr;
console.log(arr);
arr1[3]=100;
console.log(arr);


//array stores the data in contiguous memory location; one after another
//performace
//pop/push is faster than shift/unshift because shift/unshift requires re-indexing of all the elements in the array after the operation is performed, 
// while pop/push only requires re-indexing of the last element.

//the array can be truncated by changing the length of the array,
//if decreased no issues as the element will be removed from end of the array, but if increased then the new elements will be undefined.

//array creation method
const new_arr = new Array(1,2,3,4,5);
console.log(new_arr);


//multidimensional array
const multi_arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(multi_arr);
console.log(multi_arr[0][0]);//accessing the first element

//accessing all elemts of multidimensional array using for loop
for(let i=0;i<multi_arr.length;i++){
    for(let j=0;j<multi_arr[i].length;j++){
        console.log(multi_arr[i][j]);
    }
}     


// toString method: converts the array to a string
console.log(typeof arr.toString());//string

//delete element from an array using delete keyword: this will remove the element of array but the length will remain same and inddex will be undefined so to mention that it is not assigned
delete arr[0];
console.log(arr);

//splice method: removes element as well as decrease the length of the array,
const arr12 = [1,2,3,4,5];
console.log(arr12);
arr12.splice(0,3);//removes the first element, 0 is from index zero remove 1 element, if other then that  musch element remove
console.log(arr12);


//slice method: returns a new array with the selected elements, it does not change the original array
const arr13 = [1,2,3,4,5];
console.log(arr13);
const new_arr1 = arr13.slice(0,3);//from 0 index take 3 elements, it will not include the element at index 3
console.log(new_arr1);
console.log(arr13);


//concat method: returns a new array by merging two or more arrays, it does not change the original array
const arr14 = [1,2,3];
const arr15 = [4,5,6];
const new_arr2 = arr14.concat(arr15);
console.log(new_arr2);
console.log(arr14);
console.log(arr15);

//iterate using for each
new_arr2.forEach((element) => {
    console.log(element);
});


//join method: returns a string by joining all the elements of an array, it does not change the original array
console.log(typeof new_arr2.join("-"));
console.log(new_arr2.join("-"));//it is using - to join the elements of the array


//reverse method: reverses the order of the elements of an array, it changes the original array
console.log(new_arr2);
console.log(new_arr2.reverse());
console.log(new_arr2);


//flat method, will not change the original, will retrun new array with all the elements  by faltering  the nested array
console.log(multi_arr);
console.log(multi_arr.flat());
//if there is nested with nested array then we can use flat with depth, by default it is 1, we can write flat(infinity) to flatten all the nested array




//Searching in the array
const pra_arr = [1,10,4,5,6,1,8,9,10];
//there are many methods to search in the array
//indexof
console.log(pra_arr.indexOf(1));// will return the index of the element if found, else return -1, if there are multiple then will return the first found index of that element

//includes
console.log(pra_arr.includes(1));// will return true if found, else return false, this will search the array for the entered elements

//lastIndexOf
console.log(pra_arr.lastIndexOf(1));// will return the index of the last found element, else return -1, as it search from the right to left

//find method: returns the first element that satisfies the provided condition, else return undefined
let result = pra_arr.find(number => number > 5);//will return the first element that is greater than 5
console.log(result);

//findIndex method: returns the index of the first element that satisfies the provided condition, else return -1
result = pra_arr.findIndex(number => number > 5);//will return the index of the first element that is greater than 5
console.log(result);

//findLastIndex method: returns the index of the last element that satisfies the provided condition, else return -1, twill check from the right to left
result = pra_arr.findLastIndex(number => number > 5);//will return the index of the last element that is greater than 5
console.log(result);

//findLast method: returns the last element that satisfies the provided condition else return undefined, twill check from the right to left
result = pra_arr.findLast(num => num >5); //will return the last element that is greater than 5
console.log(result);


//filter method: returns a new array with all the elements that satisfy the provided condition, else return an empty array, unlike find method where it returns only first found element or indexs
result = pra_arr.filter(num => num > 5);// will return new array with all the elements that are greater than 5
console.log(result);

//some method: returns true if at least one element statisfies the provided condition, else return false
//every method: returns true if all the elements statisfy the provided condition, else return false
result = pra_arr.some(num => num > 5);
console.log(result);
result = pra_arr.every(num => num > 5);
console.log(result);



//Array sorting/transformation
//map method: returns a new array without changing the original array, it applies the defined function logic to each element of the array and returns a new array
result = pra_arr.map(num => pra_arr.indexOf(num)+num);//will return new array with adding the element and their corresponding index
console.log(result);
console.log(pra_arr);


//sort method: sort the elements of an array in place and returns the sorted array, it changes the original array, 
//even though it returns the sorted array it is ignored as it chnages the original array and the orignal array is used

//sort by default
pra_arr.sort();
console.log(pra_arr);//by default it sort the array based on strings, based on the first digit if number and string if it is string
//sort by arrow function
pra_arr.sort((a,b) => a-b); //accending order
console.log(pra_arr);
pra_arr.sort((a,b) => b-a); //decending order
console.log(pra_arr);


//split method: splits a string into an array of substrings based on the specified separator, it does not change the original string
//we used the join method to take all the elements of an array and join them to string using specific character, now using same specifc character we can split the string to array
let str = "1-2-3-4-5";
result = str.split("-");
console.log(result);
console.log(str);

//then converting the string elements of array to int using map method
result = result.map(num => Number.parseInt(num));
console.log(result);


//reduce method:
// this is used to reduce the array value to single value, they are used to calculate the single value based on array unlike map method where it returns new array, reduce method returns single value, it takes two parameters, first is the callback function and second is the initial value of the accumulator, if not provided then it will take the first element of the array as initial value of accumulator and start from the second element of the array
result = pra_arr.reduce((sum,num,index) => sum+num+index,0); //will return the sum of all the elements of the array, 0 is the initial value of the accumulator'sum'
//there is 4 paramter in the function of reduce method, first is the accumulator, second is the current value, third is the current index and fourth is the original array
console.log(pra_arr);
console.log(result);

//reduceRight method: works same as reduce method but it start from the right to left, it takes the same parameters as reduce method
result = pra_arr.reduceRight((sum,num,index) => sum+num+index,0);
console.log(pra_arr);
console.log(result);


//Array.isArray method: returns true if the provided value is an array, else return false
//since typeof operator returns object for array, so we can use this method to check if the provided value is an array or not
console.log(Array.isArray(pra_arr));
console.log(Array.isArray({name: "Pujan"}));


//fill(value, start, end): fills the elements of an array with a static value from start index to end index, it changes the original array
let arrrr=[];
arrrr.fill(1,0,5);
console.log(arrrr);//will not fill anything as the array is empty we need to create the array with length first
arrrr = new Array(5);
arrrr.fill(1,0,5);
console.log(arrrr);//will fill the array with 1 from index 0 to 4,
/*
promise: 
- is a object representation that evaluates the eventual completion or failure of an asynchronous operation, its value is not avaliable at the movement but will be in the functure
- it has 3 states: pending, fulfilled, rejected
pending: initial state , still working
fulfilled: operation completed successfully
rejected: operation failed

- once a promise is fulfilled or rejected, it is immutable, meaning its state cannot be changed again

------------------------------------------------------------------------------------------------------------------------------------------
when worked with callback, sometimes function is passed inside another and inside that function another function is passed, when it has many 
nested, it becomes difficult to manage and understand and it gets complicated so to solve the issue promise is used.



*/


let promise = new Promise((resolve,reject) => {
    let sucess = true;
    setTimeout(()=>{
        if(sucess) resolve("Task Sucessful");
        else reject(new Error("Task Failed"));
    },2000);
});


promise.then((result)=>{
    console.log(result);
})
.catch((error)=> {
    console.log(error);
})
.finally(()=>{
    console.log("Finished task");
});



//Promise api
//1. .all :::: execute many in parallel and wait until all are ready
//2. .allSettled ::: rejects as a whole if any promise rejects it
//3. .race :::: similar to .all but waits for the first settled promise only and get its result(included error)
//4. .any :::: similar to .race but only settles for first fullfilled promise, if all are rejected then error
//5. .reject/resolve ::: resolve creates a result when fullfileed and reject if rejected/error

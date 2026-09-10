export function add(a:number,b:number):number{
    return a+b;
}

export function sub(a:number,b:number):number{
    return a-b;
}

export function mul(a:number,b:number):number{
    return a*b;
}
export function div(a:number,b:number):number{
    if (b==0) {
        console.log("Divisible by zero not possible");
        return 0;
    }
    else return a/b;
}
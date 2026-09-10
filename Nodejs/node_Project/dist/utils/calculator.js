export function add(a, b) {
    return a + b;
}
export function sub(a, b) {
    return a - b;
}
export function mul(a, b) {
    return a * b;
}
export function div(a, b) {
    if (b == 0) {
        console.log("Divisible by zero not possible");
        return 0;
    }
    else
        return a / b;
}
//# sourceMappingURL=calculator.js.map
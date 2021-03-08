function add(a, b) {
    let sum = a + b;
    return sum;
}

function subtract(a, b) {
    let sum = a - b;
    return sum;
}

function multiply(a, b) {
    let product = a * b;
    return product;
}

function divide(a, b){
    let quotient = a / b;
    return quotient;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n) {
    let parseded = parseInt(n, 10);
    return parseded;
}

function preserveDecimal(n) {
    let deciParsed = parseFloat(n);
    return deciParsed;
}
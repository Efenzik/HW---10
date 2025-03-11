//  №1 =====================

const processArray = (array, callback) => callback(array);

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr);
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);

const numbers = [15, 19, 3, 7, 2];

console.log(processArray(numbers, getSum));
console.log(processArray(numbers, getMin));
console.log(processArray(numbers, getMax));

//  №2 =====================

// const operate = (a, b, callback) => callback(a, b);

// console.log(operate(10, 5, (a, b) => a - b));
// console.log(operate(10, 5, (a, b) => a + b));
// console.log(operate(10, 5, (a, b) => a * b));
// console.log(operate(10, 5, (a, b) => a / b));

"use strict";
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var num = 10;
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
var sum = 10;
var list = [];
for (let i = 1; i < 10; i++) {
    if (i % 2 != 0) {
        list.push(i);
    }
}
console.log(list);
function findLargestElement(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
const numbers = [10, 5, 20, 8, 15];
const largestNumber = findLargestElement(numbers);
console.log(`The largest number is: ${largestNumber}`);
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 2 * i; // Even numbers are multiples of 2
    }
    return sum;
}
const n = 5; // Change this value to the desired number of even numbers
const result = sumOfEvenNumbers(n);
console.log(`The sum of the first ${n} even numbers is: ${result}`);

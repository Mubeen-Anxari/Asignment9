// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var num: number = 10;
for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

var sum: number = 10;
var list: number[] = [];
for (let i = 1; i < 10; i++) {
  if (i % 2 != 0) {
    list.push(i);
  }
}
console.log(list);





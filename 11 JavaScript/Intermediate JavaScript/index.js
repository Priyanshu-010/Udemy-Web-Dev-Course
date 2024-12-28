//01 Random Function

// let n = Math.random();
// n = (n*6)+ 1;
// n= Math.floor(n);
// console.log(n);

//02 Leap Year

// function isLeap(year){
//   if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log(`${year} is a leap year`);
//   } else {  
//     console.log(`${year} is not a leap year`);
//   }
// }

// isLeap(2000);

//03 Star Pattern

// function starPattern(n){
//   for(let i = 0; i < (n + 1); i++){
//     console.log("*".repeat(i));
//   }
// }

// starPattern(5);

// 04 Array

// Array of random names

// const yourName = prompt("Enter Your Name");
// const randomNames = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
// // console.log(randomNames);

// if(randomNames.includes(yourName)){
//   console.log("You are in the list");
// } else {
//   console.log("You are not in the list");
// }

//05 Challenge Question (FizzBuzz)

//  for (let i = 0; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//   } else if (i % 3 ===0){
//     console.log("Fizz");
//   }else if(i % 5 === 0){
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 5.1 FizzBuzz Challenge Question with while loop

// let i = 0;

// while(i< 101){
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//   } else if (i % 3 ===0){
//     console.log("Fizz");
//   }else if(i % 5 === 0){
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   } 
//   i++;
// }

// 06 Finding random name from the array for buying lunch

// const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// const length = names.length;
// // console.log(length) //You can Comment this one out
// const randomName = Math.floor(Math.random() * length );
// console.log(randomName)
// console.log(names[randomName]);

// 07 99 Bottles of Beer

// for(let i = 99; i > 0-1; i--){
//   if (i !== 0 ){
//     console.log(`${i} bottles of beern  othe wall, ${i} bottles of berr. Take one down and pass it around ${i -1} bottles of beer on the wall`);
//   }else {
//     console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall`);
//   }
// }

//08 Fibonacci Sequence

// function fibonacci(n) {
//   let fib = [0, 1];
//   if (n === 0) {
//     return 0;
//   } else {
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
//   }
// }

// console.log(fibonacci(5));
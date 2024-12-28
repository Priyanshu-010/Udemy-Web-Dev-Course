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

//05 Challenge Question

// for (let i = 0; i < 101; i++) {
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
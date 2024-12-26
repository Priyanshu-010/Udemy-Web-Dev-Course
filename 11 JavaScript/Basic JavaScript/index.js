// let tweet = prompt("Compose Your Tweet");
// let length = tweet.length;
 
// alert("You Have Written "+ length + " Characters "+ (140-length) + " Characters Left"+ "Your Tweet is "+ tweet);

// let tweetUnder140 = tweet.slice(0,140);
// alert("Your Tweet is "+ tweetUnder140);


const name = prompt("Enter Your Name");
const firstChar = name.charAt(0);
let remainingChar = name.slice(1);
remainingChar = remainingChar.toLowerCase();
const upperCase = firstChar.toUpperCase();
alert(upperCase + remainingChar);
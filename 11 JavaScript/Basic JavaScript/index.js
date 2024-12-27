//01

// let tweet = prompt("Compose Your Tweet");
// let length = tweet.length;
 
// alert("You Have Written "+ length + " Characters "+ (140-length) + " Characters Left"+ "Your Tweet is "+ tweet);

// let tweetUnder140 = tweet.slice(0,140);
// alert("Your Tweet is "+ tweetUnder140);

//02

// const name = prompt("Enter Your Name");
// const firstChar = name.charAt(0);
// let remainingChar = name.slice(1);
// remainingChar = remainingChar.toLowerCase();
// const upperCase = firstChar.toUpperCase();
// alert(upperCase + remainingChar);

//03

// let dogAge = prompt("Enter Your Dog Age");
// let humanAge = (dogAge - 2) * 4 + 21;
// alert("Your Dog Age is "+ dogAge + " And Your Human Age is "+ humanAge);

//04

function lifeRemaining(age){
    let remaining = 90 - age;
    let days = remaining * 365;
    let months = remaining * 12;
    let weeks = remaining * 52;
    let years = remaining;
    console.log("You Have "+ years + " Years, "+ months + " Months, "+ weeks + " Weeks, "+ days + " Days Left");
}

lifeRemaining(20);
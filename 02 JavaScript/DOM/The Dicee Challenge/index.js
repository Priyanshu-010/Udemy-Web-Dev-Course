let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

function player1(){
  console.log(randomNumber1)
  let image1 = document.querySelector(".img1");
  image1.setAttribute("src", `./images/dice${randomNumber1}.png`);
}
function player2(){
  console.log(randomNumber2)
  let image2 = document.querySelector(".img2");
  image2.setAttribute("src", `./images/dice${randomNumber2}.png`);
}



player1();
player2();


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw"
}
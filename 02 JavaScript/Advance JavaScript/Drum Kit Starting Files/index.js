//1st Method ForEach Loop

// const drum = document.querySelectorAll(".drum");
// drum.forEach((btn) =>{
//   btn.addEventListener("click", btnClick);
// })


//2nd Method For Loop

// const drum = document.querySelectorAll(".drum").length;
// for (let i = 0; i <drum; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", btnClick);
// }


//3rd Method

// const wbtn = document.querySelector(".w");
// wbtn.addEventListener("click", btnClick);
// const abtn = document.querySelector(".a");
// abtn.addEventListener("click", btnClick);
// const sbtn = document.querySelector(".s");
// sbtn.addEventListener("click", btnClick);
// const dbtn = document.querySelector(".d");
// dbtn.addEventListener("click", btnClick);
// const jbtn = document.querySelector(".j");
// jbtn.addEventListener("click", btnClick);
// const kbtn = document.querySelector(".k");
// kbtn.addEventListener("click", btnClick);
// const lbtn = document.querySelector(".l");
// lbtn.addEventListener("click", btnClick);


//Calculator

// function add(num1, num2){
//   return num1 + num2;
// }
// function multiply(num1, num2){
//   return num1 * num2;
// }
// function sub(num1, num2){
//   return num1 - num2;
// }
// function divide(num1, num2){
//   return num1 / num2;
// }

// function calc(num1, num2, operator){
//   return operator(num1, num2);
// }  // This is an Higher order function which takes a function as an argument
// console.log(calc(2, 3, divide));


// Drum Kit


// const wbtn = document.querySelector(".w");
// wbtn.addEventListener("click", wbtnClick);
// const abtn = document.querySelector(".a");
// abtn.addEventListener("click", abtnClick);
// const sbtn = document.querySelector(".s");
// sbtn.addEventListener("click", sbtnClick);
// const dbtn = document.querySelector(".d");
// dbtn.addEventListener("click", dbtnClick);
// const jbtn = document.querySelector(".j");
// jbtn.addEventListener("click", jbtnClick);
// const kbtn = document.querySelector(".k");
// kbtn.addEventListener("click", kbtnClick);
// const lbtn = document.querySelector(".l");
// lbtn.addEventListener("click", lbtnClick);

// function wbtnClick(){
  //   // alert("I got Clicked");
  //   let audio = new Audio("./sounds/tom-1.mp3");
//   audio.play();
// }
// function abtnClick(){
  //   // alert("I got Clicked");
  //   let audio = new Audio("./sounds/tom-2.mp3");
  //   audio.play();
// }
// function sbtnClick(){
  //   // alert("I got Clicked");
//   let audio = new Audio("./sounds/tom-3.mp3");
//   audio.play();
// }
// function dbtnClick(){
//   // alert("I got Clicked");
//   let audio = new Audio("./sounds/tom-4.mp3");
//   audio.play();
// }
// function jbtnClick(){
  //   // alert("I got Clicked");
  //   let audio = new Audio("./sounds/snare.mp3");
  //   audio.play();
  // }
  // function kbtnClick(){
    //   // alert("I got Clicked");
    //   let audio = new Audio("./sounds/crash.mp3");
    //   audio.play();
    // }
    // function lbtnClick(){
      //   // alert("I got Clicked");
//   let audio = new Audio("./sounds/kick-bass.mp3");
//   audio.play();
// }


//         ************ Main Project **************** 

const drum = document.querySelectorAll(".drum").length;
for (let i = 0; i <drum; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", 
    function (){
    // let audio = new Audio("./sounds/" + this.innerHTML + ".mp3");
    // audio.play();
    // this.style.color = "white"; 
    // console.log(this.innerHTML);
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
          let w = new Audio("./sounds/tom-1.mp3");
          w.play();
        break;
       
      case "a":
          let a = new Audio("./sounds/tom-2.mp3");
          a.play();
        break;

      case "s":
          let s = new Audio("./sounds/tom-3.mp3");
          s.play();
        break;   

      case "d":
          let d = new Audio("./sounds/tom-4.mp3");
          d.play();
        break;

      case "j":
          let j = new Audio("./sounds/snare.mp3");
          j.play();  
        break;

      case "k":
          let k = new Audio("./sounds/crash.mp3");
          k.play();
        break;

      case "l":
          let l = new Audio("./sounds/kick-bass.mp3");
          l.play();
        break;        
    
      default:
        console.log(buttonInnerHTML);
        break;
    }
  });


  }


document.addEventListener("keydown", function(event){
  // console.log(event)
  switch (event.key) {
    case "w":
        let w = new Audio("./sounds/tom-1.mp3");
        w.play();
      break;
     
    case "a":
        let a = new Audio("./sounds/tom-2.mp3");
        a.play();
      break;

    case "s":
        let s = new Audio("./sounds/tom-3.mp3");
        s.play();  
      break;

    case "d": 
        let d = new Audio("./sounds/tom-4.mp3");
        d.play();
      break;

    case "j":
        let j = new Audio("./sounds/snare.mp3");
        j.play();
      break;

    case "k":
        let k = new Audio("./sounds/crash.mp3");
        k.play();
      break;

    case "l":
        let l = new Audio("./sounds/kick-bass.mp3");    
        l.play();
      break;

    default:  
      console.log(event.key);
      break;
  }
});

function changeText(){
  const third = document.querySelector("#third");
  //or
  //const third = document.getElementByTagName("li")[2];
  third.innerHTML = "Hello !";
}

const anchor = document.querySelector("li a");
anchor.style.color = "green";

const btn = document.querySelector("button");
btn.style.backgroundColor = "yellow";

const heading = document.querySelector("h1");
heading.classList.add("huge");
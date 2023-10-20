const min = 1;
const max = 6;

const myButton = document.getElementById('myButton');
const myLabel1 = document.getElementById('myLabel1');
const myLabel2 = document.getElementById('myLabel2');
const myLabel3 = document.getElementById('myLabel3');

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * (max - min)) + min;
  myLabel1.textContent = randomNum1;
  randomNum2 = Math.floor(Math.random() * (max - min)) + min;
  myLabel2.textContent = randomNum2;
  randomNum3 = Math.floor(Math.random() * (max - min)) + min;
  myLabel3.textContent = randomNum3;
};

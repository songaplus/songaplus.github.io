const clockTitleYYMMDD = document.querySelector('.js-clockYYMMDD');
const clockTitle = document.querySelector('.js-clock');
const today = new Date();
const dDay = new Date(today.getFullYear(), 11, 25).getTime();
console.log(dDay);
function getClock1225() {
  const date = new Date();
  const days = Math.floor((dDay - date.getTime()) / 1000 / 60 / 60 / 24);
  const hours = String(23 - date.getHours()).padStart(2, '0');
  const minutes = String(59 - date.getMinutes()).padStart(2, '0');
  const seconds = String(59 - date.getSeconds()).padStart(2, '0');
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
function getClock() {
  const date = new Date();
  clockTitleYYMMDD.innerText =`${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
  clockTitle.innerText = `${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;
}

getClock();
setInterval(getClock, 1000);
//2022.12.25 dday clock setInterval(getClock1225, 1000);

/*

const randomInputBox = document.querySelector('#inputMaxNum');
const guessForm = document.querySelector('#login-form');
const guessInput = document.querySelector('#guessNum');
const buttonInput = document.querySelector('.guess-form button');

const userNum = document.querySelector('#inputMaxValue');
const mNum = document.querySelector('#machineMaxValue');
function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}
function onKeyEventHandler() {
  if (randomInputBox.value < 0) {
    alert('Please input positive number');
  }
}
function onLoginSubmit(event) {
  event.preventDefault();
  const guessNum = guessInput.value;
  const randomValue = rand(randomInputBox.value);
  console.dir(guessNum);
  console.log('submit!!!', guessNum);

  if (guessNum === '') {
    alert('');
  } else if (guessNum) {
    alert();
  }
}
guessForm.addEventListener('submit', onLoginSubmit);
randomInputBox.addEventListener('change', onKeyEventHandler);
*/

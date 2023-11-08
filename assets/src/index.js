'use strict';
 
/*--------querySelectors--------*/

const decreaseOne = document.querySelector('.d-one');
const decreaseFive = document.querySelector('.d-five');
const decreaseTen = document.querySelector('.d-ten');
const reset = document.querySelector('.reset');
const increaseOne = document.querySelector('.i-one');
const increaseFive = document.querySelector('.i-five');
const increaseTen = document.querySelector('.i-ten');
const numberElement = document.getElementById('number');

/*--------end of querySelectors--------*/

numberElement.innerText = '0';

/*--------buttons--------*/

decreaseOne.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number--;
    numberElement.innerText = number.toString();
});

decreaseFive.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number -= 5;
    numberElement.innerText = number.toString();
});

decreaseTen.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number -= 10;
    numberElement.innerText = number.toString();
});

increaseOne.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number++;
    numberElement.innerText = number.toString();
});

increaseFive.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number += 5;
    numberElement.innerText = number.toString();
});

increaseTen.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number += 10;
    numberElement.innerText = number.toString();
});

reset.addEventListener('click', () => {
    number.innerText = '0'
})

/*--------end of buttons--------*/
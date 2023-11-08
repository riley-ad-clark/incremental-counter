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

/*--------number color change--------*/

function colorCheck () {
    let number = parseInt(numberElement.innerText, 10)
    if (number > 0) {
        numberElement.style.color = '#32e33e'
    } else if (number < 0) {
        numberElement.style.color = '#eb3535'
    } else {
        numberElement.style.color = '#000000'
    }
}

/*--------end of number color change--------*/

/*--------buttons--------*/

decreaseOne.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number--;
    numberElement.innerText = number.toString();
    colorCheck();
});

decreaseFive.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number -= 5;
    numberElement.innerText = number.toString();
    colorCheck();
});

decreaseTen.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number -= 10;
    numberElement.innerText = number.toString();
    colorCheck();
});

increaseOne.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number++;
    numberElement.innerText = number.toString();
    colorCheck();
});

increaseFive.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number += 5;
    numberElement.innerText = number.toString();
    colorCheck();
});

increaseTen.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number += 10;
    numberElement.innerText = number.toString();
    colorCheck();
});

reset.addEventListener('click', () => {
    number.innerText = '0'
    colorCheck();
})

/*--------end of buttons--------*/


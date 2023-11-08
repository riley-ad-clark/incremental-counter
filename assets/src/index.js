'use strict';

/*--------querySelectors--------*/

const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const numberElement = document.getElementById('number');

/*--------end of querySelectors--------*/

numberElement.innerText = '0';

/*--------buttons--------*/

decrease.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number--;
    numberElement.innerText = number.toString();
});

increase.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number++;
    numberElement.innerText = number.toString();
});

reset.addEventListener('click', () => {
    number.innerText = '0'
})

/*--------end of buttons--------*/
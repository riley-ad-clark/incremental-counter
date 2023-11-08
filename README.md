# incremental-counter

## Skills Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Overview

An incremental counter is a simple, yet powerful tool used in web development and various applications to keep track of and display numerical values. It's a versatile component often used in web interfaces to track quantities, scores, or any other numerical data. Building an incremental counter in JavaScript can be an enlightening experience for developers of all levels, offering insights into event handling, DOM manipulation, and user interaction. 

In this guide, we will walk through the process of creating an incremental counter from scratch, where users can click buttons to increment, or decrement a displayed number.  Whether you're a beginner looking to start your web development journey or an experienced developer seeking to reinforce your skills, this guide will help you build a functional and interactive incremental counter for your web projects.

## The Breakdown

With the given files, all 3 aspects that make up this project are very simple in nature. For example:

### HTML

```html
<body>
    <div class="container center">
        <section>
            <h1>Incremental Counter</h1>
            <h2 class="center-within" id="number"></h2>
            <div class="buttons">
                <button class="decrease d-ten">-10</button>
                <button class="decrease d-five">-5</button>
                <button class="decrease d-one">-1</button>
                <button class="reset">reset</button>
                <button class="increase i-one">+1</button>
                <button class="increase i-five">+5</button>
                <button class="increase i-ten">+10</button>
            </div>
        </section>
    </div>
</body>
```
The simplicity of the HTML shown is reflected in not only the CSS, but also the *JavaScript* with its simple, yet effective use of ```event listeners```.

### JavaScript

This project effectively uses the ```addEventListener``` method to receive user inputs using the ```click``` event type, along with the standard array of ```const```'s from the HTML above.

Take the following for example:

```javascript
increaseOne.addEventListener('click', () => {
    let number = parseInt(numberElement.innerText, 10);
    number++;
    numberElement.innerText = number.toString();
    colorCheck();
});
```

For all buttons on the page, the program reads for a ```click``` from the user using ```DOM (Document Object Model)```, which represents the structure of the HTML file to JavaScript. It then executes a function to perform it's allocated task. Whether it be +1, +5, +10 or vice versa. And lastly, it checks for the corresponding color.

```colorCheck()``` is a custom ```function``` used to check if a number is either negative, or positive, and changing a color to green, or red in correspondance. Check it out:

```javascript
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
```
As for CSS, a general rule of thumb is to use centering whenever there is little on the page, as with this project. Design is subjective so let your creative juices flow, and feel free to use my style-sheet as a reference, nobody is wrong! (Unless you're using the default system fonts...) Here are some key CSS styles to achieve what I made

```css
button {
    padding: 10px;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    margin: 0 10px 0 10px;
}

h1 {
    font-size: 50px;
}

h2 {
    margin-bottom: 10px;
    font-size: 100px;
}

.container {
    width: min(100% - 40px, 1280px);
    margin-inline: auto;
}

.center {
    display: grid;
    place-items: center;
    align-items: center;
    height: 100dvh;
}

.center-within {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}```

## Summary

Understanding the simple structure of JavaScript, and HTML and CSS for that matter; and how to effectively use them to construct beautifully simple applications is a perfect way to practice your coding skills when you're in down time!

### Remember

It's important to understand that no matter your skill level, it is important to practice, and yes, that includes the fundamentals! Simple projects like this force you to review the foundation for more complex projects down the line, which is _never_ a bad idea. 

## Demo

<a href="https://raw.githack.com/riley-ad-clark/incremental-counter/main/index.html">Click here</a> to visit the demo site for this project!



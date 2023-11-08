# incremental-counter

## Skills Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Overview

An incremental counter is a simple, yet powerful tool used in web development and various applications to keep track of and display numerical values. It's a versatile component often used in web interfaces to track quantities, scores, or any other numerical data. Building an incremental counter in JavaScript can be an enlightening experience for developers of all levels, offering insights into event handling, DOM manipulation, and user interaction. 

In this guide, we will walk through the process of creating an incremental counter from scratch, where users can click buttons to increment, or decrement a displayed number.  Whether you're a beginner looking to start your web development journey or an experienced developer seeking to reinforce your skills, this guide will help you build a functional and interactive incremental counter for your web projects.

## The Breakdown

With the given files, all 3 aspects that make up this project are very simple in nature. For example,

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
### CSS
```css
/*--------general--------*/
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
}
/*--------end of general--------*/

/*--------text--------*/

h1 {
    font-size: 50px;
}

h2 {
    margin-bottom: 10px;
    font-size: 100px;
}
/*--------end of text--------*/

/*--------buttons--------*/

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    padding: 10px;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    margin: 0 10px 0 10px;
}

.decrease {
    background-color: #e44545;
    color: #fff;
    transition: 0.3s ease-in-out;
}

.decrease:hover {
    background-color: #eb3535;
    transition: 0.3s ease-in-out;
}

.increase {
    background-color: #4ce956;
    color: #fff;
}

.increase:hover {
    background-color: #32e33e;
    color: #fff;
}
/*--------end of buttons--------*/
```

### JavaScript


## Demo

<a href="https://raw.githack.com/riley-ad-clark/incremental-counter/main/index.html" target="_blank">Click here</a> to visit the demo site for this project!



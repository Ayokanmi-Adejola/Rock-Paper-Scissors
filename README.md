# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser

### Screenshot

![Rock Paper Scissors Game](./design/desktop-preview.jpg)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS animations
- Vanilla JavaScript
- Mobile-first workflow
- LocalStorage API for score persistence

### What I learned

This project was a great opportunity to practice creating an interactive game with JavaScript. Some key learnings include:

- Implementing game logic with JavaScript
- Creating responsive layouts that work well on different device sizes
- Using CSS animations to enhance user experience
- Working with LocalStorage to persist data between sessions
- Creating modals and handling user interactions

Here are some code snippets I'm proud of:

```html
<!-- Game choice elements with data attributes for JavaScript interaction -->
<div class="choice paper" data-choice="paper">
  <div class="choice-inner">
    <img src="./images/icon-paper.svg" alt="Paper">
  </div>
</div>
```

```css
/* Creating gradient backgrounds for game elements */
.paper {
  background: linear-gradient(to bottom, var(--paper-gradient-from), var(--paper-gradient-to));
  top: 0;
  left: 0;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);
}

/* Placeholder animation for house pick */
@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
}
```

```js
// Determine winner based on game rules
function getWinner(userChoice, houseChoice) {
  if (userChoice === houseChoice) {
    return 'draw';
  }

  if (
    (userChoice === 'rock' && houseChoice === 'scissors') ||
    (userChoice === 'paper' && houseChoice === 'rock') ||
    (userChoice === 'scissors' && houseChoice === 'paper')
  ) {
    return 'win';
  }

  return 'lose';
}
```

### Continued development

In future projects, I'd like to focus on:

- Adding more advanced animations and transitions
- Implementing the bonus Rock, Paper, Scissors, Lizard, Spock version
- Improving accessibility features
- Adding sound effects for a more immersive experience
- Creating a multiplayer version using WebSockets

## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)

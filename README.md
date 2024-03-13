# WordKill
WordKill is a fun typing game, where you can type in the word in the kill box. If you can't, it's game over for you. You can try the game here- [WordKill Game](https://animish01.github.io/wordKill/).

## Game Mechanics
The main logic of the game is implemented in script.js. Here's a breakdown of the key features:

Bubbles: The bubbles you see on the screen are HTML div elements. They are styled using style.css and animated using the Ball.js class in script.js. The words in these elements are fetched from the textArray.js. 

Animation: The bubbles are animated using `window.requestAnimationFrame()` feature of js, and css variables. 

Kill logic: The display of the words are made none using css and js, when correct words are typed in. 

## Running the game
Simply use the link provided above, or clone the repo in your local machine and run it.

Thanks!
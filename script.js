import { Ball } from "./ball.js";

const Ball1 = document.getElementById('ball');
const ballElement = new Ball(Ball1, 10, Math.floor(Math.random() * 90))
console.log(ballElement);

let speed = 0.04;
let lastTime = null;


// function updatePosition(element, speed, time) {
// const currentX = this.element.style.getProperty('--left');

//     this.position_x(currentX + speed + time);
// }

function update(time) {
    if (!lastTime) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return;
    }
    // console.log(time - lastTime);
    ballElement.moveBallRight(speed, time - lastTime);
    lastTime = time;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
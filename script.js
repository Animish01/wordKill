import { Ball } from "./ball.js";

const Ball1 = document.getElementById('ball1');
const Ball2 = document.getElementById('ball2');
const Ball3 = document.getElementById('ball3');
const ballElement1 = new Ball(Ball1, 10, Math.floor(Math.random() * 50 + 20))
const ballElement2 = new Ball(Ball2, 33, Math.floor(Math.random() * 50 + 20))
const ballElement3 = new Ball(Ball3, 56, Math.floor(Math.random() * 50 + 20))

const kill = document.getElementById('kill');
let scoreElement = document.getElementById('score');
let score = 0;

let speed = 0.025;
let lastTime = null;

kill.addEventListener('submit', (e) => {
    e.preventDefault();

    const { srcElement } = e;
    if (ballElement1.text === srcElement[0].value) {
        ballElement1.kill();
        score += 1;
    }
    if (ballElement2.text === srcElement[0].value) {
        ballElement2.kill();
        score += 1;
    }
    if (ballElement3.text === srcElement[0].value) {
        ballElement3.kill();
        score += 1;
    }
    srcElement[0].value = '';
    scoreElement.innerText = score;
})

function update(time) {
    if (!lastTime) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return;
    }
    ballElement1.moveBallRight(speed, time - lastTime);
    ballElement2.moveBallRight(speed, time - lastTime);
    ballElement3.moveBallRight(speed, time - lastTime);
    lastTime = time;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
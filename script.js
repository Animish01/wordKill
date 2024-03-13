import { Ball } from "./ball.js";

const Ball1 = document.getElementById('ball1');
const Ball2 = document.getElementById('ball2');
const Ball3 = document.getElementById('ball3');
const Ball4 = document.getElementById('ball4');
const ballElement1 = new Ball(Ball1, 100, Math.floor(Math.random() * 50 + 20))
const ballElement2 = new Ball(Ball2, 125, Math.floor(Math.random() * 50 + 20))
const ballElement3 = new Ball(Ball3, 150, Math.floor(Math.random() * 50 + 20))
const ballElement4 = new Ball(Ball4, 175, Math.floor(Math.random() * 50 + 20))

const body = document.getElementsByTagName('BODY')[0];

const screen = document.getElementById('screen');
const gameover = document.getElementById('gameover');
const start = document.getElementById('start');
const name = document.getElementById('name');

const kill = document.getElementById('kill');
let scoreElement = document.getElementById('score');
let score = 0;

let speed = 0.006;
const INCREMENT = 0.000006;
let lastTime = null;

kill.addEventListener('submit', (e) => {
    e.preventDefault();

    const { srcElement } = e;
    if (ballElement1.word === srcElement[0].value) {
        ballElement1.kill();
        score += 1;
    }
    if (ballElement2.word === srcElement[0].value) {
        ballElement2.kill();
        score += 1;
    }
    if (ballElement3.word === srcElement[0].value) {
        ballElement3.kill();
        score += 1;
    }
    if (ballElement4.word === srcElement[0].value) {
        ballElement4.kill();
        score += 1;
    }
    srcElement[0].value = '';
    scoreElement.innerText = `Score: ${score}`;
})

const checkGameover = () => {
    return ballElement1.dead || ballElement2.dead || ballElement3.dead || ballElement4.dead;
}

const reset = () => {
    ballElement1.position_x = 100;
    ballElement2.position_x = 125;
    ballElement3.position_x = 150;
    ballElement4.position_x = 175;

    ballElement1.dead = 0;
    ballElement2.dead = 0;
    ballElement3.dead = 0;
    ballElement4.dead = 0;

    screen.style.setProperty('--display', 'none');
    gameover.style.setProperty('--display', 'block');
    start.style.setProperty('--display', 'block');
    body.style.setProperty('--bgcolor', '#450404');
}

function update(time) {
    if (!lastTime) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return;
    }
    ballElement1.moveBallRight(speed, time - lastTime);
    ballElement2.moveBallRight(speed, time - lastTime);
    ballElement3.moveBallRight(speed, time - lastTime);
    ballElement4.moveBallRight(speed, time - lastTime);

    if (checkGameover()) {
        reset();
        return;
    }
    lastTime = time;
    window.requestAnimationFrame(update);
    speed += INCREMENT;
}

start.addEventListener('click', (e) => {
    start.style.setProperty('--display', 'none');
    screen.style.setProperty('--display', 'block');
    name.style.setProperty('--display', 'none');
    body.style.setProperty('--bgcolor', '#140d3a');
    gameover.style.setProperty('--display', 'none');
    kill[0].focus();
    kill[0].innerText = '';
    score = 0;
    speed = 0.01;
    lastTime = undefined;
    scoreElement.innerText = `Score: ${score}`;
    window.requestAnimationFrame(update);
})

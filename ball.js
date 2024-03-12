import { words } from './textArray.js';

class Ball {
    isDead = 0;
    innerText;
    constructor(element, x, y) {
        this.element = element;
        this.text = element.textContent;
        this.element.style.setProperty('--top', y);
        this.element.style.setProperty('--right', x);
        this.innerText = this.element.textContent;
    }
    set position_x(x) {
        this.element.style.setProperty('--right', x);
    }
    set position_y(y) {
        this.element.style.setProperty('--top', y);
    }

    get position_x() {
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--right'));
    }

    get dead() {
        return this.isDead;
    }

    set dead(status) {
        this.isDead = status;
    }

    get word() {
        return this.innerText;
    }

    moveBallRight(speed, time) {
        const currentX = this.position_x;
        this.position_x = (currentX - speed * time);
        console.log(currentX);

        if (currentX < 0) {
            this.position_x = 100;
            this.position_y = Math.floor(Math.random() * 50 + 20);
            if (getComputedStyle(this.element).getPropertyValue('--display') === 'block') {
                this.isDead = 1;
            }
            this.element.style.setProperty('--display', 'block');
            this.element.style.setProperty('--ballBg', '#e0e0f050');

            this.element.textContent = words[Math.floor(Math.random() * 145)];
            this.innerText = this.element.textContent;
        }
    }

    kill() {
        this.element.style.setProperty('--ballBg', '#f01515');
        setTimeout(() => {
            this.element.style.setProperty('--display', 'none');
        }, 200);
    }
}

export { Ball };
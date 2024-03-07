class Ball {
    constructor(element, x, y) {
        this.element = element;
        this.text = element.textContent;
        this.element.style.setProperty('--top', y);
        this.element.style.setProperty('--left', x);
    }
    set position_x(x) {
        this.element.style.setProperty('--left', x);
    }
    set position_y(y) {
        this.element.style.setProperty('--top', y);
    }

    get position_x() {
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--left'));
    }

    getText() {
        return this.text;
    }

    moveBallRight(speed, time) {
        const currentX = this.position_x;
        this.position_x = (currentX + speed * time);

        if (currentX > 80) {
            this.position_x = 10;
            this.position_y = Math.floor(Math.random() * 50 + 20);
            this.element.style.setProperty('--display', 'block');
            this.element.style.setProperty('--ballBg', '#e0e0f050');
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
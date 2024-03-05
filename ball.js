class Ball {
    constructor(element, y) {
        this.element = element;
        this.element.style.setProperty('--top', y);

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

    moveBallRight(speed, time) {
        const currentX = this.position_x;
        this.position_x = (currentX + speed * time);

        if (currentX > 99.99) {
            this.position_x = 0;
            this.position_y = Math.floor(Math.random() * 90);
        }
    }
}

export { Ball };
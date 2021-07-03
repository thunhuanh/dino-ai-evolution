class Obstacle {
    constructor() {
        this.w = 20
        this.h = 40
        this.x = width
        this.y = height - this.h

        this.speed = 5
    }

    update() {
        this.x -= this.speed
        if (this.y <= height - this.h) {
            this.y = height - this.h
        }
    }

    offscreen() {
        return this.x < -this.w;
    }

    show() {
        push()
        fill(255, 0, 255)
        rect(this.x, this.y, this.w, this.h)
        pop()
    }
}
class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y; 
        this.size = 50;
        this.speed = 3; 
        this.vx = 0;
        this.vx = 0; 
        this.fill = {
            r: 100, 
            g: 100,
            b: 100
        }
    }
    move() {
        this.x = this.x + this.vx; 
        this.y = this.y + this.vy; 
    }
    bounce() {

    }
    display() {
        push();
        fill(this.fill.r, this.fill.g, this.fill.b); 
        ellipse(this.x, this.y, this.size); 
        pop();
    }
}
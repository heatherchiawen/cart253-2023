class Ball{
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.vx = 0; 
        this.vy = 0; 
        this.ax = 0; 
        this.ay = 0; 
        this.maxSpeed = 10; 
        this.size = 50; 
        this.active = true; 
    }
    gravity(force) {
        this.ay = this.ay + force; 
    }
    move() {
        this.vx = this.vx + this.ax; 
        this.vy = this.vy + this.ay; 

        this.x = this.x + this.vx; 
        this.y = this.y + this.vy; 

        if (this.y - this.size / 2 > height) {
            this.active = false; 
        }
    }
    bounce() {
        if (this.y + this.size / 2 > height) {
            this.vy = - this.vy; 
            this.ay = 0; 
        }
    }
    display() { 
        push();
        fill(255); 
        noStroke(); 
        ellipse(this.x, this.y, this.size);
        pop(); 
    }
}
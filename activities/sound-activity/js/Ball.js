class Ball {
    constructor(x, y, note) {
        this.x = x;
        this.y = y; 
        this.size = 50;
        this.speed = 3; 
        this.vx = random(-this.speed, this.speed);
        this.vx = random(-this.speed, this.speed); 
        this.fill = {
            r: 255, 
            g: 255,
            b: 255
        }
        // Sound properties 
        this.osc = new p5.TriOsc(); 
        this.nearFreq = 220; 
        this.farFreq = 440; 
        this.osc.amp(0.1); // oscillator amplitude 
        this.osc.start(); 
        // this.osc.stop(); 
    }
    move() {
        this.x += this.vx; 
        this.y += this.vy; 
    }
    bounce() {
        if(this.x - this.size/2 < 0 || this.x + this.size/2 > width) {
            this.vx = - this.vx; 
        }
        if(this.y - this.size/2 < 0 || this.y + this.size/2 > height) {
            this.vy =  - this.vy;
        }
    }
    display() {
        push();
        fill(this.fill.r, this.fill.g, this.fill.b); 
        ellipse(this.x, this.y, this.size); 
        pop();
    }
}
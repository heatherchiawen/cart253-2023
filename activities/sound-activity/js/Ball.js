class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y; 
        this.size = 50;
        this.speed = 3; 
        this.vx = 0;
        this.vx = 0; 
        this.fill = {
            r: 255, 
            g: 255,
            b: 255
        }
        // Sound properties 
        // this.osc = new p5.TriOsc(); 
        // this.osc.amp(0.1); // oscillator amplitude 
        // this.nearFreq = 220; 
        // this.farFreq = 440; 
        
    }
    move() {
        this.x = this.x + this.vx; 
        this.y = this.y + this.vy; 
 
        // let this.newFreq = map(this.y, height, 0, 220, 440); 
    }
    bounce() {
        if(this.x + this.size/2 > width) {
            this.x = this.x - this.vx; 
        }
        else if(this.x - this.size/2 < 0) {
            this.x = this.x + this.vx; 
        }
        else if(this.y + this.size/2 > height) {
            this.y = this.y - this.vy; 
        }
        else if(this.y - this.size/2 < 0) {
            this.y = this.y + this.vy; 
        }
    }
    display() {
        push();
        fill(this.fill.r, this.fill.g, this.fill.b); 
        ellipse(this.x, this.y, this.size); 
        pop();
    }
    mousePressed() {
        this.osc.start(); 
    }
    mouseReleased() {
        this.osc.stop(); 
    }
}
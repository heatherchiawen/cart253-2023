class Turntable {
    constructor() {
        this.x = 0; 
        this.y = 0; 
        this.w = 100; 
        this.h = 100; 
        this.size = 100; 
        this.speed = 0; 
        this.translate = width/2; 
        this.angle = 0; 
    }
    // Create a func to load sound 
    pressed() {
    let d = dist(mouseX, mouseY); 
    this.speed = constrain(this.speed, 0.05, 1); 
        if (mouseIsPressed && d < this.size/2) {
            this.speed -= 0.05; 
        } else {
            this.speed += 0.05; 
        }
    }
    display() {
        // Add the 
        //bark.loop(); 
        bark.rate(this.speed); 
        push(); 
        translate(this.translate, this.translate); 
        rotate(this.angle); 
        ellipse(this.x, this.y, this.size); 
        line(this.x, this.y, this.x, -this.h/2); 
        this.angle += 3.333333333333; 
        pop(); 
    }
}
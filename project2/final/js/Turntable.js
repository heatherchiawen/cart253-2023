class Turntable {
    constructor() {
        this.x = 0; 
        this.y = 0; 
        this.w = 100; 
        this.h = 100; 
        this.size = 100; 
        this.speed = 1; 
        this.translate = width/2; 
        this.angle = 0; 
        this.rotate = 3.333333333333; 
    }
    // Create a func to load sound 
    pressed() {
    let d = dist(mouseX, mouseY, this.translate, this. translate); 
    this.speed = constrain(this.speed, 0, 1); 
        if (d < this.size/2) { // Maybe write a specfic if statement acording to the left v right? 
            this.speed -= 0.05; 
            this.rotate = 0; 
        } 
        else {
            this.speed += 0.05; 
            this.rotate = 3.333333333333; 
        }
        // Currently, the music slows down as you press the record and the record stops immediately 
        // Problem: the music doesn't stop to the same extent the record stops 
        // Also, if you click outside of the record the sound speeds up 
        // Maybe switch the if and else statement??
        // Maybe have it so that if you press the left side of the record is slows down but if you press the right side it speeds up? 
        // Also should have an on and off button 
    }
    display() {
        // houseLoop.loop(); 
        soundLoop.rate(this.speed); // Change this into soundLoop one 
        push(); 
        translate(this.translate, this.translate); 
        rotate(this.angle); 
        ellipse(this.x, this.y, this.size); 
        line(this.x, this.y, this.x, -this.h/2); 
        this.angle += this.rotate; 
        pop(); 

        // Add another sound loop display 
        // And a transition slider? 
    }
}
class Scissor {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        // this.size = size; 
        this.vx = 0; 
        this.vy = 0;
        this.speed = 5;
    }
    move() {
        this.x = mouseX; 
        this.y = mouseY;
    }
    display() {
        // Scissor Blades 
        push();
        fill(100, 109, 112); //Gray 
        noStroke(); 
        triangle(this.x - 10, this.y, this.x - 10, this.y - 100, this.x + 10, this.y);
        triangle(this.x - 10, this.y, this.x + 10, this.y - 100, this.x + 10, this.y); 
        pop();

        // Scissor handles 
        push();
        strokeWeight(9);
        stroke(29, 28, 82); // Blue
        noFill(); 
        ellipse(this.x - 10, this.y + 40, 20, 80); 
        ellipse(this.x + 10, this.y + 40, 20, 80); 
        pop(); 
    }
}
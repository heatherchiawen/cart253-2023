class Net {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.vx = 0; 
        this.vy = 0;
    }
    move() {
        this.x = mouseX; 
        this.y = mouseY;
    }
    display() {
        // Handle 
        push();
        strokeWeight(9);
        stroke(29, 28, 82); // Blue
        noFill(); 
        line(this.x, this.y, this.x, this.y + 50)
        pop();

        // Net hoop 
        push();
        strokeWeight(9);
        stroke(29, 28, 82); // Blue
        noFill(); 
        ellipse(this.x, this.y - 50, 20, 100); 
        pop(); 

        // Net connected to hoop 
        push();
        strokeWeight(3); 
        stroke(100, 109, 112); 
        noFill(); 
        curve(this.x, this.y, this.x, this.y, this.x + 75, this.y - 40, this.x + 75, this.y - 60);
        curve(this.x, this.y - 100, this.x, this.y - 100, this.x + 75, this.y - 60, this.x + 75, this.y - 40); 
        curve(this.x + 75, this.y - 60, this.x + 75, this.y - 60, this.x + 75, this.y - 40, this.x + 75, this.y - 40, this.x + 75, this.y - 40);
        line(this.x, this.y - 85, this.x + 75, this.y - 45)
        line(this.x, this.y - 65, this.x + 60, this.y - 32)
        line(this.x, this.y - 45, this.x + 40, this.y - 22)
        line(this.x, this.y - 25, this.x + 22, this.y - 13)
        pop(); 
    }
}
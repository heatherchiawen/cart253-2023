class User {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.size = 40; 
        this.vx = 0; 
        this.vy = 0;
        this.speed = 5;
    }
    move() {
        this.x = mouseX; 
        this.y = mouseY;
    }

    displayScissor() {
        // Scissor Blades 
        push();
        fill(100, 109, 112); 
        noStroke(); 
        triangle(this.x - 10, this.y, this.x - 10, this.y - 80, this.x + 10, this.y);
        triangle(this.x - 10, this.y, this.x + 10, this.y - 80, this.x + 10, this.y); 
        pop();

        // Scissor handles 
        push();
        fill(29, 28, 82); 
        noStroke(); 
        ellipse(this.x - 10, this.y + 40, 20, 80); 
        ellipse(this.x + 10, this.y + 40, 20, 80); 
        pop(); 

        // Interior Scissor handles 
        push();
        fill( 120, 180, 120);
        noStroke(); 
        ellipse(this.x - 10, this.y + 45, 12, 35)
        ellipse(this.x + 10, this.y + 45, 12, 35)
        pop(); 
    }
}
class User {
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
    checkFlowerClick(flower) {
        let d = dist(this.x, this.y, flower.x, flower.y); 
        // Check for user and flower overlap 
        if (d < this.size/2 + flower.size/2) { 
            flower.splice(i, 1);
        }
    }
       

    displayScissor() {
        // Scissor Blades 
        push();
        fill(100, 109, 112); //Gray 
        noStroke(); 
        triangle(this.x - 10, this.y, this.x - 10, this.y - 80, this.x + 10, this.y);
        triangle(this.x - 10, this.y, this.x + 10, this.y - 80, this.x + 10, this.y); 
        pop();

        // Scissor handles 
        push();
        fill(29, 28, 82); // Blue
        noStroke(); 
        ellipse(this.x - 10, this.y + 40, 20, 80); 
        ellipse(this.x + 10, this.y + 40, 20, 80); 
        pop(); 

        // Interior Scissor handles 
        push();
        fill( 120, 180, 120); // Grass/background color 
        noStroke(); 
        ellipse(this.x - 10, this.y + 45, 12, 35)
        ellipse(this.x + 10, this.y + 45, 12, 35)
        pop(); 
    }
}
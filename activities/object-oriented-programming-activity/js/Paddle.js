class Paddle {
    
    constructor(w, h) {
        this.x = 0;
        this.y = height - this.height / 2;
        this.width = w;
        this.height = h; 
    }

    move() {
        this.x = mouseX;
    }

    display() {
        push(); 
        fill(255); 
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}
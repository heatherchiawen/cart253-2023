class Beats {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.w = 50; 
        this.h = 50; 
    }
    pressed() {

    }

    display() {
        push();
        stroke(0);
        strokeWeight(1); 
        rect(this.x, this.y, this.w, this.h);  
        pop(); 
    }
}
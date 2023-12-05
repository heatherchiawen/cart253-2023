class Beats {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.w = 50; 
        this.h = 50; 
    }
    display() {
        push();
        noStroke();
        rect(this.x, this.y, this.w, this.h);  
        pop(); 
    }
}
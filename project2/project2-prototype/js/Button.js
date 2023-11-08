class Button {
    constructor(x, y){
        this.x = x; 
        this.y = y; 
        this.size = 50; 
        this.stroke = 0; 
        this.strokeWeight = 5; 
        this.fill = 140, 149, 150 // Grey 

    }
    display() {
        push();
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        fill(this.fill);
        rect(this.x, this.y, this.size, this.size);  
        pop();
    }
}
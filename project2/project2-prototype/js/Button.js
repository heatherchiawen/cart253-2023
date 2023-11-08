class Button {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.size = 50; 
        this.stroke = 0; 
        this.strokeWeight = 5; 
        this.offColor = 140, 149, 150; // Grey 
        this.onColor = 81, 86, 87; // Darker grey 
        this.buttonOn = false; 
    }
    mousePressed() {
        // If mouse position is over any of the boxes 
        if (mouseX < this.x + this.size && mouseX > this.x && mouseY < this.y + this.size && mouseY > this.y && this.buttonOn == false) {
            // Starts off off until user clicks, turning in on, making it true 
            this.buttonOn = true; 
            this.offColor = this.onColor;  
        }   
        // else if (mouseX < this.x + this.size && mouseX > this.x && mouseY < this.y + this.size && mouseY > this.y && this.buttonOn == true){
        //             this.buttonOn = false; 
        //             this.onColor = this.offColor;
        // }
    }
    
    // mouseReleased() {
    //     if (mouseX < this.x + this.size && mouseX > this.x && mouseY < this.y + this.size && mouseY > this.y && this.buttonOn == true) {
    //         if (this.buttonOn == true) {
    //             this.buttonOn = false; 
    //             this.onColor = this.offColor; 
    //         }
    //     }
    // }

    display() {
        push();
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        fill(this.offColor);
        rect(this.x, this.y, this.size, this.size);  
        pop();
    }
}
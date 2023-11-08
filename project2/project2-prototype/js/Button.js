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
    pressed() {
        if (!this.buttonOn) {
            this.buttonOn = true;  
        }   
        // mouseX < this.x + this.size && mouseX > this.x && mouseY < this.y + this.size && mouseY > this.y
        else if (this.buttonOn) {
            this.buttonOn = false; 
            // this.onColor = this.offColor;  
        } 
    }

    
    reset() {
        if (this.buttonOn) {
            this.buttonOn = false; 
            // this.onColor = this.offColor;  
        } 
    }

    display() {
        push();
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        if (!this.buttonOn) {
            fill(this.offColor);
        }
        else if (this.buttonOn) {
            fill(this.onColor); 
        }
        rect(this.x, this.y, this.size, this.size);  
        pop();
    }
}
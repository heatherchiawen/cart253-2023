class Button {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.size = 50; 
        this.stroke = 0; 
        this.strokeWeight = 5; 
        this.offColor = 140, 149, 150; // Grey for button is off 
        this.onColor = 81, 86, 87; // Darker grey for when button is on 
        this.buttonOn = false; 
    }
    pressed() {
        // Function to detect if the button is on or off 
        if (!this.buttonOn) {
            this.buttonOn = true; 
            // Fade notes in 
            osc.fade(0.5, 0.2);
        }   
        else if (this.buttonOn) {
            this.buttonOn = false; 
            // Fade out of/ending a note
            osc.fade(0, 0.2); 
        } 
    }

    display() {
        push();
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        // If button is on display on color and if its off, display off color 
        // On and off of button defined in pressed()
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
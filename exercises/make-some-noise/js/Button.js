class Button {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 100;
        this.h = 200;
        this.pianoOffColor = { // White for whole piano keys 
            r: 255, 
            g: 255,
            b: 255
        }
        this.pianoOnColor = {
            r: 140,
            g: 149, 
            b: 150
        }
        this.keysOn = false; 

    }
    pressed() {
        // Function to detect if the button is on or off 
        if (!this.buttonOn) {
            this.buttonOn = true; 
            // Fade notes in 
            // osc.fade(0.5, 0.2);
        }   
        else if (this.buttonOn) {
            this.buttonOn = false; 
            // Fade out of/ending a note
            // osc.fade(0, 0.2); 
        } 
    }

    display() {
        push();
        noStroke();
        // If button is on display on color and if its off, display off color 
        // On and off of button defined in pressed()
        if (!this.buttonOn) {
            fill(this.pianoOffColor.r, this.pianoOffColor.g, this.pianoOffColor.b);
        }
        else if (this.buttonOn) {
            fill(this.pianoOnColor.r, this.pianoOnColor.g, this.pianoOnColor.b); 
        }
        rect(this.x, this.y, this.w, this.h);  
        pop();
    }
}
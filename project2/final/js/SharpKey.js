class SharpKey {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 10;
        this.h = 75;
        this.sharpOffColor = { // Black for sharp off color 
            r: 0, 
            g: 0,
            b: 0
        };
        this.sharpOnColor = { // Grey but maybe switch to random??? 
            r: 140,
            g: 149, 
            b: 150
        };
        this.keysOn = false; 

        // Oscillator 
        this.oscillator = new p5.Oscillator(); 
        this.oscillator.amp(0); 
        this.oscillator.start(); 
        this.oscillator.fade(); 

        // Synth 
        // this.note = controller.sharpNotes; 
        this.synth = new p5.PolySynth(); 
    }
    pressed() {
        // Check to see if white piano key has been pressed 
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            // Function to detect if white piano key is on or off 
            if (!this.keysOn) {
                this.keysOn = true; 
                // Fade notes in 
                this.oscillator.fade(0.5, 0.2);
            }   
            else if (this.keysOn) {
                this.keysOn = false; 
                // Fade out of/ending a note
                this.oscillator.fade(0, 0.2); 
            } 
        }
    }
    sharpDisplay() {
        push();
        noStroke();
        // If white piano key is on display on color and if its off, display off color 
        // On and off white piano key defined in pressed()
        if (!this.keysOn) {
            fill(this.sharpOffColor.r, this.sharpOffColor.g, this.sharpOffColor.b);
        }
        else if (this.keysOn) {
            fill(this.sharpOnColor.r, this.sharpOnColor.g, this.sharpOnColor.b); 
        }
        rect(this.x, this.y, this.w, this.h);  
        pop(); 
    }
}
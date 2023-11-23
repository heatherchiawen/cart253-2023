class PianoKey {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 25;
        this.h = 100;
        this.keysOn = false; 

        // Oscillator 
        this.oscillator = new p5.Oscillator(); 
        this.oscillator.amp(0); 
        this.oscillator.start(); 
        this.oscillator.fade(); 
    }
    pressed() {
        // Check to see if white piano key has been pressed 
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            // If pressed, piano key turns on  
            this.keysOn = true; 
            // Fade notes in 
            this.oscillator.fade(0.5, 0.2);
        }
    }
    released() {
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            // If mouse is released, then piano key fades off 
            this.keysOn = false; 
            // Fade out of/ending a note
            this.oscillator.fade(0, 1); 
        }
    }
    pianoDisplay() {
        push();
        stroke(0);
        strokeWeight(1); 
        // Think about adding an on fill later... 
        // For now, the fill is controlled by the color array defined in the main script 
        rect(this.x, this.y, this.w, this.h);  
        pop(); 
    }
}
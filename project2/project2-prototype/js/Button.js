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
        // For sound 
        this.note = [60, 62, 64, 65, 67, 69, 71] // Midi notes 
    }
    pressed() {
        // Function to detect if the button is on or off 
        if (!this.buttonOn) {
            this.buttonOn = true; 
            this.playNote(this.note);  
        }   
        else if (this.buttonOn) {
            this.buttonOn = false; 
            this.endNote(); 
        } 
    }
    playNote() {
        // Function to play a note 
        osc.freq(midiToFreq(this.note)); 
        //Fade it in 
        osc.fade(0.5, 0.2); 
    }
    endNote() {
        // Function for fading out of notes 
        osc.fade(0, 0.2); 
    }

    display() {
        push();
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        // If button is on display on color and if its off, display off color 
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
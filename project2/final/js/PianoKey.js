class PianoKey {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 25;
        this.h = 100;
        //this.c = [100, 0, 0, 100, 100, 100, 0]; 
        // this.pianoOffColor = { // White for whole piano keys 
        //     r: 255, 
        //     g: 255,
        //     b: 255
        // };
        // this.pianoOnColor = { // Grey but maybe switch to random??? 
        //     r: 140,
        //     g: 149, 
        //     b: 150
        // };
        this.keysOn = false; 

        // Oscillator 
        this.oscillator = new p5.Oscillator(); 
        this.oscillator.amp(0); 
        this.oscillator.start(); 
        this.oscillator.fade(); 

        // this.note = [60, 62, 64, 65, 67, 69, 71, 72]; // [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]; //
        // this.oscillator.freq(midiToFreq(this.note)); 

        // Synth 
        // this.note = controller.pianoNotes; 
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
    pianoDisplay() {
        push();
        stroke(0);
        strokeWeight(1); 
        // If white piano key is on display on color and if its off, display off color 
        // On and off white piano key defined in pressed()
        // if (!this.keysOn) {
        //     fill(this.pianoOffColor.r, this.pianoOffColor.g, this.pianoOffColor.b);
        // }
        // else if (this.keysOn) {
        //     fill(this.pianoOnColor.r, this.pianoOnColor.g, this.pianoOnColor.b); 
        // }
        //fill(100, 100, this.c); 
        rect(this.x, this.y, this.w, this.h);  
        pop(); 
    }
}
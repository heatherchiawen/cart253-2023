class PianoKey {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 25;
        this.h = 100;

        // Oscillator 
        this.oscillator = new p5.Oscillator(); 
        this.env = new p5.Envelope();
        this.env.setADSR(0.1, 0.1, 1, 0.5); 
        this.oscillator.amp(this.env); 
        this.oscillator.start(); 
        this.oscillator.fade(); 
        this.oscillator.setType(); 
    } 
    pressed() {
        // Check the keyCode defined in main program 
        // Play sound 
        this.env.play(); 
    }
    pianoDisplay() {
        push();
        stroke(0);
        // Fill is defined by an array stored in the piano object in the main script
        strokeWeight(1); 
        rect(this.x, this.y, this.w, this.h);  
        pop(); 
    }
    // Sine(), square(), triangle(), sawtooth() are called by the event handler, SoundWave.pressed(pianoKey)  
    sine() {
        this.oscillator.setType('sine'); 
    }
    square() {
        this.oscillator.setType('square'); 
    }
    triangle() {
        this.oscillator.setType('triangle'); 
    }
    sawtooth() { 
        this.oscillator.setType('sawtooth'); 
    }
}
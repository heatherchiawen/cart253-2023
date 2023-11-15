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
        };
        this.pianoOnColor = { // Grey but maybe switch to random??? 
            r: 140,
            g: 149, 
            b: 150
        };
        this.keysOn = false; 

        // Oscillator 
        this.oscillator = new p5.Oscillator(); 
        this.oscillator.amp(0); 
        this.oscillator.start(); 

        // Synth 
        this.note = controller.pianoNote; 
        this.synth = new p5.PolySynth(); 
    }
    pressed() {
        // Function to detect if the button is on or off 
        if (!this.keysOn) {
            this.keysOn = true; 
            // Fade notes in 
            this.oscillator.fade(0.5, 0.2);
            this.playNote(); 
        }   
        else if (this.keysOn) {
            this.keysOn = false; 
            // Fade out of/ending a note
            this.oscillator.fade(0, 0.2); 
            // this.endNote(); 
        } 
    }
    playNote() {
        this.synth.play(this.note, 0.4, 0, 0.1); 
    }
    endNote() {
        this.synth.stop(this.note, 0.4, 0, 0.1); 
    }
    pianoDisplay() {
        // For natural white keys 
        push();
        noStroke();
        // If button is on display on color and if its off, display off color 
        // On and off of button defined in pressed()
        if (!this.keysOn) {
            fill(this.pianoOffColor.r, this.pianoOffColor.g, this.pianoOffColor.b);
        }
        else if (this.keysOn) {
            fill(this.pianoOnColor.r, this.pianoOnColor.g, this.pianoOnColor.b); 
        }
        rect(this.x, this.y, this.w, this.h);  
    }
}
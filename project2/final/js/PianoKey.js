class PianoKey {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 25;
        this.h = 100;
        this.keysOn = false; 

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
        // Write code for if lines touch the keys 
        // Check to see if white piano key has been pressed 
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            // If pressed, piano key turns on  
            this.keysOn = true; 
            // Play sound 
            this.env.play(); 
        }
    }
    released() {
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            // If mouse is released, then piano key fades off 
            this.keysOn = false; 
        }
    }
    pianoDisplay() {
        push();
        stroke(0);
        strokeWeight(1); 
        // Think about adding an keyOn fill later... 
        // For now, the fill is controlled by the color array defined in the main script 
        rect(this.x, this.y, this.w, this.h);  
        pop(); 
    }
    // setType(SoundWave) {
    //     soundWave.pressed(); 
    //     if(soundWave.sine = true && !soundWave.square && !soundWave.triangle && !soundWave.sawtooth) {
    //         this.oscillator.setType('sine'); 
    //     }
    //     else if(soundWave.square = true && !soundWave.sine && !soundWave.triangle && !soundWave.sawtooth) {
    //         this.oscillator.setType('square'); 
    //     }
    //     else if(soundWave.triangle = true && !soundWave.sine && !soundWave.square && !soundWave.sawtooth) {
    //         this.oscillator.setType('triangle'); 
    //     }
    //     else if(soundWave.square = true && !soundWave.sine && !soundWave.square && !soundWave.triangle) {
    //         this.oscillator.setType('sawtooth'); 
    //     }
    // }

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
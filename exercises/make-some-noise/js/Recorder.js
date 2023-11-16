class Recorder {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 100;
        this.h = 50;
        this.recorderOffColor = { // White for whole piano keys 
            r: 255, 
            g: 255,
            b: 255
        };
        this.recordingColor = { // Grey but maybe switch to random??? 
            r: 252,
            g: 3, 
            b: 44
        };
        this.playColor = { // Grey but maybe switch to random??? 
            r: 69,
            g: 144, 
            b: 214
        };

        this.recorder = new p5.SoundRecorder();
        this.soundFile; 
        this.state = 0; 

        //For recording
        this.recorder.setInput(); 
        // To playback and save recording 
        this.soundFile = new p5.SoundFile(); 
    }
    recorderPressed() { 
        if (this.state === 0 && mouseIsPressed && mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            fill(this.recorderOffColor.r, this.recorderOffColor.g, this.recorderOffColor.b); 
            text(`record`, width/2, height/2, this.x, this.y); 
            this.state++;
        }
        else if (this.state === 1) {
            this.recorder.record(this.soundFile); 
            fill(this.recordingColor.r, this.recordingColor.g, this.recordingColor.b)
            text(`recording`, width/2, height/2, this.x, this.y); 
            this.state++; 
        }
        else if (this.state === 2) {
            this.recorder.stop(); // Stops recroder and sends results to sound file 
            fill(this.playColor.r, this.playColor.g, this.playColor.b); 
            text(`play`, width/2, height/2, this.x, this.y)
            this.state++;
        }
        else if (this.state === 3) {
            this.soundFile.play(); // plays the result 
            save(this.soundFile, 'mySound.wav'); 
            this.state++; 
        }
    }
    display() {
        push(); 
        stroke(0);
        strokeWeight(3);
        noFill()
        rect(this.x, this.y, this.w, -this.h);
        pop(); 
    }
} 
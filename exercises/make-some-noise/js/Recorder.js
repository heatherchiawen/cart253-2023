class Recorder {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 100;
        this.h = 50;
        this.recorderOffColor = { 
            r: 25, 
            g: 226,
            b: 2
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
        this.recorderOn = false; 
        this.recorderPlay = false; 

        //For recording
        this.recorder.setInput(); 
        // To playback and save recording 
        this.soundFile = new p5.SoundFile(); 
    }
    recorderPressed() { 
        getAudioContext()
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            if (!this.recorderOn && this.state === 0) {
                this.recorderOn = true; 
                this.recorderPlay = false; 
                this.state++;
            }
            else if (this.recorderOn && this.state === 1) {
                this.recorderOn = false;
                this.recorderPlay = false; 
                this.recorder.record(this.soundFile); 
                this.state++; 
            }
            else if (!this.recorderOn && !this.recorderPlay && this.state === 2) {
                this.recorderOn = false;
                this.recorderPlay = true; 
                this.recorder.stop(); // Stops recroder and sends results to sound file 
                this.state++;
            }
            else if (this.recorderPlay && this.state === 3) {
                this.recorderOn = false;
                this.recorderPlay = false; 
                this.soundFile.play(); // plays the result 
                // save(this.soundFile, 'mySound.wav'); 
                this.state = 0; 
            }  
        }
    }

    display() {
        push(); 
        noStroke();
        if (!this.recorderOn && this.state === 0) {
            fill(this.recorderOffColor.r, this.recorderOffColor.g, this.recorderOffColor.b);
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`record`, this.x + this.w /3.5, this.y + this.h/1.75); 
        } 
        else if (this.recorderOn && this.state === 1) {
            fill(this.recordingColor.r, this.recordingColor.g, this.recordingColor.b);
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`recording`, this.x + this.w /3.5, this.y + this.h/1.75); 
        }
        else if (!this.recorderPlay && this.state === 2) {
            fill(this.playColor.r, this.playColor.g, this.playColor.b); 
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`play`, this.x + this.w /3.5, this.y + this.h/1.75); 
        }
        else if (this.recorderPlay && this.state === 3) {
            fill(this.recorderOffColor.r, this.recorderOffColor.g, this.recorderOffColor.b);
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`restart`, this.x + this.w /3.5, this.y + this.h/1.75)
        }  
        pop(); 
    }
} 
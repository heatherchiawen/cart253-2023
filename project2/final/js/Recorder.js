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
        this.recordingColor = { // Red but maybe get it to blink?  
            r: 252,
            g: 3, 
            b: 44
        };
        this.playColor = { // Blue
            r: 69,
            g: 144, 
            b: 214
        };
        this.recorder = new p5.SoundRecorder();
        this.soundFile; 
        this.soundLoop;
        this.recorder.setInput(); // Empty input records all sounds in program  
        
        // Starting state = 0 (no recording) until...
        this.state = 0; 

        // Booleans for clarity 
        this.recorderOn = false; 
        this.recorderPlay = false; 
    }
    recorderPressed() { 
        // Recording button pressed and state = 0. Then recording starts 
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            if (!this.recorderOn && !this.recorderPlay && this.state === 0) {
                // Boolean for recorder to start 
                this.recorderOn = true; 
                this.soundFile = new p5.SoundFile(); 
                // this.soundFile.push(this.soundFile); 
                this.recorder.record(this.soundFile); // Add duration and callback?
                // Playback stays off 
                this.recorderPlay = false; 
                this.state++;
            }
            // Check if button is pressed again and state = 1. 
            // State 1 stops recording 
            // No playback until button is pressed again (state = 2)
            else if (this.recorderOn && !this.recorderPlay && this.state === 1) {
                // Boolean for recorder to stop 
                this.recorderOn = false;
                this.recorderPlay = false; 
                // Stops recroder and sends results to sound file 
                this.recorder.stop();  
                this.state++; 
            }
            // Check if button is pressed again and state = 2
            // State 2 plays recorded audio back  
            // Moves to state 3
            else if (!this.recorderOn && !this.recorderPlay && this.state === 2) {
                this.recorderOn = false;
                this.recorderPlay = true; 
                this.soundFile.loop(); // Plays the reult on loop and can play more loops on top 
                //this.soundFile.play(); // plays the result once 
                this.state++;
            } 
            // Check if pressed again and state 
            else if (!this.recorderOn && this.recorderPlay && this.state === 3) {
                this.recorderOn = false;
                this.recorderPlay = false; 
                // Uncomment to save sounds created in program 
                // save(this.soundFile, 'mySound.wav'); 
                this.state = 0; 
            }  
        }
    }
    display() {
        // Chose to separate display from recorder pressed despite using the same booleans 
        // This separation is temporary as I plan to condense all this code for Project 2 
        // For now, it just proves to be easier to read and control object as build up the program
        push(); 
        noStroke();
        if (!this.recorderOn && !this.recorderPlay && this.state === 0) {
            fill(this.recorderOffColor.r, this.recorderOffColor.g, this.recorderOffColor.b);
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`record`, this.x + this.w /3.5, this.y + this.h/1.75); 
        } 
        else if (this.recorderOn && !this.recorderPlay && this.state === 1) {
            fill(this.recordingColor.r, this.recordingColor.g, this.recordingColor.b);
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`recording`, this.x + this.w /3.5, this.y + this.h/1.75); 
        }
        else if (!this.recorderOn && !this.recorderPlay && this.state === 2) {
            fill(this.playColor.r, this.playColor.g, this.playColor.b); 
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`play`, this.x + this.w /3.5, this.y + this.h/1.75); 
        }
        else if (!this.recorderOn && this.recorderPlay && this.state === 3) {
            fill(this.recorderOffColor.r, this.recorderOffColor.g, this.recorderOffColor.b);
            rect(this.x, this.y, this.w, this.h);
            textSize(16);
            fill(0);
            text(`restart`, this.x + this.w /3.5, this.y + this.h/1.75)
        }  
        pop(); 
    }
} 
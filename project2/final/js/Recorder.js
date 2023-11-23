class Recorder {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.size = 35;
        this.w = 35;
        this.h = 35;
        this.playSpacing = 50; 

        // Note for colors - colorMode is now in HSL
        this.recorderOffColor = { 
            h: 63, 
            s: 81, 
            l: 17
        };
        this.recordingColor = { // Red but maybe get it to blink?  
            h: 0, 
            s: 100, 
            l: 30, 
        };
        this.playColor = { // Blue
            h: 222, 
            s: 24, 
            l: 43
        };
        this.recorder = new p5.SoundRecorder();
        this.soundFile; 
        this.soundLoop;
        this.recorder.setInput(); // Empty input records all sounds in program  

        // Booleans for clarity 
        this.recorderOn = false; 
        this.recorderPlay = false; 
    }
    recording() { 
        // Coordinates of recording button: (this.x - (this.playSpacing*1.2), this.y, this.size + 5); 
        // CHECK IF THIS IS RIGHT??? 
        if (mouseX < this.x + (this.size + 5)/2 - (this.playSpacing*1.2) && mouseX > this.x - (this.size + 5)/2 - (this.playSpacing*1.2) && mouseY < this.y + (this.size + 5)/2 && mouseY > this.y - (this.size + 5)/2) {
            if (!this.recorderOn && !this.recorderPlay) {
                // Boolean for recorder to start 
                this.recorderOn = true; 
                this.soundFile = new p5.SoundFile(); 
                this.recorder.record(this.soundFile); // Add duration and callback?
                // Playback stays off 
                this.recorderPlay = false; 
            }
            // If recording button is pressed again then the recording stops 
            else if (this.recorderOn && !this.recorderPlay) {
                // Boolean for recorder to stop 
                this.recorderOn = false;
                this.recorderPlay = false; 
                // Stops recroder and sends results to sound file 
                this.recorder.stop();  
            }
        }
    } 
    play() {
        // Coordinates for play button: (this.x - this.w/2, this.y + this.h/2, this.x - this.w/2, this.y - this.h/2, this.x + this.w/2, this.y); 
        if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
            if (!this.recorderOn && !this.recorderPlay) {
                this.recorderOn = false;
                this.recorderPlay = true; 
                this.soundFile.loop(); // Plays the reult on loop and can play more loops on top 
                //this.soundFile.play(); // plays the result once 
                } 
            }
        }
    pause() { // Maybe switch this to save?? for loops??
        
        // Use play button coordinates: (this.x + this.playSpacing, this.y - this.h/2, this.w/4, this.h); (this.x - this.w/2 + this.playSpacing, this.y - this.h/2, this.w/4, this.h); 
        // this.x + this.playSpacing, this.y - this.h/2, this.x + this.playSpacing + this.w/4, this.h);  // ?????

        //if (mouseX < this.x + this.w && mouseX > this.x && mouseY < this.y + this.h && mouseY > this.y) {
        // Check if pressed again 
        if (!this.recorderOn && this.recorderPlay) {
            this.recorderOn = false;
            this.recorderPlay = false; 
            // Uncomment to save sounds created in program 
            // save(this.soundFile, 'mySound.wav'); 
        }  
    }
    display() {
        push(); 
        noStroke();
        fill(this.recordingColor.h, this.recordingColor.s, this.recordingColor.l);  
        ellipse(this.x - (this.playSpacing*1.2), this.y, this.size + 5); 
        pop(); 

        // Display for play button 
        push(); 
        noStroke(); 
        fill(0); // Play button is black for now 
        triangle(this.x - this.w/2, this.y + this.h/2, this.x - this.w/2, this.y - this.h/2, this.x + this.w/2, this.y); 
        pop(); 

        // Display for pause button 
        push();
        noStroke(); 
        fill(0); 
        rect(this.x + this.playSpacing, this.y - this.h/2, this.w/4, this.h);  
        rect(this.x - this.w/2 + this.playSpacing, this.y - this.h/2, this.w/4, this.h);  
        pop(); 
    }
} 

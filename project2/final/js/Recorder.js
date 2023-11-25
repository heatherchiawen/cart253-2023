class Recorder {
    constructor() {
        this.x = width/2; 
        this.y = 50; 
        this.size = 35;
        this.w = 35;
        this.h = 35;
        this.playSpacing = 50; 
        this.recorderColor = { // Red but maybe get it to blink?  
            h: 0, 
            s: 100, 
            l: 30, 
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
        if (mouseX < this.x + this.size/2 - (this.playSpacing*1.2) && mouseX > this.x - this.size/2 - (this.playSpacing*1.2) && mouseY < this.y + this.size/2 && mouseY > this.y - this.size/2) {
            if (!this.recorderOn && !this.recorderPlay) {
                this.recorderOn = true; 
                this.soundFile = new p5.SoundFile(); 
                this.recorder.record(this.soundFile); // Add duration and callback?
                this.recorderPlay = false; // Playback stays off 
            }
            // If recording button is pressed again then the recording stops 
            else if (this.recorderOn && !this.recorderPlay) {
                this.recorderOn = false;
                this.recorderPlay = false; 
                // Stops recroder and sends results to sound file 
                this.recorder.stop();  
            }
        }
    } 
    play() {
        if (mouseX < this.x + this.w/2 && mouseX > this.x - this.w/2 && mouseY < this.y + this.h/2 && mouseY > this.y - this.h/2) {
            if (!this.recorderOn && !this.recorderPlay) {
                this.recorderOn = false; // Recording is off 
                this.recorderPlay = true; // Playback is on 
                this.soundFile.loop(); // Plays the reult on loop  
                //this.soundFile.play(); // plays the result once 
                // if using play() maybe add an option for if the play button is played again the audio will play once again 
                } 
                else if (!this.recorderOn && this.recorder) {
                    this.recorderOn = false;
                    this.recorderPlay = false; 
                    this.soundFile.stop();
                    // Uncomment to save sounds created in program 
                    // save(this.soundFile, 'mySound.wav'); 
                }
            }
        } 
    display() {
        // Display for recording button 
        push(); 
        noStroke();
        if (!this.recorderOn) {
        fill(this.recorderColor.h, this.recorderColor.s, this.recorderColor.l);  
        } else if (frameCount % 100 < 50) { // For blinking effect 
            fill(this.recorderColor.h, this.recorderColor.s, this.recorderColor.l);  
        }
        ellipse(this.x - (this.playSpacing*1.2), this.y, this.size + 5); 
        pop(); 

        // Display for play button 
        push(); 
        noStroke();
        if (!this.recorderPlay) {  
            erase(); // Erases the previous icon 
            rect(this.x - this.w/2, this.y - this.h/2, this.w/4, this.h);
            rect(this.x, this.y - this.h/2, this.w/4, this.h);  
            noErase(); 
            fill(0);
            triangle(this.x - this.w/2, this.y + this.h/2, this.x - this.w/2, this.y - this.h/2, this.x + this.w/2, this.y);
        } else if (this.recorderPlay) {
            erase(); 
            triangle(this.x - this.w/2, this.y + this.h/2, this.x - this.w/2, this.y - this.h/2, this.x + this.w/2, this.y);
            noErase(); 
            fill(0); 
            rect(this.x - this.w/2, this.y - this.h/2, this.w/4, this.h);
            rect(this.x, this.y - this.h/2, this.w/4, this.h);  
        } 
        pop(); 

        // Replace with a save option display?
        // Use old pause coordinates 
        // rect(this.x - this.w/2 + this.playSpacing, this.y - this.h/2, this.w/4, this.h);
        // rect(this.x + this.playSpacing, this.y - this.h/2, this.w/4, this.h);    
    }
} 

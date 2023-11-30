class Turntable {
    constructor() {
        this.x = 0; 
        this.y = 0; 
        this.w = 100; 
        this.h = 200; 
        this.size = 200; 
        this.speedOne = 1; 
        this.speedTwo = 1; 
        this.translateWidth = width/2; 
        this.translateHeight = height/2 - 120; 
        this.angle = 0; 
        this.rotate = 3.333333333333; 
        this.durationOne; 
        this.durationTwo; 

        this.recordOneOn = false; 
        this.recordTwoOn = false; 
    }
    pressedRecordOne() {
    // Check for if right record pause button pressed 
        if (mouseX > this.translateWidth + 195 && mouseX < this.translateWidth + 220 && mouseY > this.translateHeight + this.size/2 + 20 && mouseY < this.translateHeight + this.size/2 + 30) {
            if (!this.recordOneOn) { 
                this.recordOneOn = true; 
                soundLoopOne.loop(); 
            } else {
                this.recordOneOn = false; 
                soundLoopOne.stop(); 
            }
        }
        // for right record plus sign 
        if (mouseX > this.translateWidth + 320 && mouseX < this.translateWidth + 340 && mouseY > this.translateHeight - 40 && mouseY < this.translateHeight - 20) {
            this.speedOne += 0.05; 
        } 
        // for right record minus sign 
        if (mouseX > this.translateWidth + 320 && mouseX < this.translateWidth + 340 && mouseY > this.translateHeight + 50 && mouseY < this.translateHeight + 53) {
            this.speedOne -= 0.05; 
        } 
    }
    pressedRecordTwo() {
        // for left record play check 
        if (mouseX > this.translateWidth - 215 && mouseX < this.translateWidth - 190 && mouseY > this.translateHeight + this.size/2 + 20 && mouseY < this.translateHeight + this.size/2 + 30) {
            if (!this.recordTwoOn) {
                this.recordTwoOn = true; 
                soundLoopTwo.loop(); 
            } else {
                this.recordTwoOn = false; 
                soundLoopTwo.stop(); 
            }
        } 
        // for left record plus sign 
        if (mouseX > this.translateWidth - 340 && mouseX < this.translateWidth - 320 && mouseY > this.translateHeight - 40 && mouseY < this.translateHeight - 20) {
            this.speedTwo += 0.05; 
        } 
        // for left record minus sign 
        if (mouseX > this.translateWidth - 340 && mouseX < this.translateWidth - 320 && mouseY > this.translateHeight + 50 && mouseY < this.translateHeight + 53) {
            this.speedTwo -= 0.05; 
        } 
    }
    displayRecordOne() {
        soundLoopOne.rate(this.speedOne);
        push(); 
        translate(this.translateWidth + 200, this.translateHeight);
        rotate(this.angle);  
        ellipse(this.x, this.y, this.size);
        line(this.x, this.y, this.x, -this.h/2); 
        this.angle += this.rotate; // FIX THis so it does'nt spin when off 
        pop(); 

        // Display for plus sign
        push();
        fill(0); 
        rect(this.translateWidth + 320, this.translateHeight - 31.5, 20, 3);  // Horizontal rect
        rect(this.translateWidth + 328.5, this.translateHeight - 40, 3, 20);  // Vertical rect
        pop(); 

        //Display for minus sign 
        push();
        fill(0); 
        rect(this.translateWidth + 320, this.translateHeight + 50, 20, 3); 
        pop(); 

        // Display for play sign and stop, switching if soundLoopOne is on or not 
        push(); 
        fill(0);
        if (!this.recordOneOn) { 
            erase(); 
            rect(this.translateWidth + 195, this.translateHeight + this.size/2 + 10, 18, 18);
            noErase(); 
            triangle(this.translateWidth + 200, this.translateHeight + this.size/2 + 30, this.translateWidth + 200, this.translateHeight + this.size/2 + 10, this.translateWidth + 220, this.translateHeight + this.size/2 + 20);
        } else if (this.recordOneOn) {
            erase();
            triangle(this.translateWidth + 200, this.translateHeight + this.size/2 + 30, this.translateWidth + 200, this.translateHeight + this.size/2 + 10, this.translateWidth + 220, this.translateHeight + this.size/2 + 20);
            noErase(); 
            rect(this.translateWidth + 195, this.translateHeight + this.size/2 + 10, 18, 18); 
        }
        pop(); 
    }
    displayRecordTwo() {
        soundLoopTwo.rate(this.speedTwo); 
        push(); 
        translate(this.translateWidth - 205, this.translateHeight); 
        rotate(this.angle); 
        ellipse(this.x, this.y, this.size); 
        line(this.x, this.y, this.x, -this.h/2); 
        this.angle += this.rotate; 
        pop(); // FIX THis so it does'nt spin when off 

        // Display for plus sign
        push();
        fill(0); 
        rect(this.translateWidth - 340, this.translateHeight - 31.5, 20, 3);  // Horizontal rect
        rect(this.translateWidth - 331.5, this.translateHeight - 40, 3, 20);  // Vertical rect
        pop(); 

        //Display for minus sign 
        push();
        fill(0); 
        rect(this.translateWidth - 340, this.translateHeight + 50, 20, 3); 
        pop(); 

        // Display for play sign and stop, switching if soundLoopTwo is on or not 
        push(); 
        fill(0);
        if (!this.recordTwoOn) { 
            erase(); 
            rect(this.translateWidth - 215, this.translateHeight + this.size/2 + 10, 18, 18);
            noErase(); 
            triangle(this.translateWidth - 210, this.translateHeight + this.size/2 + 30, this.translateWidth - 210, this.translateHeight + this.size/2 + 10, this.translateWidth - 190, this.translateHeight + this.size/2 + 20);
        } else if (this.recordTwoOn) {
            erase();
            triangle(this.translateWidth - 210, this.translateHeight + this.size/2 + 30, this.translateWidth - 210, this.translateHeight + this.size/2 + 10, this.translateWidth - 190, this.translateHeight + this.size/2 + 20);
            noErase(); 
            rect(this.translateWidth - 215, this.translateHeight + this.size/2 + 10, 18, 18); 
        }
        pop(); 
    }
    displayAudioTracker() {
        // Top 
        push(); 
        this.durationOne = map(soundLoopOne.currentTime(), 0, soundLoopOne.duration(), 365, 1075); 
        stroke(0, 100, 30); 
        strokeWeight(2);
        line(this.durationOne, 5, this.durationOne, 75);
        pop();  

        // Bottom
        push(); 
        this.durationTwo = map(soundLoopTwo.currentTime(), 0, soundLoopTwo.duration(), 365, 1075); 
        stroke(0, 100, 30); 
        strokeWeight(2);
        line(this.durationTwo, 80, this.durationTwo, 155);
        pop();   
    }
}
class Turntable {
    constructor() {
        this.x = 0; 
        this.y = 0; 
        this.w = 100; 
        this.h = 200; 
        this.size = 200; 
        this.speed = 1; 
        this.translateWidth = width/2; 
        this.translateHeight = height/2 - 120; 
        this.angle = 0; 
        this.rotate = 3.333333333333; 
        this.durationOne; 
        this.durationTwo; 
        this.d; 

        this.recordOn = false; 
    }
    pressed() {
    // Check for if pause button pressed 
            if (mouseX > this.translateWidth + 191 && mouseX < this.translateWidth + 220 && mouseY > this.translateHeight + this.size/2 + 20 && mouseY < this.translateHeight + this.size/2 + 30) {
            if (!this.recordOn) { 
                this.recordOn = true; 
                this.angle += this.rotate; 
                soundLoop.loop(); 
            } 
            else {
                this.recordOn = false; 
                soundLoop.stop(); 
            }
        }
        // for plus sign 
        if (mouseX > this.translateWidth + 320 && mouseX < this.translateWidth + 340 && mouseY > this.translateHeight - 40 && mouseY < this.translateHeight - 20) {
            this.speed += 0.05; 
            this.rotate = 3.333333333333; 
        } 
        // for minus sign 
        if (mouseX > this.translateWidth + 320 && mouseX < this.translateWidth + 340 && mouseY > this.translateHeight + 50 && mouseY < this.translateHeight + 53) {
            this.speed -= 0.05; 
            this.rotate -= 0; 
        } 
    }
    displayRecordOne() {
        soundLoop.rate(this.speed);
        push(); 
        translate(this.translateWidth + 200, this.translateHeight);
        rotate(this.angle);  
        ellipse(this.x, this.y, this.size);
        line(this.x, this.y, this.x, -this.h/2); 
        // this.angle += this.rotate; 
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

        // Display for play sign and stop, switching if soundLoop is on or not 
        push(); 
        fill(0);
        if (!this.recordOn) {
            erase(); 
            rect(this.translateWidth + 191, this.translateHeight + this.size/2 + 10, 18, 18);
            noErase(); 
            triangle(this.translateWidth + 191, this.translateHeight + this.size/2 + 30, this.translateWidth + 191, this.translateHeight + this.size/2 + 10, this.translateWidth + 211, this.translateHeight + this.size/2 + 20);
        } else if (this.recordOn) {
            erase();
            triangle(this.translateWidth + 191, this.translateHeight + this.size/2 + 30, this.translateWidth + 191, this.translateHeight + this.size/2 + 10, this.translateWidth + 211, this.translateHeight + this.size/2 + 20);
            noErase(); 
            rect(this.translateWidth + 191, this.translateHeight + this.size/2 + 10, 18, 18); 
        }
        pop(); 
    }
    displayRecordTwo() {
        soundLoop.rate(this.speed); 
        push(); 
        translate(this.translateWidth - 200, this.translateHeight); 
        rotate(this.angle); 
        ellipse(this.x, this.y, this.size); 
        line(this.x, this.y, this.x, -this.h/2); 
        this.angle += this.rotate; 
        pop(); 
    }
    displayAudioTracker() {
        // Top 
        push(); 
        this.durationOne = map(soundLoop.currentTime(), 0, soundLoop.duration(), 365, 1075); 
        stroke(0, 100, 30); 
        strokeWeight(2);
        line(this.durationOne, 5, this.durationOne, 75);
        pop();  

        // Bottom
        // push(); 
        // this.durationTwo = map(soundLoop.currentTime(), 0, soundLoop.duration(), 365, 1075); 
        // stroke(0, 100, 30); 
        // strokeWeight(2);
        // line(this.durationTwo, 80, this.durationTwo, 155);
        // pop();   
    }
}
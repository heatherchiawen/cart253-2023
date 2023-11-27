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
        // this.on = false; 
    }
    // Create a func to load sound 
    pressed() {
    this.d = dist(mouseX, mouseY, this.translate, this. translate); 
    this.speed = constrain(this.speed, 0, 1); 
        if (d < this.size/2) { // Maybe write a specfic if statement acording to the left v right? 
            this.speed -= 0.05; 
            this.rotate = 0; 
        } 
        else {
            this.speed += 0.05; 
            this.rotate = 3.333333333333; 
        }

        // if (mouseX > this.x - this.size/2 && mouseX < this.x + this.size/2 && mouseY > this.y - this.size/2 && mouseY < this.y + this.size/2){
        //}

        // soundLoop.loop(); 


        // Currently, the music slows down as you press the record and the record stops immediately 
        // Problem: the music doesn't stop to the same extent the record stops 
        // Also, if you click outside of the record the sound speeds up 
        // Maybe switch the if and else statement??
        // Maybe have it so that if you press the left side of the record is slows down but if you press the right side it speeds up? 
        // Also should have an on and off button 
    }
    displayRecordOne() {
        // Write something that says that makes it start off false and make it apply only to the soundLoop rate 
        soundLoop.rate(this.speed); // Change this into soundLoop one 
        push(); 
        translate(this.translateWidth + 200, this.translateHeight); 
        // rotate(this.angle); 
        ellipse(this.x, this.y, this.size); 
        line(this.x, this.y, this.x, -this.h/2); 
        if (this.recordOn = true) {
            rotate(this.angle); 
            this.angle += this.rotate; 
        }
        pop(); 

        // push(); 
        // translate(this.translateWidth - 200, this.translateHeight); 
        // rotate(this.angle); 
        // ellipse(this.x, this.y, this.size); 
        // line(this.x, this.y, this.x, -this.h/2); 
        // this.angle += this.rotate; 
        // pop(); 

        // Display for plus sign
        push();
        fill(0); 
        rect(this.translateWidth + 320, this.translateHeight - 31.5, 20, 3);  
        rect(this.translateWidth + 328.5, this.translateHeight - 40, 3, 20); 
        pop(); 

        //Display for minus sign 
        push();
        fill(0); 
        rect(this.translateWidth + 320, this.translateHeight + 50, 20, 3); 
        pop(); 

        // Display for play sign (start)
        push(); 
        fill(0);
        triangle(this.translateWidth + 155, this.translateHeight + this.size/2 + 30, this.translateWidth + 155, this.translateHeight + this.size/2 + 10, this.translateWidth + 175, this.translateHeight + this.size/2 + 20);
        pop(); 

        // Display for stop sign 
        push(); 
        fill(0); 
        rect(this.translateWidth + 245, this.translateHeight + this.size/2 + 10, 18, 18); 
        pop(); 
    }
    displayRecordTwo() {
        // Add another sound loop display 
        // And a transition slider? 

        soundLoop.rate(this.speed); // Change this into soundLoop one 
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

        // Botton
        push(); 
        this.durationTwo = map(soundLoop.currentTime(), 0, soundLoop.duration(), 365, 1075); 
        stroke(0, 100, 30); 
        strokeWeight(2);
        line(this.durationTwo, 80, this.durationTwo, 155);
        pop();   
    }

    speed() {

    }
}
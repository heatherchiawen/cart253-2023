class SoundWave {
    constructor() {
        this.x = width/2; 
        this.y = height - 25; 
        this.size = 25; 
        this.w = 20; 
        this.h = 20; 
        this.textSize = 15; 


        this.sine = false;
        this.square = false; 
        this.triangle = false; 
        this.sawtooth = false; 
    }
    pressed(pianoKey) { 
        // Check over these!!!!!!
        if (mouseX < this.x - 200 + this.size/2 && mouseX > this.x - 200 - this.size/2 && mouseY < this.y + this.size/2 && mouseY > this.y - this.size/2) {
            this.sine = true; 
            // !this.square; 
            // !this.triangle; 
            // !this.sawtooth; 
            pianoKey.sine(); 
            
        } 
        else {
            this.sine = false;
        }
        if (mouseX < this.x - 90 + this.w && mouseX > this.x - 90 && mouseY < this.y + this.h/2 && mouseY > this.y - this.h/2) {
            this.square = true;  
            // !this.sine; 
            // !this.triangle;
            // !this.sawtooth;
            pianoKey.square();  
        }
        else { 
            !this.square; 
        }
        if (mouseX < this.x + 40 + this.w && mouseX > this.x + 40 && mouseY < this.y + this.h/2 && mouseY > this.y - this.h/2) {
            this.triangle = true; 
            // !this.sine; 
            // !this.square; 
            // !this.sawtooth; 
            pianoKey.triangle();
        }
        else {
            !this.triangle; 
        }
        if(mouseX < this.x + 150 + this.w && mouseX > this.x + 150 && mouseY < this.y + this.h/2 && mouseY > this.y - this.h/2) {
            this.sawtooth = true; 
            // !this.sine; 
            // !this.square; 
            // !this.triangle; 
            pianoKey.sawtooth();
        }
        else {
            !this.sawtooth; 
        }
    }
    display() {
        // Sine 
        push(); 
        noStroke(); 
        fill(0); 
        ellipse(this.x - 200, this.y, this.size); 
        pop(); 

        // Square
        push(); 
        noStroke(); 
        fill(0); 
        rect(this.x - 90, this.y - this.h/2, this.w, this.h); 
        pop(); 

        // Triangle 
        push(); 
        noStroke(); 
        fill(0); 
        triangle(this.x + 40, this.y + this.h/2, this.x + 40 + this.w/2, this.y - this.h/2, this.x + 40 + this.w, this.y + this.h/2); 
        pop(); 

        // Sawtooth 
        push(); 
        noStroke(); 
        fill(0); 
        quad(this.x + 150, this.y + this.h/2, this.x + 150, this.y, this.x + 150 + this.w, this.y - this.h/2, this.x + 150 + this.w, this.y + this.h/2);
        pop(); 
    }
}
class Bee {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.size = 40; 
        this.minSize = 10; 
        this.maxSize = 80;
        this.vx = 0; 
        this.vy = 0;
        this.speed = 5;
        this.growRate = 0.25; // Growth based on pollination 
        this.shrinkRate = 0.05; // Shrink per each frame 
        this.jitteriness = 0.1; // Change of direction 
        this.alive = true; // Starts alive 
    }
    shrink() { 
        this.size = this.size - this.shrinkRate; // Shrink by set amount
        if (this.size < this.minSize) { // Shrink check 
            this.alive = false; 
        }
    }

    tryToPollinate(flower) {
        let d = dist(this.x, this.y, flower.x, flower.y); 
        // Check for bee and flower overlap 
        if (d < this.size/2 + flower.size/2) { 
            // Calls bee growth 
            this.grow(); 
            // Pollination reaction to bee and flower overlap
            flower.pollinate(); 
        }
    }

    grow() { 
        // Bee increases in size from growRate 
        this.size = this.size + this.growRate; 
        // Constrains bee growth to maxSize
        if (this.size > this.maxSize){
            constrain(this.size, 0, this.maxSize); 
        }
    }

    move() {
        // Direction change check 
        let r = random(0, 1); 
        if (r < this.jitteriness) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed); 
        }
        // Updated position 
        this.x = this.x + this.vx; 
        this.y = this.y + this.vy; 
        // Constrained to canvas 
        this.x = constrain(this.x, 0, width); 
        this.y = constrain(this.y, 0, height); 
    }
    display() {
        push(); 
        // 2 wings 
        fill(255); 
        noStroke(); 
        ellipse(this.x + this.size/2, this.y, this.size/2); 
        ellipse(this.x - this.size/2, this.y, this.size/2);
        pop();

        // Body 
        push(); 
        fill(255, 255, 50); 
        noStroke(); 
        ellipse(this.x, this.y, this.size); 
        pop(); 

        // Eyes 
        push(); 
        fill(0); 
        noStroke(); 
        ellipse(this.x - this.size/10, this.y, this.size/10); 
        ellipse(this.x + this.size/10, this.y, this.size/10);
        pop(); 
    }
}
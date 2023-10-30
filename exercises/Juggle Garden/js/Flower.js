class Flower {
    constructor(x, y, size, stemLength, petalColor) {
        this.x = x;
        this.y = y;
        this.size = size; 
        this.stemLength = stemLength; 
        this.stemThickness = 10; 
        this.petalThickness = 10; 
        
        this.stemColor = {
            r: 50, 
            g: 150, 
            b: 50
        }; 
        this.petalColor = petalColor; 
        this.centreColor= {
            r: 50, 
            g: 0, 
            b: 0
        };
        this.alive = true; 
    }
    shrink() {
        let shrinkage = random(0, 0.01); 
        this.petalThickness = this.petalThickness - shrinkage/10; // Petal thickness shirnk 
        this.size = this.size - shrinkage; // Center of flower shrink

        if(this.petalThickness <= 0 || this.size <= 0) {
            this.alive = false; 
        }
    }

    display() {
        push(); 
        // Strokeweight for petals and stem 
        strokeWeight(this.stemThickness); 
        // Line for stem 
        stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
        line(this.x, this.y, this.x, this.y + this.stemLength); 
        // Circle with heavy outline for flower 
        strokeWeight(this.petalThickness); 
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b); 
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();  
    }
}
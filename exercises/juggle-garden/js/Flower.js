class Flower {
    constructor(x, y, size, stemLength, petalColor) {
        this.x = x;
        this.y = y;
        this.size = size; 
        this.maxSize = size; 
        this.stemLength = stemLength; 
        this.stemThickness = 10; 
        this.petalThickness = 10; 
        this.maxPetalThickness = 10; 
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
        // Random amount of shrinkage 
        let shrinkage = random(0, 0.01); 
        // Petal thickness shrink 
        this.petalThickness = this.petalThickness - shrinkage/10; 
        // Center of flower shrink
        this.size = this.size - shrinkage; 
        // Flower dies if properties reach 0 or less 
        if (this.petalThickness <= 0 || this.size <= 0) {
            this.alive = false; 
        }
    }

    pollinate() { 
        // Called within the bee class event handler: tryToPollinate()
        let growth = random(0, 0.5); 
        this.petalThickness = this.petalThickness + growth/10; 
        this.size = this.size + growth; 
        this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
        this.size = constrain(this.size, 0, this.maxSize);
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
class LineDrawn {
    constuctor() {
        this.px = pwinMouseX; // pwin tracks the mouse pos. from the previous frame 
        this.py = pwinMouseY; 
        this.x = winMouseX; // mouse position in the current frame 
        this.y = winMouseY; 

        this.lines = []; 
        this.startLines = false; 
    }
    show() {
        stroke(0); // black 
        strokeWeight(3); 
        noFill();l 
        line(this.px, this.py, this.x, this.y); 
    }
    move() { 
        // write code that moves lines down 
        // Connect to recorder's play button 
    }
}

//  // Statements and loops for the drawing bit of code 
//  if (start) {
//     lines.push(createVector(mouseX, mouseY));
// }

// stroke(0); 
// noFill();
// strokeWeight(3); 
// beginShape(); 
// for(let i = 0; i <lines.length; i++) {
//     let x = lines[i].x; 
//     let y = lines[i].y;
//     vertex(x, y);  
// }
// endShape(); 


// mousePressed() {
//     // For drawing program 
//     start = true; 
//     lines = []; 
// }

// mouseReleased() {
//     start = false; 
//     lines = []; 
// }
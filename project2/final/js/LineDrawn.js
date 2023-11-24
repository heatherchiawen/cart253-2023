class LineDrawn {
    constuctor() {
        this.px = pwinMouseX; // pwin tracks the mouse pos. from the previous frame 
        this.py = pwinMouseY; 
        this.x = winMouseX; // mouse position in the current frame 
        this.y = winMouseY; 
    }
    show() {
        stroke(0); // black 
        line(this.px, this.py, this.x, this.y); 
    }
    move() { 
        // write code that moves lines down 
        // Connect to recorder's play button 
    }
}


// let lines = []; 
//let start = false; 


//  // Statements and loops for the drawing bit of code 
//  if (start) {
//     lines.push(createVector(mouseX, mouseY));
// }
// stroke(0); 
// noFill();
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
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
}
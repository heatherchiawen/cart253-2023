/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {
}

let snak = {
    x: 0, 
    y: 0, 
    vx: 0, 
    vy: 0, 
    width: 75, 
    height: 150, 
    speed: 5
}
let p1 = {x: 50,y: 0};
let p2 = {x: 35,y: 20};
let p3 = {x: 35,y: 40};
let p4 = {x: 50,y: 60};
let p5 = {x: 65,y: 80};
let p6 = {x: 65,y: 100};
let p7 = {x: 50,y: 120};

let snakes = [];

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    
    for (let i = 0; i < 4; i++) {
        snakes[i] = new Snake (random(width), random(height)); 
    }
}


/**
 * Description of draw()
*/
function draw() {
    background(0); 

   // Display snakes
   for (let i = 0; i < 4; i++) {
        snakes[i].body(); 
    // snakes[i].move();
    }
}

class Snake {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        // this.w = w; 
        this.h = p7.y; 
    } 
    
    body() { 
        stroke(62, 179, 54);
        curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y); 
        curve(p4.x, p4.y, p5.x, p5.y, p6.x, p6.y, p7.x, this.h); 

    }

    // move() {
    //     this.x++; 
    //     if (this.x > width) {
    //         this.x = 0; 
    //     }
    // }
    // checkCollision() {
    //     if (user.x == this.x + this.h) { 
            
    //     }
    // }
}
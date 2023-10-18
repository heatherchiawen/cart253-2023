/**
 * Project1 
 * Heather Chester 
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

let user = {
    x: 0, 
    y: 0,
    size: 50, 
    vx: 3, 
    vy: 3, 
    speed: 7
}; 

let sq = {
    x: 0, 
    y: 0, 
    segmentSize: 50, 
    totalSegments: 100, 
    segmentSpacing: 100, 
    lineSpacing: 50
}

let lad = {
    x: 0, 
    y: 0, 
    vx: 0, 
    vy: 0, 
    width: 75, 
    height: 150, 
    speed: 5
}

let state = `title`;
let keyIspressed; 

let ladders = [] //empty array 




/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    setupUser();

    let y = lad.y; 
    for (let i = 0; i < 4; i++) {
        ladders[i] = new Ladder (random(width), y + lad.height);
        y = y + lad.height;  
    }
}

function setupUser() {

    // Setup user starting position 
    user.x = windowWidth / 2; 
    user.y = windowHeight - 100; 

}


/**
 * Description of draw()
*/
function draw() {
    background(0); 

    // State string 
    if (state === `title`) {
        title();
    }

    else if (state === `simulation`) {
        simulation(); 
    }

    else if (state === `end`) {
        end();
    }

}

class Ladder {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 75; 
        this.h = 150; 
    } 
    
    body() { 
        noStroke(); 
        fill(107, 79, 48);
        rect(this.x, this.y, this.w, this.h); 
        noStroke(); 
        fill(0);
        rect(this.x + 5, this.y, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 32.5, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 62.5, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 92.5, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 122.5, this.w - 10, this.h - 122.5); 

        // strokeWeight(5); 
        // stroke(107, 79, 48);
        // line(this.x, this.y + 30, this.x + 75, this.y + 30); 
        // line(this.x, this.y + 60, this.x + 75, this.y + 60);
        // line(this.x, this.y + 90, this.x + 75, this.y + 90);
        // line(this.x, this.y + 120, this.x + 75, this.y + 120); 
        // line(this.x, this.y, this.x, this.y + 150);
        // line(this.x + 75, this.y, this.x + 75, this.y + 150);
    }
    move() {
        this.x++; 

        if (this.x > width) {
            this.x = 0; 
        }
    }
    // checkCollision() {
    //     if (user.x )
    // }
}



function title() {
    push(); 
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('title', width/2, height/2);
    pop();
}

function simulation() {
    moveUser();
    checkUser();
    display(); 
}

function end() {
    push();
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('end', width/2, height/2); 
    pop();
}

// Simulation functions 

function moveUser() {

    // User movement according to arrow keys
    if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
        user.x--; 
    }  
    else if (keyCode === RIGHT_ARROW) {
        user.x++; 
    }
    if (keyCode === UP_ARROW) {
    user.y--;
    } 
    else if (keyCode === DOWN_ARROW) {
        user.y++;
    }   
    }
} 

function checkUser() {
    // Simulation ends if user goes off screen or passes the finish line
    if (user.x + (user.size/2) == width || user.x - (user.size/2) == 0 || user.y + (user.size/2) == height || user.y == sq.lineSpacing) {
        state = 'end'; 
    }
}


function display() {

    // Display ladder 
    for (let i = 0; i < 4; i++) {
        ladders[i].body(); 
        ladders[i].move();
    }

    // Display user 
    noStroke(); 
    fill(255);
    ellipse(user.x, user.y, user.size);

    // Display finish line 
    let x = sq.x;
    let y = sq.y;  
    for (let segmentsDrawn = 0; segmentsDrawn < sq.totalSegments; segmentsDrawn++) {
        fill(255); 
        rect(x, sq.y, sq.segmentSize);
        rect(x + sq.lineSpacing, y + sq.lineSpacing, sq.segmentSize);
        x = x + sq.segmentSpacing;
    }

}



// Function for moving from title to simulatuion to end 
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}
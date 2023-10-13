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
    size: 100, 
    vx: 3, 
    vy: 3, 
    speed: 7
}; 

let finish = {
    x: 0, 
    y: 0, 
    segmentSize: 50
}

let state = `title`;
let keyIspressed; 

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    setupUser();
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

    if (state === `title`) {
        title();
    }

    else if (state === `simulation`) {
        simulation(); 
    }

    else if (state === `fin`) {
        fin();
    }

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
    move();
    checkUser(); 
    display(); 
    
}

function fin() {
    push();
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('fin', width/2, height/2); 
    pop();
}

// Simulation functions 

function move() {

    // Users moves left, right, up and down according to arrow keys
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
    if (user.x + (user.size/2) == width || user.x - (user.size/2) == 0 || user.y + (user.size/2) == height) {
        state = 'fin'; 
    }
}

function display() {
    // Display user 
    ellipse(user.x, user.y, user.size);

    //1st square display of finish line using segments and loops
    noStroke(); 
    fill(255); 
    
    let x = finish.x;
    let y = finish.y; 
    let numSegments = 4; 
    let segmentsDrawn = 0; 

    while (segmentsDrawn < numSegments) {
        rect(finish.x, finish.y, finish.segmentSize); 
        x = x + 100;
        y = y - 50; 
        segmentsDrawn = segmentsDrawn ++; 
    }
   
    while (segmentsDrawn < numSegments) {
        rect(finish.x, finish.y, finish.segmentSize); 
        x = x + 100;
        y = y + 50; 
        segmentsDrawn = segmentsDrawn ++; 
    }

}

// Function for moving from title to simulatuion to end 
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}
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

let state = `title`;

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

}


/**
 * Description of draw()
*/
function draw() {
    background(0); 

if (state === `title`) {
    title();
}

// else if (state === `simulation`) {
//     simulation(); 
// }

else if (state === `fin`) {
    fin();
}

}

function title() {
    push(); 
    textSize(64); 
    fill(255); 
    textAlign(CENTER, CENTER); 
    text('title', width/2, height/2);
    pop();
}

// function simulation() {
    
// }

function fin() {
    push();
    textSize(64); 
    fill(255); 
    textAlign(CENTER, CENTER); 
    text('fin', width/2, height/2); 
    pop();
}

function mousePressed() {
    if (state === `title`) {
        state = `fin`;
    }
}
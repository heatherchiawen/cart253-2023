/**
 * 04-dodging-covid-19
 * Heather
 * 
 * Creating a simple simulation to become familiar with variables for movement, visuals, etc., conditionals for making decisions, new functions (dist(), noLoop(), noCursor()), and using a loop for a visual effect (static). 
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let covid19 = {
    x: 0,
    y: 250, 
    size: 100,
    speed: 5,
    fill: {
        r: 250, 
        g: 100, 
        b: 100, 
        a: 255, 
    },
    
    alphaChange: 1, 
    // alphaAngle:0
    
}

/**
 * Description of setup
*/
function setup() {
    createCanvas (windowWidth, windowHeight);
    angleMode (DEGREES);
}


/**
 * Description of draw()
*/
function draw() {
    background(172, 242, 178);

    //let sinValue = sin(square.alphaAngle);
    //square.fill.a = map (sinValue, -1, 1, 0, 255);

    square.fill.a += square.alphaChange;
    
    if (square.fill.a >= 255); {
        square.alphaChange *= -1; 
    }

    else if (square.fill.a >= 255) {
        square.alphaChange *= -1; 
    }
    
    rectMODE(CENTER);
    noStroke();
    fill(square.fill.r, square.fill.g, square.fill.b, square.fill.a);
    rect(square.x, square.y, square.size);

    // square.alphaAngle += 2; 

}
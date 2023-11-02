/**
 * Draw an Alien 
 * Heather Chester 
 * 
 * Using drawing functions to create an alien. 
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {


    createCanvas (640, 480);
    background (179, 34, 34);

// */Drawing the body 
    noStroke ();
    fill (58, 179, 77);
    ellipse (320, 320, 100, 200)
   

// */Drawing the head

    fill (79, 194, 89);
    ellipse (320, 200, 75, 125);

// */Drawing the eyes 

    fill(0, 0, 0);
    ellipse (300, 190, 10, 20);
    ellipse (340, 190, 10, 20);

// */Drawing the nostrils 

    ellipse (315, 210, 2, 5);
    ellipse (325, 210, 2, 5);

// */Drawing the mouth 

    stroke(212, 108, 108);
    strokeWeight(2);
    rectMode (RADIUS);
    rect(320, 225, 20, 2);

// */Drawing a tie

    noStroke ();
    triangle (310, 270, 320, 280, 330, 270);
    triangle (310, 310, 320, 320, 330, 310);
    triangle (310, 310, 320, 280, 330, 310);

// */Drawing a collar 

    fill (255, 255, 255);
    triangle (290, 240, 300, 280, 310, 270);
    triangle (330, 270, 340, 280, 350, 240);
    
// */Drawing pants

    fill (0, 0, 0);
    rect (350, 390, 20, 50)
    rect (290, 390, 20, 50)
    rect (310, 390, 20, 30)


} 

/**
 * Description of draw()
*/
function draw() {

}
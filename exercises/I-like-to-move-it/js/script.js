/**
 * Title of Project
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


/**
 * Description of setup
*/

let backgroundShade = 0; 

let circle = {

    x: 0,
    y: 250,
    size: 100,
    speed: 1 
}; 

function setup() {

    createCanvas (windowWidth, windowHeight);

}


/**
 * Description of draw()
*/
function draw() {

    background (backgroundShade); 
    ellipse (circle.x, circle.y, circle.size);
    circle.x = circle.x + circle.speed; 


}
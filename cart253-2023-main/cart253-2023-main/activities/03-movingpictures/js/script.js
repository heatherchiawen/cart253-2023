/**
 * 03-MovingPictures
 * Heather Chester 
 * 
 * Practicing declaring and changing variables and/with JavaScript objects.  
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

let bg = {
    red: 0, 
    green: 0, 
    blue: 0
}; //Created bg for background colour and its properties


let circle1 = {
    x: 0, 
    y: 250,
    size: 150, 
    fill: 255,
    alpha: 200,
    speed: 1,
    growthRate: 1
}; //Created circle1 and its properties


let circle2 = {
    x: 500,
    y: 250,
    size: 100,
    sizeRatio: 0.75,
    fill: 255, 
    alpha:200,
    speed: -1
}; //Created circle2 and its properties


function setup() {
    createCanvas(500, 500);
    noStroke();

}


/**
 * Description of draw()
*/
function draw() {

    //Background
    background(bg.red, bg.green, bg.blue);
    bg.red = map(circle1.size, 100, width, 0, 255);

    //Left circle1
    circle1.x = circle1.x + circle1.speed;
    circle1.x = constrain(circle1.x, 0, width/2);
    circle1.size = circle1.size + circle1.growthRate;
    circle1.size = constrain(circle1.size, 0, width)
    fill(circle1.fill, circle1.alpha);
    ellipse(circle1.x, circle1.y, circle1.size);

    //Right circle2 
    circle2.x = circle2.x + circle2.speed;
    circle2.x = constrain (circle2.x, width/2, width);
    circle2.size = circle1.size * circle2.sizeRatio;
    fill(circle2.fill, circle2.alpha);
    ellipse(circle2.x, circle2.y, circle2.size);


}

/**
 * i-like-to-move-it
 * Heather Chester 
 * 
 * Exercise #1, declaring and changing variables with JavaScript objects using map() and constrain().   
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


let rect1 = {
    x: 0, 
    y: 250,
    size: 50, 
    fill: 255,
    alpha: 200,
    speed: 1,
    growthRate: 1
}; //Creatrect and its properties


let rect2 = {
    x: 500,
    y: 250,
    size: 50,
    sizeRatio: 0.75,
    fill: 255, 
    alpha:200,
    speed: -1
}; //Createt rect2 and its properties

let rect3 = {
    x: 250,
    y: 0,
    size: 50,
    sizeRatio: 0.75,
    fill: 255, 
    alpha:200,
    speed: 1
}; //Createt rect3 and its properties


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
    bg.red = (rect.size, 100, width, 0, 255);

    //Left rect1
    rect1.x = rect1.x + rect1.speed
    rect1.x = constrain (rect1.x, 0, width/2);
    rect1.size = rect1.size + rect1.growthRate;
    rect1.size = constrain (rect1.size, 0, width)
    fill(rect1.fill, rect1.alpha);
    rect (rect1.x, rect1.y, rect1.size);

    //Right rect2 
    rect2.x = rect2.x + rect2.speed;
    rect2.x = constrain (rect2.x, 0, width/2);
    rect2.size = rect1.size * rect2.sizeRatio;
    fill(rect2.fill, rect2.alpha);
    rect(rect2.x, rect2.y, rect2.size);

     //Right rect3
     rect3.x = rect3.x * rect3.y + rect3.speed;
     rect3.x = constrain (rect3.x, 0, width/2);
     rect3.size = rect1.size * rect3.sizeRatio;
     rect3.fill= map(rect3.fill, 100, width, 0, 255);
     rect(rect3.x, rect3.y, rect3.size);


}

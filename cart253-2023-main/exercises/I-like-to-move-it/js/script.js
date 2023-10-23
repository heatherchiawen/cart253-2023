/**
 * i-like-to-move-it
 * Heather Chester 
 * 
 * Exercise #1, declaring and changing variables with JavaScript objects. Includes different sized shapes, movement, colour changes, response to mouseX and mouseY, and use of the funsyions map() and constrain().    
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

//Bg for background colour and its properties
let bg = {
    red: 255,  
    green: 255,
    blue: 255
}; 



//Rect1 and its properties
let rect1 = {
    x: 0, 
    y: 0,
    width: 50, 
    height: -500, 
    heightStop: 500,
    fill: 0,
    fillMax: 51, 
    alpha: 200, 
    speed: 5,
    growthRate: .5
}; 

//Rect2 and its properties
let rect2 = {
    x: 100, 
    y: 0,
    width: 50, 
    height: -400, 
    heightStop: 400,
    fill: 0,
    fillMax: 102, 
    alpha: 200, 
    speed: 4,
    growthRate: .5
}; 

//Rect3 and its properties
let rect3 = {
    x: 200, 
    y: 0,
    width: 50, 
    height: -300, 
    heightStop: 300,
    fill: 0, 
    fillMax: 153, 
    alpha: 200, 
    speed: 3,
    growthRate: .5
};

//Rect4 and its properties
let rect4 = {
    x: 300, 
    y: 0,
    width: 50, 
    height: -200, 
    heightStop: 200,
    fill: 0, 
    fillMax: 204, 
    alpha: 200, 
    speed: 2,
    growthRate: .5
}; 

//Rect5 and its properties
let rect5 = {
    x: 400, 
    y: 0,
    width: 50, 
    height: -100, 
    heightStop: 100,
    fill: 0, 
    fillMax: 255, 
    alpha: 200, 
    speed: 1,
    growthRate: .5
}; 

function setup() {
    createCanvas(500, 500);
    noStroke();

}


/**
 * Description of draw()
*/
function draw() {

    //Background, greyscale along the Y axis. 
    background(bg.red, bg.green, bg.blue);
    bg.red = map(mouseY, 0, height, 255, 0);
    bg.green = map(mouseY, 0, height, 255, 0);
    bg.blue = map(mouseY, 0, height, 255, 0);
  

    //Left rect1, 
    rect1.y = rect1.y + rect1.speed
    rect1.y = constrain (rect1.y, 0, rect1.heightStop);
    rect1.width = rect1.width + rect1.growthRate;
    rect1.width = constrain (rect1.width, 0, 100);
    rect1.fill = map(mouseX, 0, width, 0, rect1.fillMax);
    fill(rect1.fill, rect1.alpha);
    rect(rect1.x, rect1.y, rect1.width, rect1.height);

    //Second to the left rect2
    rect2.y = rect2.y + rect2.speed
    rect2.y = constrain (rect2.y, 0, rect2.heightStop);
    rect2.width = rect2.width + rect2.growthRate;
    rect2.width = constrain (rect2.width, 0, 100);
    rect2.fill = map(mouseX, 0, width, rect1.fillMax, rect2.fillMax);
    fill(rect2.fill, rect2.alpha);
    rect (rect2.x, rect2.y, rect2.width, rect2.height);

    //Middle rect3
    rect3.y = rect3.y + rect3.speed
    rect3.y = constrain (rect3.y, 0, rect3.heightStop);
    rect3.width = rect3.width + rect3.growthRate;
    rect3.width = constrain (rect3.width, 0, 100);
    rect3.fill = map(mouseX, 0, width, rect2.fillMax, rect3.fillMax);
    fill(rect3.fill, rect3.alpha);
    rect (rect3.x, rect3.y, rect3.width, rect3.height);

    //Second to the right rect4
    rect4.y = rect4.y + rect4.speed
    rect4.y = constrain (rect4.y, 0, rect4.heightStop);
    rect4.width = rect4.width + rect4.growthRate;
    rect4.width = constrain (rect4.width, 0, 100);
    rect4.fill = map(mouseX, 0, width, rect3.fillMax, rect4.fillMax);
    fill(rect4.fill, rect4.alpha);
    rect (rect4.x, rect4.y, rect4.width, rect4.height);

    //Second to the right rect5
    rect5.y = rect5.y + rect5.speed
    rect5.y = constrain (rect5.y, 0, rect5.heightStop);
    rect5.width = rect5.width + rect5.growthRate;
    rect5.width = constrain (rect5.width, 0, 100);
    rect5.fill = map(mouseX, 0, width, rect4.fillMax, rect5.fillMax);
    fill(rect5.fill, rect5.alpha);
    rect (rect5.x, rect5.y, rect5.width, rect5.height); 

}

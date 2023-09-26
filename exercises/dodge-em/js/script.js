/**
 * Dodge-em 
 * Heather Chester 
 * 
 * Creating a simple simulation to become familiar with variables for movement, visuals, etc., conditionals for making decisions, new functions (dist(), noLoop(), noCursor()), and using a loop for a visual effect (static). 
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let circle = {
    x: 0,
    y: 250, 
    size: 100, 
    vx: 0, 
    vy: 0, 
    speed: 5,
    fill: {
        r: 250, 
        g: 100, 
        b: 100, 
        a: 255, 
    }
};

let user = {
    x: 150,
    y: 250, 
    size: 100, 
    fill: 255
};

let numStatic = 500;


/**
 * Description of setup
*/
function setup() {
    createCanvas (windowWidth, windowHeight);

    circle.y = random(0,height);
    circle.vx = circle.speed; 

    noCursor();

}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    //Display static 
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width); 
        let y = random(0, height);
        stroke(255);
        point(x,y);
    } 
    
    //Covid 19 movement 
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy; 

    if (circle.x > width) {
        circle.x = 0;
        circle.y = random(0,height);
    }

    //User movement 
    user.x = mouseX;
    user.y = mouseY; 

    //Check for catching covid 19 
    let d = dist(user.x, user.y, circle.x, circle.y);
    if (d < circle.size/2 + user.size/2) {
        noLoop ();

    }

    // Display covid 19  
    fill(circle.fill.r, circle.fill.g, circle.fill.b);
    ellipse(circle.x, circle.y, circle.size);

    //Display user 
    fill(user.fill); 
    ellipse(user.x, user.y, user.size);





}
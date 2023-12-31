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

    covid19.y = random(0,height);
    covid19.vx = covid19.speed; 

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
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy; 

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0,height);
    }

    //User movement 
    user.x = mouseX;
    user.y = mouseY; 

    //Check for catching covid 19 
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size/2 + user.size/2) {
        noLoop ();

    }

    // Display covid 19  
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, covid19.y, covid19.size);

    //Display user 
    fill(user.fill); 
    ellipse(user.x, user.y, user.size);





}
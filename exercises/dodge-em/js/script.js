/**
 * Dodge-em 
 * Heather Chester 
 * 
 * Creating a simple simulation to become familiar with variables for movement, visuals, etc., conditionals for making decisions, new functions (dist(), noLoop(), noCursor()), and using a loop for a visual effect (static). 
 */

"use strict";
//White circle becomes an alien 

let alien = { 
    x: 150,
    y: 250, 
    vx: 50,
    vy: 50, 
    size: 100, 
    image: undefined 
}

let spaceship = { 
    x: 0,
    y: 250, 
    size: 100, 
    vx: 0, 
    vy: 0, 
    speed: 5, 
    image: undefined 
}

let ellipse = { 
    x: 0, 
    y: 0, 
    size: 200, 
    vx: 0, 
    vy: 0, 
    spped: 2,
    scale: 1, 
    angle: 0

}


/**
 * Description of preload
*/
function preload() {

    alien.image = loadImage("assets/images/alien.png");
    spaceship.image = loadImage("assets/images/spaceship.png");
}

let numStatic = 1000;


/**
 * Description of setup
*/
function setup() {
    createCanvas (windowWidth, windowHeight);

    spaceship.y = random(0,height);
    spaceship.vx = spaceship.speed; 
    ellipse.vx = ellipse.speed;
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

    //Display Sun 

    ellipse.x = ellipse.x + ellipse.vx; 
    ellipse.y = ellipse.y + ellipse.vy; 

    push (); 
    ellipseMode (CENTER); 
    rotate(PI);
    fill(255, 255, 0); 
    ellipse (250, 250, 100, 100); 
    pop ();
    


    //spaceship movement 
    spaceship.x = spaceship.x + spaceship.vx;
    spaceship.y = spaceship.y + spaceship.vy; 
    
    if (spaceship.x > width) {
        spaceship.x = 0;
        spaceship.y = random(0,height);
    }
    
    //Conditionals for spaceship to chase alien vertically while it moves left to right
    if (mouseX < spaceship.x) {
        spaceship.vx = spaceship.speed;
    }
    if (mouseY < spaceship.y) { 
        spaceship.vy = -spaceship.speed;
    }
    else { 
        spaceship.vy = spaceship.speed;
    }


    //alien movement 
    alien.x = mouseX + alien.vx;
    alien.y = mouseY + alien.vy; 


    //Check for spaceship catching alien
    let d = dist(alien.x, alien.y, spaceship.x, spaceship.y);
    if (d < spaceship.size/4 + alien.size/4) {
        noLoop (); 
    }
    
    // Display spaceship   
    noStroke();
    fill(255, 0, 0);
    image(spaceship.image, spaceship.x, spaceship.y, spaceship.size, spaceship.size);

    //Display alien 
    noStroke();
    fill(255, 0, 0); 
    image(alien.image, alien.x, alien.y, alien.size, alien.size,);



}
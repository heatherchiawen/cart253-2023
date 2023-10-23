/**
 * Love, actually 
 * Heather Chester 
 * 
 * Exercise for managing states, functions for organization, imputing parameters and return values. 
 */

"use strict";

/**
 * Description of preload
*/

    let circle = { 
        x: 0, 
        y: 0, 
        size: 100, 
        vx: 0,
        vy: 0,
        speed: 5
    };

    let user = { 
        x: 0, 
        y: 250, 
        size: 100, 
        vx: 0, 
        vy: 0, 
        speed: 3,
        growthRate: 3
    };

    let state = `title`; // Can be: title, simulation, love, sadness  
    let xoff = 0.0; 
/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight); 
    setupCircles();
}
 

function setupCircles() { 

    // Circle starting at a random position 
    circle.x = random(0, width);
    circle.y = random(0, height);

    // Start circle moving in a random direction
    circle.vx = random(-circle.speed, circle.speed);
    circle.vy = random(-circle.speed, circle.speed);

    //User growth 
    user.size = user.size + user.growthRate; 

    // Start user moving with mouseX and mouseY 
    user.x = mouseX;
    user.y = mouseY;
}



/**
 * Description of draw()
*/
 function draw() {
     background(0); 

     if (state === `title`) {
         title();
     }
     else if (state === `simulation`) {
         simulation(); 
     }
     else if (state === `love`) {
         love();
     }
     else if (state === `sadness`) {
        sadness();
    }
     else if (state === `selfLove`) {
        selfLove();
    }
    
}

 function title() {
     push();
     textSize(64); 
     fill(200, 100, 100);
     textAlign(CENTER, CENTER);
     text('LOVE?', width/2, height/2);
     pop();
 }

 function simulation() {
     move();
     checkOffscreen();
     checkOverlap();
     checkGrowthrate();
     display();
 }
 
function love() {
     push();
     textSize(64); 
     fill(255, 150, 150);
     textAlign(CENTER, CENTER);
     text('LOVE!', width/2, height/2);
     pop();
 }

 function sadness() {
     push();
     textSize(64); 
     fill(150, 150, 255);
     textAlign(CENTER, CENTER);
     text(':(', width/2, height/2);
     pop();
 }

 function selfLove() {
    push();
    textSize(64); 
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text('growth = self love', width/2, height/2);
    pop();
}

 function move() {

 //Circle movememnt    
 circle.x = circle.x + circle.vx; 
 circle.y = circle.y + circle.vy; 

  // Users movement 
  user.x = mouseX; 
  user.y = mouseY; 
  
  //User growth rate 
 user.size = user.size + user.growthRate; 

 }

 function checkOffscreen() {
 //Check if the circles have gone offscreen 
     if (isOffscreen(circle) || isOffscreen(user)) {
        state = 'sadness';
    }
 }

 function isOffscreen(circle) {
     if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
     return true; 
    } 
    else {
       return false;
    }
 }

 function checkOverlap() {
 // Check if the circles overlap  
  xoff = xoff + 0.01; 
 let n = noise(xoff) * width; 
 circle.x = n; 
 circle.y = n; 

     let d = dist(circle.x, circle.y, user.x, user.y);
     if (d < circle.size/2 + user.size/2) {
         state = `love`; 
     }
}

function checkGrowthrate() {
// Alternative ending 
    if (user.size > width / 2) {
        state = `selfLove`; 
    }
}

function display() {
// Display the cirle 
    xoff = xoff + 0.01; 
    let n = noise(xoff) * width; 
    ellipse(n, n, circle.size);
// Display the user 
    ellipse(user.x, user.y, user.size);
 }

 function mousePressed() {
     if (state === `title`) {
         state = `simulation`;
     }
}

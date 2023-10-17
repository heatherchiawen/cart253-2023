/**
 * Project1 
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

let user = {
    x: 0, 
    y: 0,
    size: 100, 
    vx: 3, 
    vy: 3, 
    speed: 7
}; 

let finish = {
    x: 0, 
    y: 0, 
    segmentSize: 50
}

// let ladder = {
//     x: 0, 
//     y: 0, 
//     vx: 0, 
//     vy: 0, 
//     width: 75, 
//     height: 150, 
//     speed: 5
// }

let state = `title`;
let keyIspressed; 


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    setupUser();
    
}

function setupUser() {

    // Setup user starting position 
    user.x = windowWidth / 2; 
    user.y = windowHeight - 100; 

}


// function setupLadder() {

//     // Ladder starting position 
//     ladder.x = random(0, width);
//     ladder.y = random(0, height);

//     // ladder.vx = ladder.vx + ladder.speed; 
//     // ladder.vx = ladder.vx - ladder.speed; 
//     // ladder.vy = ladder.vy + ladder.speed; 
//     // ladder.vy = ladder.vy - ladder.speed; 
// }

/**
 * Description of draw()
*/
function draw() {
    background(0); 

    // State string 
    if (state === `title`) {
        title();
    }

    else if (state === `simulation`) {
        simulation(); 
    }

    else if (state === `fin`) {
        fin();
    }

}

function title() {
    push(); 
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('title', width/2, height/2);
    pop();
}

function simulation() {
    moveUser();
    moveLadder(); 
    checkUser();
    // checkLadder(); 
    displayUser(); 
    ladder(); 
    ladder(); 
    
}

function fin() {
    push();
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('fin', width/2, height/2); 
    pop();
}

// Simulation functions 

function moveUser() {

    // User movement according to arrow keys
    if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
        user.x--; 
    }  
    else if (keyCode === RIGHT_ARROW) {
        user.x++; 
    }
    if (keyCode === UP_ARROW) {
    user.y--;
    } 
    else if (keyCode === DOWN_ARROW) {
        user.y++;
    }   
    }
} 

function moveLadder() {
    // Ladder movement 

    // if (user.x < windowWidth || user.y < windowHeight) {

    // ladder.x = ladder.vx - ladder.speed; 
    // ladder.y = ladder.vy +- ladder.speed;
    
    // ladder.vx = ladder.vx + ladder.speed; 
    // ladder.vx = ladder.vx - ladder.speed; 
    // ladder.vy = ladder.vy + ladder.speed; 
    // ladder.vy = ladder.vy - ladder.speed; 
    }


function checkUser() {
    // Simulation ends if user goes off screen 
    if (user.x + (user.size/2) == width || user.x - (user.size/2) == 0 || user.y + (user.size/2) == height) {
        state = 'fin'; 
    }
}

// function checkLadder() { 
//     // When user touches ladder, user jumps to top of ladder 
//     if(user.x == ladder.width || user.y == ladder.height) {
//         user.y = user.y + ladder.height; 
//     }
// }



function displayUser() {
    // Display user 
    noStroke(); 
    fill(255);
    ellipse(user.x, user.y, user.size);
}

function ladder(x,y) {

    let speed = 5; 

    push(); 
    translate(x + speed, y + speed); 
    strokeWeight(5); 
    stroke(107, 79, 48);
    beginShape(LINES); 
    vertex(0, 30); //1
    vertex(75, 30); //2
    vertex(0, 60); //3
    vertex(75, 60); //4
    vertex(0, 90); //5
    vertex(75, 90); //6
    vertex(0, 120); //7
    vertex(75, 120); //8
    vertex(0, 0); //9
    vertex(0, 150); //10
    vertex(75, 0); //11
    vertex(75, 150); //12
    endShape(); 
    pop(); 
}


// Function for moving from title to simulatuion to end 
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}
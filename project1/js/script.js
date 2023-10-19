/**
 * Project1 
 * Heather Chester 
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";


let user = {
    x: 0, 
    y: 0,
    size: 50, 
    speed: 7
}; 

let sq = {
    x: 0, 
    y: 0, 
    segmentSize: 50, 
    totalSegments: 100, 
    segmentSpacing: 100, 
    lineSpacing: 50
}

let lad = { // For changing variables with the Ladder class 
    y: 0, 
    width: 75, 
    height: 150 
}

let snake = { // For changing variables with the Gif class
    x: 0, 
    y: 0,  
    width: 150, 
    height: 150, 
    totalSegments: 3
}

let gif; 
let state = `title`;
let keyIspressed; 

let ladders = [];
let ladderNum = 4;


/**
 * Description of preload
*/
function preload() {
    gif = loadImage("assets/images/snake.gif");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    setupUser();
    setupLadder();
    setupSnake();
}

function setupUser() {
    // Setup user starting position 
    user.x = windowWidth / 2; 
    user.y = windowHeight - 100; 
}

function setupLadder() {
    let y = lad.y; 
    for (let i = 0; i < ladderNum; i++) {
        ladders[i] = new Ladder (random(width), y + lad.height - 50);
        y = y + lad.height;  
    }
}

function setupSnake() {
    snake.x = random(width);
    for (let segmentsDrawn = 0; segmentsDrawn < snake.totalSegments; segmentsDrawn++) {
        loadImage(gif, snake.x, snake.y, snake.width, snake.height); 
    }
}


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

    else if (state === `end`) {
        end();
    }

}

class Ladder {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.w = 75; 
        this.h = 150; 
    } 
    
    body() { 
        noStroke(); 
        fill(107, 79, 48);
        rect(this.x, this.y, this.w, this.h); 
        noStroke(); 
        fill(0);
        rect(this.x + 5, this.y, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 32.5, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 62.5, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 92.5, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 122.5, this.w - 10, this.h - 122.5); 

    }
    move() {
        this.x++; 
        if (this.x > width) {
            this.x = 0; 
        }
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
    move();
    checkUser();
    // userReturn(); 
    display(); 
}

function end() {
    push();
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('end', width/2, height/2); 
    pop();
}

// Simulation functions 

function move() {

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

    // Snakes move vertically
    snake.y++; 
    if (snake.y > height) {
        snake.y = 0; 
    }
} 

function checkUser() {
    // Simulation ends if user goes off screen or passes the finish line
    if (user.x + (user.size / 2) == width || user.x - (user.size/2) == 0 || user.y + (user.size/2) == height || user.y == sq.lineSpacing) {
        state = 'end'; 
    }
}

function userReturn() { 
    if (user.y > snake.height / 2 && user.x == snake.x / 2) {
        user.y = height - 100; 
    }
}


function display() {

    // Display ladder 
    for (let i = 0; i < ladderNum; i++) {
        ladders[i].body(); 
        ladders[i].move();
    }

    // Display snakes
    for (let segmentsDrawn = 0; segmentsDrawn < snake.totalSegments; segmentsDrawn++) {
        image(gif, snake.x, snake.y, snake.width, snake.height); 
    }

    // Display user 
    noStroke(); 
    fill(255);
    ellipse(user.x, user.y, user.size);

    // Display finish line 
    let x = sq.x;
    let y = sq.y;  
    for (let segmentsDrawn = 0; segmentsDrawn < sq.totalSegments; segmentsDrawn++) {
        fill(255); 
        rect(x, sq.y, sq.segmentSize);
        rect(x + sq.lineSpacing, y + sq.lineSpacing, sq.segmentSize);
        x = x + sq.segmentSpacing;
    }
}

// Function for moving from title to simulatuion to end 
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}
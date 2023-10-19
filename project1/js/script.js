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
}

let user1; 

let gif; 
let gifs = [];
let snakeNum = 3; 

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
    user1 = new User(); 
}

function setupLadder() {
    let y = lad.y; 
    for (let i = 0; i < ladderNum; i++) {
        ladders[i] = new Ladder (random(width), y + lad.height - 50);
        y = y + lad.height;  
    }
}

function setupSnake() {
    for (let i = 0; i < snakeNum; i++) {
        gifs[i] = new Gif (random(width), random(height));
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

class Gif {
    constructor(x,y) {
        this.x = x; 
        this.y = y; 
        this.w = snake.width; 
        this.h = snake.height; 
    }

    body() { 
        image(gif, this.x, this.y, this.w, this.h);
    }
    move() { // Snakes move vertically to the ladders 
        this.y++; 
        if (this.y > height) {
            this.y = 0; 
        }
    }
    home() {
        let d = dist()
        if (user1.x + user1.w / 2 > this.x && user1.x < this.x + this.w && user1.y < this.y + this.h){
            state = 'simulation';  
            user1.y = height - 50;
        }
    }
}

class User {
    constructor() {
        this.x = windowWidth / 2; 
        this.y = windowHeight - 100; 
        this.size = 50; 
        this.speed = 150; 
    } 
    
    body() { 
        noStroke(); 
        fill(255);
        ellipse(this.x, this.y, this.size); 
    }
    move() {
        if (keyIsPressed) {
            if (keyCode === LEFT_ARROW) {
                user1.x--; 
            }  
            else if (keyCode === RIGHT_ARROW) {
                user1.x++; 
            }
            if (keyCode === UP_ARROW) {
                user1.y--;
            } 
            else if (keyCode === DOWN_ARROW) {
                user1.y++;
            }   
    }
    }

    home() {
        // Checks if user has passed the finish line 
        if (this.y < 0) {
            state = 'simulation';  
            this.y = height - 50; 
        }
        // Checks if user is off screen on the left, right, and bottom 
        else if(this.x > width || this.x < 0 || this.y > height) {
            state = 'end'; 
        }
    }
    bumpCheck() {
        if (this.x + this.w / 2 > gifs.x && this.x < gifs.x + this.w / 2) {
            state = 'simulation';  
            this.y = height - 50; 
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

function display() {

    // Display ladder 
    for (let i = 0; i < ladderNum; i++) {
        ladders[i].body(); 
        ladders[i].move();
    }

    // Display snakes
    for (let i = 0; i < snakeNum; i++) {
        gifs[i].body(); 
        gifs[i].move(); 
        gifs[i].home();
    }

    // Display user
    user1.body(); 
    user1.move();
    user1.home();  
    // user1.bumpCheck(); 

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
/**
 * Project1 
 * Heather Chester 
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let sq = { // For the finish line display 
    x: 0, 
    y: 0, 
    segmentSize: 50, 
    totalSegments: 100, 
    segmentSpacing: 100, 
    lineSpacing: 50
}

let lad = { // Variables with the Ladder class 
    y: 0, 
    width: 75, 
    height: 150 
}

let snake = { // Variables with the Gif class
    x: 0, 
    y: 0,  
    width: 150, 
    height: 150, 
}

let user1; 

let gif; 
let gifs = [];
let snakeNum = 3; // Amount of snakes/gifs that appear 

let state = `title`;
let keyIspressed; 

let ladders = [];
let ladderNum = 4; // Amount of ladders that appear 

let numStatic = 100; //Amount of static displayed in background 


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

    else if (state === `again`) {
        again(); 
    }

    else if (state === `loser`) {
        loser();
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
        rect(this.x + 5, this.y + 30, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 60, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 90, this.w - 10, this.h - 122.5); 
        rect(this.x + 5, this.y + 120, this.w - 10, this.h - 120); 

    }

    move() {
        this.x++; 
        if (this.x > width) {
            this.x = 0; 
        }
    }
    home() {
        // If user comes in conatct with ladders
        // Users movement is constricted to the surface of the ladder while the ladder is moving 
        // When users reaches the top, aligning with the y of ladders, user x restriction will be released 
        if (user1.x > this.x && user1.x < this.x + this.w && user1.y > this.y - 20 && user1.y < this.y + this.h + 20){
            user1.x = constrain(user1.x, this.x + this.w / 2, this.x - this.w / 2); 
            if (keyCode === UP_ARROW) {
                user1.y--;
            } 
            else if (keyCode === DOWN_ARROW) {
                user1.y++;
            }  
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
        // If user comes in conatct with snakes 
        // User will drop down back to starting position 
        // user1.x > this.x - this.w && user1.x < this.x + this.w && user1.y > this.y - this.h && user1.y < this.y + this.h
        if (user1.x > this.x && user1.x < this.x + this.w && user1.y > this.y && user1.y < this.y + this.h) {
            state = 'simulation';  
            user1.y = height - 100; 
            user1.x = width / 2; 
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
    move() { // User can only move left to right unless it comes in contact with a ladder then it can move only along the ladder
        if (keyIsPressed) {
            if (keyCode === LEFT_ARROW) {
                this.x--; 
            }  
            else if (keyCode === RIGHT_ARROW) {
                this.x++; 
            }
    }
    }

    home() { // Checks if user has passed the finish line LEVEL UP????
        if (this.y < 100) {
            state = 'again';  
            this.x = width / 2; 
            this.y = height - 100; 
        }
        // Checks if user is off screen on the left, right, and bottom 
        else if(this.x > width || this.x < 0 || this.y > height) {
            state = 'loser'; 
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

function again() {
    push();
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('AGAIN!!!', width/2, height/2); 
    pop();
}

function loser() {
    push();
    textSize(64); 
    fill(255); 
    textFont(`DotGothic16`); // Courtesy of Google Fonts, "Dot Gothic 16" 
    textAlign(CENTER, CENTER); 
    text('loooooooooooooooooooooser!!!', width/2, height/2); 
    pop();
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
        ladders[i].home();  
    }

    // Display snakes
    // for (let i = 0; i < snakeNum; i++) {
    //     gifs[i].body(); 
    //     gifs[i].move(); 
    //     gifs[i].home();
    // }

    // Display user
    user1.body(); 
    user1.move();
    user1.home();  

    // Display finish line 
    let x = sq.x;
    let y = sq.y;  
    for (let segmentsDrawn = 0; segmentsDrawn < sq.totalSegments; segmentsDrawn++) {
        fill(255); 
        rect(x, sq.y, sq.segmentSize);
        rect(x + sq.lineSpacing, y + sq.lineSpacing, sq.segmentSize);
        x = x + sq.segmentSpacing;
    }

    //Display static 
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width); 
        let y = random(0, height);
        stroke(255);
        point(x,y);
    } 
}

// Function for moving from title to simulatuion to end 
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}
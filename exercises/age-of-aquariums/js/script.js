/**
 * age-of-aquariums
 * Heather Chester 
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/

let user = {
x: 0, 
y: 0, 
size: 50, 
width: 70, 
height: 70
};

let hook; 

let school = []; //Open array 
let schoolSize = 4; //Amount of fish in array 

let state = `title`; //Title, simulation, win, lose 

let xoff = 0.0; 
let yoff = 0.0;
let waveSpacing = 20; 
let waveHeight = 1000;

let gameOverTimer = 0; //How long game is, in frames 
let gameLength = 60 * 10; //10 seconds 


let newFishTimer = 0; //A timer to count the number of frames in the games state
let newFishDelay = 60 * 2; // 2 seconds 


function preload() {
    hook = loadImage('assets/images/hook.png');
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES); 
    
    for (let i = 0; i < schoolSize; i++) {
        let fish = createFish(random(0, width), random(0, height));
        school.push(fish); 
    }
}

function createFish(x, y) {
    let fish = {
        x: x, 
        y: y, 
        width: random(30, 90),
        height: random(30, 90),
        vx: 0, 
        vy: 0, 
        speed: random(-2, 2),
        angle: 0 
    };
    return fish; 
}

/**
 * Description of draw()
*/
function draw() {
    background(206, 215, 242);

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation(); 
    }
    else if (state === `win`) {
        win();
   }
    else if (state === `lose`) {
        lose();
   }  
}

function title() {
    push();
    textSize(64); 
    fill(189, 126, 49);
    textAlign(CENTER, CENTER);
    text('hook the fish!', width/2, height/2);
    pop();
}

function simulation() { //Calls waves, move and display for user and fish, and contains timer function 
    makeWaves();
    gameOverTimer++; 
    if (gameOverTimer >= gameLength) {
        gameOver();
    }
    newFishTimer++; 
    if (newFishTimer >= newFishDelay) {
        let fish = createFish(random(0, width), random(0, height)); 
        school.push(fish);
        newFishTimer = 0;
    }
    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]); 
        displayFish(school[i]); 
    }
    moveUser();
    displayUser();
}

function gameOver() {
    if (school.length === 0) {
        state = `win`; 
    }
    else {
        state = `lose`;
    }
}

function win() {
    push();
    textSize(60); 
    fill(189, 126, 49);
    textAlign(CENTER, CENTER);
    text('someone is eating good tonight!', width/2, height/2);
    pop();
}

function lose() {
    push();
    textSize(64); 
    fill(189, 126, 49);
    textAlign(CENTER, CENTER);
    text('I guess you might starve', width/2, height/2);
    pop();
}

function makeWaves() { //Wave background from "Nutritious felling" by rapley in p5js https://editor.p5js.org/rapley/sketches/BK_8BfvDk

    let xoff = 0.0;
  
  for (let y = 0; y < height; y += waveSpacing) {
    strokeWeight(3);
    stroke(50, 100, 255);
    for (let x = 0; x < width; x += waveSpacing) {
    	let noiseScale = map(noise(x * xoff, yoff), 0, 1, -waveHeight, waveHeight / 2);
        line(x, height, x, (y - noiseScale));
        xoff += 0.00002;
    }
    yoff += 0.0001;
}

}

function moveFish(fish) {
    rotate(fish.angle); 

    let vx = fish.speed * cos(fish.angle); 
    let vy = fish.speed * sin(fish.angle); 
    
    fish.x += vx; 
    fish.y += vy; 

    if (fish.x > width) {
        fish.x -= width;
      }
      else if (fish.x < 0) {
        fish.x += width;
      }
    
      if (fish > height) {
        fish.y -= height;
      }
      else if (fish.y < 0) {
        fish.y += height;
      }
}

function displayFish(fish) {
    
    push(); 
    fill(189, 126, 49); 
    noStroke(); 
    ellipse(fish.x, fish.y, fish. width, fish.height); 
    triangle(fish.x + fish.width / 1.5, fish.y, fish.x + fish.width, fish.y + fish.height / 2, fish.x + fish.width, fish.y - fish.height / 2); 
    pop(); 
    
}

function moveUser() {
    user.x = mouseX; 
    user.y = mouseY; 
}

function displayUser() { 
    fill(0); 
    noStroke(); 
    image(hook, user.x - user.width / 2, user.y - user.height / 2, user.width, user.height)
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
    else if (state === `simulation`) {
        checkFishClick();
    }
} 

function checkFishClick() { //Function translated from Timers document on Pippin's CART 253 
    for (let i = 0; i < school.length; i++) {
        let fish = school[i]; 
        let d = dist(mouseX, mouseY, fish.x, fish.y); 
        if (d < fish.width / 2 || d < fish.height / 2) {
            school.splice(i, 1);
            break;
        }
    }//Create a function that checks if all fish are eaten immediately 
}


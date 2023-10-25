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
size: 50
};

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
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < schoolSize; i++){
        let fish = createFish(random(0, width), random(0, height));
        school.push(fish); 
    }
}

function createFish(x, y) {
    let fish = {
        x: x, 
        y: y, 
        size: 50,
        xy: 0, 
        vy: 0, 
        speed: 2 
    };
    return fish; 
}

/**
 * Description of draw()
*/
function draw() {
    background(255);

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
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('LOVE?', width/2, height/2);
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
    textSize(64); 
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('you won', width/2, height/2);
    pop();
}

function lose() {
    push();
    textSize(64); 
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('you lost', width/2, height/2);
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

    fish.vx = random(-fish.speed, fish.speed); // Fish moving in random direction 
    fish.vy = random(-fish.speed, fish.speed);  


    fish.x = fish.x + fish.vx; 
    fish.y = fish.y + fish.vy; 

    //Constrains the fish to the canvas 
    fish.x = constrain(fish.x, 0, width); 
    fish.y = constrain(fish.y, 0, height);
}

function displayFish(fish) {
    push(); 
    fill(random(0, 255)); 
    noStroke(); 
    ellipse(fish.x, fish.y, fish.size); 
    pop(); 
}

function moveUser() {
    user.x = mouseX; 
    user.y = mouseY; 
}

function displayUser() { 
    fill(0); 
    noStroke(); 
    ellipse(user.x, user.y, user.size)
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
        if (d < fish.size / 2) {
            school.splice(i, 1);
            break;
        }
    }//Create a function that checks if all fish are eaten immediately 
}


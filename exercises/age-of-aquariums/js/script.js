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
userSize: 100 
};

let school = []; //Open array 
let schoolSize = 4; //Amount of fish in array 

let state = `title`; 
let xoff = 0.0; 
let yoff = 0.0;
let scl = 20;
let margin = 50;
let waveSpacing = 20; 
let waveHeight = 1000;

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
    else if (state === `endingOne`) {
        endingOne();
   }
    else if (state === `endingTwo`) {
        endingTwo();
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
    makeWaves();
    moveUser();
    displayUser();

    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]); 
        displayFish(school[i]); 
    }
}

function endingOne() {
    push();
    textSize(64); 
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('LOVE?', width/2, height/2);
    pop();
}

function endingTwo() {
    push();
    textSize(64); 
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('LOVE?', width/2, height/2);
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
    // let change = random(0, 1);
    // if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed); // Fish moving in randoim direction 
        fish.vy = random(-fish.speed, fish.speed);  
    // }

    fish.x = random(0, fish.x) + fish.vx; 
    fish.y = fish.y + fish.vy; 

    //Constrains the fish to the canvas 
    fish.x = constrain(fish.x, 0, width); 
    fish.y = constrain(fish.y, 0, height);
}

function displayFish(fish) {
    push(); 
    fill(200, 100, 100); 
    noStroke(); 
    ellipse(fish.x, fish.y, fish.size); 
    pop(); 
}

function moveUser() {
    user.x = mouseX; 
    user.y = mouseY; 
}

function displayUser() {

    ellipse(user.x, user.y, user.size)

}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
    
    let fish = createFish(mouseX, mouseY); //Create a fish at the mouse position 
    school.push(fish); //Add the fish to array 
} 


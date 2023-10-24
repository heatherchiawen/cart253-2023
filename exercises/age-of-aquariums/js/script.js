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
let fishNum = 4; //Amount of fish in array 

// let fish = createFish(100, 100);
// school.push(fish); 

function preload() {
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < fishNum; i++){
        school[i] = createFish(random(0, width), random(0, height));
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
    background(0);

    //let fish = school[i]; 
    for (let i = 0; i < school.length; i++) {
        moveFish(fish); 
        displayFish(fish); 
    }
}

function moveFish(fish) {
    let change = random(0, 1); 
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed); 
        fish.vy = random(-fish.speed, fish.speed);  
    }

    fish.x = fish.x + fish.vx; 
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


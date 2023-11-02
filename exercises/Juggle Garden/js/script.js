/**
 * Juggle Garden 
 * Heather Chester 
 * 
 */

"use strict";

let garden = {
    flowers: [], // Array of individual flowers
    numFlowers: 20, // Total flowers 
    bees: [], // Array for bees
    numBees: 5, // Total bees 
    grassColor: { // background grass 
        r: 120, 
        g: 180, 
        b: 120
    }
};

// User controlled objects, using keyPress to switch between the two 
let scissor; 
let net; 

let state = `title`; //Title, simulation, win, lose 

let gameOverTimer = 0; // Length of game in frames 
let gameLength = 60 * 20; // 10 seconds 

let newBeeTimer = 0; //A timer to count the number of frames in the simulation/game state 
let newBeeDelay = 60 * 2; // A new bee every 2 seconds 


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() { // Creating user/scissor, flowers, and bees 
    createCanvas(windowWidth, windowHeight); 

        scissor = new Scissor(); 
        net = new Net();

    for (let i = 0; i < garden.numFlowers; i++) { 
        // Creating and adding flowers with new variables 
        let x = random(0, width);
        let y = random(0, height); 
        let size = random(50, 80); 
        let stemLength = random(50, 100); 
        let petalColor = {
            r: random(100, 255),
            g: random(100, 255), 
            b: random(100, 255)
        }
        // New flower 
        let flower = new Flower(x, y, size, stemLength, petalColor);
        garden.flowers.push(flower);
    }
    for (let i = 0; i < garden.numBees; i++) {
        // Creating and adding bees 
        let x = random(0, width); 
        let y = random(0, height); 
        // New bee 
        let bee = new Bee(x, y); 
        garden.bees.push(bee); 
    }
    garden.flowers.sort(sortByY); 
}

function sortByY(flower1, flower2) {
    //  Sorting the flower array display 
    return flower1.y - flower2.y;
}


/**
 * Description of draw()
*/
function draw() {
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b); 

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
    text('title', width/2, height/2);
    pop();
}

function simulation() {
    // Game timer 
    gameOverTimer++; 
    if (gameOverTimer >= gameLength) {
        gameOver(); 
    }
    // Adding more bees to the simulation 
    let x = random(0, width);
    let y = random(0, height); 
    newBeeTimer++; 
    if (newBeeTimer >= newBeeDelay) {
        let bee = new Bee (x, y); 
        garden.bees.push(bee); 
        newBeeTimer = 0;
    }
    // Display for flowers 
    for (let i = 0; i < garden.flowers.length; i++) { 
        let flower = garden.flowers[i]; 
        // Updates flower with shrink and display 
        if (flower.alive) { 
            flower.shrink();
            flower.display();
        }
    }
    // Display for bees 
    for (let i = 0; i < garden.bees.length; i++) { 
        let bee = garden.bees[i]; 
        if (bee.alive) {
            bee.shrink();
            bee.move(); 
            // Calls bees to pollinate flowers 
            for (let j = 0; j < garden.flowers.length; j++) {
                let flower = garden.flowers[j]; 
                bee.tryToPollinate(flower); 
            }
            bee.display();
        }
    }
}

function win() { // Create final display for flowers picked???
    push();
    textSize(64); 
    fill(189, 126, 49);
    textAlign(CENTER, CENTER);
    text('win', width/2, height/2);
    pop();
}

function lose() {
    push();
    textSize(64); 
    fill(189, 126, 49);
    textAlign(CENTER, CENTER);
    text('lose', width/2, height/2);
    pop();
}

function gameOver() { //garden.bees.length === 0 || 
    if (garden.flowers.length === 0) {
        state = `win`;
    }
    else {
        state = `lose`;
    }
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
    else if (state === `simulation`) {
        checkFlowerClick();
        // checkBeeDragged();
    }
}

function checkFlowerClick() {
    // Check for user/scissor and flower overlap 
    // If so, flowers are removed from the array 
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i]; 
        let d = dist(mouseX, mouseY, flower.x, flower.y);
        if (d < flower.size/2) {
            garden.flowers.splice(i, 1);
            break; 
        }
    }
}

function keyPressed() {
    if (keyCode === 32) {
    // scissor.display(); 
    // scissor.move();
    net.display(); 
    net.move(); 
    }
}

// function checkBeeDragged() {
//     // Check for user/scissor and bee overlap 
//     // If so, bees shrink in size 
//     for ( let i = 0; i < garden.bees.length; i++) {
//         let bee = garden.bees[i]; 
//         let d = dist(mouseX, mouseY, bee.x, bee.y); 
        
//     }
// }
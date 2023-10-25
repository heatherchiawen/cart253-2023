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

function preload() {
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    // for (let i = 0; i < schoolSize; i++){
    //     let fish = createFish(random(0, width), random(0, height));
    //     school.push(fish); 
    // }

    for (let i = 0; i < 4; i++){
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
    moveUser();
    displayUser();

    for (let i = 0; i < schoolSize; i++) {
        let fish = school[i]; 
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


function moveFish(fish) {
    // let change = random(0, 1);
    // if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed); // Fish moving in randoim direction 
        fish.vy = random(-fish.speed, fish.speed);  
    // }

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


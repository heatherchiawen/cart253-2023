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

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() { // Creating flowers and bees 
    createCanvas(windowWidth, windowHeight); 

    for (let i = 0; i < garden.numFlowers; i++) { // Creating and adding flowers 
        // New variables 
        let x = random(0, width);
        let y = random(o, height); 
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
    garden.flowers.sort(sortByY); 

    for (let i = 0; i < garden.numBees; i++) { // Creating and adding bees 
        let x = random(0, width); 
        let y = random(0, height); 
        let bee = new Bee(x, y); 
        garden.bees.push(bee); 
    }
}

function sortByY(flower1, flower2) {
    // See TMI introducing Object-Oriented Programming 
    return flower1.y - flower2.y;
}


/**
 * Description of draw()
*/
function draw() {
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b); 

    for (let i = 0; i < garden.flowers.length; i++) { // Display for flowers 
        let flower = garden.flowers[i]; 
        if(flower.alive) { // Updates flower with shrink and display 
            flower.shrink();
            flower.display();
        }
    }

    for (let i = 0; i < garden.bees.length; i++) { // Display for bees 
        let bee = garden.bees[i]; 
        if (bee.alive) {
            bee.shrink();
            bee.move(); 
            bee.display();
        }
    }
}
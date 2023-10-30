/**
 * Juggle Garden 
 * Heather Chester 
 * 
 */

"use strict";

let garden = {
    flowers: [], // Array of individual flowers
    numFlowers: 20, // Total flowers 
    grassColor: {
        r: 120, 
        g: 180, 
        b:120
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
function setup() {
    createCanvas(windowWidth, windowHeight); 

    // Create flowers 
    for (let i = 0; i < garden.numFlowers; i++) {
        let flower = new Flower();
        garden.flowers.push(flower);
    }

}


/**
 * Description of draw()
*/
function draw() {
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b); 

    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i]; 
        flower.display();
    }

}
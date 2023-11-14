/**
 * Sound Activity
 * Heather Chester 
 * 
 */

"use strict";

/**
 * Description of preload
*/

let balls = []; // Empty array for balls 

let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `F4`]; 

function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    userStartAudio(); 
}


/**
 * Description of draw()
*/
function draw() {
    background(0); 

    for(let i = 0; i < balls.length; i++) {
        let ball = balls[i]; 
        ball.move(); 
        ball.bounce(); 
        ball.display(); 
    }
}



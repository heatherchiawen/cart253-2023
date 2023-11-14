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
let totalBalls = 5; 

let osc; // to store oscillator 

function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    // userStartAudio(); 

    for (let i = 0; i < totalBalls; i++) {
        let x = random(0, width); 
        let y = random(0, height); 

        let ball = new Ball(x, y); 
        balls.push(ball); 
    }

}


/**
 * Description of draw()
*/
function draw() {
    background(0); 

    for(let i = 0; i < balls.length; i++) {
        let ball = balls[i]; 
        ball.move(); 
        // ball.bounce(); 
        ball.display(); 
        // ball.mousePressed(); // Calls Ball class for oscillator to start when mouse pressed 
        // ball.mouseReleased(); // Calls Ball class for oscillator to stop when mouse released 
    }
}

/**
 * Project 2 - prototype
 * Heather Chester 
 * 
 * 
 */

"use strict";

/**
 * Description of preload
*/

let oscillator; // To store oscillator 

function preload() {
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    // Create oscillator at 440Hz with a sawtooth waveform
    oscillator = new p5.Oscillator(440, `sawtooth`); 
}

/**
 * Description of draw()
*/
function draw() {
    background(0); 

    // Calculate the freq between 0-440, based on the mouse Y position 
    // Goes from 0, as the highest frequency since it equates visually 
    let newFreq = map(mouseY, height, 0, 0, 440); 
    // Set frequency based on the mouse position 
    oscillator.freq(newFreq); 
}

function mousePressed() {
    oscillator.start(); 
}

function mouseReleased() {
    oscillator.stop(); 
}
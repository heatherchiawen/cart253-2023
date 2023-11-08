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

let theramin; // 
let oscillator; // To store oscillator 
let t = 0; // The t (time) value to use with noise()
let tIncrease = 0.075; // How much to increase t each frame 

let synth; 

let controller = {
    buttons: [],
    numButtons: 10
};

function preload() {
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    userStartAudio();

    for (let i = 0; i < controller.numButtons; i++) { 
        let x = i*100+25;
        let y = height/1.2 
        let button = new Button(x, y);
        controller.buttons.push(button);
    }

    // synth = new p5.PolySynth(); 
    // Create oscillator at 440Hz with a sawtooth waveform
    // theramin = new p5.Oscillator(440, `sawtooth`); 
}

/**
 * Description of draw()
*/
function draw() {
    background(110, 5, 5); // Dark Red

    // Show all the buttons 
    for (let i = 0; i < controller.buttons.length; i++) {
        let button = controller.buttons[i];
        button.display();
    }

    // // Calculate the freq between 0-440, based on the mouse Y position 
    // // Goes from 0, as the highest frequency since it equates visually 
    // let newFreq = map(mouseY, height, 0, 0, 440); 
    // // Set frequency based on the mouse position 
    // theramin.freq(newFreq); 

    // // Calculate amplitude based on the mouse's position on the x axis 
    // let newAmp = map(mouseX, 0, width, 0, 0.5); 
    // // Set the amplitude
    // theramin.amp(newAmp); 
}

function mousePressed() {
    // theramin.start(); 
    // synth.play(`C5`, 1, 0, 1);
    for (let i = 0; i < controller.buttons.length; i++) {
        let button = controller.buttons[i];
            button.mousePressed();
    }
}

// function mouseReleased() {
    // theramin.stop(); 
    // for (let i = 0; i < controller.buttons.length; i++) {
    //     let button = controller.buttons[i];
    //         button.Released();
    // }
//}
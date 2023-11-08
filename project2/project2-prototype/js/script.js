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
let osc; // To store oscillator 

let controller = {
    buttons: [],
    numButtons: 7
};



function preload() {
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    userStartAudio();
    // Create oscillator at 440Hz with a sawtooth waveform
    // oscillator = new p5.Oscillator(440, `sawtooth`); 
    osc = new p5.TriOsc(); 
    // Start silent 
    osc.start(); 
    osc.amp(0); 

    for (let i = 0; i < controller.numButtons; i++) { 
        let x = i*100+25;
        let y = height/1.2 
        let button = new Button(x, y);
        controller.buttons.push(button);
    }
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
}

function mousePressed() {
    for (let i = 0; i < controller.buttons.length; i++) {
        let button = controller.buttons[i];
            // If any buttons in the array have been pressed by the mouse 
            // Then tells the button class whether it is on or off, changing the display colour as well
        if (mouseX < button.x + button.size && mouseX > button.x && mouseY < button.y + button.size && mouseY > button.y) {
            button.pressed(); 
        }
    }
}

// function mouseReleased() {
    // theramin.stop(); 
//}
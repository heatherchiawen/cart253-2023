/**
 * Project 2 - Final 
 * Heather Chester 
 * 
 * 
 */

"use strict";

/**
 * Description of preload
*/

let osc; // To store oscillator 
let fft; 
let amp; 
let lineSpacing; 

let controller = {
    buttons: [],
    numButtons: 7, 
    note: [60, 62, 64, 65, 67, 69, 71] // Midi notes 
};

function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); 
    userStartAudio();

    // Sound
    osc = new p5.TriOsc(); 
    // Start silent 
    osc.start(); 
    osc.amp(0); 

    // For sound visualization 
    fft = new p5.FFT(0.9, 128);
    angleMode(DEGREES);
    lineSpacing = width/128; 

    // Button setup 
    for (let i = 0; i < controller.numButtons; i++) { 
        let x = i*width/7 + (width/14);
        let y = height/1.2; 
        let button = new Button(x, y);
        controller.buttons.push(button);
    }
}


/**
 * Description of draw()
*/
function draw() {
    background(0); 

    let spectrum = fft.analyze(); 
    for (let j = 0; j < spectrum.length; j++) {
        stroke(255);
        let amp = spectrum[j];
        let y = map(amp, 0, 256, height, 0); 
        rect((width/2) + (j * lineSpacing), y, lineSpacing, height - y);
        rect((width/2) - (j * lineSpacing), y, lineSpacing, height - y);
    }

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
            // Calls different notes according to the array index   
            osc.freq(midiToFreq(controller.note[i])); 
        }
    }
}
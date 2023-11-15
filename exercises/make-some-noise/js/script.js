/**
 * Make-some-noise 
 * Heather Chester 
 * 
 *
 */

"use strict";

/**
 * Description of preload
*/

let controller = {
    buttons: [],
    sharps: [],  
    numPiano: 7,
    numSharps: 5,  
    pianoNotes: [60, 62, 64, 65, 67, 69, 71], // Midi notes 
}
function preload() {
}
/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); 
    userStartAudio();

    for (let i = 0; i < controller.numPiano; i++) {
        let x = ((i*width/7)/2) + width/4;
        let y = height/2;
        let button = new Button(x, y); 
        let note = controller.pianoNotes[i];
        button.oscillator.freq(midiToFreq(note)); 
        controller.buttons.push(button); 
    }
}
/**
 * Description of draw()
*/
function draw() {
    background(0); 
    // Shows piano buttons 
    for (let i = 0; i < controller.buttons.length; i++) {
        let button = controller.buttons[i];
        button.pianoDisplay(); 
    }
}
function mousePressed() {
    for (let i = 0; i < controller.buttons.length; i++) {
        let button = controller.buttons[i]; 
        button.pressed(); 
        // let note = controller.pianoNotes[i];
        // button.oscillator.freq(midiToFreq(notes));
    }
}
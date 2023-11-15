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
    pianoKeys: [],
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
        let pianoKey = new PianoKey(x, y); 
        let note = controller.pianoNotes[i];
        pianoKey.oscillator.freq(midiToFreq(note)); 
        controller.pianoKeys.push(pianoKey); 
    }
}
/**
 * Description of draw()
*/
function draw() {
    background(0); 
    // Shows white keys piano display
    for (let i = 0; i < controller.pianoKeys.length; i++) {
        let pianoKey = controller.pianoKeys[i];
        pianoKey.pianoDisplay(); 
    }
}
function mousePressed() {
    // Calls for a mouse pressed check on the white piano keys 
    for (let i = 0; i < controller.pianoKeys.length; i++) {
        let pianoKey = controller.pianoKeys[i]; 
        pianoKey.pressed(); 
    }
}
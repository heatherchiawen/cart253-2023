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
    sharpKeys: [],  
    numPiano: 8,
    pianoNotes: [60, 62, 64, 65, 67, 69, 71, 72], // Midi notes in C4 octave 
    twoNumSharps: 2,
    threeNumSharps: 3,
    twoSharpNotes: [61, 63], // Midi notes 
    threeSharpNotes: [66, 68, 70] // Midi notes 
}

let recorder; 

function preload() {
}
/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    userStartAudio();

    let x = width/2 - 50; 
    let y = height/3
    recorder = new Recorder(x, y); 

    for (let i = 0; i < controller.numPiano; i++) {
        let x = i*width/16 + (width/3.6)
        let y = height/2;
        let pianoKey = new PianoKey(x, y); 
        let note = controller.pianoNotes[i];
        pianoKey.oscillator.freq(midiToFreq(note)); 
        controller.pianoKeys.push(pianoKey); 
    }
    // Created separate loops to create the separation between keys 
    for (let i = 0; i < controller.twoNumSharps ; i++) {
        let x = ((i*width/16) + width/3) - 22
        let y = height/2 - 30;
        let sharpKey = new SharpKey(x, y); 
        let note = controller.twoSharpNotes[i];
        sharpKey.oscillator.freq(midiToFreq(note)); 
        controller.sharpKeys.push(sharpKey); 
    }
    for (let i = 0; i < controller.threeNumSharps ; i++) {
        let x = ((i*width/16) + width/2) + 7;
        let y = height/2 - 30;
        let sharpKey = new SharpKey(x, y); 
        let note = controller.threeSharpNotes[i];
        sharpKey.oscillator.freq(midiToFreq(note)); 
        controller.sharpKeys.push(sharpKey); 
    }
}
/**
 * Description of draw()
*/
function draw() {
    background(255); 
    // Shows white keys piano display
    for (let i = 0; i < controller.pianoKeys.length; i++) {
        let pianoKey = controller.pianoKeys[i];
        pianoKey.pianoDisplay(); 
    }
    for (let i = 0; i < controller.sharpKeys.length; i++) {
        let sharpKey = controller.sharpKeys[i];
        sharpKey.sharpDisplay(); 
    }
    recorder.display(); 
}

function mousePressed() {
    // Calls for a mouse pressed check on the white piano keys 
    for (let i = 0; i < controller.pianoKeys.length; i++) {
        let pianoKey = controller.pianoKeys[i]; 
        pianoKey.pressed(); 
    }
    for (let i = 0; i < controller.sharpKeys.length; i++) {
        let sharpKey = controller.sharpKeys[i]; 
        sharpKey.pressed(); 
    }
    recorder.recorderPressed(); 
}

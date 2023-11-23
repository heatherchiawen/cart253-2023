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

// For all keys 
let controller = {
    pianoKeys: [],
    sharpKeys: [], 
    // numPiano: 49, 
    // twoNumSharps: 14,
    // threeNumSharps: 21,
    // pianoNotes: [24, 26, 28, 29, 31, 33, 35, 36, 38, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84, 86, 88, 89, 91, 93, 95, 96, 98, 100, 101, 103, 105, 107, 108], 
    // twoSharpNotes: [25, 27, 37, 39, 49, 51,  61, 63, 73, 75, 85, 87, 97, 99], 
    // threeSharpNotes: [30, 32, 34, 42, 44, 46, 54, 56, 58, 66, 68, 70,  78, 80, 82, 90, 92, 94, 102, 104, 106],
    
    numPiano: 24,
    pianoNotes: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
    
    // numPiano: 8,
    // twoNumSharps: 2,
    // threeNumSharps: 3,
    // pianoNotes: [60, 62, 64, 65, 67, 69, 71, 72], // Midi notes in C4 octave 
    // twoSharpNotes: [61, 63], // Midi notes 
    // threeSharpNotes: [66, 68, 70] // Midi notes 
}

let c = [100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100];


let recorder; 

let lines = []; 
let start = false; 

function preload() {
}
/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL); 
    background(255);
    userStartAudio();

    // Setup recorder 
    let x = width/2 - 50; 
    let y = height/3
    recorder = new Recorder(x, y);
    
    // Set up piano array
    // Assigns its note value per each object in array 
    for (let i = 0; i < controller.numPiano; i++) {
        let x = i*width/49 + 2
        //let x = i*width/32 + (width/2.6); 
        let y = height - 150; 
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
    // background(255);
    // White keys piano display
    for (let i = 0; i < controller.pianoKeys.length; i++) {
        let pianoKey = controller.pianoKeys[i];
        fill(100, 100, c[i]); 
        pianoKey.pianoDisplay(); 
    }

    // For recorder button display 
    recorder.display(); 

    // Statements and loops for the drawing bit of code 
    if (start) {
        lines.push(createVector(mouseX, mouseY));
    }
    stroke(0); 
    noFill();
    beginShape(); 
    for(let i = 0; i <lines.length; i++) {
        let x = lines[i].x; 
        let y = lines[i].y;
        vertex(x, y);  
    }
    endShape(); 
}

function mousePressed() {
    // For drawing program 
    start = true; 
    lines = []; 
    // Check if piano keys have been pressed 
    for (let i = 0; i < controller.pianoKeys.length; i++) {
        let pianoKey = controller.pianoKeys[i]; 
        pianoKey.pressed(); 
    } 
    // Check for recorder button 
    recorder.recorderPressed(); 
}
function mouseReleased() {
    start = false; 
    lines = []; 
}
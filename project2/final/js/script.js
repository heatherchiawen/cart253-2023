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
    numPiano: 24,
    pianoNotes: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
    pianoColor: [100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100]
}

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
        fill(100, 100, controller.pianoColor[i]); 
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
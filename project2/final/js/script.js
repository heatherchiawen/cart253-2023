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
let piano = {
    pianoKeys: [],
    numPiano: 24,
    pianoNotes: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
    pianoColor: [100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100]
}

let recorder; 

let soundWave; 

let lines = []; 
let start = false; 

function preload() {
    // Load some fonts or something, probably have to add a starting state to move to actual program 
    // Load some sounds for more buttons? 
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL); 
    background(255);
    userStartAudio();
    frameRate(60); 

    // Setup recorder 
    // let x = width/2; 
    // let y = 50
    recorder = new Recorder();

    soundWave = new SoundWave(); 

    // Set up piano array
    // Assigns its note value per each object in array 
    for (let i = 0; i < piano.numPiano; i++) {
        let x = i*width/49 + width/4
        //let x = i*width/32 + (width/2.6); 
        let y = height - 150; 
        let pianoKey = new PianoKey(x, y); 
        let note = piano.pianoNotes[i];
        pianoKey.oscillator.freq(midiToFreq(note)); 
        piano.pianoKeys.push(pianoKey); 
    }
}
/**
 * Description of draw()
*/
function draw() {
    // Piano key display
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i];
        fill(100, 100, piano.pianoColor[i]); 
        pianoKey.pianoDisplay(); 
    }
    // For recorder button display 
    recorder.display(); 
    // For sound wave display 
    soundWave.display(); 
     // Statements and loops for drawing 
    if (start) {
        lines.push(createVector(mouseX, mouseY));
    }
    // Drawing program 
    stroke(0); 
    strokeWeight(3); 
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
    // Check for piano keys 
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i]; 
        pianoKey.pressed(); 
    } 
    // Check for recorder and play button 
    recorder.recording();
    recorder.play();
    // For sound waves 
    soundWave.pressed (); 
}
function mouseReleased() {
    // For drawing program 
    start = false; 
    lines = []; 
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i]; 
        pianoKey.released(); 
    } 
}
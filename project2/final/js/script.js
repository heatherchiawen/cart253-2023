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
let turntable; 

let soundLoop; 

let waveOne; // To measure peaks to create an audio display of what is playing 
let durationOne;
let durationTwo;  

let lines = []; 
let start = false; 

function preload() {
    soundLoop = loadSound(`assets/sounds/house.mp3`); 
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL); 
    userStartAudio();
    frameRate(60); 

    // Setup recorder, soundwaves, and turntable 
    recorder = new Recorder();
    soundWave = new SoundWave(); 
    turntable = new Turntable(); 
    waveOne = soundLoop.getPeaks(700); // 700 pixels in width 

    // Set up piano array
    // Assigns its note value per each object in array 
    for (let i = 0; i < piano.numPiano; i++) {
        let x = i*width/49 + width/4
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
    background(0, 0, 100);
    // Piano key display
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i];
        fill(100, 100, piano.pianoColor[i]); 
        pianoKey.pianoDisplay(); 
    }
    // For recorder button, sound wave, and turntable display 
    recorder.display(); 
    soundWave.display();
    turntable.displayRecordOne();
    // turntable.displayRecordTwo();
    turntable.displayAudioTracker();

    // For top audio visualization 
    for (let i = 0; i < waveOne.length; i++) {
        stroke(0); 
        strokeWeight(1)
        line(365 + i, 40 + (waveOne[i]* 35),365 +i, 40 - (waveOne[i]* 35));
    }
    // For bottom audio visualization 
    // for (let i = 0; i < waveOne.length; i++) { // Add second sound 
    //     stroke(0); 
    //     strokeWeight(1)
    //     line(365 + i, 120 + (waveOne[i]* 35),365 +i, 120 - (waveOne[i]* 35));
    // }
}

function mousePressed() {
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i]; 
        // Check for piano keys 
        pianoKey.pressed();
        // For switching between sound waves 
        soundWave.pressed(pianoKey); 
    } 
    // Check for recorder and play button 
    recorder.recording();
    recorder.play();
    recorder.save(); 

    turntable.pressed(); 
}
function mouseReleased() {
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i]; 
        pianoKey.released(); 
    } 
    // turntable.released(); 
}
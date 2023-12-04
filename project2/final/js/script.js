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

let soundLoopOne; 
let soundLoopTwo; 

let waveOne; // To measure peaks to create an audio display of what is playing 
let waveTwo; 
let durationOne;
let durationTwo;  

let recordOneReverb; 
let recordTwoReverb; 

let recordOneVolSlider; 
let recordOneSpeedSlider; 
let recordOneReverbSlider; 

let recordTwoVolSlider; 
let recordTwoSpeedSlider; 
let recordTwoReverbSlider; 

function preload() {
    soundLoopOne = loadSound(`assets/sounds/house.mp3`); 
    soundLoopTwo = loadSound(`assets/sounds/beat.mp3`); 
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
    waveOne = soundLoopOne.getPeaks(700); // 700 pixels in width 
    waveTwo = soundLoopTwo.getPeaks(700); 

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

    // Right record sliders 
    recordOneVolSlider = createSlider(0, 1, 0.8, 0); 
    recordOneVolSlider.position(width/2 + 310, height/2 - 190);
    recordOneSpeedSlider = createSlider(0, 2, 1, 0); 
    recordOneSpeedSlider.position(width/2 + 310, height/2 - 155);
    recordOneReverb = new p5.Reverb();
    recordOneReverb.process(soundLoopOne);
    recordOneReverbSlider = createSlider(0, 1, 0, 0); 
    recordOneReverbSlider.position(width/2 + 310, height/2 - 120);
    
    // Left record sliders 
    recordTwoVolSlider = createSlider(0, 1, 0.8, 0); 
    recordTwoVolSlider.position(width/2 - 445, height/2 - 190);
    recordTwoSpeedSlider = createSlider(0, 2, 1, 0); 
    recordTwoSpeedSlider.position(width/2 - 445, height/2 - 155);
    recordTwoReverb = new p5.Reverb(); 
    recordTwoReverb. process(soundLoopTwo); 
    recordTwoReverbSlider = createSlider(0, 1, 0, 0); 
    recordTwoReverbSlider.position(width/2 - 445, height/2 - 120); 
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
    turntable.displayRecordTwo();
    turntable.displayAudioTracker();

    // For top audio visualization 
    for (let i = 0; i < waveOne.length; i++) {
        stroke(0); 
        strokeWeight(1)
        line(365 + i, 40 + (waveOne[i]* 35),365 +i, 40 - (waveOne[i]* 35));
    }
    // For bottom audio visualization 
    for (let i = 0; i < waveTwo.length; i++) { // Add second sound 
        stroke(0); 
        strokeWeight(1)
        line(365 + i, 120 + (waveTwo[i]* 35),365 +i, 120 - (waveTwo[i]* 35));
    }

    // Right record/soundLoopOne connects to slider values defined in setup  
    soundLoopOne.setVolume(recordOneVolSlider.value()); 
    soundLoopOne.rate(recordOneSpeedSlider.value());
    recordOneReverb.drywet(recordOneReverbSlider.value()); 
    
    // Left record/soundLoopTwo connects to slider values defined in setup
    soundLoopTwo.setVolume(recordTwoVolSlider.value()); 
    soundLoopTwo.rate(recordOneSpeedSlider.value());
    recordTwoReverb.drywet(recordTwoReverbSlider.value()); 
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
    // Check for buttons pressed for records 
    turntable.pressedRecordOne();
    turntable.pressedRecordTwo();
}
function mouseReleased() {
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i]; 
        pianoKey.released(); 
    } 
}
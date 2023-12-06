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
    pianoColor: [100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100], 
    pianoColorOn: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275],
    keyText: [`W`, `3`, `E`, `4`, `R`, `T`, `6`, `Y`, `7`, `U`, `8`, `I`, `X`, `D`, `C`, `F`, `V`, `B`, `H`, `N`, `J`, `M`, `K`,`<`], 
    keyCode: [87, 51, 69, 52, 82, 84, 54, 89, 55, 85, 56, 73, 88, 68, 67, 70, 86, 66, 72, 78, 74, 77, 75, 188]
}
let beatBox = {
    beats: [],
    numBeats: 6, 
    beatText: [`;/:`, `'/"`,`return`, `./>`, `//?`, `shift`], 
    sounds: [], 
    keyCode: [186, 222, 13, 190, 191, 16]
}

let recorder, soundWave, turntable; // Classes
let soundLoopOne, soundLoopTwo; // For .mp3 files
let drumAndSymbol, clap, fatDrum, smallBeat, hiHat, symbol; // For .wav files 
let waveOne, waveTwo;// To measure peaks to create an audio display of what is playing 

// Sliders 
let recordOneReverb, recordTwoReverb; 
let recordOneVolSlider, recordOneSpeedSlider, recordOneReverbSlider; 
let recordTwoVolSlider, recordTwoSpeedSlider, recordTwoReverbSlider; 
let recordOneDistortion, recordOneDistortionSlider; 
let recordTwoDistortion, recordTwoDistortionSlider; 

function preload() {
    // Record sounds 
    soundLoopOne = loadSound(`assets/sounds/house.mp3`); 
    soundLoopTwo = loadSound(`assets/sounds/beat.mp3`); 
     // Beat sounds, loaded into an array 
    beatBox.sounds.push(loadSound(`assets/sounds/hihat.wav`)); 
    beatBox.sounds.push(loadSound(`assets/sounds/symbol.wav`)); 
    beatBox.sounds.push(loadSound(`assets/sounds/clap.wav`)); 
    beatBox.sounds.push(loadSound(`assets/sounds/drumandsymbol.wav`)); 
    beatBox.sounds.push(loadSound(`assets/sounds/smallbeat.wav`)); 
    beatBox.sounds.push(loadSound(`assets/sounds/fatdrum.wav`));
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL); 
    userStartAudio();
    frameRate(60); 
    // Setup recorder, soundwaves, turntable, and sliders  
    recorder = new Recorder();
    soundWave = new SoundWave(); 
    turntable = new Turntable(); 
    setUpSliders(); 
    // For audio tracker display 
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
    for (let i = 0; i < beatBox.numBeats; i++) {
        let x = i*width/12+ width/4 + 25
        let y = height - 275;
        let beat = new Beats(x, y); 
        beatBox.beats.push(beat); 
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
        if (keyIsPressed && keyCode == piano.keyCode[i]) {
            pianoKey.pressed(); 
            fill(piano.pianoColorOn[i], 80, 30); 
        }
        push(); 
        noStroke(); 
        fill(0); 
        textSize(12); 
        text(piano.keyText[i], (i*width/49 + width/4) + 7.5, height - 155); 
        pop(); 
        pianoKey.pianoDisplay();
    }
    // Beat displays 
    for (let i = 0; i < beatBox.beats.length; i++) {
        let beat = beatBox.beats[i]; 
        fill(100, 0, 60);
        if (keyIsPressed && keyCode == beatBox.keyCode[i]) {
            beatBox.sounds[i].play();  
            fill(100, 0, 30);
        }
        push(); 
        noStroke(); 
        fill(0); 
        textSize(12); 
        text(beatBox.beatText[i], (i*width/12+ width/4) + 25, height - 280);
        pop(); 
        beat.display(); 
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
        strokeWeight(1);
        line(365 + i, 40 + (waveOne[i]* 35),365 +i, 40 - (waveOne[i]* 35));
    }
    // For bottom audio visualization 
    for (let i = 0; i < waveTwo.length; i++) { // Add second sound 
        stroke(0); 
        strokeWeight(1);
        line(365 + i, 120 + (waveTwo[i]* 35),365 +i, 120 - (waveTwo[i]* 35));
    }

    // Right record/soundLoopOne connects to slider values defined in setup  
    soundLoopOne.setVolume(recordOneVolSlider.value()); 
    soundLoopOne.rate(recordOneSpeedSlider.value());
    recordOneReverb.drywet(recordOneReverbSlider.value()); 
    
    // Left record/soundLoopTwo connects to slider values defined in setup
    soundLoopTwo.setVolume(recordTwoVolSlider.value()); 
    soundLoopTwo.rate(recordTwoSpeedSlider.value());
    recordTwoReverb.drywet(recordTwoReverbSlider.value()); 
}

function mousePressed() {
    for (let i = 0; i < piano.pianoKeys.length; i++) {
        let pianoKey = piano.pianoKeys[i]; 
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
function setUpSliders() {

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
    recordTwoReverb.process(soundLoopTwo); 
    recordTwoReverbSlider = createSlider(0, 1, 0, 0); 
    recordTwoReverbSlider.position(width/2 - 445, height/2 - 120); 
}
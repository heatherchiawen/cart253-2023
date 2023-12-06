/**
 * Project 2 - Final 
 * Heather Chester 
 * 
 * For Project 2 - final, I created a sound board that I have titled "Soundmixer," where the user can play with different sounds either with the piano, beat buttons, or sounds already loaded into the program. 
 * Additionally, the user has the option to record sounds and save them to their computer. See README.md for more information. 
 * 
 * Attributions: 
The turntable imagery and audio tracker were adapted from: 
Mister Bomb, "p5.js tutorial - Recreating Hip Hop Google Doodle Part 1," Youtube.com, July 12, 2020. https://www.youtube.com/watch?v=b58aWzjHi6Y. 
Mister Bomb, "p5.js tutorial - Recreating Hip Hop Google Doodle Part 2," Youtube.com, July 12, 2020. https://www.youtube.com/watch?v=4HdbPCb1uwk.
Mister Bomb, "p5.js tutorial - Recreating Hip Hop Google Doodle Part 3," Youtube.com, July 12, 2020. https://www.youtube.com/watch?v=orfgTW6smtA. 
Mister Bomb, "p5.js tutorial - Recreating Hip Hop Google Doodle Part 4," Youtube.com, July 12, 2020. https://www.youtube.com/watch?v=6LIKEYAd-7M&t=204s. 

SoundFiles loaded into the program: 
“Fluffy Song drop,” Pixabay, https://pixabay.com/sound-effects/search/house%20beat%20loop/. 
“Some House Loop Patterns (Wav),” Pixabay, https://pixabay.com/sound-effects/search/house%20beat%20loop/.
"Big Drum Kick, Drum Kit," Mike Koening,  free-loops.com, https://free-loops.com/8140-big-drum-kick.html#google_vignette.
"Clean Snare Hit, Drum Kit," Mike Koening, free-loops.com, https://free-loops.com/8137-clean-snare-hit.html.
"Clean Drum Kick 10, Drum Kit," soundshifter, free-loops.com, https://free-loops.com/3066-drum-kick-10.html.
"Lil John HiHat 1, Drum Kit," free-loops.com, https://free-loops.com/714-lil-john-hihat-1.html. 
"Lil John Crunk Clap 3, Drum Kit," free-loops.com, https://free-loops.com/712-lil-john-crunk-clap3.html.
"Lil John HiHAT 2, Drum Kit" free-loops.com, https://free-loops.com/715-lil-john-hihat-2.html.
 */

"use strict";

/**
 * Description of preload
*/

// For all keys 
let piano = {
    pianoKeys: [],
    numPiano: 24,
    pianoNotes: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71], // Midi notes for two octave piano
    pianoColor: [100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 100, 0, 100, 0, 100, 0, 100], // If pianoKey is off 
    pianoColorOn: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275], // If pianoKey is on
    keyText: [`W`, `3`, `E`, `4`, `R`, `T`, `6`, `Y`, `7`, `U`, `8`, `I`, `X`, `D`, `C`, `F`, `V`, `B`, `H`, `N`, `J`, `M`, `K`,`<`], // Key text display for user clarity 
    keyCode: [87, 51, 69, 52, 82, 84, 54, 89, 55, 85, 56, 73, 88, 68, 67, 70, 86, 66, 72, 78, 74, 77, 75, 188] // KeyCode for user to access piano 
}
let beatBox = {
    beats: [], // open array for drawing beat display 
    numBeats: 6, 
    beatText: [`;/:`, `'/"`,`return`, `./>`, `//?`, `shift`], // Key text display for user clarity 
    sounds: [], // Open array to load in beats 
    keyCode: [186, 222, 13, 190, 191, 16] // keyCode for user to access beats 
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
    colorMode(HSL); // Set to Hue, Saturation, and Light for clarity 
    userStartAudio(); // Starts audio in the program 
    frameRate(60); // Frame rate for blinking 
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
    // Assigns midi notes to freq 
    for (let i = 0; i < piano.numPiano; i++) {
        let x = i*width/49 + width/4;
        let y = height - 150; 
        let pianoKey = new PianoKey(x, y); 
        let note = piano.pianoNotes[i];
        pianoKey.oscillator.freq(midiToFreq(note)); 
        piano.pianoKeys.push(pianoKey); 
    }
    // Set up beat array 
    for (let i = 0; i < beatBox.numBeats; i++) {
        let x = i*width/12+ width/4 + 25;
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
        // Fill for if piano is off 
        fill(100, 100, piano.pianoColor[i]); 
        if (keyIsPressed && keyCode == piano.keyCode[i]) {
            pianoKey.pressed(); 
            // If piano is on/ has been pressed 
            fill(piano.pianoColorOn[i], 80, 30); 
        }
        // Text display for user clarity 
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
        // If the beats keyCode is pressed then the sound will play 
        // Sounds are put in order that they are loaded in 
        if (keyIsPressed && keyCode == beatBox.keyCode[i]) {
            beatBox.sounds[i].play();  
            fill(100, 0, 30);
        }
        // Text display for user clarity 
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
    // Called in setUp ()
    // Assigning values in draw()
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
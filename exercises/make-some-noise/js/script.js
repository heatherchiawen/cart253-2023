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
    pianoNote: [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`], 
    // sharpNote: [``, ``, ``, ``, ``, ]
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
        let x = ((i*width/7)/2) + width/4
        let y = height/2;
        let note = controller.pianoNote[i]; 
        let button = new Button(x, y, controller.pianoNote); 
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
        // button.sharpDisplay(); 
    }
}

function mousePressed() {
    for (let i = 0; i < controller.buttons.length; i++) {
        let button = controller.buttons[i]; 

        if (mouseX < button.x + button.w && mouseX > button.x && mouseY < button.y + button.h && mouseY > button.y) {
            button.pressed(); 
        }
    }
}
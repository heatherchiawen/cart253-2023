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
    numButtons: 7, 
    note: []
}
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); 
    userStartAudio();

    for (let i = 0; i < controller.numButtons; i++) {
        let x = i*width/7 + (width/14); 
        let y = height/1.2; 
        let button = new Button(x, y); 
        controller.buttons.push(button); 
    }
}


/**
 * Description of draw()
*/
function draw() {
    background(0); 

    for (let i = 0; i < controller.buttons.length; i++) {
        let button = controller.buttons[i]; 
        // button.pressed(); 
        button.display(); 
    }
}
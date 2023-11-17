Heather Chester 
Make-Some-Noise, CART 253

Since this exercise is supposed to be a furthered version of the Project 2 prototype while focusing more on the sound aspects of the program, I started this exercise by attempting to integrate some of the feedback posted on my prototype submission. Additionally, I changed the buttons to appear as a piano with sharp keys as well with different arrays. From the feedback and taking a deeper look into the sound module, I put the oscillator in the piano/sharp classes. However, I am thinking of creating two separte functions within the these classes so that the user won't have to turn off the keys everytime they want to stop a note. Alternativley, I coud have buttons to be reponsive to buttons on the users keyboard,simulating like they're playing keyboard like an instrument. 

Since my project is entirely based on creating sound within the program and manipulating it, I definitely felt overwhelmed at the options to chose to represent this in this exercise. 

Initially I had planned on create an octave class to respond to the piano and sharp keys, however, ran into difficulties attempting to organize the entire array of keys on the piano numbers and thought that I would not be able to figure it out within a respectable time frame. However, how I belive I might takle this is by defining these octaves at the start of the main script, creating a repective display and connection in its own class and accessing them with conditionals within each of these classes. And I belive going forward and adding more buttons, the same process could be applied when creating an array of buttons for drums, bass, etc. 

For this exercise however, I decided that I would attempt to create a recording button and did so by accessing p5.SoundRecorder and p5.SoundFile. And while this eventually worked, I ran into problems with adjusting the booleans so that the buttons would respond smoothly. Additionally, the recorder/play button currently quickly switches to restart while the audio is still playing. While I did try to create separate buttons within the recorder class, both display in draw and mousePressed did not repoond to this. Although its current state is fine for now, I would like to further this by creating an area where soundFiles can be displayed, played, and deleted after recording. 

Alternatively, I might switch the layout and interactivity of the program for better flow. After looking at some dj software, I saw that having the array of notes display vertically and accessed though a draw function (to add notes without intitally playing) seemed to be more user friendly. 

Lastly, an alternative idea that I had for visualizing audio, is to create a visual metronome. 

Where the user can adjust how fast the BPM is to follow along 

triggering the notes as it plays according to the bmp. Then, users would have the option to have a play button before they record. To have drums, bass, etc, I would have to do the same. However, figuring out the record button proved to be quite a challenge 
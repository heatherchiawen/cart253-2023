Heather Chester 
40215280
Cart 253
Pippin Barr 

Project 2: SoundMixer 

For this semester's final project, I decided to create a sound board where the user can play with different sounds either with the piano, beat buttons, or sounds already loaded into the program. Additionally, the user has the option to record sounds and save them to their computer. 

While building this program, I wanted to focus on creation, functions, and manipulation of sounds. While the program is fairly straightforward in its operations, I spent some time experimenting with different user operated methods to create sound. I started out builidng this program with a piano operated by mouseIsPressed() and mouseReleased(), however, did not find it easy to move my mouse around, only having the ability to play one note at a time. So solve this, I attempted to create a drawing program that I envisioned would have a play function allowing the drawing to move and eventually touch the piano, triggering the piano to play notes, however the technicalities proved to be challenging. I eventually replaced all the previous functions with keyCodes that responded to the notes played as well as the display, colour, text, etc. I used a similar method used for the piano aspects of my program for building the beats, creating a sound array within the beatBox object and assigning .wav files to align with the array display, text, fills, etc. However, a challenge that I encountered was creating sliders that controlled the volume, speed, and reverb for the piano and beats. The piano did not respond well or at all to any oscillator, envelope, etc. functions that I attempted to use from the p5 sound library. As for the beats, .wav soundFiles that were automatically loaded into the array did not respond well either. However, for the user to get arround this, they could record the beat or piano sounds separtely and load them in at the beginning of the program code as a soundLoopOne or soundLoopTwo, adjusting the volume, speed, and reverb accordingly. Although, I was able to create buttons that changed the wave types of the piano, (sine, square, triangle, and sawtooth) using event handlers, which proved to take some time to figure out, I believe if I was to fruther this project independently, I could apply a similar method to chnage the reverb, speed, volume, etc.

That being said, the controls for soundLoops displayed on the turntable worked well since I could assign the new values of volume, speed, and reverb directly to the soundFiles themselves. Although when experimenting with other forms of distortion, I found it difficult to maintain clear sound from the soundFiles even when the effects were off/the value was set to 0. For building up the turntable, I followed a tutorial by Mister Bomb on Youtube that applied forms of sound visualization to the soundFile. The main aspects of the tutorial that was used was the display for the turntable (translate and rotate) adapted to my program specifics movement related needs, as well as the waveform display (getPeaks()), and audio tracker that reads the duration and current time of the soundLoop. I added in play and pause buttons for the sounds as well as sound manipulation sliders. 

As for the recording function, although I made some small adjustments during the final build, a bulk of the work came from the make-some-noise exercise, where I explored how to create a recorder, play and stop functions, as well as save files to the computer. While I did hope to add some more features to the program, a majority of the challenges that I faced were due to time constraints with a large amount of desired features, however that being said, I hope to continue this project over the break. Potentially incorporating sliders for the piano and beat buttons but also create starting state, in addition to a simulation state so that the user could directly "drag and drop"/load their desired soundLoops into the starting state and play them in the simulation. I would additionally like to sylize it more as the functions of the program itself reflect the style that is being displayed. 

All in all, I was quite impressed with how this turned out as well as seeing how far my abilities have come since the start of the course. As I attempt to further this program over the break, I hope that I can also further my ability in actually creating some decent sound mixes from this. 


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
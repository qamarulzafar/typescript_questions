"use strict";
//question number 42 :
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician_name = ["Ahtisham", "Kashan", "Shayyan"];
function show_magicians(magician_name) {
    for (let i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}
function make_great(magician_name) {
    for (const magicians of magician_name) {
        console.log(`The great ${magicians}`);
    }
}
make_great((magician_name));
show_magicians(magician_name);

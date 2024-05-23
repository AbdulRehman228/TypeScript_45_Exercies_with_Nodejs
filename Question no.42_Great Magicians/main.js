"use strict";
// Define the function to show Magicians names
function show_Magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magicians names
let Magician_names = ["Harry Poter", "Ali", "Hamza"];
let great_magicians = make_great(Magician_names);
show_Magicians(great_magicians);

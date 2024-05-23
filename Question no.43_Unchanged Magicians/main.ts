// Define the function to show Magicians names
function show_Magicians(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry Poter", "Ali", "Hamza"];

// Making a copy of Orignal array through .slice() function
let copy_magician_names = magician_names.slice();

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show both array Original and Copied

// Original
console.log("Original Array\n");
show_Magicians(magician_names);

// Copied
console.log("\nCopied Array\n");
show_Magicians(copy_great_magicians);
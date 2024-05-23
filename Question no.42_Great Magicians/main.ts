// Define the function to show Magicians names
function show_Magicians(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let Magician_names = ["Harry Poter", "Ali", "Hamza"];

// Call make_great function to modify magicians names
let great_magicians = make_great(Magician_names);

// Call show_magician that show moditied list of magician
show_Magicians(great_magicians);
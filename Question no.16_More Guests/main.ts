// Creating a Guest List Array
let guestList = ["Haseeb", "Hussain", "Alishba", "Qareer"];

//Making variable for those guest who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Skty Han");

// Add or Remove Value from Guest List Array
guestList.splice(0, 1, "Esha");

// Message print for Bigger Table
console.log("Good News ! we have Found a Bigger Table For Dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Sama");

// Adding a new guest at ending index of array
guestList.push("Asfand ali");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Laiba");

// Print Message of Update List
console.log("Update List of our Guests");

// Sending a  invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me.`));
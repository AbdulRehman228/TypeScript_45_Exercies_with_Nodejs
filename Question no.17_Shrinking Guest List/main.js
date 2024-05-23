"use strict";
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
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Laiba");
// Print Message of Update List
console.log("Update List of our Guests");
// Sending a  invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me.`));
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only two guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry , ${removedGuest} I cant invite you to dinner`);
}
// Sending a invitation to the last two guest on the list
console.log("Invitation to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));
// Removing last two Guest fron the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);

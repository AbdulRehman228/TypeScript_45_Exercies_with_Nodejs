"use strict";
// Creating a Array
let userNames = ["Subhan", "Anus", "qareer", "Admin", "Laiba"];
// Using ForEach Loop on Arrat
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
});

"use strict";
let userNames = ["Basit", "Anus", "Subhan", "Admin", "Qareer"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    // Using ForEach Loop on Arrat
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}

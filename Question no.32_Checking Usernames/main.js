"use strict";
// Array of Current Users
let current_users = ["Subhan", "Talha", "Haseeb", "Ali", "Sufiyan"];
// Array of New Users
let new_users = ["Alishba", "Qareer", "Sama", "Laiba", "Talha"];
// Loop through new_users to check for usersnames avaibility
new_users.forEach(new_one_user => {
    // Making a Condition for username already exits and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        // Print Different message using If-Else Statement
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is Available`);
    }
});

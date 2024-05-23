let guestList = ["Haseeb", "Alishba", "Qareer", "Hussain"];

let dontCome = guestList[0];

console.log(dontCome, "Nhi Ahh Skta");

guestList.splice(0, 1, "Hunain");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
// Creating a Array with 5 Values
let userNames = ["Basit", "Anus", "Subhan", "Admin", "Qareer"];

// Remove All Values from our array Now our Array is Empty
userNames =[]

// If Statement for Checking length of our Array is Empty
if (userNames.length === 0){
    console.log("Your Array in Empty We need to find some users!");
}else{
    // If Array is not Empty use ForEach Loop on Array
userNames.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})
}
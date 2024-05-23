// Making a Function
function make_shirt (size: string = "Large", printMessage: String = "I Love TypeScript",){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}

// Calling a Function with by-default values
make_shirt();

// Calling a Function now with Medium size and default message 
make_shirt("Medium");

// Calling a Function now with Samll size and Different Print Message
make_shirt("Small", "I Love JavaScript");
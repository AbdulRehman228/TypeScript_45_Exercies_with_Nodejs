// Define a Function to create a car Object with optional option...
function create_car(manufacturer, model, ...options){
    // Initialize a car object with manufactur and model
    let car ={
        manufacturer: manufacturer,
        model: model
    };

    // Add additional option to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
} 

// Call the function to create a car object
let my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: true", "Year: 2024");

console.log(my_car);
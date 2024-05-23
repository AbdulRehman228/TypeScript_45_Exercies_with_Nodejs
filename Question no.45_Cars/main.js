// Define a Function to create a car Object with optional option...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufactur and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: true", "Year: 2024");
console.log(my_car);

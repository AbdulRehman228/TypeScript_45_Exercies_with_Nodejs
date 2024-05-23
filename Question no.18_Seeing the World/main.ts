// Making a Array of Countries and Print its Orginal Order
let countriesTovisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesTovisit);

// Print the Array in Alphabetial order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesTovisit].sort());

// Show that the array is still in its Orginal Order
console.log("Still in Orginal Order:", countriesTovisit);

// Print the array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesTovisit].reverse());

// Show that the Array is still in its Orginal Order
console.log("Still in Orginal Order:", countriesTovisit);

// We have Changed the Orginal Array Order Now
console.log("Orginal Array Reverse:", countriesTovisit.reverse());

// Print the array to show that it's back to its Orginal Order
console.log("Back to Orginal Order:", countriesTovisit.reverse());

// Print the Array to show that its order has been change in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());

// We have Change again the Orginal Array order Now in reverse order again
console.log("Orginal Array Reverse Again:", countriesTovisit.reverse());
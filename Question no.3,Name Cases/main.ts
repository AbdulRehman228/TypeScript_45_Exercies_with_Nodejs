let personName: string = "Syed Abdul Rehman";

// lower case
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toUpperCase());

// Title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
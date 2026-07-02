// Javascript me har cheez ko true and false ke Nature me evaluate kiya ja sakta hai.
// Falsy Nature me  0,NaN,undefined,null,false,"" (empty string),document.all aate hain.

console.log(!!0); // Output: false
console.log(!!NaN); // Output: false
console.log(!!undefined); // Output: false
console.log(!!null); // Output: false
console.log(!!false); // Output: false
console.log(!!""); // Output: false

// rest all values are truthy in nature.
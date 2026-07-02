// use of instanceof operator in JavaScript
// instanceof operator ek object ke prototype chain me check karta hai ki kya wo object kisi specific constructor function ka instance hai ya nahi.
// Agar object us constructor function ka instance hai to ye true return karta hai, otherwise false return karta hai.

function Person(name) {
    this.name = name;
}

let person1 = new Person("John");
console.log(person1 instanceof Person); // Output: true

let person2 = {};
console.log(person2 instanceof Person); // Output: false

let a = [1, 2, 3];
console.log(a instanceof Array); // Output: true
console.log(a instanceof Object); // Output: true : Array is also an object in JavaScript, so it returns true for instanceof Object.
console.log(a instanceof Function); // Output: false

let b = function() {};  
console.log(b instanceof Function); // Output: true
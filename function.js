// Function is a block of code that performs a specific task and can be reused throughout
//  a program. Functions can take inputs, called parameters, and can return outputs. 
// They help in organizing code, making it more readable and maintainable.

// function declaration
function greet(name) { // greet(parameter)
    return "Hello, " + name + "!";
}

// function call
console.log(greet("Alice")); // Output: Hello, Alice! <=>function calling time greet(argument)
console.log(greet("Bob"));   // Output: Hello, Bob!

// Function with multiple parameters => Functions can take multiple parameters to perform
//  operations on them.
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// Function expression => A function can be stored in a variable.
const multiply = function(x, y) {
    return x * y;
};
console.log(multiply(4, 6)); // Output: 24

// Arrow function => A shorter syntax for writing functions.
const divide = (m, n) => {
    return m / n;
};
console.log(divide(10, 2)); // Output: 5    
// shorter version of arrow function
const square = x => x * x;
console.log(square(5)); // Output: 25
// shorter arrow function ka use tab karte hai jab function me sirf ek hi parameter ho aur
//  ek hi expression return ho.

// Function with default parameters => Functions can have default values for parameters.
function greetWithDefault(name = "Guest") {
    return "Hello, " + name + "!";
}   
console.log(greetWithDefault("Alice")); // Output: Hello, Alice!
console.log(greetWithDefault());      // Output: Hello, Guest!

/*----------------------------- Rest ------------------------------- */
// Jab argument kai saare ho to hume utne hi parameters define karne padte hai ,Isase hi bachne ke liye hum rest parameter ka use karte hai.
// Rest parameter => Functions can accept an indefinite number of arguments as an array.
function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

/*--------------------------------- High Order Functions ------------------------- */
// High-order functions(HOF) => hof wo function hote hai jo ya to ek function ko argument ke roop me lete hai ya fir ek function ko return karte hai.
// Example of a high-order function that takes a function as an argument

    function applyOperation(operation) {

    }

    applyOperation(function(x, y) {
        
    });

    //=========== or =============

    function applyOperation(operation, a, b) {
        return operation(a, b);
    }   

/*========= Pure Vs Impure Functions ============*/
// Pure function => Pure function wo function hote hai jo same input ke liye hamesha same output return karte hai aur unka koi side effect nahi hota hai.
let a = 10;
function pureFunction() {
    console.log(a * 2); // Output: 20 => no changes in the value of a
}

function impureFunction() { //Output: 20 => changes in the value of a
    a = a * 2;  
}

/*----------- Lexical Scoping ---------- */
function outerFunction() {
    let outerVariable = "I am from outer function";
    function innerFunction() {
        let innerVariable = "I am from inner function";
        console.log(innerVariable); 
        console.log(outerVariable);// Scope chain ke through inner function outer function ke variable ko access kar sakta hai.
    }
    console.log(innerVariable); // Error: innerVariable is not defined => outer function inner function ke variable ko access nahi kar sakta hai.
    innerFunction();
}

/*------------------- Closures -------------------- */
// Closure => Closure ek function ke andar ek aur function hota hai jo outer function ke variable ko access kar sakta hai.
// Example of a closure
function outerFunction(x) {
    let outerVariable = x;
    return function innerFunction(y) {
        let innerVariable = y;
        return outerVariable + innerVariable;
    };
}
let closure = outerFunction(10);
console.log(closure(5)); // Output: 15  

/*------------------- Immediately Invoked Function Expressions (IIFE) -------------------- */
// IIFE => IIFE ek function hota hai jo turant hi execute ho jata hai. Iska use mainly variable ko global scope me pollute hone se bachane ke liye kiya jata hai.
(function() {
    let message = "Hello from IIFE!";
    console.log(message);
})();

/*------------------- Hoisting differences between declaration and expression    -------------------- */
// Function declaration me Hum Hoisting ka use kar sakte hai, lekin function expression me nahi kar sakte hai.

    //Hoisting with function declaration
    hoistedFunction();
    function hoistedFunction() {
        console.log("This function is hoisted!");
    }

    //Hoisting with function expression
    // unhoistedFunction(); // Error: unhoistedFunction is not a function
    const unhoistedFunction = function() {
        console.log("This function is not hoisted!");
    };
    unhoistedFunction(); // Output: This function is not hoisted!

/*------------------- when a function becomes first-class citizen --------------------  */
// First-class citizen => JavaScript me functions first-class citizens hote hai, iska matlab hai ki functions ko variables ki tarah treat kiya ja sakta hai. Hum functions ko arguments ke roop me pass kar sakte hai, return kar sakte hai, aur unhe variables me store kar sakte hai.

/*----------------------------- Anonymous Functions ------------------------------ */
// Anonymous function => Anonymous function wo function hote hai jinka koi naam nahi hota hai. Ye functions mainly callback functions ke roop me use kiye jate hai.
// Iska use mainly tab kiya jata hai jab hume ek function ko ek hi baar use karna ho aur uska naam dene ki zarurat na ho.
setTimeout(function() {
    console.log("This is an anonymous function executed after 2 seconds");
}, 2000);
// yaha setTimeout ek built-in function hai jo ek function ko specified time ke baad execute karta hai. Isme humne ek anonymous function pass kiya hai jo 2 seconds ke baad execute hoga.

// ------------------------------ Callback Functions ------------------------------
// Callback function => Callback function wo function hote hai jo ek dusre function ke argument ke roop me pass kiye jate hai. Ye functions tab execute hote hai jab unhe call kiya jata hai.
    function greet(name, callback) {
        console.log("Hello " + name);
        callback();
    }

    function sayBye() {
        console.log("Goodbye!");
    }

    greet("Raja", sayBye);
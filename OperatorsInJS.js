// JavaScript me Operators kai tarah ke hote hain jaise Arithmetic, Comparison, Logical, Assignment, 
// Bitwise, Ternary, Typeof, Delete, In, Instanceof, Spread, Rest, Destructuring, Optional Chaining,
//  Nullish Coalescing etc.

// 1. Arithmetic Operators: Ye operators mathematical operations perform karte hain jaise addition, subtraction, multiplication, division, modulus, increment, decrement etc.   
console.log(10 + 5); // Output: 15 (Addition)
console.log(10 - 5); // Output: 5 (Subtraction)
console.log(10 * 5); // Output: 50 (Multiplication)
console.log(10 / 5); // Output: 2 (Division)
console.log(10 % 3); // Output: 1 (Modulus)
let a = 10;
let b = 5;
console.log(a++); // Output: 10 (Post-increment)
console.log(++a); // Output: 12 (Pre-increment)
console.log(b--); // Output: 5 (Post-decrement)
console.log(--b); // Output: 3 (Pre-decrement)
console.log(10 ** 2); // Output: 100 (Exponentiation : 10^2 = 10 * 10)

// 2. Comparison Operators: Ye operators do values ko compare karte hain aur true ya false return karte hain.
console.log(10 == "10"); // Output: true (Equal to : ye sirf value ko compare karta hai, type ko nahi)
console.log(10 === "10"); // Output: false (Strict Equal to : === means same value and same type)
console.log(10 != "10"); // Output: false (Not Equal to : != means not same value)
console.log(10 !== "10"); // Output: true (Strict Not Equal to : !== means not same value or not same type )
console.log(10 > 5); // Output: true (Greater than)
console.log(10 < 5); // Output: false (Less than)
console.log(10 >= 10); // Output: true (Greater than or Equal to)
console.log(10 <= 5); // Output: false (Less than or Equal to)

// 3. Logical Operators: Ye operators boolean values ke saath kaam karte hain aur logical operations perform karte hain.
console.log(true && false); // Output: false (Logical AND)
console.log(true || false); // Output: true (Logical OR)
console.log(!true); // Output: false (Logical NOT)

// 4. Assignment Operators: Ye operators variables ko values assign karte hain.
let x = 10; // Assignment
x += 5; // Addition Assignment
console.log(x); // Output: 15
x -= 5; // Subtraction Assignment
console.log(x); // Output: 10
x *= 2; // Multiplication Assignment
console.log(x); // Output: 20
x /= 4; // Division Assignment
console.log(x); // Output: 5
x %= 3; // Modulus Assignment
console.log(x); // Output: 2 

// 5. Unary Operators: Ye operators ek hi operand ke saath kaam karte hain jaise typeof, delete, void, +, - etc.
let y = 10;
console.log(typeof y); // Output: "number" (Typeof Operator)
delete y; // Delete Operator
console.log(y); // Output: 10 (Delete operator does not delete variables declared with var, let, or const)      

// 6. Ternary Operator: Ye operator ek condition ke basis par do values me se ek value return karta hai.
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // Ternary Operator
console.log(canVote); // Output: "Yes"

// 7. Spread Operator: Ye operator ek iterable (array ya object) ko individual elements me spread karta hai.
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spread Operator
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// 8. Logical Operators with Non-Boolean Values: JavaScript me logical operators non-boolean values ke saath bhi kaam karte hain.
console.log(0 || "Hello"); // Output: "Hello" (Logical OR returns the first truthy value)
console.log(1 && "World"); // Output: "World" (Logical AND returns the last truthy value)
console.log(!""); // Output: true (Logical NOT converts the value to boolean and negates it)
console.log(1 && "abc" && "Efj"); // Output: "Efj" (Logical AND returns the last truthy value)
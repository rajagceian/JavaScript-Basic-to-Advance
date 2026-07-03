
// ==========================================================
// DESTRUCTURING, SPREAD OPERATOR AND REST OPERATOR IN JS
// ==========================================================


// ==========================================================
// 1. ARRAY DESTRUCTURING
// ==========================================================
// Destructuring means extracting values from an array or object
// and storing them into separate variables.

const numbers = [10, 20, 30];

// Traditional way
const first1 = numbers[0];
const second1 = numbers[1];

// Destructuring way
const [first, second, third] = numbers;

console.log(first);   // 10
console.log(second);  // 20
console.log(third);   // 30


// ----------------------------------------------------------
// Skipping Elements During Destructuring
// ----------------------------------------------------------

const arr = [100, 200, 300, 400, 500];

const [a, , c] = arr;

console.log(a); // 100
console.log(c); // 300


// ----------------------------------------------------------
// Default Values
// ----------------------------------------------------------

const values = [10];

const [x, y = 50] = values;

console.log(x); // 10
console.log(y); // 50


// ----------------------------------------------------------
// Swapping Variables
// ----------------------------------------------------------

let num1 = 10;
let num2 = 20;

[num1, num2] = [num2, num1];

console.log(num1); // 20
console.log(num2); // 10



// ==========================================================
// 2. OBJECT DESTRUCTURING
// ==========================================================

const user = {
    name: "Raja",
    age: 20,
    city: "Patna"
};

const { name, age, city } = user;

console.log(name); // Raja
console.log(age);  // 20
console.log(city); // Patna


// ----------------------------------------------------------
// Renaming Variables While Destructuring
// ----------------------------------------------------------

const student = {
    studentName: "Raja",
    cgpa: 8.71
};

const {
    studentName: sName,
    cgpa: score
} = student;

console.log(sName); // Raja
console.log(score); // 8.71


// ----------------------------------------------------------
// Default Values in Objects
// ----------------------------------------------------------

const employee = {
    empName: "Aman"
};

const {
    empName,
    salary = 25000
} = employee;

console.log(empName); // Aman
console.log(salary);  // 25000



// ==========================================================
// 3. SPREAD OPERATOR (...)
// ==========================================================
// Spread operator breaks an array or object into individual
// elements or properties.

// ----------------------------------------------------------
// Copying an Array
// ----------------------------------------------------------

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2); // [1,2,3]


// ----------------------------------------------------------
// Merging Arrays
// ----------------------------------------------------------

const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["NodeJS", "ExpressJS", "MongoDB"];

const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);

// Output:
// [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'NodeJS',
//   'ExpressJS',
//   'MongoDB'
// ]


// ----------------------------------------------------------
// Adding Elements While Copying
// ----------------------------------------------------------

const nums = [2, 3, 4];

const updatedNums = [1, ...nums, 5];

console.log(updatedNums);

// Output:
// [1,2,3,4,5]


// ----------------------------------------------------------
// Copying Objects
// ----------------------------------------------------------

const user1 = {
    name: "Raja",
    age: 20
};

const user2 = {
    ...user1
};

console.log(user2);

// Output:
// { name: 'Raja', age: 20 }


// ----------------------------------------------------------
// Merging Objects
// ----------------------------------------------------------

const personalInfo = {
    name: "Raja"
};

const academicInfo = {
    college: "BEU",
    branch: "CSE"
};

const completeInfo = {
    ...personalInfo,
    ...academicInfo
};

console.log(completeInfo);

// Output:
// {
//   name: 'Raja',
//   college: 'BEU',
//   branch: 'CSE'
// }


// ----------------------------------------------------------
// Overwriting Existing Properties
// ----------------------------------------------------------

const oldUser = {
    name: "Raja",
    age: 20
};

const newUser = {
    ...oldUser,
    age: 21
};

console.log(newUser);

// Output:
// { name: 'Raja', age: 21 }

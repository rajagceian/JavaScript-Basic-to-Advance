//Object JavaScript ka sabse important data structure hai.
//  Isme data key-value pairs ke form me store hota hai.
//Jab ek entity ke bare pura store karna ho ,Tab hum Object ka use kare h

// ==========================================================
//              JAVASCRIPT OBJECTS - COMPLETE NOTES
// ==========================================================

// Objects store data in key-value pairs.
// Syntax:
// {
//     key1: value1,
//     key2: value2
// }

// ==========================================================
// 1. CREATING OBJECTS
// ==========================================================

const user = {
    name: "Raja",
    age: 20,
    branch: "CSE"
};

console.log(user);

// Output:
// { name: 'Raja', age: 20, branch: 'CSE' }


// ==========================================================
// 2. ACCESSING OBJECT PROPERTIES
// ==========================================================

// ---------- Dot Notation ----------
console.log(user.name);      // Raja
console.log(user.age);       // 20

// ---------- Bracket Notation ----------
console.log(user["name"]);   // Raja
console.log(user["age"]);    // 20

// Useful when key is stored in a variable
const key = "branch";
console.log(user[key]);      // CSE


// ==========================================================
// 3. ADDING NEW PROPERTIES
// ==========================================================

user.city = "Patna";

console.log(user);

// Output:
// { name: 'Raja', age: 20, branch: 'CSE', city: 'Patna' }


// ==========================================================
// 4. UPDATING PROPERTIES
// ==========================================================

user.age = 21;

console.log(user.age); // 21


// ==========================================================
// 5. DELETING PROPERTIES
// ==========================================================

delete user.city;

console.log(user);


// ==========================================================
// 6. METHODS IN OBJECTS
// ==========================================================

// Function inside an object is called a Method

const student = {
    name: "Raja",

    greet() {
        console.log("Hello World");
    }
};

student.greet();


// ==========================================================
// 7. THIS KEYWORD
// ==========================================================

// this refers to the current object

const person = {
    name: "Raja",

    greet() {
        console.log("Hello " + this.name);
    }
};

person.greet();

// Output:
// Hello Raja


// ==========================================================
// 8. NESTED OBJECTS
// ==========================================================

const employee = {
    name: "Raja",

    address: {
        city: "Patna",
        state: "Bihar"
    }
};

console.log(employee.address.city); // Patna


// ==========================================================
// 9. OPTIONAL CHAINING (?.)
// ==========================================================

// Prevents error when property does not exist

console.log(employee.office?.location);

// Output:
// undefined


// ==========================================================
// 10. OBJECT DESTRUCTURING
// ==========================================================

const car = {
    company: "Toyota",
    model: "Fortuner",
    year: 2025
};

const { company, model, year } = car;

console.log(company); // Toyota
console.log(model);   // Fortuner
console.log(year);    // 2025


// Rename variables while destructuring

const { company: brandName } = car;

console.log(brandName); // Toyota


// Default value

const { color = "Black" } = car;

console.log(color); // Black


// ==========================================================
// 11. SPREAD OPERATOR (...)
// ==========================================================

// Copy object

const user1 = {
    name: "Raja",
    age: 20
};

const copyUser = {
    ...user1
};

console.log(copyUser);


// Merge objects

const personalInfo = {
    name: "Raja"
};

const academicInfo = {
    branch: "CSE",
    cgpa: 8.71
};

const completeInfo = {
    ...personalInfo,
    ...academicInfo
};

console.log(completeInfo);


// Override existing values

const updatedUser = {
    ...user1,
    age: 21
};

console.log(updatedUser);


// ==========================================================
// 12. REST OPERATOR (...)
// ==========================================================

const profile = {
    name: "Raja",
    age: 20,
    city: "Patna",
    branch: "CSE"
};

const { name, ...remainingDetails } = profile;

console.log(name);
console.log(remainingDetails);

// Output:
// Raja
// { age:20, city:'Patna', branch:'CSE' }


// ==========================================================
// 13. LOOP THROUGH OBJECT
// ==========================================================

for (let key in profile) {
    console.log(key, profile[key]);
}

// Output:
// name Raja
// age 20
// city Patna
// branch CSE


// ==========================================================
// 14. OBJECT.KEYS()
// ==========================================================

// Returns all keys in an array

console.log(Object.keys(profile));

// Output:
// ['name', 'age', 'city', 'branch']


// ==========================================================
// 15. OBJECT.VALUES()
// ==========================================================

// Returns all values in an array

console.log(Object.values(profile));

// Output:
// ['Raja', 20, 'Patna', 'CSE']


// ==========================================================
// 16. OBJECT.ENTRIES()
// ==========================================================

// Returns key-value pairs as arrays

console.log(Object.entries(profile));

// Output:
// [
//   ['name','Raja'],
//   ['age',20],
//   ['city','Patna'],
//   ['branch','CSE']
// ]


// ==========================================================
// 17. HASOWNPROPERTY()
// ==========================================================

// Checks whether key exists or not

console.log(profile.hasOwnProperty("name"));   // true
console.log(profile.hasOwnProperty("salary")); // false


// ==========================================================
// 18. OBJECT.ASSIGN()
// ==========================================================

// Merge multiple objects

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = Object.assign({}, obj1, obj2);

console.log(merged);

// Output:
// { a:1, b:2 }


// ==========================================================
// 19. OBJECT.FREEZE()
// ==========================================================

// Makes object completely immutable

const settings = {
    theme: "dark"
};

Object.freeze(settings);

// settings.theme = "light"; // Not allowed

console.log(settings);


// ==========================================================
// 20. OBJECT.SEAL()
// ==========================================================

// Allows update but not add/delete

const config = {
    version: 1
};

Object.seal(config);

config.version = 2;     // Allowed
// config.name = "App"; // Not allowed
// delete config.version; // Not allowed

console.log(config);


// ==========================================================
// 21. JSON METHODS
// ==========================================================

const jsonString = JSON.stringify(profile);

console.log(jsonString);

// Output:
// '{"name":"Raja","age":20,"city":"Patna","branch":"CSE"}'


const objectAgain = JSON.parse(jsonString);

console.log(objectAgain);


// ==========================================================
// 22. SHALLOW COPY
// ==========================================================

const original = {
    name: "Raja",
    address: {
        city: "Patna"
    }
};

const shallowCopy = { ...original };

shallowCopy.address.city = "Delhi";

console.log(original.address.city);

// Output:
// Delhi
// Because nested objects are shared references.

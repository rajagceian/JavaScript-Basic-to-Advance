// In JS, Everything is an Object.
/*
JavaScript mein har cheez ka origin Object se hota hai. Chahe woh array ho, 
function ho, ya class instance — sabka prototype chain follow karke jaane pe last
 mein pahunchte ho Object.prototype, aur uske aage:
*/
    Object.getPrototypeOf(Object.prototype) // null
//Chain Example ---
    let arr = [1, 2, 3];

    arr.__proto__; // Array.prototype (push, pop, map, filter methods yahin milte hain)
    arr.__proto__.__proto__; // Object.prototype (toString, hasOwnProperty yahin milte hain)
    arr.__proto__.__proto__.__proto__; // null (chain khatam)

//------------- Inheritance object property------------
const p1 = {
    fName : "Raja",
    lName : "Kumar",
    getFullName(){
        return `${this.fName} ${this.lName}`;
    }
};

const p2 = Object.create(p1);
console.log("P1 is : ",p1);
console.log("P2 is : ",p2);
console.log(p2.getFullName()); // Inheritance

// Manual Inheritance via __proto__ (Directly Modify Karna)

    const parent = {
    greet() {
        console.log("Hello from parent");
    }
    };

    const child = {};
    child.__proto__ = parent; // manually link kiya

    child.greet(); // "Hello from parent"
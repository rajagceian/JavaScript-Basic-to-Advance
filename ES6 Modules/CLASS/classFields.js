//Pehle (purana tareeka) properties sirf constructor ke andar define hoti thi:

class Student {
    constructor() {
        this.name = "Raja"; // constructor ke andar hi likhna padta tha
        this.age = 21;
    }
}

//Class Fields se ab hum properties ko directly class body mein likh sakte ho, 
// bina constructor ke:
class Student1 {
    name = "Raja";  // class field
    age = 21;        // class field
}

const s = new Student1();
console.log(s.name); // "Raja"

//--------- Public Instance Fields -----------
class Counter {
    count = 0; // default value ke saath field

    increment() {
        this.count++;
    }
}

const c = new Counter();
c.increment();
console.log(c.count); // 1
c.count++; // we can excess public field from anywhere
console.log(c.count); // 2

//------- Public field with constructor -------------
class Student3 {
    college = "GCE Gaya"; // fixed default, sabke liye same
    name;                   // declared, but value nahi (undefined tab tak)

    constructor(name, age) {
        this.name = name; // constructor argument se set
        this.age = age;
    }
}

const s1 = new Student3("Raja", 21);
console.log(s1.college); // "GCE Gaya"
console.log(s1.name);    // "Raja"

//------------ Private Instance Fields -------------
class BankAccount {
    #balance = 0; // truly private, JS engine level pe enforce hota hai

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    #validateAmount(amount) { // private method
        return amount > 0;
    }
    deposit(amount) {
        if(this.#validateAmount(amount))
            this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount(1000);
console.log(acc.getBalance()); // 1000
acc.deposit(157);
console.log(acc.getBalance()); // 1157
//console.log(acc.#balance);      // ❌ SyntaxError - bahar se access hi nahi ho 
                                 // sakta


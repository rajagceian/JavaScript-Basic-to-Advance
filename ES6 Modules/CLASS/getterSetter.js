//Getter and Setter => Ye special methods hain jo property jaisa behave karte hain
//  lekin actually function calls hote hain background mein. 
// Inka fayda: Hum controlled read/write me kar sakte h, bina user ko () call karne
//  ka feel diye.

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get area(){
        return Math.PI * this.radius**2;
    }
}

const c =  new Circle(7);
console.log(c.area); // : c.area likha, c.area() nahi — yehi getter ki khaasiyat hai.
//  Agar () lagaoge toh error aayega kyunki area ek number return karta hai, 
// function nahi.


//-------------- Getter with Setter -----------------------
class Student {
    constructor(age) {
        this._age = age; // underscore convention - actual storage
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof value !== "number") {
            throw new Error("Age must be a number");
        }
        if (value < 0 || value > 100) {
            throw new Error("Age must be between 0-100");
        }
        this._age = value;
    }
}

const s = new Student(21);
console.log(s.age); // 21 (getter call hua)

s.age = 25;          // setter call hua, valid hai
console.log(s.age); // 25

s.age = -5;           // ❌ Error: Age must be between 0-100
s.age = "twenty";    // ❌ Error: Age must be a number

//**----- Notice yahan _age use kiya (underscore), na ki age — kyun? 
// Kyunki agar hum getter/setter ke andar bhi this.age likhoge, toh infinite loop
//  ban jaayega. ---------- */
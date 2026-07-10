//Reflect ek built-in object hai jo Proxy ke traps ke andar default behavior ko
//cleanly perform karne ke liye banaya gaya hai — target[prop] likhne ke bajaye
//Reflect.get(target, prop) use karna best practice hai

const std = {
    fname: "Raja",
    lname: "Kumar",
    age: 21,
};

const stdProxy = new Proxy(std, {
    get(target, prop, receiver) {
        if (Reflect.has(target, prop)) {
            return Reflect.get(target, prop, receiver);
        }
        return false;
    },

    set(target, prop, value, receiver) {
        if (!Reflect.has(target, prop)) {
            throw new Error(`${prop} does not Exist.`);
        }
        if ((prop === 'lname' || prop === 'fname') && typeof value !== 'string') {
            throw new Error(`${prop} should be String`);
        }
        if (prop === 'age') {
            if (typeof value !== 'number')
                throw new Error(`${prop} should be Number`);
            if (value < 0)
                throw new Error(`${prop} shouldn't be negative.`);
        }
        return Reflect.set(target, prop, value, receiver); // ✅ boolean return karo
    }
});
// receiver => receiver parameter batata hai asal mein operation kis object pe call
//  hua tha (proxy pe, na ki target pe).

console.log(stdProxy.lname);  // "Kumar"
console.log(stdProxy.gender); // false

try {
    stdProxy.age = -1;
} catch (err) {
    console.log("Error:", err.message); // "age shouldn't be negative."
}

console.log(stdProxy.age); // 21 (unchanged, error handled gracefully)

stdProxy.age = 25;
console.log(stdProxy.age); // 25 ✅

//----------- Use of receiver -----------------
const base = {
    get age() {
        return this._age;
    }
};

const proxy = new Proxy(base, {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver); // receiver pass karna zaroori
    }
});

const child = Object.create(proxy);
child._age = 25;

console.log(child.age); // receiver ki wajah se sahi 'this' milta hai((proxy pe, na ki target pe)) -> 25
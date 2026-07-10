// Jab hum non primitive type ke sath deal karte h ,to uske value ko change kar 
// sakte hai... Isi se bachne ke liye hum ek Proxy layer , User aur apne project ke 
//bich banate hai ,taki user ko direct Object,Array..etc ka excess na mile and user 
//jab koi modification karta hai ,to usse Proxy layer ke through validate karte
//hai..!

const std = {
    fname : "Raja",
    lname : "Kumar",
    age : 21,
};
console.log(std.age);
std.age = 22; 
/*---- Here, std is defined as CONST , But I am able to change its property,Why?
```
Yahan std ek address hold kar raha hai jo heap mein us object ko point karta hai. const ka matlab hai:

"std naam ka variable kabhi kisi doosre address ko point nahi karega"
*/
console.log(std);

//----- Create Proxy Layer -----------
const stdProxy = new Proxy(std,{
    //Read data from std
    get(target,prop){ //Here,target means std
        if(prop in target) return target[prop];
        return false;
    },
    //Write data in std
    set(target,prop,value){
        if(!(prop in target)) throw new Error(`${prop} does not Exist.`);
        if((prop === 'lname' && (typeof value !== 'string')) || (prop === 'fname' && (typeof value !== 'string'))) 
            throw new Error(`${prop} should be String`);
        if(prop === 'age'){
            if(typeof value !== 'number')
             throw new Error(`${prop} should be Number`);
            if(value < 0) throw new Error(`${prop} shouldn't be negative.`);       
        }
        //default behaviour
        target[prop] = value; //may not be 100% error free =>=> Solution -> reflect 
    }
});


//-------- Provide stdProxy to Users -----------
console.log(stdProxy.lname); //Kumar
console.log(stdProxy.gender); //false
// stdProxy.age = -1;
try {
    stdProxy.age = -1;
} catch (err) {
    console.log("Validation failed:", err.message);
}
console.log(stdProxy.age);
try {
    stdProxy.lname = 125;
} catch (err) {
    console.log("Validation failed:", err.message);
}
console.log(std.lname);
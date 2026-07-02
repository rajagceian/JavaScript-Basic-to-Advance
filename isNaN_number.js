// Why is NaN treated as Number in JavaScript?
// NaN ka matlab hai "Not a Number" lekin JavaScript me NaN ko Number type ke andar treat kiya jata hai.
// Iska reason ye hai ki JavaScript me NaN ek special value hai jo Number type ka part hai. 
// Jab koi mathematical operation ya conversion fail hota hai, to JavaScript NaN ko as a Fail Number 
// return karta hai, 
// aur isse Number type ke andar hi rakha jata hai taaki type consistency maintain ho sake. 

let num = NaN;
console.log(typeof num); // Output: "number"    
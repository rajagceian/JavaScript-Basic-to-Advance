/*
Type Coercion JavaScript ka ek automatic feature hai jahan language implicitly (apne aap) 
ek data type ko dusre data type mein convert kar deti hai taaki koi operation successfully 
perform ho sake.
*/
// + => operator ke case mein agar dono operands numbers hain to addition perform hota hai,
// lekin agar dono operands strings hain to concatenation perform hota hai. Agar ek operand 
// number hai aur dusra string hai to number ko string mein convert karke concatenation 
// perform hota hai.


    console.log(10 + 20); // Output: 30 (Addition)
    console.log("Hello" + "World"); // Output: HelloWorld (Concatenation)
    console.log(5 + "1"); // Output: 51 (Number converted to String and Concatenation) 
    // Or
    console.log("1" + 5); // Output: 15 (Number converted to String and Concatenation)

/*
 - => operator ke case mein agar dono operands numbers hain to subtraction perform hota hai,
lekin agar dono operands me se ek bhi ya dono string hain to language unhe numbers mein convert karke subtraction perform hota hai.
*/
    console.log(10 - 5); // Output: 5 (Subtraction)
    console.log("10" - "5"); // Output: 5 (Strings converted to Numbers and Subtraction)
    console.log("10" - 5); // Output: 5 (String converted to Number and Subtraction)
    console.log(10 - "5"); // Output: 5 (String converted to Number and Subtraction)    
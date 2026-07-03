// Array JavaScript me ek special object hota hai jo multiple values ko ek hi variable me store karta hai.
//Array create karne ka Tarika :-
//------- 1. Array Literal
// let arr = [];
    let arr = [1,2,'a','Raja',5.6];
    console.log(arr);

//------- 2. Array constructor
    let num = new Array(1,2,'Kumar',8.33);
    console.log(num);

/*------------------------------------------------------ */
//______________ Access Elements

//=========== [ Index 0 se start hota hai ] =================
    console.log(num[0]);
    console.log(num[2]);

/*------------------------------------------------------*/
//Modify Elements
    let fruits = ["Apple", "Banana", "Mango"];
    fruits[1] = "Orange";
    console.log(fruits);

/*----------------------------------------------------- */

//Length Property
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.length); // 5

/*----------------------------------------------------- */

// Add Elements
// push() → End me add karta hai
    let arr = [1, 2, 3];
    arr.push(4);
    console.log(arr); // [1,2,3,4]

// unshift() → Start me add karta hai
    arr.unshift(0);
    console.log(arr); // [0,1,2,3,4]

// Remove Elements
// pop() → Last element remove karta hai
    arr.pop();
    console.log(arr); // [0,1,2,3]

//shift() → First element remove karta hai
    arr.shift(); // [1,2,3]

    console.log(arr);


// indexOf() => return index of given element
    let fruits1 = ["Apple", "Banana", "Mango"];
    console.log(fruits1.indexOf("Banana")); // 1

//includes() => check given element is present or not
    console.log(fruits.includes("Mango")); // true
    console.log(fruits.includes("Orange")); // false

// slice() => use to extract subarray
// Original array ko change nahi karta.

let a = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 4)); // slice(1,4) => from index 1 to 3 => output = [20,30,40]

// splice() => use to remove elements from Array in range of given Index

// *Original array ko modify karta hai.

    let b = [10, 20, 30, 40, 50];
    arr.splice(1, 2); // splice(1,2)=> Remove 2 elements from start index 1  from Array
    //1 = start index
    //2 = kitne elements remove karne hain
    console.log(arr); // [10,40,50]

//-----------------------------------------------------------
//Array ko reverse kar deta hai.

    let c = [1, 2, 3, 4];
    c.reverse();
    console.log(c);

//------------------------------------------------------------
// Sorting
    let nums = [15,2,1,10,5,8,7];
    // nums.sort(function) 
    let newNum = nums.sort(function(a,b){
        return a-b; // Ascending Order
    });
    console.log(newNum);
    let newNum2 = nums.sort(function(a,b){
        return b-a; // Decending Order
    });
    console.log(newNum2);

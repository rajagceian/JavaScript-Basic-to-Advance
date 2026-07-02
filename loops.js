// There are several types of loops in JavaScript, including for loops, while loops, and do...while loops. Each type of loop has its own syntax and use cases.

// 1. For Loop: Ye loop ek specific number of iterations ke liye use hota hai.
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration: " + i);
}

// 2. While Loop: Ye loop tab tak execute hota hai jab tak condition true hai.
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration: " + j);
    j++;
}

// 3. Do...While Loop: Ye loop kam se kam ek baar execute hota hai, aur phir condition check karta hai.
let k = 0;  
do {
    console.log("Do...While Loop Iteration: " + k);
    k++;
} while (k < 5);
//======== Closure => JS me closure ek function ke andar ek aur function hota hai 
// jo outer function ke variable ko access kar sakta hai. Closure ka use hum private
//  variable create karne ke liye karte hai. =========//
    function outer() {
        let count = 0;

        function inner() {
            count++;
            console.log(count);
        }

        return inner;
    }

    const counter = outer();

    counter(); // 1
    counter(); // 2
    counter(); // 3

//-------------- Closure ka real life use case --------------//
    function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }

    const counter = createCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3    

// Data Privacy / Private Variables

// Closures allow you to create private variables that cannot be modified directly.

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
            }
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined

//=== Real-life example: Banking applications hide account balances and internal data from direct access.
/*
Promise Kya Hota Hai?
    Promise ek object hota hai jo future me kisi asynchronous operation ka result represent karta hai.

Real life example:
 Tumne food order kiya.
 Restaurant ne receipt di.
 Food abhi nahi mila hai, lekin promise mil gaya hai ki future me food milega.

JavaScript me bhi Promise future result ka "vachan" hota hai.


=>Promise ke 3 States
Pending
 Operation abhi chal raha hai.

Fulfilled
 Operation successfully complete ho gaya.
    -> Resolved / Fulfilled

Rejected
 Operation fail ho gaya.

*/
const promiseOne = new Promise(function(resolve,reject){
    //Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },2000); // 2000 ms = 2s
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

//-----------------------------------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },2000);
}).then(function(){
    console.log("Promise 2 consumed")
});

//-------------------------------------------------
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"Raja",email : "raja@test.com"}); // send data to .then()
    },2000);
});

promise3.then(function(user){
    console.log(user);
})

//-------------------------------------------------------
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let age = 15;
        if(age>=18){
            resolve("Eligible to Vote");
        } else{
            reject("Not Eligible to vote");
        }
    },2000);
});

promise4
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log("Error : " + err);
})
.finally(()=>console.log("Promise is either resolved or rejected"));

//------------- use async and await -------------
async function consumePromise4(){
    try{
        const res = await promise4
        console.log(res);
    } catch(err){
        console.log("Error : " + err);
    }
}
setTimeout(consumePromise4,2000);

//--------------- use of fetch by async await------------
async function allUsers(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch(err){
        console.log("Error : " + err);
    }
}
allUsers();
console.log("-------------- use of fetch by then and catch -------------");
//-------------- use of fetch by then and catch -------------
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> {
    return res.json(); // return send data to next then()
})
.then((data)=> console.log(data))
.catch((err)=> console.log("Error : "+err));

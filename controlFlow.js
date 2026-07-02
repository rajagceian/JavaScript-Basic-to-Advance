//Control Flow => if else if else , switch-case, early return, ternary operator

let userLoggedIn = true;
let userRole = "admin";

if (userLoggedIn && userRole !== "admin") {
    console.log("User is logged in");
} else if (userRole === "admin") {
    console.log("User is an admin");
}
else {
    console.log("User is not logged in");
}   

// ======= Switch case =======
let user = 2;
switch (user) {
    case 1:
        console.log("User is a guest");
        break;
    case 2:
        console.log("User is a regular user");
        break;
    default:
        console.log("Unknown user type");
}   
// Early return
function checkUser(user) {
    if (!user) {    
        return false;
    }
    return true;
}   
 
checkUser("admin"); // Output: true
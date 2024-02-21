"use strict";
//   question number 30 
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let UserName = ["kashan", "shayan", "ahtisham", "admin", "qamar", "ali"];
for (let i = 0; i < UserName.length; i++) {
    const user = UserName[i];
    if (user.toLowerCase() === "admin") {
        console.log("hello admin, would you like to see status ?");
    }
    else {
        console.log(` hello ${user} thankyou for loging again`);
    }
}

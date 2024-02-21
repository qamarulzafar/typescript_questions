"use strict";
//question number 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let username = [];
// Make a list of current users
const current_users = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
// Make another list of new users
const new_users = ['Alice', 'Eve', 'Frank', 'Bob', 'Grace'];
// Loop through new users to check for uniqueness
for (let i = 0; i < new_users.length; i++) {
    const new_username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    // Check if the new username is already in use
    if (current_users.map(username => username.toLowerCase()).includes(new_username)) {
        console.log(`Sorry, the username '${new_users[i]}' is not available. Please choose a different one.`);
    }
    else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
        // You can add code here to register the new user if needed
    }
}

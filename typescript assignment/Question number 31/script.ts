// question number 31 
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.



let UserName: string[] = ["kashan", "shayan", "ahtisham", "admin", "qamar", "ali"];

let userName: string[] = []

if (userName.length === 0) {
    console.log("we need to find some user")
} else {
    for (let i = 0; i < UserName.length; i++) {
        const user = UserName[i]

        if (user.toLowerCase() === "admin") {
            console.log("hello admin, would you like to see status ?")
        } else {
            console.log(` hello ${user} thankyou for loging again`)
        }
    }
}


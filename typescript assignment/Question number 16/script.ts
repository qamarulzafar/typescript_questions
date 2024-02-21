// question number 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


//step 1 : informing people that you found a bigger dinner table.
let Guestlist: Array<string> = ["kashan", "shayyan", "qamar"];

for (let guest of Guestlist) {
    console.log(`Hello, ${guest} we found a bigger dinner table`)
}

//step 2 : Add one new guest to the beginning of your array.
let newGuestAtBigining: string = "Muhammad ali"
Guestlist.unshift(newGuestAtBigining)


// Add one new guest to the middle of your array
let newGuestAtMiddle: string = "Ahtisham"
const insertIndex = Math.floor(Guestlist.length / 2);

Guestlist.splice(insertIndex, 0, newGuestAtMiddle)


// Add one new guest to the end of your list.
let newGuestAtEnd: string = "Abdullah"
Guestlist.push(newGuestAtEnd)


// Print a new set of invitation messages, one for each person in your list.

console.log("\nNew set of invitation message :")

for (let guest of Guestlist) {
    console.log(`Hello, ${guest} you are invited for dinner`)
}


export{Guestlist}
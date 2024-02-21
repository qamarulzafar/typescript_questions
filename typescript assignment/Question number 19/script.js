"use strict";
//    question number 19 
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let Guestlist = ["kashan", "shayyan", "qamar"];
//step 1
let guestWhoCantMakeIt = "qamar";
console.log(`${guestWhoCantMakeIt} cant make it dinner`);
//step2
let NewGuest = "faisal";
let oldGuest = Guestlist.indexOf(guestWhoCantMakeIt);
if (oldGuest !== -1) {
    Guestlist[oldGuest] = NewGuest;
}
console.log("second set of invitation message");
Guestlist.forEach((guest) => {
    console.log(`Hello, ${guest} how are you? you are invited to dinner`);
});
console.log("print a message indicating the number of people you are inviting to dinner");
console.log(`we had finally invited ${Guestlist.length} guest`);

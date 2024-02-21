//    question number 15 
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.




let Guestlist: Array<string> = ["kashan", "shayyan", "qamar"];

//step 1
let guestWhoCantMakeIt: string = "qamar";
console.log(`${guestWhoCantMakeIt} cant make it dinner`);

//step2
let NewGuest: string = "faisal";
let oldGuest: number = Guestlist.indexOf(guestWhoCantMakeIt)

if (oldGuest !== -1) {
    Guestlist[oldGuest] = NewGuest
}

console.log("second set of invitation message")
Guestlist.forEach((guest: string) => {
    console.log(`Hello, ${guest} how are you? you are invited to dinner`)
})

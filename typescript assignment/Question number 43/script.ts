// question number 43 :
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



function showMagicians(magicianNames: string[]): void {
    for (const magician of magicianNames) {
        console.log(magician);
    }
}

function makeGreat(magicianNames: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (const magician of magicianNames) {
        modifiedMagicians.push("The Great " + magician);
    }
    return modifiedMagicians;
}

// Example array of magician names
const originalMagicianNames: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];

// Calling the function to make magicians great and store the result in a new array
const greatMagicianNames: string[] = makeGreat(originalMagicianNames.slice()); // Using slice to create a copy

// Calling the function to show the original magicians
console.log("Original Magicians:");
showMagicians(originalMagicianNames);

// Calling the function to show the magicians with "The Great" added
console.log("\nMagicians with 'The Great' added:");
showMagicians(greatMagicianNames);

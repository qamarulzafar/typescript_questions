//    question number 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



// • Store the locations in a array. Make sure the array is not in alphabetical order.
let favorite_places: string[] = ["France", "New Zealand", "Switzerland", "Canada", "Brazil"]

// • Print your array in its original order.
console.log(`orignal order :  ${favorite_places}`)

// • Print your array in alphabetical order without modifying the actual list.
let AlphabeticalOrder = [...favorite_places].sort()
console.log(`Alphabetical Order :  ${AlphabeticalOrder}`)


// • Show that your array is still in its original order by printing it.
console.log(`orignal order :  ${favorite_places}`)

// • Print your array in reverse alphabetical order without changing the order of the original list.
let ReverseAlphabeticalOperator = [...favorite_places].sort().reverse();
console.log(`Reverse Alphabet :  ${ReverseAlphabeticalOperator}`);


// • Show that your array is still in its original order by printing it again.
console.log(`orignal order :  ${favorite_places}`)

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverce order")
let reverseOrder = favorite_places.reverse()
console.log(reverseOrder)

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to orignal")
let reverseOrderAgain = favorite_places.reverse()
console.log(reverseOrderAgain)

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let alphabeticalorder = favorite_places.sort()
console.log(alphabeticalorder)

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let ReverseAlphabeticalorder = favorite_places.reverse();
console.log(ReverseAlphabeticalorder)

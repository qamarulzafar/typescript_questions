// question num 3 : 
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// STEP 1 show me in uppercase 
let PersonName: string = "qamar ul zafar siddiqui"


let uppercase: string = PersonName.toUpperCase()
console.log(uppercase)

// STEP 2 show me in lowercase 

let lowercase: string = PersonName.toLowerCase()
console.log(lowercase)

// STEP 3 show me in titlecase

let words: string[] = PersonName.split(" ");
let titleCaseName: string = ""

for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
}

console.log(titleCaseName)

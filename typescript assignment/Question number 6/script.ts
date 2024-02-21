//    question number 6 
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.  


function CleanUpName(name: string): string {
    return name.trim()
}

let WhiteSpaceName: string = "    zafar    ";
let CleanName: string = CleanUpName(WhiteSpaceName)

console.log(`orignal name ${WhiteSpaceName}`)
console.log(`Cleaned name ${CleanName}`)
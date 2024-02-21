
        //  question number 37 
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.




function makeShirt(size: string = "large" , message: string = "i love typescript"): void{
    console.log(`size: ${size} | Message: ${message}`)
}

console.log("Large Shirt:");
makeShirt(); // Large shirt with default message

console.log("\nMedium Shirt:");
makeShirt("medium"); // Medium shirt with default message

console.log("\nCustom Shirt:");
makeShirt("small", "Custom message"); 

makeShirt("medium" , "hello world")


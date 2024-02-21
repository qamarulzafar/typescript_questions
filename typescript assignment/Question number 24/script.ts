// question number 24 
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



//start

// • Tests for equality and inequality with string

let string: string = "qamar"
console.log("string == qamar")
console.log(string == "qamar")

console.log("\nsrting !== qamar")
console.log(string !== "qamar")


// • Tests using the lower case function



let string1: string = "Mobile"
let string2: string = "mobile"

console.log("are string 1 and string 2 equal (case insensetive)? i pridict false")
console.log(string1.toLowerCase() === string2.toLowerCase())


let fruit1: string = "Banana"
let fruit2: string = "apple"

console.log("are fruit1 and fruit2 is equal (case insensetive)? i pridict true");
console.log(fruit1.toLowerCase() === fruit2.toLowerCase())



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


//less then
let num1: number = 2
let num2: number = 3

console.log("num1 < num 2 , i pridict true")
console.log(num1 < num2)


//greater then
console.log("num1 > num2 , i pridict false");
console.log(num1 > num2);


//Greather then or equal to 
console.log("num1 >= num2 , i pridict false")
console.log(num1 >= num2)


//less then or equal to 
console.log("num1 <= num2 , true")
console.log(num1 <= num2)



// • Tests using "and" and "or" operators


let val1: number = 10;
let val2: number = 44;

// using "and" operator (true)
console.log("val1 == 10  &&  val2 == 44 , its true")
console.log(val1 === 10 && val2 === 44)

//using "and" operator (false)
console.log("val1 == 10 && val2 == 20 , its false statement")
console.log(val1 == 10 && val2 == 20)


//using "or" operator (true)
console.log("val1 > 9 || val2 < 10 , i pridict  true")
console.log(val1 > 9 || val2 < 10)


//using "or"operator (false)
console.log("val1 > val2 || val2 < val1 , its false")
console.log(val1 > val2 || val2 < val1)




// • Test whether an item is in a array

//true condition
let num: number[] = [1, 2, 3, 4, 5, 6]
let targetnumber: number = 4

console.log("is ${target} num in array? i pridict true")
console.log(num.includes(targetnumber))


//false condition
let car: string[] = ["mehran", "suzuki", "v8"]
let targetcar: string = "tudra"

console.log("is ${targetcar} in array , i pridict false")
console.log(car.includes(targetcar))


// • Test whether an item is not in a array

//true condition
let mobile: string[] = ["nokia", "samsung", "realme"]
let targetmobile: string = "iphone_x"

console.log("is ${targetmobile} in array , i pridict false")
console.log(!mobile.includes(targetmobile))


//false condition
let color: string[] = ["red", "black", "yellow"]
let targetcolor: string = "purple"

console.log("is ${targetmobile} in array , i pridict false")
console.log(color.includes(targetcolor))

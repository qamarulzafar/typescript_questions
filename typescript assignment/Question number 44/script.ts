// question number 44 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.




function orderSandwich(...toppings: string[]): void {
    console.log("Sandwich ordered with the following items:");
    for (const topping of toppings) {
        console.log(`- ${topping}`);
    }
    console.log("Enjoy your sandwich!\n");
}

// Calling the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich("Chicken", "Bacon", "Tomato", "Mayo");

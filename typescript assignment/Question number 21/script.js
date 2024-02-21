"use strict";
//   question number 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
function displayCarInfo(car) {
    console.log("car information");
    console.log("Brand :", car.Brand);
    console.log("Color : ", car.Color);
    console.log("Year : ", car.Year);
    console.log("Model : ", car.Model);
}
const carObject = {
    Brand: "toyota",
    Color: "red",
    Year: 2021,
    Model: "camry",
};
displayCarInfo(carObject);

"use strict";
// let a: Function;
// a = () => {
//     console.log("first");
// }
// const add = (a: number, b: number, c: number | string = 20) => {
//     console.log(a + b);
//     console.log(c)
// }
// add(5,10);
// a();
// const minus = (a: number, b: number):number => {
//     return(a + b);
// }
// let result = minus(10,2);
// console.log(result)
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

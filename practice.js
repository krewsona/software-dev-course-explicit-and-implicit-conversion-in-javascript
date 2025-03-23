/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

console.log("MY FIXES:");


// example 1 explicit fix.. converting string to a number
let result2 = Number("5") - 2; //technically the first example works, but if we want to use an explicity type conversin this is how
console.log("The result is: " + result2);

// example 2 explicit fix.. checking if the string "false" is explicity converted to a boolean
let isValid2 =Boolean("false" === "false"); // this works because it ends up being "true" when checking for equality
if (isValid2) {
  console.log("This is valid!");
}

//example 3 explicitly converting the age string to a number before calculation to get correct result
let age2 = "25";
let totalAge2 = Number(age) + 5; //adding the number variable ensures it is using addition instead of just putting the 2 numbers togeter
console.log("total age:" + totalAge2);

console.log("MY EXAMPLES:");

//implicit type conversion
let result3 = "10" * 2;
console.log("implicit conversion result: " + result3);
 // explicit type conversion
 let numberString = "10";
 let explicitResult = Number(numberString) * 2;
 console.log("explicit conversion result: " + explicitResult); // same result except we are ensuring that the string is converted to a number first 

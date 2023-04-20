// Coding Challenges on Error Handling and Prototypes
// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

// let str="India is developed country";
function convertToNumber(str) {
  try {
    const number = Number(str);
    if (isNaN(number)) {
      return "Invalid number";
    }
    return number;
  } catch (err) {
    return "Invalid number";
  }
}
console.log(convertToNumber(123));
console.log(convertToNumber("India is developed"));

// Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and returns the transformed string.

// e.g., when S = ‘Lorem at' the output should be 'eroLta m'

// When S = ' Tempor ip' the output should be ' pmeTi rop'

// Question 2
// function reverseIntoFour(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i += 4) {
//     const fourChars = str.slice(i, i + 4);
//     result += fourChars.split("").reverse().join("");
//   }
//   return result;
// }
// console.log(reverseIntoFour("Lorem at"));

// Question 2
function reverseStringInGroupsOfFour(string) {
  let result = "";
  for (let i = 0; i < string.length; i += 4) {
    const groupof4 = string.slice(i, i + 4);
    result += groupof4.split("").reverse().join("");
  }
  return result;
}
console.log(reverseStringInGroupsOfFour("Lorem at"));

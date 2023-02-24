// Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and returns the transformed string.

// e.g., when S = ‘Lorem at' the output should be 'eroLta m'

// When S = ' Tempor ip' the output should be ' pmeTi rop'

function reverseGroupsOfFour(str) {
  let newStr = "";

    for (let i = 0; i < str.length; i++){
        newStr = str.split('').substring(i, i + 3);
    }

  // Return the transformed string
  return newStr;
}

console.log(reverseGroupsOfFour("martin"));

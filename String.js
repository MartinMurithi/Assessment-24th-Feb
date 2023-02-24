// Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and returns the transformed string.

// e.g., when S = ‘Lorem at' the output should be 'eroLta m'

// When S = ' Tempor ip' the output should be ' pmeTi rop'

function reverseGroupsOfFour(str) {
  // Initialize an empty string to hold the transformed string
  let transformedString = "";

  // Loop through the string S in increments of 4 characters
  for (let i = 0; i < str.length; i += 4) {
    // Get the substring of 4 characters starting at the current index
    const substring = str.substr(i, 4);

    // Reverse the substring using the split(), reverse(), and join() methods
    const reversedSubstring = substring.split("").reverse();

    // Add the reversed substring to the transformed string
    transformedString += reversedSubstring;
  }

  // Return the transformed string
  return transformedString;
}

console.log(reverseGroupsOfFour("martin"));

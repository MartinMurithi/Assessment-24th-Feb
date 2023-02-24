// Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and returns the transformed string.

// e.g., when S = ‘Lorem at' the output should be 'eroLta m'

// When S = ' Tempor ip' the output should be ' pmeTi rop'


function reverseGroupsOfFour(S) {
  let result = '';
  for (let i = 0; i < S.length; i += 4) {
    let group = S.slice(i, i + 4);
    let reversed = group.split('').reverse().join('');
    result += reversed;
  }
  return result;
}
console.log(reverseGroupsOfFour('Martin Wachira'));
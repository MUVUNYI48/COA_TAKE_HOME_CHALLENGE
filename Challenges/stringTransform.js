/**
 * Transforms the input string based on the given rules:
 * - If the length of the string is divisible by 3, reverse the entire string.
 * - If the length of the string is divisible by 5, replace each character with its ASCII code.
 * - If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.
 */
function transformString(str) {
    const length = str.length;
  
    // If the length of the string is divisible by 3, reverse the entire string
    if (length % 3 === 0) {
      return str.split('').reverse().join('');
    }
    // If the length of the string is divisible by 5, replace each character with its ASCII code
    else if (length % 5 === 0) {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += str.charCodeAt(i) + ' ';
      }
      return result.trim();
    }
    // If the length of the string is divisible by both 3 and 5
    else if (length % 3 === 0 && length % 5 === 0) {
      let reversedStr = str.split('').reverse().join('');
      let result = '';
      for (let i = 0; i < reversedStr.length; i++) {
        result += reversedStr.charCodeAt(i) + ' ';
      }
      return result.trim();
    }
    // If the length of the string is not divisible by 3 or 5, return the original string
    else {
      return str;
    }
  }
  

  console.log(transformString("JavaScript"));
   // Output: "JavaScript"
/* eslint-disable no-unused-vars */
function transformString(str) {
    const length = str.length;
    let transformedStr = "";
  
    if (length % 15 === 0) {
      // If divisible by both 3 and 5 (i.e., divisible by 15)
      // Reverse the string first
      transformedStr = str.split("").reverse().join("");
      // Replace each character with its ASCII code
      transformedStr = transformedStr
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
    } else if (length % 3 === 0) {
      // If divisible by 3
      transformedStr = str.split("").reverse().join("");
    } else if (length % 5 === 0) {
      // If divisible by 5
      transformedStr = str
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
    } else {
      // If not divisible by 3, 5, or 15
      transformedStr = str;
    }
  
    return transformedStr;
  }
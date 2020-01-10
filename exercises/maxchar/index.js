// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   const charsObj = {}

   for (let char of str) {
     if (!charsObj[char]){
       charsObj[char] = 1
     } else {
       charsObj[char]++
     }
   }

  let max = 0
  let maxChar = ""
  for (let charKey in charsObj) {
    if (charsObj[charKey] > max) {
      debugger
      max = charsObj[charKey]
      maxChar = charKey
    }
  }
  return maxChar
}


module.exports = maxChar;

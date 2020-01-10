// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // ** Solution 1 **
  // return str.split("").reverse().join("")

  // ** Solution 2 **
  // let reversedStr = ""
  // for (let character of str) {
  //   console.log(character)
  //   reversedStr = character + reversedStr
  // }
  // return reversedStr

  // ** Solution 3 **
  return str.split("").reduce((reversedStr, charOfStr)=> {
    return charOfStr + reversedStr
  }, "")
}

module.exports = reverse;

// arr1 = Array.from({ length: 100 }, (v, k) => k + 1)


// arr1.forEach(num => {
//   if ((num % 3 === 0) && (num % 5 === 0)) {
//     return console.log("FizzBuzz")
//   } else if (num % 3 === 0) {
//     return console.log("Fizz")
//   } else if (num % 5 === 0) {
//     return console.log("Buzz")
//   } else {
//     return console.log(num)
//   }
// })